export const hasOwn = Object.prototype.hasOwnProperty

export function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]"
}
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]"
}
export function isArray(arr) {
  return Array.isArray(arr)
}
export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}
export function isFunction(functionToCheck) {
  return (
    functionToCheck &&
    Object.prototype.toString.call(functionToCheck) === "[object Function]"
  )
}
export function isUndefined(val) {
  return val === void 0
}
export function isDefined(val) {
  return val !== undefined && val !== null
}
export function isNull(v) {
  return v === null
}
export function isVoid(v) {
  return !isDefined(v) || isNull(v)
}
export function isFile(val) {
  return val instanceof File
}
export function isBlob(val) {
  return val instanceof Blob
}
export function isPlainObject(obj) {
  let proto, Ctor

  // 排除掉明显不是obj的以及一些宿主对象如Window
  if (!obj || Object.prototype.toString.call(obj) !== "[object Object]") {
    return false
  }

  /**
   * getPrototypeOf es5 方法，获取 obj 的原型
   * 以 new Object 创建的对象为例的话
   * obj.__proto__ === Object.prototype
   */
  proto = Object.getPrototypeOf(obj)

  // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
  if (!proto) {
    return true
  }

  /**
   * 以下判断通过 new Object 方式创建的对象
   * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
   * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
   */
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor

  // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
  return (
    typeof Ctor === "function" &&
    hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
  )
}

// 判断值是否为空
export function isEmpty(val) {
  // null or undefined
  if (val == null) return true

  if (typeof val === "boolean") return false

  if (typeof val === "number") return !val

  if (val instanceof Error) return val.message === ""

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case "[object String]":
    case "[object Array]":
      return !val.length

    // Map or Set or File
    case "[object File]":
    case "[object Map]":
    case "[object Set]": {
      return !val.size
    }
    // Plain Object
    case "[object Object]": {
      return !Object.keys(val).length
    }
  }

  return false
}

const eachEqual = (v1, v2) => {
  for (const i in v1) {
    if (!equals(v1[i], v2[i])) {
      return false
    }
  }
  for (const i in v2) {
    if (!equals(v1[i], v2[i])) {
      return false
    }
  }
  return true
}

export function equals(v1, v2) {
  if (!isVoid(v1) && !isVoid(v2)) {
    if (isObject(v1)) {
      if (isObject(v2)) {
        return eachEqual(v1, v2)
      } else {
        return false
      }
    } else if (isArray(v1)) {
      if (isArray(v2)) {
        return eachEqual(v1, v2)
      } else {
        return false
      }
    } else if (v1.toString() === v2.toString()) {
      return true
    } else {
      return false
    }
  } else if (!isVoid(v1) || !isVoid(v2)) {
    return false
  } else {
    return true
  }
}
