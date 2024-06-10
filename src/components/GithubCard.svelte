<script lang="ts">
export let props;
let { repo, description, lang, url } = props;
import * as Card from "$lib/components/ui/card/index.js";
</script>

<Card.Root class="p-4">
  <Card.Header>
<div class="space-y-1">
  <Card.Title>{repo}</Card.Title>
  <Card.Description>{description}</Card.Description>
</div>
  </Card.Header>
  <Card.Content>
    <div class="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
      <div class="flex items-center">
        <!-- <CircleDotIcon className="mr-1 h-3 w-3 fill-gray-900 text-gray-900" /> -->
        TypeScript
      </div>
      <div class="flex items-center">
        <!-- <StarIcon className="mr-1 h-3 w-3" /> -->
        20k
      </div>
      <div>Updated April 2023</div>
    </div>
  </Card.Content>
</Card.Root>
