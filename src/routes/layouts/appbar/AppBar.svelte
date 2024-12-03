<script>
    import './AppBar.css'
</script>

<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="navbar bg-base-100 w-full">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-6 w-6 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      
      <div class="mx-2 flex-1 px-2 text-xl font-extrabold">Schdulit</div>
      <div class="hidden flex-none lg:block">
        <ul class="menu menu-horizontal">
          <li><button>Features</button></li>
          <li><button>Industries</button></li>
          <li><button>Pricing</button></li>
          <li><button>Company</button></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
    
    <ul class="menu bg-base-200 min-h-full w-64 p-4">
        <h1 class="font-extrabold ml-4 text-xl mb-4">Schdulit</h1>
        <li><button class="app-btn--drawer-side">Features</button></li>
        <li><button class="app-btn--drawer-side">Industries</button></li>
        <li><button class="app-btn--drawer-side">Pricing</button></li>
        <li><button class="app-btn--drawer-side">Company</button></li>
    </ul>
    <div class="app-footer">
        <div class="app-footer--title">
          <h4>© Schdulit 2024</h4>
        </div>
    </div>
  </div>
</div>