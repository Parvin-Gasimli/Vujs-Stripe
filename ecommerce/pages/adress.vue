<template>
    <div>
        <div class="w-full p-10 md:w-[800px] md:max-w-full mx-auto">
            <div class="p-6 border border-gray-300 sm:rounded-md">
                <form method="POST" action="https://herotofu.com/start" enctype="multipart/form-data">
                    <label class="block mb-6">
                        <span class="text-gray-700">Your name</span>
                        <input name="name" type="text" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " placeholder="Joe Bloggs" />
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Address line 1</span>
                        <input name="address1" type="text" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " placeholder="" />
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Address line 2</span>
                        <input name="address2" type="text" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " placeholder="" />
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">City</span>
                        <input name="city" type="text" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " placeholder="" />
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">State/Province</span>
                        <input name="state" type="text" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " placeholder="" />
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Zip/Postal code</span>
                        <input name="zip" type="text" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " placeholder="" />
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Country</span>
                        <input name="country" type="text" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " placeholder="" />
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Telephone</span>
                        <input name="telephone" type="text" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " placeholder="" />
                    </label>
                    <label class="block mb-6">
                        <span class="text-gray-700">Delivery information</span>
                        <textarea name="message" class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            p-3
          " rows="3" placeholder="floor/door lock code/etc."></textarea>
                    </label>
                    <div class="mb-6">
                        <button type="submit" class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
            flex items-center justify-center
            w-full
            p-3
          ">
                            Save
                        </button>
                    </div>

                </form>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>