<script setup lang="ts">
// Page meta
definePageMeta({
    title: "Style Guide - moretaste",
});
</script>

<template>
    <UContainer class="py-12">
        <div class="space-y-12">
            <!-- Header -->
            <div>
                <h1 class="text-4xl font-bold mb-2">moretaste Style Guide</h1>
                <p class="text-muted">Design system and component showcase</p>
            </div>

            <!-- Color Palette -->
            <section>
                <h2 class="text-3xl font-bold mb-6">Color Palette</h2>

                <div class="space-y-8">
                    <!-- Primary Palette -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">
                            Primary Palette
                        </h3>
                        <div
                            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
                        >
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #01161e"
                                ></div>
                                <div>
                                    <p class="font-semibold">Ink Black</p>
                                    <p class="text-sm text-muted">#01161E</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #124559"
                                ></div>
                                <div>
                                    <p class="font-semibold">Dark Teal</p>
                                    <p class="text-sm text-muted">#124559</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #598392"
                                ></div>
                                <div>
                                    <p class="font-semibold">Air Force Blue</p>
                                    <p class="text-sm text-muted">#598392</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #aec3b0"
                                ></div>
                                <div>
                                    <p class="font-semibold">Ash Grey</p>
                                    <p class="text-sm text-muted">#AEC3B0</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #eff6e0"
                                ></div>
                                <div>
                                    <p class="font-semibold">Beige</p>
                                    <p class="text-sm text-muted">#EFF6E0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Logo Colors -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">
                            Logo Colors (Accent)
                        </h3>
                        <div
                            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
                        >
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #0092ae"
                                ></div>
                                <div>
                                    <p class="font-semibold">Teal</p>
                                    <p class="text-sm text-muted">#0092ae</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #4cb3c6"
                                ></div>
                                <div>
                                    <p class="font-semibold">Teal Light</p>
                                    <p class="text-sm text-muted">#4cb3c6</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #d9eff3"
                                ></div>
                                <div>
                                    <p class="font-semibold">Teal Lighter</p>
                                    <p class="text-sm text-muted">#d9eff3</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #e63312"
                                ></div>
                                <div>
                                    <p class="font-semibold">Red</p>
                                    <p class="text-sm text-muted">#e63312</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #ea5444"
                                ></div>
                                <div>
                                    <p class="font-semibold">Red Light</p>
                                    <p class="text-sm text-muted">#ea5444</p>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <div
                                    class="h-24 rounded-lg border"
                                    style="background-color: #e8472a"
                                ></div>
                                <div>
                                    <p class="font-semibold">Red Medium</p>
                                    <p class="text-sm text-muted">#e8472a</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Typography -->
            <section>
                <h2 class="text-3xl font-bold mb-6">Typography</h2>
                <div class="prose dark:prose-invert space-y-4 m-auto">
                    <h1 class="text-4xl font-bold">Heading 1</h1>
                    <h2 class="text-3xl font-bold">Heading 2</h2>
                    <h3 class="text-2xl font-bold">Heading 3</h3>
                    <h4 class="text-xl font-bold">Heading 4</h4>
                    <h5 class="text-lg font-bold">Heading 5</h5>
                    <h6 class="text-base font-bold">Heading 6</h6>

                    <div class="space-y-4">
                        <p class="text-base">
                            Body text - The quick brown fox jumps over the lazy
                            dog. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p class="text-base">
                            Second paragraph - Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit.
                        </p>
                        <p class="text-base">
                            Third paragraph - Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </p>
                        <p class="text-sm text-muted">
                            Small muted text - Additional information or hints.
                        </p>
                    </div>

                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold">Unordered List</h4>
                        <ul class="list-disc list-inside space-y-2">
                            <li>First item in the list</li>
                            <li>Second item in the list</li>
                            <li>Third item in the list</li>
                            <li>
                                Fourth item with longer text to show how it
                                wraps and maintains proper spacing
                            </li>
                        </ul>

                        <h4 class="text-lg font-semibold">Ordered List</h4>
                        <ol class="list-decimal list-inside space-y-2">
                            <li>First step in the process</li>
                            <li>Second step in the process</li>
                            <li>Third step in the process</li>
                            <li>
                                Fourth step with additional details about what
                                needs to be done
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <!-- Buttons -->
            <section>
                <h2 class="text-3xl font-bold mb-6">Buttons</h2>
                <div class="space-y-6">
                    <!-- Default Variants -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Variants</h3>
                        <div class="flex flex-wrap gap-3">
                            <UButton>Primary</UButton>
                            <UButton variant="outline">Outline</UButton>
                            <UButton variant="soft">Soft</UButton>
                            <UButton variant="ghost">Ghost</UButton>
                            <UButton variant="link">Link</UButton>
                        </div>
                    </div>

                    <!-- Colors -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Colors</h3>
                        <div class="flex flex-wrap gap-3">
                            <UButton color="primary">Primary</UButton>
                            <UButton color="neutral">Neutral</UButton>
                            <UButton color="error">Error</UButton>
                            <UButton color="success">Success</UButton>
                            <UButton color="warning">Warning</UButton>
                        </div>
                    </div>

                    <!-- Sizes -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Sizes</h3>
                        <div class="flex flex-wrap items-center gap-3">
                            <UButton size="xs">Extra Small</UButton>
                            <UButton size="sm">Small</UButton>
                            <UButton size="md">Medium</UButton>
                            <UButton size="lg">Large</UButton>
                            <UButton size="xl">Extra Large</UButton>
                        </div>
                    </div>

                    <!-- With Icons -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">With Icons</h3>
                        <div class="flex flex-wrap gap-3">
                            <UButton icon="i-lucide-home">Home</UButton>
                            <UButton icon="i-lucide-mail" trailing
                                >Contact</UButton
                            >
                            <UButton icon="i-lucide-heart" variant="outline" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Cards -->
            <section>
                <h2 class="text-3xl font-bold mb-6">Cards</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <UCard>
                        <template #header>
                            <h3 class="text-lg font-semibold">Card Title</h3>
                        </template>
                        <p>
                            This is a basic card with a header and content area.
                        </p>
                    </UCard>

                    <UCard>
                        <h3 class="text-lg font-semibold mb-2">Simple Card</h3>
                        <p>This is a simple card without a header slot.</p>
                    </UCard>

                    <UCard>
                        <template #header>
                            <h3 class="text-lg font-semibold">
                                Card with Footer
                            </h3>
                        </template>
                        <p>Card content goes here.</p>
                        <template #footer>
                            <div class="flex justify-end">
                                <UButton size="sm">Action</UButton>
                            </div>
                        </template>
                    </UCard>
                </div>
            </section>

            <!-- Badges -->
            <section>
                <h2 class="text-3xl font-bold mb-6">Badges</h2>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Variants</h3>
                        <div class="flex flex-wrap gap-3">
                            <UBadge>Default</UBadge>
                            <UBadge variant="outline">Outline</UBadge>
                            <UBadge variant="soft">Soft</UBadge>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-xl font-semibold mb-4">Colors</h3>
                        <div class="flex flex-wrap gap-3">
                            <UBadge color="primary">Primary</UBadge>
                            <UBadge color="neutral">Neutral</UBadge>
                            <UBadge color="success">Success</UBadge>
                            <UBadge color="error">Error</UBadge>
                            <UBadge color="warning">Warning</UBadge>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Form Elements -->
            <section>
                <h2 class="text-3xl font-bold mb-6">Form Elements</h2>
                <div class="max-w-md space-y-6">
                    <UInput placeholder="Text input" />
                    <UTextarea placeholder="Textarea input" />
                    <USelect
                        :items="['Option 1', 'Option 2', 'Option 3']"
                        placeholder="Select an option"
                    />
                    <UCheckbox label="Checkbox option" />
                    <URadioGroup
                        :items="['Option A', 'Option B', 'Option C']"
                    />
                    <USwitch label="Switch option" />
                </div>
            </section>

            <!-- Spacing -->
            <section>
                <h2 class="text-3xl font-bold mb-6">Spacing</h2>
                <div class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-16 text-right text-sm text-muted">
                            xs (4px)
                        </div>
                        <div
                            class="h-4"
                            style="width: 4px; background-color: #124559"
                        ></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-16 text-right text-sm text-muted">
                            sm (8px)
                        </div>
                        <div
                            class="h-4"
                            style="width: 8px; background-color: #124559"
                        ></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-16 text-right text-sm text-muted">
                            md (16px)
                        </div>
                        <div
                            class="h-4"
                            style="width: 16px; background-color: #124559"
                        ></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-16 text-right text-sm text-muted">
                            lg (24px)
                        </div>
                        <div
                            class="h-4"
                            style="width: 24px; background-color: #124559"
                        ></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-16 text-right text-sm text-muted">
                            xl (32px)
                        </div>
                        <div
                            class="h-4"
                            style="width: 32px; background-color: #124559"
                        ></div>
                    </div>
                </div>
            </section>

            <!-- Borders -->
            <section>
                <h2 class="text-3xl font-bold mb-6">Borders</h2>
                <div class="space-y-4">
                    <div class="p-4 border">Default border</div>
                    <div class="p-4 border-2">2px border</div>
                    <div class="p-4 border rounded-lg">Rounded border</div>
                    <div
                        class="p-4 border rounded-lg"
                        style="border-color: #124559"
                    >
                        Colored border (Dark Teal)
                    </div>
                </div>
            </section>
        </div>
    </UContainer>
</template>
