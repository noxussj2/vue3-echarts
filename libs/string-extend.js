/**
 * 获取字符串宽度
 */
export const stringWidth = (text, fontSize) => {
    let width = 0;

    const span = document.createElement('span');
    span.innerText = text;
    span.style.fontSize = fontSize + 'px';
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.top = 0;
    document.body.append(span);
    width = span.offsetWidth;

    document.body.removeChild(span);

    return width;
};
