<script lang="ts">
  export let props;
  let { repo, description, lang, url } = props;

  import * as Card from "$lib/components/ui/card/index.js";
  import { DotFilled } from "svelte-radix";

  // Map of languages to Tailwind CSS color classes
  let colorMap = {
    "Next.js": "text-gray-700", 
    "Golang": "text-cyan-500",
    "React Native": "text-sky-500",
    "SvelteKit": "text-orange-500",
  };

  $: dotStyle = colorMap[lang] || "text-gray-500";
</script>

<a href={url} target="_blank" rel="noopener noreferrer" class="block m-auto">
  <Card.Root class="bg-neutral-100 dark:bg-neutral-900 border-2 hover:drop-shadow-lg hover:cursor-pointer">
    <Card.Header>
      <div class="space-y-1">
        <Card.Title>{repo}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </div>
    </Card.Header>
    <Card.Content>
      <div class="text-sm text-gray-500 flex flex-wrap items-center">
        <DotFilled class={dotStyle} />
        {lang}
      </div>
    </Card.Content>
  </Card.Root>
</a>
