// 动态添加时间显示的样式
function addTimeDisplayStyles() {
    // 检查样式是否已存在，避免重复添加
    if (!document.getElementById('time-display-styles')) {
        const style = document.createElement('style');
        style.id = 'time-display-styles';
        style.textContent = `
            .time-display {
                position: fixed;
                bottom: 20px;
                right: 20px;
                font-size: 14px;
                padding: 8px 12px;
                background-color: #f0f0f0;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                /* 可以根据需要调整样式，或添加 !important 确保样式生效 */
            }
        `;
        document.head.appendChild(style);
    }
}

// 实时更新时间函数
function updateTime(elementId) {
    const date = new Date();
    // 格式化时间：年-月-日 时:分:秒
    const formattedTime = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = formattedTime;
    }
}

// 初始化时间显示
function initTimeDisplay(containerId = 'time-display-container') {
    // 添加样式
    addTimeDisplayStyles();

    // 检查容器是否存在，不存在则创建
    let container = document.getElementById(containerId);
    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.className = 'time-display';
        document.body.appendChild(container);
    } else {
        // 如果容器已存在，添加样式类
        container.classList.add('time-display');
    }

    // 初始化时间并开始更新
    updateTime(containerId);
    setInterval(() => updateTime(containerId), 1000);

    return containerId;
}
