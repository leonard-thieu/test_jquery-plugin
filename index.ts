interface ExamplePlugin {
    settings: ExamplePluginSettings;

    (behavior: 'enable'): JQuery;
    (settings?: ExamplePluginSettings): JQuery;
}

interface ExamplePluginSettings {
    title?: string;
}

interface JQuery {
    examplePlugin: ExamplePlugin;
}

$('p').examplePlugin({ title: 'myTitle' });
$('p').examplePlugin('enable');