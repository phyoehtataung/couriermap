// Shared admin client — talks to the admin-api Edge Function.
// (courier-map.com DNS is GitHub Pages, so /api/* Worker routes never run.)
window.CMAdmin = (function () {
  const SUPABASE_URL = "https://cscbtkjtbcgduiwfckgr.supabase.co";
  const ANON_KEY = "sb_publishable_wNo2s6g61OxTDdWSBWzkzg_V88acVEi";
  const FN = SUPABASE_URL + "/functions/v1/admin-api";
  const SK = "cm_admin_session_v1";

  function load() {
    try { return JSON.parse(sessionStorage.getItem(SK) || "null"); }
    catch (_) { return null; }
  }
  function save(s) {
    if (!s) sessionStorage.removeItem(SK);
    else sessionStorage.setItem(SK, JSON.stringify(s));
  }
  function session() { return load(); }
  function setSession(data) {
    save({
      access_token: data.access_token,
      refresh_token: data.refresh_token || "",
      email: data.email || null,
    });
  }
  function clear() { save(null); }

  async function api(action, payload, opts) {
    opts = opts || {};
    const sess = load();
    const headers = {
      "Content-Type": "application/json",
      apikey: ANON_KEY,
      Authorization: "Bearer " + ANON_KEY,
    };
    if (sess && sess.access_token && !opts.anonymous) {
      headers.Authorization = "Bearer " + sess.access_token;
    }

    const res = await fetch(FN, {
      method: "POST",
      headers,
      body: JSON.stringify(Object.assign({ action: action }, payload || {})),
    });

    if (
      res.status === 401 &&
      sess && sess.refresh_token &&
      !opts.anonymous &&
      action !== "refresh"
    ) {
      try {
        const ref = await api("refresh", { refresh_token: sess.refresh_token }, { anonymous: true });
        if (ref.access_token) {
          setSession(ref);
          return api(action, payload, opts);
        }
      } catch (_) { /* fall through */ }
      clear();
    }

    let data = {};
    try { data = await res.json(); } catch (_) { /* empty */ }
    if (!res.ok) {
      const err = new Error(data.detail || data.error || ("HTTP " + res.status));
      err.code = data.code || String(res.status);
      throw err;
    }
    return data;
  }

  function b64url(buf) {
    const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    let s = "";
    for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  async function startGoogle() {
    const verifier = b64url(crypto.getRandomValues(new Uint8Array(32)));
    const digest = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(verifier),
    );
    sessionStorage.setItem("cm_admin_pkce", verifier);
    const redirectTo = location.origin + "/admin/callback.html";
    const u = new URL(SUPABASE_URL + "/auth/v1/authorize");
    u.searchParams.set("provider", "google");
    u.searchParams.set("redirect_to", redirectTo);
    u.searchParams.set("code_challenge", b64url(digest));
    u.searchParams.set("code_challenge_method", "S256");
    location.href = u.toString();
  }

  return { api: api, session: session, setSession: setSession, clear: clear, startGoogle: startGoogle };
})();
