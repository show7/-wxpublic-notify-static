// 频率限制
let canCallFunction = true
let callFunctionTimer = undefined

/**
 * 函数调用频率限制
 * @param fn 调用方法
 * @param duration 间隔时间
 */
export function frequencyLimitRunFirst (fn, duration = 300) {
  if (!canCallFunction) {
    return
  }
  canCallFunction = false
  fn()
  setTimeout(function () {
    canCallFunction = true
  }, duration)
}

/**
 * 函数调用频率限制
 * @param fn 调用方法
 * * @param duration 间隔时间
 */
export function frequencyLimitRunAfter (fn, duration = 300) {
  clearTimeout(callFunctionTimer)
  callFunctionTimer = setTimeout(() => {
    fn()
    callFunctionTimer = undefined
  }, duration)
}