/*
 * 玄境 AI｜統一設定
 *
 * 所有頁面：
 * home.html
 * chat.html
 * life.html
 * memory.html
 * world.html
 * settings.html
 *
 * 都使用這一份設定。
 */


/* =================================
   Supabase
================================= */

const SUPABASE_URL =
    "https://zuypaeagxjezlqdppvnm.supabase.co";


/*
 * 把你 Home 原本使用的 Supabase Key
 * 貼到下面這裡。
 *
 * 注意：
 * 這裡只能放：
 * Supabase anon key / publishable key
 *
 * 不可以放：
 * service_role key
 */

const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1eXBhZWFneGplemxxZHBwdm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0OTM0ODcsImV4cCI6MjEwMzA2OTQ4N30.yWsm8xlOOCdSBQqleH147U1JTv3kX7vCIPJuqR-or3Y";


/* =================================
   玄境 AI
================================= */

const AI_FUNCTION_URL =
    SUPABASE_URL +
    "/functions/v1/ai-chat";


/* =================================
   專案名稱
================================= */

const XUANJING_NAME = "玄境 AI";


/* =================================
   全域設定
================================= */

const XUANJING_CONFIG = {

    supabase: {
        url: SUPABASE_URL,
        anonKey: SUPABASE_ANON_KEY
    },

    ai: {
        url: AI_FUNCTION_URL
    },

    app: {
        name: XUANJING_NAME
    }

};


/*
 * 開發檢查
 *
 * 不會把 Key 顯示出來。
 */

console.log("玄境設定已載入");

console.log(
    "Supabase：",
    SUPABASE_URL
);

console.log(
    "AI：",
    AI_FUNCTION_URL
);
