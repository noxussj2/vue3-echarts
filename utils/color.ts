/**
 * Convert hex color to rgba
 */
export const hexToRgba = (hex: string, alpha: number = 1) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * Convert rgb color to rgba
 */
export const rgbToRgba = (rgb: string, alpha: number = 1) => {
    const arr = rgb.match(/\d+/g)
    return `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, ${alpha})`
}

/**
 * 接受一个颜色值和透明度，返回新的 rgba 颜色值
 * 传入的颜色支持 hex、rgb、rgba
 */
export const colorToRgba = (color: string, alpha: number = 1) => {
    if (color.startsWith('#')) {
        return hexToRgba(color, alpha)
    }
    else if (color.startsWith('rgb')) {
        return rgbToRgba(color, alpha)
    }
    return color
}
