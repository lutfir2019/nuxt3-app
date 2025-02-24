// app.config.ts
export default defineAppConfig({
  ui: {
    primary: "emerald", // Ganti dengan warna pilihan Anda
    gray: "slate", // Ganti dengan warna pilihan Anda
    variables: {
      rounded: "rounded-md",
      button: {
        padding: {
          sm: "px-2.5 py-1.5",
          md: "px-4 py-2",
          lg: "px-5 py-2.5",
          xl: "px-6 py-3",
        },
      },
      input: {
        padding: {
          sm: "py-1.5 px-2.5",
          md: "py-2 px-4",
          lg: "py-2.5 px-5",
          xl: "py-3 px-6",
        },
      },
      card: {
        padding: "px-6 py-4",
      },
      select: {
        padding: {
          sm: "py-1.5 pl-2.5 pr-8",
          md: "py-2 pl-4 pr-8",
          lg: "py-2.5 pl-5 pr-8",
          xl: "py-3 pl-6 pr-8",
        },
      },
    },
    button: {
      default: {
        size: "md",
        variant: "solid",
      },
      rounded: "md",
      font: "font-semibold",
      base: "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all disabled:cursor-not-allowed disabled:opacity-75",
      padding: {
        DEFAULT: "ui-variables-button-padding-md",
        ...{},
      },
      variant: {
        solid: "text-white shadow-sm",
        outline: "ring-1 ring-inset",
        soft: "shadow-sm",
        ghost: "hover:bg-gray-50 dark:hover:gray-800",
      },
      color: {
        primary: {
          solid:
            "bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 focus-visible:ring-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500",
          outline:
            "text-primary-500 ring-primary-500 hover:bg-primary-50 disabled:bg-primary-50 dark:text-primary-400 dark:ring-primary-400 dark:hover:bg-primary-900",
          soft: "bg-primary-50 text-primary-500 hover:bg-primary-100 disabled:bg-primary-50 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800",
          ghost:
            "text-primary-500 hover:bg-primary-50 disabled:bg-transparent dark:text-primary-400 dark:hover:bg-primary-900",
        },
        gray: {
          solid:
            "bg-gray-500 hover:bg-gray-600 disabled:bg-gray-500 focus-visible:ring-gray-500 dark:bg-gray-400 dark:hover:bg-gray-500",
          outline:
            "text-gray-500 ring-gray-500 hover:bg-gray-50 disabled:bg-gray-50 dark:text-gray-400 dark:ring-gray-400 dark:hover:bg-gray-900",
          soft: "bg-gray-50 text-gray-500 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800",
          ghost:
            "text-gray-500 hover:bg-gray-50 disabled:bg-transparent dark:text-gray-400 dark:hover:bg-gray-900",
        },
      },
    },
    input: {
      default: {
        size: "md",
        color: "primary",
      },
      rounded: "md",
      base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
      padding: {
        DEFAULT: "ui-variables-input-padding-md",
        ...{},
      },
      color: {
        primary: {
          outline:
            "shadow-sm bg-white dark:bg-primary-900 text-primary-900 dark:text-white ring-1 ring-inset ring-primary-300 dark:ring-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
          none: "bg-transparent focus:ring-0 focus:shadow-none",
        },
        gray: {
          outline:
            "shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400",
          none: "bg-transparent focus:ring-0 focus:shadow-none",
        },
      },
    },
    card: {
      rounded: "lg",
      shadow: "shadow-lg",
      base: "bg-white dark:bg-gray-900",
      background: "bg-white dark:bg-gray-900",
      header: {
        padding: "ui-variables-card-padding",
        background: "border-b border-gray-200 dark:border-gray-800",
      },
      body: {
        padding: "ui-variables-card-padding",
        background: "",
      },
      footer: {
        padding: "ui-variables-card-padding",
        background: "border-t border-gray-200 dark:border-gray-800",
      },
    },
    select: {
      base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
      rounded: "rounded-md",
      padding: {
        DEFAULT: "ui-variables-select-padding-md",
        ...{},
      },
      color: {
        primary: {
          outline:
            "shadow-sm bg-white dark:bg-primary-900 text-primary-900 dark:text-white ring-1 ring-inset ring-primary-300 dark:ring-primary-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400",
          none: "bg-transparent focus:ring-0 focus:shadow-none",
        },
        gray: {
          outline:
            "shadow-sm bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white ring-1 ring-inset ring-secondary-300 dark:ring-secondary-700 focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400",
          none: "bg-transparent focus:ring-0 focus:shadow-none",
        },
      },
    },

    // Container styles
    container: {
      base: "mx-auto",
      padding: "px-4 sm:px-6 lg:px-8",
      constrained: "max-w-7xl",
    },
  },
});
