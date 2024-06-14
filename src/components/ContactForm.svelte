<script>
import { Input } from "$lib/components/ui/input";
import { Textarea } from "$lib/components/ui/textarea";
import { Label } from "$lib/components/ui/label";
import { Button } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card";

let status = "";
const handleSubmit = async data => {
  status = 'Submitting...'
  const formData = new FormData(data.currentTarget)
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: json
  });
  const result = await response.json();
  if (result.success) {
      console.log(result);
      status = result.message || "Success"
  }
}
</script>

<form on:submit|preventDefault={handleSubmit}>
  <Input type="hidden" name="access_key" value="ACCESS_KEY" />
  <Card.Root class="p-8 bg-neutral-100 dark:bg-neutral-900">
    <div class="space-y-4">
      <div class="space-y-1">
        <Label for="name" class="block text-sm font-medium">Name</Label>
        <Input type="text" name="name" class="border-2 bg-background" required placeholder="Enter your name"/>
      </div>

      <div class="space-y-1">
        <Label for="email" class="block text-sm font-medium">Email</Label>
        <Input type="email" name="email" class="border-2 bg-background" required placeholder="Enter your email"/>
      </div>

      <div class="space-y-1">
        <Label for="email" class="block text-sm font-medium">Message</Label>
        <Textarea name="message" required rows="3" class="border-2 bg-background" placeholder="Enter your message"></Textarea>
      </div>

      <Button type="submit" class="w-full">Submit</Button>
    </div>
  </Card.Root>   
</form>

<div>{status}</div>
