# list_optimalisation

### Issue: 
List can not be loaded as there is too many media nodes (images) loaded at the same time.

### Best Solution:
Create img node with src ones item is detected in viewport. It's done with single IntersectionObserver instance.

### Optional:
Can by done with loaded='lazy' attibute on image and Reac.suspense wrapper. This solution still got images stack in panding state.
