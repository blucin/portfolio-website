<script lang="ts">
  export let props;
  let { social, icon, url, username } = props;
  import { ArrowTopRight, GithubLogo, LinkedinLogo } from "svelte-radix";
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="block">
  <Card.Root class="bg-neutral-100 dark:bg-neutral-900 hover:drop-shadow-lg hover:cursor-pointer clickable">
    <div class="flex gap-3 items-center p-4">
      {#if icon === "github"}
        <GithubLogo class="w-6 h-6" />
      {:else if icon === "linkedin"}
        <LinkedinLogo class="w-6 h-6" />
      {/if}
      <div class="flex flex-col">
        <span class="text-gray-500">{social}</span>
        <span class="text-blue-500">
          {username}
        </span>
      </div>
      <ArrowTopRight class="w-5 h-5 ml-auto" />
    </div>
  </Card.Root>
</a>
