Hooks.on("ready", function() {
    $(document).keydown((e) => {
        if ([38,40,37,39].includes(e.keyCode)) e.stopPropagation()
    })
})