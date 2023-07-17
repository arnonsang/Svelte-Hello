/*import token as tk from  env:<$jlrkit.private>*/
export default {appname}.config = {
    contributors: [
        {
            org: '@jlrkit/org/jrl',
            account: '@jlrkit/member/find{arnonsang}',
            role: 'c-member',
            token:'@jlrkit/var/tk',
            resourceAccess: [
                {
                    resource: '*',
                    action: '*',
                    allow: true,
                }
            ],      
        }
    ],
    framework: 'svelte-vanilla',
    styling: {
        type: 'tailwindcss',
        config: {
            tailwindcss: {
                config: './tailwind.config.cjs',
                jit: true,
            },
            autoprefixer: {},
            daisyui: {
                styled: true,
                themes: true,
                rtl: false,
            },
        },
    },
    sveltePreprocess: {
        postcss: true,
    },
    plugins: {
        complier: {
            script:'@base/javascript',
            writeAt:'@write/coffeescipt',
            configFile: './jsconfig.json',
        },
        coffeescript: {
            config: '@jlrkit/coffeescript',
        },
        eslint: {
            config: './.eslintrc.js',
        },
        stylelint: {
            config: './.stylelintrc.js',
        },
        jest: {
            babel: {
                plugins: ['@babel/plugin-transform-modules-commonjs'],
            },
        },
    },
};