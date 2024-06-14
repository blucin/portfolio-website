<script>
  import ModeToggler from "./ModeToggler.svelte";
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];
</script>

<!-- fixed start-0 top-0 z-20 w-full border-b-2 bg-white/30 px-2 py-2.5 backdrop-blur-md dark:bg-black/30 sm:px-4" -->
<nav
  class="top-0 start-0 h-14 z-20 w-full sticky border-b-2 flex bg-background" 
>
  <ul class="flex gap-5 items-center w-full">
    {#each navItems as item}
      <li>
        <a href={item.path}>{item.name}</a>
      </li>
    {/each}
    <div class="ml-auto">
      <ModeToggler />
    </div>
  </ul>
</nav>
