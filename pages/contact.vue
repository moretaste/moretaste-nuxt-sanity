<script setup lang="ts">
const form = ref({
    name: "",
    email: "",
    message: "",
});

const loading = ref(false);
const success = ref(false);

async function handleSubmit() {
    loading.value = true;

    try {
        await $fetch("/api/contact", {
            method: "POST",
            body: form.value,
        });
        success.value = true;
        form.value = { name: "", email: "", message: "" };
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <UContainer class="py-12">
        <UCard>
            <template #header>
                <h1 class="text-2xl font-bold">Contact Us</h1>
            </template>

            <UAlert
                v-if="success"
                color="success"
                variant="subtle"
                title="Success!"
                description="Your message has been sent."
                class="mb-4"
            />

            <form @submit.prevent="handleSubmit" v-else class="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-1">Name *</label>
                    <UInput
                        v-model="form.name"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1"
                        >Email *</label
                    >
                    <UInput
                        v-model="form.email"
                        type="email"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1"
                        >Message *</label
                    >
                    <UTextarea
                        v-model="form.message"
                        placeholder="Your message..."
                        :rows="5"
                        required
                    />
                </div>

                <UButton type="submit" :loading="loading">
                    Send Message
                </UButton>
            </form>
        </UCard>
    </UContainer>
</template>
