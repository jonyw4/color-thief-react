# Color Thief (React)

🎨 A React component with hooks for Color Thief. Grab color palette from an image with javascript
Use the official Lokesh's [color-thief](https://github.com/lokesh/color-thief/).

## Install
```
npm i -S color-thief-react
```

## Basic Usage
```jsx
import Color from 'color-thief-react';
// In your render...
<Color src={IMAGE_URL}>
  {({ data, loading, error }) => (
    <div style={{ color: data }}>
      Text with the predominant color
    </div>
  )}
</Color>
```

## API
### Color

Return the predominant color of the image. You can use a React component or hook. Both have the same props.

`src`: **Required**. Link of the image

`format`: Format of the response. Can be 'rgbToString' or 'rgbToArray' or 'hex'

`crossOrigin`: Tag cross-origin for image

`quality`: Quality determines how many pixels are skipped before the nex one is sampled.We rarely need to sample every single pixel in the image to get good results. The bigger the number, the faster a value will be returned. Read more in https://lokeshdhakar.com/projects/color-thief/

### Usage
```jsx
import { useColor } from 'color-thief-react'

const { data, loading, error } = useColor(src, format, { crossOrigin, quality})

<div style={{ color: data.vibrant }}>
  Text with the predominant color
</div>
```

```jsx
import Color from 'color-thief-react';
// In your render...
<Color src={IMAGE_URL} format="hex">
  {({ data, loading, error }) => (
    <div style={{ color: data }}>
      Text with the predominant color
    </div>
  )}
</Color>
```
### Palette
Return a palette of colors based on the predominance of colors on the image. You can use a React component or hook. Both have the same props.

`src`: **Required**. Link of the image

`colorCount`: Count of colors of the palette. Default is 2

`format`: Format of the response. Can be `rgbToString` or `rgbToArray` or `hex`. Default is `rgbToString`

`crossOrigin`: Tag cross-origin for image

`quality`: Default is `10`. Quality determines how many pixels are skipped before the nex one is sampled.We rarely need to sample every single pixel in the image to get good results. The bigger the number, the faster a value will be returned. Read more in https://lokeshdhakar.com/projects/color-thief/

```jsx
import { Palette } from 'color-thief-react';
// In your render...
<Palette src={IMAGE_URL} colorCount={2}>
  {({ data, loading, error }) => (
    <div style={{ color: data[0], backgroundColor: data[1] }}>
      Text with the predominant color
    </div>
  )}
</Palette>
```

```jsx
import { usePalette } from 'color-thief-react'

const { data, loading, error } = usePalette(src, colorCount, format, { crossOrigin, quality})

<div style={{ color: data[0], backgroundPalette: data[1] }}>
  Text with the predominant color
</div>
```