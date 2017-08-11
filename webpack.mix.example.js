let mix = require('laravel-mix').mix;

let env = 'dist/'; //test or src
env = 'docs/'; //test or src

mix.sass('resources/assets/sass/button.scss',env+'css/button.css');