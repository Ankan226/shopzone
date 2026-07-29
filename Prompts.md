## Session 1 — Project scaffolding & routing architecture
**Tool:** Claude
**Prompt:** "Explain how to structure a React SPA with React Router, Context API for
a cart, and protected routes for checkout, based on my sprint requirements."
**Takeaway:** Learned to separate concerns into `context/` (CartContext, AuthContext),
`components/` (Navbar, ProtectedRoute), and `pages/` (route-level views), rather than
putting everything in App.jsx.
**Action taken:** Set up the folder structure and wrote each context/component myself,
verifying `useParams`, `useContext`, and `Navigate` behaved as expected before moving on.

---

## Session 2 — `mkdir -p` failing on Windows
**Prompt:** "mkdir -p src/context src/components src/pages gives 'the syntax of the
command is incorrect' on Windows."
**Takeaway:** `-p` is a Linux/Mac flag; Windows `cmd.exe` doesn't support it. PowerShell
and cmd both need separate `mkdir` calls or comma-separated paths.
**Action taken:** Ran `mkdir src\context`, `mkdir src\components`, `mkdir src\pages`
individually instead.

---

## Session 3 — Cart badge overlapping navbar text
**Prompt:** "The cart badge number is overlapping the word 'Cart' in my navbar,
how do I fix the layout?"
**Takeaway:** The badge's `right: -14px` offset was too aggressive relative to the
link's own width, and the link had no padding to give the badge room to sit outside
the text instead of on top of it.
**Action taken:** Added `padding-right` to `.cart-link` and adjusted `.cart-badge`'s
`right` value myself, then verified visually via hot reload.

---

## Session 4 — Hero section too small / low-content
**Prompt:** "The homepage UI looks too small and there's a lot of empty black space
below the hero, how can I improve this without changing the actual requirements?"
**Takeaway:** Scaling up type size/line-height and adding a content section that
describes the app's real features (routing, cart, persistence) fills the space
meaningfully instead of using filler text or stock imagery.
**Action taken:** Increased hero typography scale, added a three-column feature
section summarizing the app's own functionality, and removed a placeholder label
that didn't add value.

---

## Session 5 — Checkout button behavior confusion
**Prompt:** "When I click 'Proceed to Checkout' it just keeps me on the home page,
is that a bug?"
**Takeaway:** Two different buttons were involved — "Proceed to Checkout" should
route to `/checkout` (or `/login` if unauthenticated), while "Place Order" on the
Checkout page is intentionally designed to clear the cart and redirect home after
a simulated order. Confirmed this was expected behavior, not a bug, by tracing
through `ProtectedRoute.jsx` and `Checkout.jsx` logic.
**Action taken:** No code change needed — verified the auth state and route guard
were both working as designed.

---

## Session 6 — Git workflow for pushing to GitHub
**Prompt:** "How do I push my existing local project to GitHub file by file instead
of one big commit?"
**Takeaway:** `git add <path>` followed by `git commit -m "..."` can be repeated per
file/folder before a single final `git push`, which produces a clearer commit history
for review than one bulk commit.
**Action taken:** Staged and committed each source file individually, confirmed
`node_modules` was excluded via `.gitignore`, then pushed once at the end.

---