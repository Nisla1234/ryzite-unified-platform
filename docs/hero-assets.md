# Hero robot assets

## Front-facing end poses

Generated with the built-in image generation tool from each original robot cutout. Saved as `public/images/hero/ry-front.png` and `public/images/hero/zite-front.png`. The timeline crossfades to these poses after the final step, before the company-name reveal. The rope anchors interpolate to their front-facing hand positions.

### RY front prompt

Use case: identity-preserve. Edit target: attached RY robot cutout. Make a matching end-pose for website animation: robot standing upright FRONT ON, head straight facing camera, BOTH eyes looking DIRECTLY OUT AT VIEWER, symmetrical straight-on face and cap. Preserve exact character identity, clothing, colors, headphones, face type, shiny 3D materials and cap lettering "RY". Full body including shoes. Feet planted about shoulder width apart, arms bent with both fists at waist in front, close to body as if still holding a rope. No rope, no background, no floor, no shadow. Center the figure in same portrait canvas and similar scale as reference. True transparent background. Do not face left or right, do not turn head sideways. No other characters.

### ZITE front prompt

Use case: identity-preserve. Edit target: attached ZITE robot cutout. Make a matching end-pose for website animation: robot standing upright FRONT ON, head straight facing camera, BOTH eyes looking DIRECTLY OUT AT VIEWER, symmetrical straight-on face and cap. Preserve exact character identity, clothing, colors, headphones, face type, shiny 3D materials and cap lettering "ZITE". Full body including shoes. Feet planted about shoulder width apart, arms bent with both fists at waist in front, close to body as if still holding a rope. No rope, no background, no floor, no shadow. Center the figure in same portrait canvas and similar scale as reference. True transparent background. Do not face left or right, do not turn head sideways. No other characters.

Generated with the built-in image generation tool, using the supplied robot image as the character reference. Transparent PNGs are stored in `public/images/hero/ry.png` and `public/images/hero/zite.png`.

The hero uses JavaScript and GSAP to move the separate cutouts. The glowing rope is an SVG path updated during movement. This is a layered 2D animation; the robots are not rigged 3D models.

## RY prompt

Use case: stylized-concept. Reference image role: character reference. Create a single full-body transparent PNG cutout of ONLY the LEFT robot in reference: cute premium 3D white robot, black face screen with happy blue LED eyes, white-and-blue cap with exact text RY, royal blue hoodie, white cargo trousers, blue-white sneakers. Facing toward RIGHT three-quarter view, legs braced apart, both hands extended toward right at waist height gripping an invisible horizontal rope, pulling pose. NO rope rendered, NO other character, NO background, NO floor or shadow. Entire character centered with small padding, fully visible including shoes and cap. Preserve reference identity and polished 3D materials. True alpha transparency.

## ZITE prompt

Use case: stylized-concept. Reference image role: character reference. Create a single full-body transparent PNG cutout of ONLY the RIGHT robot in reference: cute premium 3D white robot with simple black oval eyes and smile, blue headphones, white cap with exact text ZITE, charcoal hoodie and dark cargo trousers, blue-white sneakers. Facing toward LEFT three-quarter view, legs braced apart, both hands extended toward left at waist height gripping an invisible horizontal rope, pulling pose. NO rope rendered, NO other character, NO background, NO floor or shadow. Entire character centered with small padding, fully visible including shoes and cap. Preserve reference identity and polished 3D materials. True alpha transparency.
