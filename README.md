# list_optimalisation

### Issue: 
The list can not be loaded as there are too many images loaded at the same time.

### Best Solution:
Creating a list of elements with a pseudo attribute "data-src" and images with empty src. Single IntersectionObserver instance detects images appearing in the viewport and reassigns "data-src" to image "src". 

### Best Solution:
Optionally load 

### Not working:
Loaded='lazy' attribute on the image and React.suspense wrapper but this solution still got images stacked in a pending state.
