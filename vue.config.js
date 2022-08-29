module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                'extraResources': [
                    {
                        'from': './server/dist',
                        'to': './server/dist'
                    }
                ]
            }
        }
    }
}