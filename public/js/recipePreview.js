
const imageClicked = document.querySelector("img");

// Determine which Recipe Preview Image User clicked

window.addEventListener("click", )


// Response should take user to the full page view of recipe corresponding to the recipe preview image

router.get('/:id', (req, res) => {
    helper.SafeGetByID(req.params.id, res, Recipe, [])
})
