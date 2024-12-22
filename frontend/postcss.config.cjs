module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss')('./tailwind.config.cjs'), // Указываем путь к вашему файлу конфигурации Tailwind CSS
    ],
};