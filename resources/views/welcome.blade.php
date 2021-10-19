<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body >
        <div id="index"></div>
    </body>
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

    <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

{{--    <script type="text/javascript" src="js/app.js"></script>--}}
    <script src="{{ asset('js/app.js') }}" defer></script>

</html>
