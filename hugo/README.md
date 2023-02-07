# HOW DO I DID THIS PORTFOLIO

First of all, I am using a hugo docker image using docker-compose.

To build the portfolio and deploy it, just run:

```
docker-compose up --build -d --remove-orphans
```

## Executing hugo commands

There is a shell in the image, so just execute to get to that shell:

```
docker-compose run --rm hugo shell
```

Once inside you can execute any hugo command.


## Installing tailwindcss

From the host just download the latest standalong binary

```bash
wget https://github.com/tailwindlabs/tailwindcss/releases/download/v3.2.4/tailwindcss-linux-x64
chmod +x tailwindcss-linux-x64
mv tailwindcss-linux-x64 tailwindcss
```

## Using tailwindcss

Fist of all, generate the tailwind js utility file using the recently installed tailwindcss binary (I have installed it in a new folder called tools)

```bash
./tools/tailwindcss init
```

This will create a new ```tailwind.config.js``` file that should be at the root of the project.

Next step is to populate the places where there could be any tailwind class in use (mainly html and js components). For this projects at the beginning it was:

```js
content: ["content/**/*.md", "layouts/**/*.html", "themes/ortree-theme/layouts/**/*.html"],
```

Then, create a ```global.css``` file in the assets folder the next content:

```css
@tailwind css;
@tailwind components;
@tailwind utilities;
```

Everytime there is a change in the styling, you must execute this command, that will transpile the stylinh and generate a new style.css that will be used in the site.

```bash
./tools/tailwindcss -i themes/ortree-theme/assets/css/global.css -o themes/ortree-theme/assets/css/style.css
```

And finally, import the resulting ```style.css``` in your site head.

```html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{ "<!-- template main css file -->" | safeHTML }}
    {{ $styles := resources.Get "css/style.css" }}
    <link rel="stylesheet" href="{{ $styles.Permalink }}" media="screen">
  
    {{ $title := print .Site.Title " | " .Title }}
    {{ if .IsHome }}{{ $title = .Site.Title }}{{ end }}
    <title>{{ $title }}</title>
</head>
```