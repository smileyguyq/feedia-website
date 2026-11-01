// shared_backend/node_modules/maplibre-gl/dist/maplibre-gl-worker.mjs
var e = Object.create;
var t = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = (e53, t2) => () => (t2 || (e53((t2 = { exports: {} }).exports, t2, t2.exports), e53 = null), t2.exports);
var s = (e53, i2, o2, s2) => {
  if (i2 && typeof i2 == `object` || typeof i2 == `function`) for (var c2 = r(i2), l2 = 0, u2 = c2.length, d2; l2 < u2; l2++) d2 = c2[l2], !a.call(e53, d2) && d2 !== o2 && t(e53, d2, { get: ((e54) => i2[e54]).bind(null, d2), enumerable: !(s2 = n(i2, d2)) || s2.enumerable });
  return e53;
};
var c = (n2, r2, o2) => (o2 = n2 == null ? {} : e(i(n2)), s(r2 || !n2 || !n2.__esModule || !a.call(n2, `default`) ? t(o2, `default`, { value: n2, enumerable: true }) : o2, n2));
function l(e53, t2) {
  this.x = e53, this.y = t2;
}
l.prototype = { clone() {
  return new l(this.x, this.y);
}, add(e53) {
  return this.clone()._add(e53);
}, sub(e53) {
  return this.clone()._sub(e53);
}, multByPoint(e53) {
  return this.clone()._multByPoint(e53);
}, divByPoint(e53) {
  return this.clone()._divByPoint(e53);
}, mult(e53) {
  return this.clone()._mult(e53);
}, div(e53) {
  return this.clone()._div(e53);
}, rotate(e53) {
  return this.clone()._rotate(e53);
}, rotateAround(e53, t2) {
  return this.clone()._rotateAround(e53, t2);
}, matMult(e53) {
  return this.clone()._matMult(e53);
}, unit() {
  return this.clone()._unit();
}, perp() {
  return this.clone()._perp();
}, round() {
  return this.clone()._round();
}, mag() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}, equals(e53) {
  return this.x === e53.x && this.y === e53.y;
}, dist(e53) {
  return Math.sqrt(this.distSqr(e53));
}, distSqr(e53) {
  let t2 = e53.x - this.x, n2 = e53.y - this.y;
  return t2 * t2 + n2 * n2;
}, angle() {
  return Math.atan2(this.y, this.x);
}, angleTo(e53) {
  return Math.atan2(this.y - e53.y, this.x - e53.x);
}, angleWith(e53) {
  return this.angleWithSep(e53.x, e53.y);
}, angleWithSep(e53, t2) {
  return Math.atan2(this.x * t2 - this.y * e53, this.x * e53 + this.y * t2);
}, _matMult(e53) {
  let t2 = e53[0] * this.x + e53[1] * this.y, n2 = e53[2] * this.x + e53[3] * this.y;
  return this.x = t2, this.y = n2, this;
}, _add(e53) {
  return this.x += e53.x, this.y += e53.y, this;
}, _sub(e53) {
  return this.x -= e53.x, this.y -= e53.y, this;
}, _mult(e53) {
  return this.x *= e53, this.y *= e53, this;
}, _div(e53) {
  return this.x /= e53, this.y /= e53, this;
}, _multByPoint(e53) {
  return this.x *= e53.x, this.y *= e53.y, this;
}, _divByPoint(e53) {
  return this.x /= e53.x, this.y /= e53.y, this;
}, _unit() {
  return this._div(this.mag()), this;
}, _perp() {
  let e53 = this.y;
  return this.y = this.x, this.x = -e53, this;
}, _rotate(e53) {
  let t2 = Math.cos(e53), n2 = Math.sin(e53), r2 = t2 * this.x - n2 * this.y, i2 = n2 * this.x + t2 * this.y;
  return this.x = r2, this.y = i2, this;
}, _rotateAround(e53, t2) {
  let n2 = Math.cos(e53), r2 = Math.sin(e53), i2 = t2.x + n2 * (this.x - t2.x) - r2 * (this.y - t2.y), a2 = t2.y + r2 * (this.x - t2.x) + n2 * (this.y - t2.y);
  return this.x = i2, this.y = a2, this;
}, _round() {
  return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
}, constructor: l }, l.convert = function(e53) {
  if (e53 instanceof l) return e53;
  if (Array.isArray(e53)) return new l(+e53[0], +e53[1]);
  if (e53.x !== void 0 && e53.y !== void 0) return new l(+e53.x, +e53.y);
  throw Error(`Expected [x, y] or {x, y} point format`);
};
function u(e53, t2, n2, r2) {
  let i2 = 3 * e53, a2 = 3 * (n2 - e53) - i2, o2 = 1 - i2 - a2, s2 = 3 * t2, c2 = 3 * (r2 - t2) - s2, l2 = 1 - s2 - c2;
  return function(e54, t3 = 1e-6) {
    if (e54 <= 0) return 0;
    if (e54 >= 1) return 1;
    let n3 = e54;
    for (let r4 = 0; r4 < 8; r4++) {
      let r5 = ((o2 * n3 + a2) * n3 + i2) * n3 - e54;
      if (Math.abs(r5) < t3) return ((l2 * n3 + c2) * n3 + s2) * n3;
      let u3 = (3 * o2 * n3 + 2 * a2) * n3 + i2;
      if (Math.abs(u3) < 1e-6) break;
      n3 -= r5 / u3;
    }
    let r3 = 0, u2 = 1;
    n3 = e54;
    for (let s3 = 0; s3 < 20; s3++) {
      let s4 = ((o2 * n3 + a2) * n3 + i2) * n3;
      if (Math.abs(s4 - e54) < t3) break;
      e54 > s4 ? r3 = n3 : u2 = n3, n3 = (r3 + u2) * 0.5;
    }
    return ((l2 * n3 + c2) * n3 + s2) * n3;
  };
}
var d;
function f() {
  return d ??= typeof OffscreenCanvas < `u` && !!new OffscreenCanvas(1, 1).getContext(`2d`) && typeof createImageBitmap == `function`, d;
}
var p;
function m() {
  if (p == null && (p = false, f())) {
    let e53 = new OffscreenCanvas(5, 5).getContext(`2d`, { willReadFrequently: true });
    if (e53) {
      for (let t3 = 0; t3 < 25; t3++) {
        let n2 = t3 * 4;
        e53.fillStyle = `rgb(${n2},${n2 + 1},${n2 + 2})`, e53.fillRect(t3 % 5, Math.floor(t3 / 5), 1, 1);
      }
      let t2 = e53.getImageData(0, 0, 5, 5).data;
      for (let e54 = 0; e54 < 100; e54++) if (e54 % 4 != 3 && t2[e54] !== e54) {
        p = true;
        break;
      }
    }
  }
  return p || false;
}
var h = typeof Float32Array < `u` ? Float32Array : Array;
function g() {
  var e53 = new h(4);
  return h != Float32Array && (e53[0] = 0, e53[1] = 0, e53[2] = 0, e53[3] = 0), e53;
}
function _(e53, t2, n2) {
  var r2 = t2[0], i2 = t2[1], a2 = t2[2], o2 = t2[3];
  return e53[0] = n2[0] * r2 + n2[4] * i2 + n2[8] * a2 + n2[12] * o2, e53[1] = n2[1] * r2 + n2[5] * i2 + n2[9] * a2 + n2[13] * o2, e53[2] = n2[2] * r2 + n2[6] * i2 + n2[10] * a2 + n2[14] * o2, e53[3] = n2[3] * r2 + n2[7] * i2 + n2[11] * a2 + n2[15] * o2, e53;
}
(function() {
  var e53 = g();
  return function(t2, n2, r2, i2, a2, o2) {
    var s2, c2;
    for (n2 ||= 4, r2 ||= 0, c2 = i2 ? Math.min(i2 * n2 + r2, t2.length) : t2.length, s2 = r2; s2 < c2; s2 += n2) e53[0] = t2[s2], e53[1] = t2[s2 + 1], e53[2] = t2[s2 + 2], e53[3] = t2[s2 + 3], a2(e53, e53, o2), t2[s2] = e53[0], t2[s2 + 1] = e53[1], t2[s2 + 2] = e53[2], t2[s2 + 3] = e53[3];
    return t2;
  };
})();
var v = 8192;
function y(e53) {
  return e53 instanceof Error ? e53 : Error(typeof e53 == `string` ? e53 : String(e53));
}
function b(e53) {
  if (e53 <= 0) return 0;
  if (e53 >= 1) return 1;
  let t2 = e53 * e53, n2 = t2 * e53;
  return 4 * (e53 < 0.5 ? n2 : 3 * (e53 - t2) + n2 - 0.75);
}
function x(e53, t2, n2, r2) {
  return u(e53, t2, n2, r2);
}
x(0.25, 0.1, 0.25, 1);
function S(e53, t2, n2) {
  return Math.min(n2, Math.max(t2, e53));
}
function C(e53, t2, n2) {
  let r2 = n2 - t2, i2 = ((e53 - t2) % r2 + r2) % r2 + t2;
  return i2 === t2 ? n2 : i2;
}
function w(e53, ...t2) {
  for (let n2 of t2) for (let t3 in n2) e53[t3] = n2[t3];
  return e53;
}
function T(e53) {
  return Math.log(e53) / Math.LN2 % 1 == 0;
}
function E(e53, t2, n2) {
  let r2 = {};
  for (let i2 in e53) r2[i2] = t2.call(n2 || this, e53[i2], i2, e53);
  return r2;
}
function D(e53, t2, n2) {
  let r2 = {};
  for (let i2 in e53) t2.call(n2 || this, e53[i2], i2, e53) && (r2[i2] = e53[i2]);
  return r2;
}
function O(e53, t2) {
  if (Array.isArray(e53)) {
    if (!Array.isArray(t2) || e53.length !== t2.length) return false;
    for (let n2 = 0; n2 < e53.length; n2++) if (!O(e53[n2], t2[n2])) return false;
    return true;
  }
  if (typeof e53 == `object` && e53 && t2 !== null) {
    if (typeof t2 != `object` || Object.keys(e53).length !== Object.keys(t2).length) return false;
    for (let n2 in e53) if (!O(e53[n2], t2[n2])) return false;
    return true;
  }
  return e53 === t2;
}
function k(e53) {
  return Array.isArray(e53) ? e53.map(k) : typeof e53 == `object` && e53 ? E(e53, k) : e53;
}
var A = {};
function j(e53) {
  A[e53] || (typeof console < `u` && console.warn(e53), A[e53] = true);
}
function ee(e53, t2, n2) {
  return (n2.y - e53.y) * (t2.x - e53.x) > (t2.y - e53.y) * (n2.x - e53.x);
}
function te(e53) {
  return typeof WorkerGlobalScope < `u` && e53 !== void 0 && e53 instanceof WorkerGlobalScope;
}
function ne(e53) {
  return typeof ImageBitmap < `u` && e53 instanceof ImageBitmap;
}
function re(e53, t2, n2, r2, i2) {
  let a2 = Math.max(-t2, 0) * 4, o2 = (Math.max(0, n2) - n2) * r2 * 4 + a2, s2 = r2 * 4, c2 = Math.max(0, t2), l2 = Math.max(0, n2), u2 = Math.min(e53.width, t2 + r2), d2 = Math.min(e53.height, n2 + i2);
  return { rect: { x: c2, y: l2, width: u2 - c2, height: d2 - l2 }, layout: [{ offset: o2, stride: s2 }] };
}
async function ie(e53, t2, n2, r2, i2) {
  if (typeof VideoFrame > `u`) throw Error(`VideoFrame not supported`);
  let a2 = new VideoFrame(e53, { timestamp: 0 });
  try {
    let o2 = a2?.format;
    if (!o2 || !(o2.startsWith(`BGR`) || o2.startsWith(`RGB`))) throw Error(`Unrecognized format ${o2}`);
    let s2 = o2.startsWith(`BGR`), c2 = new Uint8ClampedArray(r2 * i2 * 4);
    if (await a2.copyTo(c2, re(e53, t2, n2, r2, i2)), s2) for (let e54 = 0; e54 < c2.length; e54 += 4) {
      let t3 = c2[e54];
      c2[e54] = c2[e54 + 2], c2[e54 + 2] = t3;
    }
    return c2;
  } finally {
    a2.close();
  }
}
var ae;
var oe;
function se(e53, t2, n2, r2, i2) {
  let a2 = e53.width, o2 = e53.height;
  (!ae || !oe) && (ae = new OffscreenCanvas(a2, o2), oe = ae.getContext(`2d`, { willReadFrequently: true })), ae.width = a2, ae.height = o2, oe.drawImage(e53, 0, 0, a2, o2);
  let s2 = oe.getImageData(t2, n2, r2, i2);
  return oe.clearRect(0, 0, a2, o2), s2.data;
}
async function ce(e53, t2, n2, r2, i2) {
  if (m()) try {
    return await ie(e53, t2, n2, r2, i2);
  } catch {
  }
  return se(e53, t2, n2, r2, i2);
}
function le(e53, t2, n2, r2) {
  return e53.addEventListener(t2, n2, r2), { unsubscribe: () => {
    e53.removeEventListener(t2, n2, r2);
  } };
}
function ue(e53) {
  return e53 * Math.PI / 180;
}
function de(e53, t2, n2) {
  n2[e53]?.includes(t2) || (n2[e53] ||= [], n2[e53].push(t2));
}
function fe(e53, t2, n2) {
  if (n2?.[e53]) {
    let r2 = n2[e53].indexOf(t2);
    r2 !== -1 && n2[e53].splice(r2, 1);
  }
}
var pe = class {
  constructor(e53, t2 = {}) {
    w(this, t2), this.type = e53;
  }
};
var me = class extends pe {
  constructor(e53, t2 = {}) {
    super(`error`, w({ error: e53 }, t2));
  }
};
var he = class {
  on(e53, t2) {
    return this._listeners ||= {}, de(e53, t2, this._listeners), { unsubscribe: () => {
      this.off(e53, t2);
    } };
  }
  off(e53, t2) {
    return fe(e53, t2, this._listeners), fe(e53, t2, this._oneTimeListeners), this;
  }
  once(e53, t2) {
    return t2 ? (this._oneTimeListeners ||= {}, de(e53, t2, this._oneTimeListeners), this) : new Promise((t3) => this.once(e53, t3));
  }
  fire(e53, t2) {
    let n2 = typeof e53 == `string` ? new pe(e53, t2 || {}) : e53, r2 = n2.type;
    if (this.listens(r2)) {
      n2.target = this;
      let e54 = this._listeners?.[r2]?.slice() ?? [];
      for (let t4 of e54) t4.call(this, n2);
      let t3 = this._oneTimeListeners?.[r2]?.slice() ?? [];
      for (let e55 of t3) fe(r2, e55, this._oneTimeListeners), e55.call(this, n2);
      let i2 = this._eventedParent;
      i2 && (w(n2, typeof this._eventedParentData == `function` ? this._eventedParentData() : this._eventedParentData), i2.fire(n2));
    } else n2 instanceof me && console.error(n2.error);
    return this;
  }
  listens(e53) {
    return !!(this._listeners?.[e53]?.length || this._oneTimeListeners?.[e53]?.length || this._eventedParent?.listens(e53));
  }
  setEventedParent(e53, t2) {
    return this._eventedParent = e53, this._eventedParentData = t2, this;
  }
};
var M = `AbortError`;
var ge = class extends Error {
  constructor(e53 = M) {
    super(e53 instanceof Error ? e53.message : e53), this.name = M, e53 instanceof Error && e53.stack && (this.stack = e53.stack);
  }
};
function _e(e53) {
  return e53 instanceof Error && e53.name === `AbortError`;
}
function ve(e53) {
  if (e53.aborted) throw new ge(e53.reason);
}
var ye = class e2 {
  constructor(e53, t2, n2) {
    let r2 = this.cells = [];
    if (e53 instanceof ArrayBuffer) {
      this.arrayBuffer = e53;
      let i3 = new Int32Array(this.arrayBuffer);
      e53 = i3[0], t2 = i3[1], n2 = i3[2], this.d = t2 + 2 * n2;
      for (let e54 = 0; e54 < this.d * this.d; e54++) {
        let t3 = i3[3 + e54], n3 = i3[3 + e54 + 1];
        r2.push(t3 === n3 ? null : i3.subarray(t3, n3));
      }
      let a2 = i3[3 + r2.length], o2 = i3[3 + r2.length + 1];
      this.keys = i3.subarray(a2, o2), this.bboxes = i3.subarray(o2), this.insert = this._insertReadonly;
    } else {
      this.d = t2 + 2 * n2;
      for (let e54 = 0; e54 < this.d * this.d; e54++) r2.push([]);
      this.keys = [], this.bboxes = [];
    }
    this.n = t2, this.extent = e53, this.padding = n2, this.scale = t2 / e53, this.uid = 0;
    let i2 = n2 / t2 * e53;
    this.min = -i2, this.max = e53 + i2;
  }
  insert(e53, t2, n2, r2, i2) {
    this._forEachCell(t2, n2, r2, i2, this._insertCell, this.uid++, void 0, void 0), this.keys.push(e53), this.bboxes.push(t2), this.bboxes.push(n2), this.bboxes.push(r2), this.bboxes.push(i2);
  }
  _insertReadonly() {
    throw Error(`Cannot insert into a GridIndex created from an ArrayBuffer.`);
  }
  _insertCell(e53, t2, n2, r2, i2, a2) {
    this.cells[i2].push(a2);
  }
  query(e53, t2, n2, r2, i2) {
    let a2 = this.min, o2 = this.max;
    if (e53 <= a2 && t2 <= a2 && o2 <= n2 && o2 <= r2 && !i2) return [...this.keys];
    {
      let a3 = [];
      return this._forEachCell(e53, t2, n2, r2, this._queryCell, a3, {}, i2), a3;
    }
  }
  _queryCell(e53, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = this.cells[i2];
    if (c2 !== null) {
      let i3 = this.keys, l2 = this.bboxes;
      for (let u2 of c2) if (o2[u2] === void 0) {
        let c3 = u2 * 4;
        (s2 ? s2(l2[c3 + 0], l2[c3 + 1], l2[c3 + 2], l2[c3 + 3]) : e53 <= l2[c3 + 2] && t2 <= l2[c3 + 3] && n2 >= l2[c3 + 0] && r2 >= l2[c3 + 1]) ? (o2[u2] = true, a2.push(i3[u2])) : o2[u2] = false;
      }
    }
  }
  _forEachCell(e53, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = this._convertToCellCoord(e53), l2 = this._convertToCellCoord(t2), u2 = this._convertToCellCoord(n2), d2 = this._convertToCellCoord(r2);
    for (let f2 = c2; f2 <= u2; f2++) for (let c3 = l2; c3 <= d2; c3++) {
      let l3 = this.d * c3 + f2;
      if ((!s2 || s2(this._convertFromCellCoord(f2), this._convertFromCellCoord(c3), this._convertFromCellCoord(f2 + 1), this._convertFromCellCoord(c3 + 1))) && i2.call(this, e53, t2, n2, r2, l3, a2, o2, s2)) return;
    }
  }
  _convertFromCellCoord(e53) {
    return (e53 - this.padding) / this.scale;
  }
  _convertToCellCoord(e53) {
    return Math.max(0, Math.min(this.d - 1, Math.floor(e53 * this.scale) + this.padding));
  }
  toArrayBuffer() {
    if (this.arrayBuffer) return this.arrayBuffer;
    let e53 = this.cells, t2 = 3 + this.cells.length + 1 + 1, n2 = 0;
    for (let e54 of this.cells) n2 += e54.length;
    let r2 = new Int32Array(t2 + n2 + this.keys.length + this.bboxes.length);
    r2[0] = this.extent, r2[1] = this.n, r2[2] = this.padding;
    let i2 = t2;
    for (let t3 = 0; t3 < e53.length; t3++) {
      let n3 = e53[t3];
      r2[3 + t3] = i2, r2.set(n3, i2), i2 += n3.length;
    }
    return r2[3 + e53.length] = i2, r2.set(this.keys, i2), i2 += this.keys.length, r2[3 + e53.length + 1] = i2, r2.set(this.bboxes, i2), i2 += this.bboxes.length, r2.buffer;
  }
  static serialize(e53, t2) {
    let n2 = e53.toArrayBuffer();
    return t2 && t2.push(n2), { buffer: n2 };
  }
  static deserialize(t2) {
    return new e2(t2.buffer);
  }
};
var be = { $version: 8, $root: { version: { required: true, type: `enum`, values: [8] }, name: { type: `string` }, metadata: { type: `*` }, center: { type: `array`, value: `number`, length: 2 }, centerAltitude: { type: `number` }, zoom: { type: `number` }, bearing: { type: `number`, default: 0, period: 360, units: `degrees` }, pitch: { type: `number`, default: 0, units: `degrees` }, roll: { type: `number`, default: 0, units: `degrees` }, state: { type: `state`, default: {} }, light: { type: `light` }, sky: { type: `sky` }, projection: { type: `projection` }, terrain: { type: `terrain` }, sources: { required: true, type: `sources` }, sprite: { type: `sprite` }, glyphs: { type: `string` }, "font-faces": { type: `fontFaces` }, transition: { type: `transition` }, layers: { required: true, type: `array`, value: `layer` } }, sources: { "*": { type: `source` } }, source: [`source_vector`, `source_raster`, `source_raster_dem`, `source_geojson`, `source_video`, `source_image`], source_vector: { type: { required: true, type: `enum`, values: { vector: {} } }, url: { type: `string` }, tiles: { type: `array`, value: `string` }, bounds: { type: `array`, value: `number`, length: 4, default: [-180, -85.051129, 180, 85.051129] }, scheme: { type: `enum`, values: { xyz: {}, tms: {} }, default: `xyz` }, minzoom: { type: `number`, default: 0 }, maxzoom: { type: `number`, default: 22 }, attribution: { type: `string` }, promoteId: { type: `promoteId` }, volatile: { type: `boolean`, default: false }, encoding: { type: `enum`, values: { mvt: {}, mlt: {} }, default: `mvt` }, "*": { type: `*` } }, source_raster: { type: { required: true, type: `enum`, values: { raster: {} } }, url: { type: `string` }, tiles: { type: `array`, value: `string` }, bounds: { type: `array`, value: `number`, length: 4, default: [-180, -85.051129, 180, 85.051129] }, minzoom: { type: `number`, default: 0 }, maxzoom: { type: `number`, default: 22 }, tileSize: { type: `number`, default: 512, units: `pixels` }, scheme: { type: `enum`, values: { xyz: {}, tms: {} }, default: `xyz` }, attribution: { type: `string` }, volatile: { type: `boolean`, default: false }, "*": { type: `*` } }, source_raster_dem: { type: { required: true, type: `enum`, values: { "raster-dem": {} } }, url: { type: `string` }, tiles: { type: `array`, value: `string` }, bounds: { type: `array`, value: `number`, length: 4, default: [-180, -85.051129, 180, 85.051129] }, minzoom: { type: `number`, default: 0 }, maxzoom: { type: `number`, default: 22 }, tileSize: { type: `number`, default: 512, units: `pixels` }, attribution: { type: `string` }, encoding: { type: `enum`, values: { terrarium: {}, mapbox: {}, custom: {} }, default: `mapbox` }, redFactor: { type: `number`, default: 1 }, blueFactor: { type: `number`, default: 1 }, greenFactor: { type: `number`, default: 1 }, baseShift: { type: `number`, default: 0 }, volatile: { type: `boolean`, default: false }, "*": { type: `*` } }, source_geojson: { type: { required: true, type: `enum`, values: { geojson: {} } }, data: { required: true, type: `*` }, maxzoom: { type: `number`, default: 18 }, attribution: { type: `string` }, buffer: { type: `number`, default: 128, maximum: 512, minimum: 0 }, filter: { type: `filter` }, tolerance: { type: `number`, default: 0.375 }, cluster: { type: `boolean`, default: false }, clusterRadius: { type: `number`, default: 50, minimum: 0 }, clusterMaxZoom: { type: `number` }, clusterMinPoints: { type: `number` }, clusterProperties: { type: `*` }, lineMetrics: { type: `boolean`, default: false }, generateId: { type: `boolean`, default: false }, promoteId: { type: `promoteId` } }, source_video: { type: { required: true, type: `enum`, values: { video: {} } }, urls: { required: true, type: `array`, value: `string` }, coordinates: { required: true, type: `array`, length: 4, value: { type: `array`, length: 2, value: `number` } } }, source_image: { type: { required: true, type: `enum`, values: { image: {} } }, url: { type: `string` }, coordinates: { required: true, type: `array`, length: 4, value: { type: `array`, length: 2, value: `number` } } }, layer: { id: { type: `string`, required: true }, type: { type: `enum`, values: { fill: {}, line: {}, symbol: {}, circle: {}, heatmap: {}, "fill-extrusion": {}, raster: {}, hillshade: {}, "color-relief": {}, background: {} }, required: true }, metadata: { type: `*` }, source: { type: `string` }, "source-layer": { type: `string` }, minzoom: { type: `number`, minimum: 0, maximum: 24 }, maxzoom: { type: `number`, minimum: 0, maximum: 24 }, filter: { type: `filter` }, layout: { type: `layout` }, paint: { type: `paint` } }, layout: [`layout_fill`, `layout_line`, `layout_circle`, `layout_heatmap`, `layout_fill-extrusion`, `layout_symbol`, `layout_raster`, `layout_hillshade`, `layout_color-relief`, `layout_background`], layout_background: { visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, layout_fill: { "fill-sort-key": { type: `number`, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, layout_circle: { "circle-sort-key": { type: `number`, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, layout_heatmap: { visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, "layout_fill-extrusion": { visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` }, "fill-extrusion-rounded-corner-distance": { type: `number`, default: 0, minimum: 0, units: `meters`, "property-type": `constant` } }, layout_line: { "line-cap": { type: `enum`, values: { butt: {}, round: {}, square: {} }, default: `butt`, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "line-join": { type: `enum`, values: { bevel: {}, round: {}, miter: {} }, default: `miter`, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "line-miter-limit": { type: `number`, default: 2, requires: [{ "line-join": `miter` }], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "line-round-limit": { type: `number`, default: 1.05, requires: [{ "line-join": `round` }], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "line-sort-key": { type: `number`, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, layout_symbol: { "symbol-placement": { type: `enum`, values: { point: {}, line: {}, "line-center": {} }, default: `point`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "symbol-spacing": { type: `number`, default: 250, minimum: 1, units: `pixels`, requires: [{ "symbol-placement": `line` }], expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "symbol-avoid-edges": { type: `boolean`, default: false, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "symbol-sort-key": { type: `number`, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "symbol-z-order": { type: `enum`, values: { auto: {}, "viewport-y": {}, source: {} }, default: `auto`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-allow-overlap": { type: `boolean`, default: false, requires: [`icon-image`, { "!": `icon-overlap` }], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-overlap": { type: `enum`, values: { never: {}, always: {}, cooperative: {} }, requires: [`icon-image`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-ignore-placement": { type: `boolean`, default: false, requires: [`icon-image`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-optional": { type: `boolean`, default: false, requires: [`icon-image`, `text-field`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-rotation-alignment": { type: `enum`, values: { map: {}, viewport: {}, auto: {} }, default: `auto`, requires: [`icon-image`], expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "icon-size": { type: `number`, default: 1, minimum: 0, units: `factor of the original icon size`, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "icon-text-fit": { type: `enum`, values: { none: {}, width: {}, height: {}, both: {} }, default: `none`, requires: [`icon-image`, `text-field`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-text-fit-padding": { type: `array`, value: `number`, length: 4, default: [0, 0, 0, 0], units: `pixels`, requires: [`icon-image`, `text-field`, { "icon-text-fit": [`both`, `width`, `height`] }], expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-image": { type: `resolvedImage`, tokens: true, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "icon-rotate": { type: `number`, default: 0, period: 360, units: `degrees`, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "icon-padding": { type: `padding`, default: [2], units: `pixels`, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "icon-keep-upright": { type: `boolean`, default: false, requires: [`icon-image`, { "icon-rotation-alignment": `map` }, { "symbol-placement": [`line`, `line-center`] }], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-offset": { type: `array`, value: `number`, length: 2, default: [0, 0], requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "icon-anchor": { type: `enum`, values: { center: {}, left: {}, right: {}, top: {}, bottom: {}, "top-left": {}, "top-right": {}, "bottom-left": {}, "bottom-right": {} }, default: `center`, requires: [`icon-image`], expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "icon-pitch-alignment": { type: `enum`, values: { map: {}, viewport: {}, auto: {} }, default: `auto`, requires: [`icon-image`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-pitch-alignment": { type: `enum`, values: { map: {}, viewport: {}, auto: {} }, default: `auto`, requires: [`text-field`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-rotation-alignment": { type: `enum`, values: { map: {}, viewport: {}, "viewport-glyph": {}, auto: {} }, default: `auto`, requires: [`text-field`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-field": { type: `formatted`, default: ``, tokens: true, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-font": { type: `array`, value: `string`, default: [`Open Sans Regular`, `Arial Unicode MS Regular`], requires: [`text-field`], expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-size": { type: `number`, default: 16, minimum: 0, units: `pixels`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-max-width": { type: `number`, default: 10, minimum: 0, units: `ems`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-line-height": { type: `number`, default: 1.2, units: `ems`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-letter-spacing": { type: `number`, default: 0, units: `ems`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-justify": { type: `enum`, values: { auto: {}, left: {}, center: {}, right: {} }, default: `center`, requires: [`text-field`], expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-radial-offset": { type: `number`, units: `ems`, default: 0, requires: [`text-field`], "property-type": `data-driven`, expression: { interpolated: true, parameters: [`zoom`, `feature`] } }, "text-variable-anchor": { type: `array`, value: `enum`, values: { center: {}, left: {}, right: {}, top: {}, bottom: {}, "top-left": {}, "top-right": {}, "bottom-left": {}, "bottom-right": {} }, requires: [`text-field`, { "symbol-placement": [`point`] }], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-variable-anchor-offset": { type: `variableAnchorOffsetCollection`, requires: [`text-field`, { "symbol-placement": [`point`] }], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-anchor": { type: `enum`, values: { center: {}, left: {}, right: {}, top: {}, bottom: {}, "top-left": {}, "top-right": {}, "bottom-left": {}, "bottom-right": {} }, default: `center`, requires: [`text-field`, { "!": `text-variable-anchor` }], expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-max-angle": { type: `number`, default: 45, units: `degrees`, requires: [`text-field`, { "symbol-placement": [`line`, `line-center`] }], expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-writing-mode": { type: `array`, value: `enum`, values: { horizontal: {}, vertical: {} }, requires: [`text-field`, { "symbol-placement": [`point`] }], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-rotate": { type: `number`, default: 0, period: 360, units: `degrees`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-padding": { type: `number`, default: 2, minimum: 0, units: `pixels`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-keep-upright": { type: `boolean`, default: true, requires: [`text-field`, { "text-rotation-alignment": `map` }, { "symbol-placement": [`line`, `line-center`] }], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-transform": { type: `enum`, values: { none: {}, uppercase: {}, lowercase: {} }, default: `none`, requires: [`text-field`], expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-offset": { type: `array`, value: `number`, units: `ems`, length: 2, default: [0, 0], requires: [`text-field`, { "!": `text-radial-offset` }], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "text-allow-overlap": { type: `boolean`, default: false, requires: [`text-field`, { "!": `text-overlap` }], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-overlap": { type: `enum`, values: { never: {}, always: {}, cooperative: {} }, requires: [`text-field`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-ignore-placement": { type: `boolean`, default: false, requires: [`text-field`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-optional": { type: `boolean`, default: false, requires: [`text-field`, `icon-image`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "symbol-height-offset": { type: `number`, default: 0, units: `meters`, requires: [{ "symbol-placement": [`point`] }], expression: { interpolated: true, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, "symbol-height-anchor": { type: `enum`, values: { ground: {}, absolute: {} }, default: `ground`, requires: [`symbol-height-offset`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, layout_raster: { visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, layout_hillshade: { visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, "layout_color-relief": { visibility: { type: `enum`, values: { visible: {}, none: {} }, default: `visible`, expression: { interpolated: false, parameters: [`global-state`] }, "property-type": `data-constant` } }, filter: { type: `boolean`, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `data-driven` }, filter_operator: { type: `enum`, values: { "==": {}, "!=": {}, ">": {}, ">=": {}, "<": {}, "<=": {}, in: {}, "!in": {}, all: {}, any: {}, none: {}, has: {}, "!has": {} } }, geometry_type: { type: `enum`, values: { Point: {}, LineString: {}, Polygon: {} } }, function: { expression: { type: `expression` }, stops: { type: `array`, value: `function_stop` }, base: { type: `number`, default: 1, minimum: 0 }, property: { type: `string`, default: `$zoom` }, type: { type: `enum`, values: { identity: {}, exponential: {}, interval: {}, categorical: {} }, default: `exponential` }, colorSpace: { type: `enum`, values: { rgb: {}, lab: {}, hcl: {} }, default: `rgb` }, default: { type: `*`, required: false } }, function_stop: { type: `array`, minimum: 0, maximum: 24, value: [`number`, `color`], length: 2 }, expression: { type: `array`, value: `expression_name`, minimum: 1 }, light: { anchor: { type: `enum`, default: `viewport`, values: { map: {}, viewport: {} }, "property-type": `data-constant`, transition: false, expression: { interpolated: false, parameters: [`zoom`] } }, position: { type: `array`, default: [1.15, 210, 30], length: 3, value: `number`, "property-type": `data-constant`, transition: true, expression: { interpolated: true, parameters: [`zoom`] } }, color: { type: `color`, "property-type": `data-constant`, default: `#ffffff`, expression: { interpolated: true, parameters: [`zoom`] }, transition: true }, intensity: { type: `number`, "property-type": `data-constant`, default: 0.5, minimum: 0, maximum: 1, expression: { interpolated: true, parameters: [`zoom`] }, transition: true } }, sky: { "sky-color": { type: `color`, "property-type": `data-constant`, default: `#88C6FC`, expression: { interpolated: true, parameters: [`zoom`] }, transition: true }, "horizon-color": { type: `color`, "property-type": `data-constant`, default: `#ffffff`, expression: { interpolated: true, parameters: [`zoom`] }, transition: true }, "fog-color": { type: `color`, "property-type": `data-constant`, default: `#ffffff`, expression: { interpolated: true, parameters: [`zoom`] }, transition: true }, "fog-ground-blend": { type: `number`, "property-type": `data-constant`, default: 0.5, minimum: 0, maximum: 1, expression: { interpolated: true, parameters: [`zoom`] }, transition: true }, "horizon-fog-blend": { type: `number`, "property-type": `data-constant`, default: 0.8, minimum: 0, maximum: 1, expression: { interpolated: true, parameters: [`zoom`] }, transition: true }, "sky-horizon-blend": { type: `number`, "property-type": `data-constant`, default: 0.8, minimum: 0, maximum: 1, expression: { interpolated: true, parameters: [`zoom`] }, transition: true }, "atmosphere-blend": { type: `number`, "property-type": `data-constant`, default: 0.8, minimum: 0, maximum: 1, expression: { interpolated: true, parameters: [`zoom`] }, transition: true } }, terrain: { source: { type: `string`, required: true }, exaggeration: { type: `number`, minimum: 0, default: 1 } }, projection: { type: { type: `projectionDefinition`, default: `mercator`, "property-type": `data-constant`, transition: false, expression: { interpolated: true, parameters: [`zoom`] } } }, paint: [`paint_fill`, `paint_line`, `paint_circle`, `paint_heatmap`, `paint_fill-extrusion`, `paint_symbol`, `paint_raster`, `paint_hillshade`, `paint_color-relief`, `paint_background`], paint_fill: { "fill-antialias": { type: `boolean`, default: true, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "fill-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "fill-layer-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`, `global-state`] }, "property-type": `data-constant` }, "fill-color": { type: `color`, default: `#000000`, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "fill-outline-color": { type: `color`, transition: true, requires: [{ "!": `fill-pattern` }, { "fill-antialias": true }], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "fill-translate": { type: `array`, value: `number`, length: 2, default: [0, 0], transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "fill-translate-anchor": { type: `enum`, values: { map: {}, viewport: {} }, default: `map`, requires: [`fill-translate`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "fill-pattern": { type: `resolvedImage`, transition: true, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `cross-faded-data-driven` } }, "paint_fill-extrusion": { "fill-extrusion-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "fill-extrusion-color": { type: `color`, default: `#000000`, transition: true, requires: [{ "!": `fill-extrusion-pattern` }], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "fill-extrusion-translate": { type: `array`, value: `number`, length: 2, default: [0, 0], transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "fill-extrusion-translate-anchor": { type: `enum`, values: { map: {}, viewport: {} }, default: `map`, requires: [`fill-extrusion-translate`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "fill-extrusion-pattern": { type: `resolvedImage`, transition: true, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `cross-faded-data-driven` }, "fill-extrusion-height": { type: `number`, default: 0, units: `meters`, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "fill-extrusion-base": { type: `number`, default: 0, units: `meters`, transition: true, requires: [`fill-extrusion-height`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "fill-extrusion-vertical-gradient": { type: `boolean`, default: true, transition: false, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` } }, paint_line: { "line-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "line-layer-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`, `global-state`] }, "property-type": `data-constant` }, "line-color": { type: `color`, default: `#000000`, transition: true, requires: [{ "!": `line-pattern` }], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "line-translate": { type: `array`, value: `number`, length: 2, default: [0, 0], transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "line-translate-anchor": { type: `enum`, values: { map: {}, viewport: {} }, default: `map`, requires: [`line-translate`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "line-width": { type: `number`, default: 1, minimum: 0, transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "line-gap-width": { type: `number`, default: 0, minimum: 0, transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "line-offset": { type: `number`, default: 0, transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "line-blur": { type: `number`, default: 0, minimum: 0, transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "line-dasharray": { type: `array`, value: `number`, minimum: 0, transition: true, units: `line widths`, requires: [{ "!": `line-pattern` }], expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `cross-faded-data-driven` }, "line-pattern": { type: `resolvedImage`, transition: true, expression: { interpolated: false, parameters: [`zoom`, `feature`] }, "property-type": `cross-faded-data-driven` }, "line-gradient": { type: `color`, transition: false, requires: [{ "!": `line-dasharray` }, { "!": `line-pattern` }, { source: `geojson`, has: { lineMetrics: true } }], expression: { interpolated: true, parameters: [`line-progress`] }, "property-type": `color-ramp` } }, paint_circle: { "circle-radius": { type: `number`, default: 5, minimum: 0, transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "circle-color": { type: `color`, default: `#000000`, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "circle-blur": { type: `number`, default: 0, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "circle-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "circle-translate": { type: `array`, value: `number`, length: 2, default: [0, 0], transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "circle-translate-anchor": { type: `enum`, values: { map: {}, viewport: {} }, default: `map`, requires: [`circle-translate`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "circle-pitch-scale": { type: `enum`, values: { map: {}, viewport: {} }, default: `map`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "circle-pitch-alignment": { type: `enum`, values: { map: {}, viewport: {} }, default: `viewport`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "circle-stroke-width": { type: `number`, default: 0, minimum: 0, transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "circle-stroke-color": { type: `color`, default: `#000000`, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "circle-stroke-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` } }, paint_heatmap: { "heatmap-radius": { type: `number`, default: 30, minimum: 1, transition: true, units: `pixels`, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "heatmap-weight": { type: `number`, default: 1, minimum: 0, transition: false, expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "heatmap-intensity": { type: `number`, default: 1, minimum: 0, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "heatmap-color": { type: `color`, default: [`interpolate`, [`linear`], [`heatmap-density`], 0, `rgba(0, 0, 255, 0)`, 0.1, `royalblue`, 0.3, `cyan`, 0.5, `lime`, 0.7, `yellow`, 1, `red`], transition: false, expression: { interpolated: true, parameters: [`heatmap-density`] }, "property-type": `color-ramp` }, "heatmap-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` } }, paint_symbol: { "icon-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "icon-color": { type: `color`, default: `#000000`, transition: true, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "icon-halo-color": { type: `color`, default: `rgba(0, 0, 0, 0)`, transition: true, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "icon-halo-width": { type: `number`, default: 0, minimum: 0, transition: true, units: `pixels`, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "icon-halo-blur": { type: `number`, default: 0, minimum: 0, transition: true, units: `pixels`, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "icon-translate": { type: `array`, value: `number`, length: 2, default: [0, 0], transition: true, units: `pixels`, requires: [`icon-image`], expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "icon-translate-anchor": { type: `enum`, values: { map: {}, viewport: {} }, default: `map`, requires: [`icon-image`, `icon-translate`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "text-color": { type: `color`, default: `#000000`, transition: true, overridable: true, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "text-halo-color": { type: `color`, default: `rgba(0, 0, 0, 0)`, transition: true, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "text-halo-width": { type: `number`, default: 0, minimum: 0, transition: true, units: `pixels`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "text-halo-blur": { type: `number`, default: 0, minimum: 0, transition: true, units: `pixels`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`, `feature`, `feature-state`] }, "property-type": `data-driven` }, "text-translate": { type: `array`, value: `number`, length: 2, default: [0, 0], transition: true, units: `pixels`, requires: [`text-field`], expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "text-translate-anchor": { type: `enum`, values: { map: {}, viewport: {} }, default: `map`, requires: [`text-field`, `text-translate`], expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` } }, paint_raster: { "raster-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "raster-hue-rotate": { type: `number`, default: 0, period: 360, transition: true, units: `degrees`, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "raster-brightness-min": { type: `number`, default: 0, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "raster-brightness-max": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "raster-saturation": { type: `number`, default: 0, minimum: -1, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "raster-contrast": { type: `number`, default: 0, minimum: -1, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, resampling: { type: `enum`, values: { linear: {}, nearest: {} }, default: `linear`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "raster-resampling": { type: `enum`, values: { linear: {}, nearest: {} }, default: `linear`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "raster-fade-duration": { type: `number`, default: 300, minimum: 0, transition: false, units: `milliseconds`, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` } }, paint_hillshade: { "hillshade-illumination-direction": { type: `numberArray`, default: 335, minimum: 0, maximum: 359, transition: false, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "hillshade-illumination-altitude": { type: `numberArray`, default: 45, minimum: 0, maximum: 90, transition: false, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "hillshade-illumination-anchor": { type: `enum`, values: { map: {}, viewport: {} }, default: `viewport`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, "hillshade-exaggeration": { type: `number`, default: 0.5, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "hillshade-shadow-color": { type: `colorArray`, default: `#000000`, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "hillshade-highlight-color": { type: `colorArray`, default: `#FFFFFF`, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "hillshade-accent-color": { type: `color`, default: `#000000`, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "hillshade-method": { type: `enum`, values: { standard: {}, basic: {}, combined: {}, igor: {}, multidirectional: {} }, default: `standard`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` }, resampling: { type: `enum`, values: { linear: {}, nearest: {} }, default: `linear`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` } }, "paint_color-relief": { "color-relief-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "color-relief-color": { type: `color`, transition: false, expression: { interpolated: true, parameters: [`elevation`] }, "property-type": `color-ramp` }, resampling: { type: `enum`, values: { linear: {}, nearest: {} }, default: `linear`, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `data-constant` } }, paint_background: { "background-color": { type: `color`, default: `#000000`, transition: true, requires: [{ "!": `background-pattern` }], expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` }, "background-pattern": { type: `resolvedImage`, transition: true, expression: { interpolated: false, parameters: [`zoom`] }, "property-type": `cross-faded` }, "background-opacity": { type: `number`, default: 1, minimum: 0, maximum: 1, transition: true, expression: { interpolated: true, parameters: [`zoom`] }, "property-type": `data-constant` } }, transition: { duration: { type: `number`, default: 300, minimum: 0, units: `milliseconds` }, delay: { type: `number`, default: 0, minimum: 0, units: `milliseconds` } }, "property-type": { "data-driven": { type: `property-type` }, "cross-faded": { type: `property-type` }, "cross-faded-data-driven": { type: `property-type` }, "color-ramp": { type: `property-type` }, "data-constant": { type: `property-type` }, constant: { type: `property-type` } }, promoteId: { "*": { type: `string` } }, interpolation: { type: `array`, value: `interpolation_name`, minimum: 1 }, interpolation_name: { type: `enum`, values: { linear: { syntax: { overloads: [{ parameters: [], "output-type": `interpolation` }], parameters: [] } }, exponential: { syntax: { overloads: [{ parameters: [`base`], "output-type": `interpolation` }], parameters: [{ name: `base`, type: `number literal` }] } }, "cubic-bezier": { syntax: { overloads: [{ parameters: [`x1`, `y1`, `x2`, `y2`], "output-type": `interpolation` }], parameters: [{ name: `x1`, type: `number literal` }, { name: `y1`, type: `number literal` }, { name: `x2`, type: `number literal` }, { name: `y2`, type: `number literal` }] } } } } };
var N = be;
var xe = [`type`, `source`, `source-layer`, `minzoom`, `maxzoom`, `filter`, `layout`];
var P = class {
  constructor(e53, t2, n2, r2, i2 = `error`) {
    this.message = (e53 ? `${e53}: ` : ``) + n2, r2 && (this.identifier = r2), this.severity = i2, t2 != null && t2.__line__ && (this.line = t2.__line__);
  }
};
var Se = { kind: `null` };
var F = { kind: `number` };
var I = { kind: `string` };
var L = { kind: `boolean` };
var Ce = { kind: `color` };
var we = { kind: `projectionDefinition` };
var Te = { kind: `object` };
var R = { kind: `value` };
var Ee = { kind: `error` };
var De = { kind: `collator` };
var Oe = { kind: `formatted` };
var ke = { kind: `padding` };
var Ae = { kind: `colorArray` };
var je = { kind: `numberArray` };
var Me = { kind: `resolvedImage` };
var Ne = { kind: `variableAnchorOffsetCollection` };
function Pe(e53, t2) {
  return { kind: `array`, itemType: e53, N: t2 };
}
function z(e53) {
  if (e53.kind === `array`) {
    let t2 = z(e53.itemType);
    return typeof e53.N == `number` ? `array<${t2}, ${e53.N}>` : e53.itemType.kind === `value` ? `array` : `array<${t2}>`;
  }
  return e53.kind;
}
var Fe = [Se, F, I, L, Ce, we, Oe, Te, Pe(R), ke, je, Ae, Me, Ne];
function Ie(e53, t2) {
  if (t2.kind === `error`) return null;
  if (e53.kind === `array`) {
    if (t2.kind === `array` && (t2.N === 0 && t2.itemType.kind === `value` || !Ie(e53.itemType, t2.itemType)) && (typeof e53.N != `number` || e53.N === t2.N)) return null;
  } else if (e53.kind === t2.kind) return null;
  else if (e53.kind === `value`) {
    for (let e54 of Fe) if (!Ie(e54, t2)) return null;
  }
  return `Expected ${z(e53)} but found ${z(t2)} instead.`;
}
function Le(e53, t2) {
  return t2.some((t3) => t3.kind === e53.kind);
}
function Re(e53, t2) {
  return t2.some((t3) => t3 === `null` ? e53 === null : t3 === `array` ? Array.isArray(e53) : t3 === `object` ? e53 && !Array.isArray(e53) && typeof e53 == `object` : t3 === typeof e53);
}
function ze(e53, t2) {
  return e53.kind === `array` && t2.kind === `array` ? e53.itemType.kind === t2.itemType.kind && typeof e53.N == `number` : e53.kind === t2.kind;
}
var Be = 0.96422;
var Ve = 0.82521;
var He = 4 / 29;
var Ue = 6 / 29;
var B = 3 * Ue * Ue;
var We = Math.PI / 180;
var Ge = 180 / Math.PI;
function Ke(e53) {
  return e53 %= 360, e53 < 0 && (e53 += 360), e53;
}
function qe([e53, t2, n2, r2]) {
  e53 = Je(e53), t2 = Je(t2), n2 = Je(n2);
  let i2, a2, o2 = Ye((0.2225045 * e53 + 0.7168786 * t2 + 0.0606169 * n2) / 1);
  e53 === t2 && t2 === n2 ? i2 = a2 = o2 : (i2 = Ye((0.4360747 * e53 + 0.3850649 * t2 + 0.1430804 * n2) / Be), a2 = Ye((0.0139322 * e53 + 0.0971045 * t2 + 0.7141733 * n2) / Ve));
  let s2 = 116 * o2 - 16;
  return [s2 < 0 ? 0 : s2, 500 * (i2 - o2), 200 * (o2 - a2), r2];
}
function Je(e53) {
  return e53 <= 0.04045 ? e53 / 12.92 : ((e53 + 0.055) / 1.055) ** 2.4;
}
function Ye(e53) {
  return e53 > 0.008856451679035631 ? e53 ** (1 / 3) : e53 / B + He;
}
function Xe([e53, t2, n2, r2]) {
  let i2 = (e53 + 16) / 116, a2 = isNaN(t2) ? i2 : i2 + t2 / 500, o2 = isNaN(n2) ? i2 : i2 - n2 / 200;
  return i2 = 1 * Qe(i2), a2 = Be * Qe(a2), o2 = Ve * Qe(o2), [Ze(3.1338561 * a2 - 1.6168667 * i2 - 0.4906146 * o2), Ze(-0.9787684 * a2 + 1.9161415 * i2 + 0.033454 * o2), Ze(0.0719453 * a2 - 0.2289914 * i2 + 1.4052427 * o2), r2];
}
function Ze(e53) {
  return e53 = e53 <= 304e-5 ? 12.92 * e53 : 1.055 * e53 ** (1 / 2.4) - 0.055, e53 < 0 ? 0 : e53 > 1 ? 1 : e53;
}
function Qe(e53) {
  return e53 > Ue ? e53 * e53 * e53 : B * (e53 - He);
}
function $e(e53) {
  let [t2, n2, r2, i2] = qe(e53), a2 = Math.sqrt(n2 * n2 + r2 * r2);
  return [Math.round(a2 * 1e4) ? Ke(Math.atan2(r2, n2) * Ge) : NaN, a2, t2, i2];
}
function et([e53, t2, n2, r2]) {
  return e53 = isNaN(e53) ? 0 : e53 * We, Xe([n2, Math.cos(e53) * t2, Math.sin(e53) * t2, r2]);
}
function tt([e53, t2, n2, r2]) {
  e53 = Ke(e53), t2 /= 100, n2 /= 100;
  function i2(r3) {
    let i3 = (r3 + e53 / 30) % 12, a2 = t2 * Math.min(n2, 1 - n2);
    return n2 - a2 * Math.max(-1, Math.min(i3 - 3, 9 - i3, 1));
  }
  return [i2(0), i2(8), i2(4), r2];
}
var nt = Object.hasOwn || function(e53, t2) {
  return Object.prototype.hasOwnProperty.call(e53, t2);
};
function rt(e53, t2) {
  return nt(e53, t2) ? e53[t2] : void 0;
}
function it(e53) {
  if (e53 = e53.toLowerCase().trim(), e53 === `transparent`) return [0, 0, 0, 0];
  let t2 = rt(lt, e53);
  if (t2) {
    let [e54, n3, r2] = t2;
    return [e54 / 255, n3 / 255, r2 / 255, 1];
  }
  if (e53.startsWith(`#`) && /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(e53)) {
    let t3 = e53.length < 6 ? 1 : 2, n3 = 1;
    return [at(e53.slice(n3, n3 += t3)), at(e53.slice(n3, n3 += t3)), at(e53.slice(n3, n3 += t3)), at(e53.slice(n3, n3 + t3) || `ff`)];
  }
  if (e53.startsWith(`rgb`)) {
    let t3 = e53.match(/^rgba?\(\s*([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/);
    if (t3) {
      let [e54, n3, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2] = t3, p2 = [i2 || ` `, s2 || ` `, u2].join(``);
      if (p2 === `  ` || p2 === `  /` || p2 === `,,` || p2 === `,,,`) {
        let e55 = [r2, o2, l2].join(``), t4 = e55 === `%%%` ? 100 : e55 === `` ? 255 : 0;
        if (t4) {
          let e56 = [st(+n3 / t4, 0, 1), st(+a2 / t4, 0, 1), st(+c2 / t4, 0, 1), d2 ? ot(+d2, f2) : 1];
          if (ct(e56)) return e56;
        }
      }
      return;
    }
  }
  let n2 = e53.match(/^hsla?\(\s*([\de.+-]+)(?:deg)?(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/);
  if (n2) {
    let [e54, t3, r2, i2, a2, o2, s2, c2, l2] = n2, u2 = [r2 || ` `, a2 || ` `, s2].join(``);
    if (u2 === `  ` || u2 === `  /` || u2 === `,,` || u2 === `,,,`) {
      let e55 = [+t3, st(+i2, 0, 100), st(+o2, 0, 100), c2 ? ot(+c2, l2) : 1];
      if (ct(e55)) return tt(e55);
    }
  }
}
function at(e53) {
  return parseInt(e53.padEnd(2, e53), 16) / 255;
}
function ot(e53, t2) {
  return st(t2 ? e53 / 100 : e53, 0, 1);
}
function st(e53, t2, n2) {
  return Math.min(Math.max(t2, e53), n2);
}
function ct(e53) {
  return !e53.some(Number.isNaN);
}
var lt = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
function ut(e53, t2, n2) {
  return e53 + n2 * (t2 - e53);
}
function dt(e53, t2, n2) {
  return e53.map((e54, r2) => ut(e54, t2[r2], n2));
}
function ft(e53) {
  return e53 === `rgb` || e53 === `hcl` || e53 === `lab`;
}
var V = class e3 {
  constructor(e53, t2, n2, r2 = 1, i2 = true) {
    this.r = e53, this.g = t2, this.b = n2, this.a = r2, i2 || (this.r *= r2, this.g *= r2, this.b *= r2, r2 || this.overwriteGetter(`rgb`, [e53, t2, n2, r2]));
  }
  static {
    this.black = new e3(0, 0, 0, 1);
  }
  static {
    this.white = new e3(1, 1, 1, 1);
  }
  static {
    this.transparent = new e3(0, 0, 0, 0);
  }
  static {
    this.red = new e3(1, 0, 0, 1);
  }
  static parse(t2) {
    if (t2 instanceof e3) return t2;
    if (typeof t2 != `string`) return;
    let n2 = it(t2);
    if (n2) return new e3(...n2, false);
  }
  get rgb() {
    let { r: e53, g: t2, b: n2, a: r2 } = this, i2 = r2 || 1 / 0;
    return this.overwriteGetter(`rgb`, [e53 / i2, t2 / i2, n2 / i2, r2]);
  }
  get hcl() {
    return this.overwriteGetter(`hcl`, $e(this.rgb));
  }
  get lab() {
    return this.overwriteGetter(`lab`, qe(this.rgb));
  }
  overwriteGetter(e53, t2) {
    return Object.defineProperty(this, e53, { value: t2 }), t2;
  }
  toString() {
    let [e53, t2, n2, r2] = this.rgb;
    return `rgba(${[e53, t2, n2].map((e54) => Math.round(e54 * 255)).join(`,`)},${r2})`;
  }
  static interpolate(t2, n2, r2, i2 = `rgb`) {
    switch (i2) {
      case `rgb`: {
        let [i3, a2, o2, s2] = dt(t2.rgb, n2.rgb, r2);
        return new e3(i3, a2, o2, s2, false);
      }
      case `hcl`: {
        let [i3, a2, o2, s2] = t2.hcl, [c2, l2, u2, d2] = n2.hcl, f2, p2;
        if (!isNaN(i3) && !isNaN(c2)) {
          let e53 = c2 - i3;
          c2 > i3 && e53 > 180 ? e53 -= 360 : c2 < i3 && i3 - c2 > 180 && (e53 += 360), f2 = i3 + r2 * e53;
        } else isNaN(i3) ? isNaN(c2) ? f2 = NaN : (f2 = c2, (o2 === 1 || o2 === 0) && (p2 = l2)) : (f2 = i3, (u2 === 1 || u2 === 0) && (p2 = a2));
        let [m2, h2, g2, _2] = et([f2, p2 ?? ut(a2, l2, r2), ut(o2, u2, r2), ut(s2, d2, r2)]);
        return new e3(m2, h2, g2, _2, false);
      }
      case `lab`: {
        let [i3, a2, o2, s2] = Xe(dt(t2.lab, n2.lab, r2));
        return new e3(i3, a2, o2, s2, false);
      }
    }
  }
};
var pt = [`bottom`, `center`, `top`];
var mt = class {
  constructor(e53, t2, n2, r2, i2, a2) {
    this.text = e53, this.image = t2, this.scale = n2, this.fontStack = r2, this.textColor = i2, this.verticalAlign = a2;
  }
};
var ht = class e4 {
  constructor(e53) {
    this.sections = e53;
  }
  static fromString(t2) {
    return new e4([new mt(t2, null, null, null, null, null)]);
  }
  isEmpty() {
    return this.sections.length === 0 || !this.sections.some((e53) => e53.text.length !== 0 || e53.image && e53.image.name.length !== 0);
  }
  static factory(t2) {
    return t2 instanceof e4 ? t2 : e4.fromString(t2);
  }
  toString() {
    return this.sections.length === 0 ? `` : this.sections.map((e53) => e53.text).join(``);
  }
};
var gt = class e5 {
  constructor(e53) {
    this.values = e53.slice();
  }
  static parse(t2) {
    if (t2 instanceof e5) return t2;
    if (typeof t2 == `number`) return new e5([t2, t2, t2, t2]);
    if (Array.isArray(t2) && !(t2.length < 1 || t2.length > 4)) {
      for (let e53 of t2) if (typeof e53 != `number`) return;
      switch (t2.length) {
        case 1:
          t2 = [t2[0], t2[0], t2[0], t2[0]];
          break;
        case 2:
          t2 = [t2[0], t2[1], t2[0], t2[1]];
          break;
        case 3:
          t2 = [t2[0], t2[1], t2[2], t2[1]];
      }
      return new e5(t2);
    }
  }
  toString() {
    return JSON.stringify(this.values);
  }
  static interpolate(t2, n2, r2) {
    return new e5(dt(t2.values, n2.values, r2));
  }
};
var _t = class e6 {
  constructor(e53) {
    this.values = e53.slice();
  }
  static parse(t2) {
    if (t2 instanceof e6) return t2;
    if (typeof t2 == `number`) return new e6([t2]);
    if (Array.isArray(t2)) {
      for (let e53 of t2) if (typeof e53 != `number`) return;
      return new e6(t2);
    }
  }
  toString() {
    return JSON.stringify(this.values);
  }
  static interpolate(t2, n2, r2) {
    return new e6(dt(t2.values, n2.values, r2));
  }
};
var vt = class e7 {
  constructor(e53) {
    this.values = e53.slice();
  }
  static parse(t2) {
    if (t2 instanceof e7) return t2;
    if (typeof t2 == `string`) {
      let n3 = V.parse(t2);
      return n3 ? new e7([n3]) : void 0;
    }
    if (!Array.isArray(t2)) return;
    let n2 = [];
    for (let e53 of t2) {
      if (typeof e53 != `string`) return;
      let t3 = V.parse(e53);
      if (!t3) return;
      n2.push(t3);
    }
    return new e7(n2);
  }
  toString() {
    return JSON.stringify(this.values);
  }
  static interpolate(t2, n2, r2, i2 = `rgb`) {
    let a2 = [];
    if (t2.values.length != n2.values.length) throw Error(`colorArray: Arrays have mismatched length (${t2.values.length} vs. ${n2.values.length}), cannot interpolate.`);
    for (let e53 = 0; e53 < t2.values.length; e53++) a2.push(V.interpolate(t2.values[e53], n2.values[e53], r2, i2));
    return new e7(a2);
  }
};
var H = class extends Error {
  constructor(e53, t2) {
    super(e53), this.name = `RuntimeError`, this.path = t2;
  }
  toJSON() {
    return this.message;
  }
};
var yt = /* @__PURE__ */ new Set([`center`, `left`, `right`, `top`, `bottom`, `top-left`, `top-right`, `bottom-left`, `bottom-right`]);
var bt = class e8 {
  constructor(e53) {
    this.values = e53.slice();
  }
  static parse(t2) {
    if (t2 instanceof e8) return t2;
    if (!(!Array.isArray(t2) || t2.length < 1 || t2.length % 2 != 0)) {
      for (let e53 = 0; e53 < t2.length; e53 += 2) {
        let n2 = t2[e53], r2 = t2[e53 + 1];
        if (typeof n2 != `string` || !yt.has(n2) || !Array.isArray(r2) || r2.length !== 2 || typeof r2[0] != `number` || typeof r2[1] != `number`) return;
      }
      return new e8(t2);
    }
  }
  toString() {
    return JSON.stringify(this.values);
  }
  static interpolate(t2, n2, r2, i2) {
    let a2 = t2.values, o2 = n2.values;
    if (a2.length !== o2.length) throw new H(`Cannot interpolate values of different length. from: ${t2.toString()}, to: ${n2.toString()}`, i2);
    let s2 = [];
    for (let e53 = 0; e53 < a2.length; e53 += 2) {
      if (a2[e53] !== o2[e53]) throw new H(`Cannot interpolate values containing mismatched anchors. from[${e53}]: ${a2[e53]}, to[${e53}]: ${o2[e53]}`, i2);
      s2.push(a2[e53]);
      let [t3, n3] = a2[e53 + 1], [c2, l2] = o2[e53 + 1];
      s2.push([ut(t3, c2, r2), ut(n3, l2, r2)]);
    }
    return new e8(s2);
  }
};
var xt = class e9 {
  constructor(e53) {
    this.name = e53.name, this.available = e53.available;
  }
  toString() {
    return this.name;
  }
  static fromString(t2) {
    return t2 ? new e9({ name: t2, available: false }) : null;
  }
};
var St = class e10 {
  constructor(e53, t2, n2) {
    this.from = e53, this.to = t2, this.transition = n2;
  }
  toString() {
    return this.from === this.to && this.transition === 1 ? this.from : JSON.stringify([this.from, this.to, this.transition]);
  }
  static interpolate(t2, n2, r2) {
    return new e10(t2, n2, r2);
  }
  static parse(t2) {
    if (t2 instanceof e10) return t2;
    if (Array.isArray(t2) && t2.length === 3 && typeof t2[0] == `string` && typeof t2[1] == `string` && typeof t2[2] == `number`) return new e10(t2[0], t2[1], t2[2]);
    if (typeof t2 == `object` && typeof t2.from == `string` && typeof t2.to == `string` && typeof t2.transition == `number`) return new e10(t2.from, t2.to, t2.transition);
    if (typeof t2 == `string`) return new e10(t2, t2, 1);
  }
};
var Ct = class {
  constructor(e53, t2, n2) {
    this.sensitivity = e53 ? t2 ? `variant` : `case` : t2 ? `accent` : `base`, this.locale = n2, this.collator = new Intl.Collator(this.locale ? this.locale : [], { sensitivity: this.sensitivity, usage: `search` });
  }
  compare(e53, t2) {
    return this.collator.compare(e53, t2);
  }
  resolvedLocale() {
    return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale;
  }
};
function wt(e53, t2, n2, r2) {
  return typeof e53 == `number` && e53 >= 0 && e53 <= 255 && typeof t2 == `number` && t2 >= 0 && t2 <= 255 && typeof n2 == `number` && n2 >= 0 && n2 <= 255 ? r2 === void 0 || typeof r2 == `number` && r2 >= 0 && r2 <= 1 ? null : `Invalid rgba value [${[e53, t2, n2, r2].join(`, `)}]: 'a' must be between 0 and 1.` : `Invalid rgba value [${(typeof r2 == `number` ? [e53, t2, n2, r2] : [e53, t2, n2]).join(`, `)}]: 'r', 'g', and 'b' must be between 0 and 255.`;
}
function Tt(e53) {
  if (e53 === null || typeof e53 == `string` || typeof e53 == `boolean` || typeof e53 == `number` || e53 instanceof St || e53 instanceof V || e53 instanceof Ct || e53 instanceof ht || e53 instanceof gt || e53 instanceof _t || e53 instanceof vt || e53 instanceof bt || e53 instanceof xt) return true;
  if (Array.isArray(e53)) {
    for (let t2 of e53) if (!Tt(t2)) return false;
    return true;
  }
  if (typeof e53 == `object`) {
    for (let t2 in e53) if (!Tt(e53[t2])) return false;
    return true;
  }
  return false;
}
function U(e53) {
  if (e53 === null) return Se;
  if (typeof e53 == `string`) return I;
  if (typeof e53 == `boolean`) return L;
  if (typeof e53 == `number`) return F;
  if (e53 instanceof V) return Ce;
  if (e53 instanceof St) return we;
  if (e53 instanceof Ct) return De;
  if (e53 instanceof ht) return Oe;
  if (e53 instanceof gt) return ke;
  if (e53 instanceof _t) return je;
  if (e53 instanceof vt) return Ae;
  if (e53 instanceof bt) return Ne;
  if (e53 instanceof xt) return Me;
  if (Array.isArray(e53)) {
    let t2 = e53.length, n2;
    for (let t3 of e53) {
      let e54 = U(t3);
      if (!n2) n2 = e54;
      else if (n2 === e54) continue;
      else {
        n2 = R;
        break;
      }
    }
    return Pe(n2 || R, t2);
  }
  return Te;
}
function Et(e53) {
  let t2 = typeof e53;
  return e53 === null ? `` : t2 === `string` || t2 === `number` || t2 === `boolean` ? String(e53) : e53 instanceof V || e53 instanceof St || e53 instanceof ht || e53 instanceof gt || e53 instanceof _t || e53 instanceof vt || e53 instanceof bt || e53 instanceof xt ? e53.toString() : JSON.stringify(e53);
}
var Dt = class e11 {
  constructor(e53, t2) {
    this.type = e53, this.value = t2;
  }
  static parse(t2, n2) {
    if (t2.length !== 2) return n2.error(`'literal' expression requires exactly one argument, but found ${t2.length - 1} instead.`);
    if (!Tt(t2[1])) return n2.error(`invalid value of type "${typeof t2[1]}"`);
    let r2 = t2[1], i2 = U(r2), a2 = n2.expectedType;
    return i2.kind === `array` && i2.N === 0 && a2 && a2.kind === `array` && (typeof a2.N != `number` || a2.N === 0) && (i2 = a2), new e11(i2, r2);
  }
  evaluate() {
    return this.value;
  }
  eachChild() {
  }
  outputDefined() {
    return true;
  }
};
var Ot = [`Unknown`, `Point`, `LineString`, `Polygon`];
var kt = class {
  constructor() {
    this.globals = null, this.feature = null, this.featureState = null, this.formattedSection = null, this._parseColorCache = /* @__PURE__ */ new Map(), this.availableImages = null, this.canonical = null;
  }
  id() {
    return this.feature && `id` in this.feature ? this.feature.id : null;
  }
  geometryType() {
    return this.feature ? typeof this.feature.type == `number` ? Ot[this.feature.type] : this.feature.type : null;
  }
  geometry() {
    return this.feature && `geometry` in this.feature ? this.feature.geometry : null;
  }
  canonicalID() {
    return this.canonical;
  }
  properties() {
    return this.feature && this.feature.properties || {};
  }
  parseColor(e53) {
    let t2 = this._parseColorCache.get(e53);
    return t2 || (t2 = V.parse(e53), this._parseColorCache.set(e53, t2)), t2;
  }
};
function At(e53, t2, n2) {
  let r2 = e53.length - 1, i2 = 0, a2 = r2, o2 = 0, s2, c2;
  for (; i2 <= a2; ) if (o2 = Math.floor((i2 + a2) / 2), s2 = e53[o2], c2 = e53[o2 + 1], s2 <= t2) {
    if (o2 === r2 || t2 < c2) return o2;
    i2 = o2 + 1;
  } else if (s2 > t2) a2 = o2 - 1;
  else throw new H(`Input is not a number.`, n2);
  return 0;
}
var jt = class e12 {
  constructor(e53, t2, n2, r2) {
    this.type = e53, this.input = t2, this.key = r2, this.labels = [], this.outputs = [];
    for (let [e54, t3] of n2) this.labels.push(e54), this.outputs.push(t3);
  }
  static parse(t2, n2) {
    if (t2.length - 1 < 4) return n2.error(`Expected at least 4 arguments, but found only ${t2.length - 1}.`);
    if ((t2.length - 1) % 2 != 0) return n2.error(`Expected an even number of arguments.`);
    let r2 = n2.parse(t2[1], 1, F);
    if (!r2) return null;
    let i2 = [], a2 = null;
    n2.expectedType && n2.expectedType.kind !== `value` && (a2 = n2.expectedType);
    for (let e53 = 1; e53 < t2.length; e53 += 2) {
      let r3 = e53 === 1 ? -1 / 0 : t2[e53], o2 = t2[e53 + 1], s2 = e53, c2 = e53 + 1;
      if (typeof r3 != `number`) return n2.error(`Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.`, s2);
      if (i2.length && i2[i2.length - 1][0] >= r3) return n2.error(`Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.`, s2);
      let l2 = n2.parse(o2, c2, a2);
      if (!l2) return null;
      a2 ||= l2.type, i2.push([r3, l2]);
    }
    return new e12(a2, r2, i2, n2.key);
  }
  evaluate(e53) {
    let t2 = this.labels, n2 = this.outputs;
    if (t2.length === 1) return n2[0].evaluate(e53);
    let r2 = this.input.evaluate(e53);
    if (r2 <= t2[0]) return n2[0].evaluate(e53);
    let i2 = t2.length;
    return r2 >= t2[i2 - 1] ? n2[i2 - 1].evaluate(e53) : n2[At(t2, r2, this.key)].evaluate(e53);
  }
  eachChild(e53) {
    e53(this.input);
    for (let t2 of this.outputs) e53(t2);
  }
  outputDefined() {
    return this.outputs.every((e53) => e53.outputDefined());
  }
};
function Mt(e53, t2, n2, r2) {
  let i2 = 3 * e53, a2 = 3 * (n2 - e53) - i2, o2 = 1 - i2 - a2, s2 = 3 * t2, c2 = 3 * (r2 - t2) - s2, l2 = 1 - s2 - c2;
  return function(e54, t3 = 1e-6) {
    if (e54 <= 0) return 0;
    if (e54 >= 1) return 1;
    let n3 = e54;
    for (let r4 = 0; r4 < 8; r4++) {
      let r5 = ((o2 * n3 + a2) * n3 + i2) * n3 - e54;
      if (Math.abs(r5) < t3) return ((l2 * n3 + c2) * n3 + s2) * n3;
      let u3 = (3 * o2 * n3 + 2 * a2) * n3 + i2;
      if (Math.abs(u3) < 1e-6) break;
      n3 -= r5 / u3;
    }
    let r3 = 0, u2 = 1;
    n3 = e54;
    for (let s3 = 0; s3 < 20; s3++) {
      let s4 = ((o2 * n3 + a2) * n3 + i2) * n3;
      if (Math.abs(s4 - e54) < t3) break;
      e54 > s4 ? r3 = n3 : u2 = n3, n3 = (r3 + u2) * 0.5;
    }
    return ((l2 * n3 + c2) * n3 + s2) * n3;
  };
}
var Nt = class e13 {
  constructor(e53, t2, n2, r2, i2, a2) {
    this.type = e53, this.operator = t2, this.interpolation = n2, this.input = r2, this.key = a2, this.labels = [], this.outputs = [];
    for (let [e54, t3] of i2) this.labels.push(e54), this.outputs.push(t3);
  }
  static interpolationFactor(e53, t2, n2, r2) {
    let i2 = 0;
    if (e53.name === `exponential`) i2 = Pt(t2, e53.base, n2, r2);
    else if (e53.name === `linear`) i2 = Pt(t2, 1, n2, r2);
    else if (e53.name === `cubic-bezier`) {
      let a2 = e53.controlPoints;
      i2 = Mt(a2[0], a2[1], a2[2], a2[3])(Pt(t2, 1, n2, r2));
    }
    return i2;
  }
  static parse(t2, n2) {
    let [r2, i2, a2, ...o2] = t2;
    if (!Array.isArray(i2) || i2.length === 0) return n2.error(`Expected an interpolation type expression.`, 1);
    if (i2[0] === `linear`) i2 = { name: `linear` };
    else if (i2[0] === `exponential`) {
      let e53 = i2[1];
      if (typeof e53 != `number`) return n2.error(`Exponential interpolation requires a numeric base.`, 1, 1);
      i2 = { name: `exponential`, base: e53 };
    } else if (i2[0] === `cubic-bezier`) {
      let e53 = i2.slice(1);
      if (e53.length !== 4 || e53.some((e54) => typeof e54 != `number` || e54 < 0 || e54 > 1)) return n2.error(`Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.`, 1);
      i2 = { name: `cubic-bezier`, controlPoints: e53 };
    } else return n2.error(`Unknown interpolation type ${String(i2[0])}`, 1, 0);
    if (t2.length - 1 < 4) return n2.error(`Expected at least 4 arguments, but found only ${t2.length - 1}.`);
    if ((t2.length - 1) % 2 != 0) return n2.error(`Expected an even number of arguments.`);
    if (a2 = n2.parse(a2, 2, F), !a2) return null;
    let s2 = [], c2 = null;
    (r2 === `interpolate-hcl` || r2 === `interpolate-lab`) && n2.expectedType != Ae ? c2 = Ce : n2.expectedType && n2.expectedType.kind !== `value` && (c2 = n2.expectedType);
    for (let e53 = 0; e53 < o2.length; e53 += 2) {
      let t3 = o2[e53], r3 = o2[e53 + 1], i3 = e53 + 3, a3 = e53 + 4;
      if (typeof t3 != `number`) return n2.error(`Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.`, i3);
      if (s2.length && s2[s2.length - 1][0] >= t3) return n2.error(`Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.`, i3);
      let l2 = n2.parse(r3, a3, c2);
      if (!l2) return null;
      c2 ||= l2.type, s2.push([t3, l2]);
    }
    return !ze(c2, F) && !ze(c2, we) && !ze(c2, Ce) && !ze(c2, ke) && !ze(c2, je) && !ze(c2, Ae) && !ze(c2, Ne) && !ze(c2, Pe(F)) ? n2.error(`Type ${z(c2)} is not interpolatable.`) : new e13(c2, r2, i2, a2, s2, n2.key);
  }
  evaluate(t2) {
    let n2 = this.labels, r2 = this.outputs;
    if (n2.length === 1) return r2[0].evaluate(t2);
    let i2 = this.input.evaluate(t2);
    if (i2 <= n2[0]) return r2[0].evaluate(t2);
    let a2 = n2.length;
    if (i2 >= n2[a2 - 1]) return r2[a2 - 1].evaluate(t2);
    let o2 = At(n2, i2, this.key), s2 = n2[o2], c2 = n2[o2 + 1], l2 = e13.interpolationFactor(this.interpolation, i2, s2, c2), u2 = r2[o2].evaluate(t2), d2 = r2[o2 + 1].evaluate(t2);
    switch (this.operator) {
      case `interpolate`:
        switch (this.type.kind) {
          case `number`:
            return ut(u2, d2, l2);
          case `color`:
            return V.interpolate(u2, d2, l2);
          case `padding`:
            return gt.interpolate(u2, d2, l2);
          case `colorArray`:
            return vt.interpolate(u2, d2, l2);
          case `numberArray`:
            return _t.interpolate(u2, d2, l2);
          case `variableAnchorOffsetCollection`:
            return bt.interpolate(u2, d2, l2, this.key);
          case `array`:
            return dt(u2, d2, l2);
          case `projectionDefinition`:
            return St.interpolate(u2, d2, l2);
        }
      case `interpolate-hcl`:
        switch (this.type.kind) {
          case `color`:
            return V.interpolate(u2, d2, l2, `hcl`);
          case `colorArray`:
            return vt.interpolate(u2, d2, l2, `hcl`);
        }
      case `interpolate-lab`:
        switch (this.type.kind) {
          case `color`:
            return V.interpolate(u2, d2, l2, `lab`);
          case `colorArray`:
            return vt.interpolate(u2, d2, l2, `lab`);
        }
    }
  }
  eachChild(e53) {
    e53(this.input);
    for (let t2 of this.outputs) e53(t2);
  }
  outputDefined() {
    return this.outputs.every((e53) => e53.outputDefined());
  }
};
function Pt(e53, t2, n2, r2) {
  let i2 = r2 - n2, a2 = e53 - n2;
  return i2 === 0 ? 0 : t2 === 1 ? a2 / i2 : (t2 ** +a2 - 1) / (t2 ** +i2 - 1);
}
var Ft = { color: V.interpolate, number: ut, padding: gt.interpolate, numberArray: _t.interpolate, colorArray: vt.interpolate, variableAnchorOffsetCollection: bt.interpolate, array: dt };
var It = class e14 {
  constructor(e53) {
    this.type = Oe, this.sections = e53;
  }
  static parse(t2, n2) {
    if (t2.length < 2) return n2.error(`Expected at least one argument.`);
    let r2 = t2[1];
    if (!Array.isArray(r2) && typeof r2 == `object`) return n2.error(`First argument must be an image or text section.`);
    let i2 = [], a2 = false;
    for (let e53 = 1; e53 <= t2.length - 1; ++e53) {
      let r3 = t2[e53];
      if (a2 && typeof r3 == `object` && !Array.isArray(r3)) {
        a2 = false;
        let e54 = null;
        if (r3[`font-scale`] && (e54 = n2.parse(r3[`font-scale`], 1, F), !e54)) return null;
        let t3 = null;
        if (r3[`text-font`] && (t3 = n2.parse(r3[`text-font`], 1, Pe(I)), !t3)) return null;
        let o2 = null;
        if (r3[`text-color`] && (o2 = n2.parse(r3[`text-color`], 1, Ce), !o2)) return null;
        let s2 = null;
        if (r3[`vertical-align`]) {
          if (typeof r3[`vertical-align`] == `string` && !pt.includes(r3[`vertical-align`])) return n2.error(`'vertical-align' must be one of: 'bottom', 'center', 'top' but found '${r3[`vertical-align`]}' instead.`);
          if (s2 = n2.parse(r3[`vertical-align`], 1, I), !s2) return null;
        }
        let c2 = i2[i2.length - 1];
        c2.scale = e54, c2.font = t3, c2.textColor = o2, c2.verticalAlign = s2;
      } else {
        let r4 = n2.parse(t2[e53], 1, R);
        if (!r4) return null;
        let o2 = r4.type.kind;
        if (o2 !== `string` && o2 !== `value` && o2 !== `null` && o2 !== `resolvedImage`) return n2.error(`Formatted text type must be 'string', 'value', 'image' or 'null'.`);
        a2 = true, i2.push({ content: r4, scale: null, font: null, textColor: null, verticalAlign: null });
      }
    }
    return new e14(i2);
  }
  evaluate(e53) {
    return new ht(this.sections.map((t2) => {
      let n2 = t2.content.evaluate(e53);
      return U(n2) === Me ? new mt(``, n2, null, null, null, t2.verticalAlign ? t2.verticalAlign.evaluate(e53) : null) : new mt(Et(n2), null, t2.scale ? t2.scale.evaluate(e53) : null, t2.font ? t2.font.evaluate(e53).join(`,`) : null, t2.textColor ? t2.textColor.evaluate(e53) : null, t2.verticalAlign ? t2.verticalAlign.evaluate(e53) : null);
    }));
  }
  eachChild(e53) {
    for (let t2 of this.sections) e53(t2.content), t2.scale && e53(t2.scale), t2.font && e53(t2.font), t2.textColor && e53(t2.textColor), t2.verticalAlign && e53(t2.verticalAlign);
  }
  outputDefined() {
    return false;
  }
};
function Lt(e53, t2, n2 = 0, r2 = e53.length - 1, i2 = zt) {
  for (; r2 > n2; ) {
    if (r2 - n2 > 600) {
      let a3 = r2 - n2 + 1, o3 = t2 - n2 + 1, s3 = Math.log(a3), c2 = 0.5 * Math.exp(2 * s3 / 3), l2 = 0.5 * Math.sqrt(s3 * c2 * (a3 - c2) / a3) * (o3 - a3 / 2 < 0 ? -1 : 1);
      Lt(e53, t2, Math.max(n2, Math.floor(t2 - o3 * c2 / a3 + l2)), Math.min(r2, Math.floor(t2 + (a3 - o3) * c2 / a3 + l2)), i2);
    }
    let a2 = e53[t2], o2 = n2, s2 = r2;
    for (Rt(e53, n2, t2), i2(e53[r2], a2) > 0 && Rt(e53, n2, r2); o2 < s2; ) {
      for (Rt(e53, o2, s2), o2++, s2--; i2(e53[o2], a2) < 0; ) o2++;
      for (; i2(e53[s2], a2) > 0; ) s2--;
    }
    i2(e53[n2], a2) === 0 ? Rt(e53, n2, s2) : (s2++, Rt(e53, s2, r2)), s2 <= t2 && (n2 = s2 + 1), t2 <= s2 && (r2 = s2 - 1);
  }
}
function Rt(e53, t2, n2) {
  let r2 = e53[t2];
  e53[t2] = e53[n2], e53[n2] = r2;
}
function zt(e53, t2) {
  return e53 < t2 ? -1 : +(e53 > t2);
}
function Bt(e53, t2) {
  if (e53.length <= 1) return [e53];
  let n2 = [], r2, i2;
  for (let t3 of e53) {
    let e54 = Ht(t3);
    e54 !== 0 && (t3.area = Math.abs(e54), i2 === void 0 && (i2 = e54 < 0), i2 === e54 < 0 ? (r2 && n2.push(r2), r2 = [t3]) : r2.push(t3));
  }
  if (r2 && n2.push(r2), t2 > 1) for (let e54 = 0; e54 < n2.length; e54++) n2[e54].length <= t2 || (Lt(n2[e54], t2, 1, n2[e54].length - 1, Vt), n2[e54] = n2[e54].slice(0, t2));
  return n2;
}
function Vt(e53, t2) {
  return t2.area - e53.area;
}
function Ht(e53) {
  let t2 = 0;
  for (let n2 = 0, r2 = e53.length, i2 = r2 - 1, a2, o2; n2 < r2; i2 = n2++) a2 = e53[n2], o2 = e53[i2], t2 += (o2.x - a2.x) * (a2.y + o2.y);
  return t2;
}
var Ut = { string: I, number: F, boolean: L, object: Te };
var Wt = class e15 {
  constructor(e53, t2, n2) {
    this.type = e53, this.args = t2, this.key = n2;
  }
  static parse(t2, n2) {
    if (t2.length < 2) return n2.error(`Expected at least one argument.`);
    let r2 = 1, i2, a2 = t2[0];
    if (a2 === `array`) {
      let e53;
      if (t2.length > 2) {
        let i3 = t2[1];
        if (typeof i3 != `string` || !(i3 in Ut) || i3 === `object`) return n2.error(`The item type argument of "array" must be one of string, number, boolean`, 1);
        e53 = Ut[i3], r2++;
      } else e53 = R;
      let a3;
      if (t2.length > 3) {
        if (t2[2] !== null && (typeof t2[2] != `number` || t2[2] < 0 || t2[2] !== Math.floor(t2[2]))) return n2.error(`The length argument to "array" must be a positive integer literal`, 2);
        a3 = t2[2], r2++;
      }
      i2 = Pe(e53, a3);
    } else {
      if (!Ut[a2]) throw Error(`Types doesn't contain name = ${a2}`);
      i2 = Ut[a2];
    }
    let o2 = [];
    for (; r2 < t2.length; r2++) {
      let e53 = n2.parse(t2[r2], r2, R);
      if (!e53) return null;
      o2.push(e53);
    }
    return new e15(i2, o2, n2.key);
  }
  evaluate(e53) {
    for (let t2 = 0; t2 < this.args.length; t2++) {
      let n2 = this.args[t2].evaluate(e53);
      if (!Ie(this.type, U(n2))) return n2;
      if (t2 === this.args.length - 1) throw new H(`Expected value to be of type ${z(this.type)}, but found ${z(U(n2))} instead.`, this.key);
    }
    throw Error();
  }
  eachChild(e53) {
    this.args.forEach(e53);
  }
  outputDefined() {
    return this.args.every((e53) => e53.outputDefined());
  }
};
var Gt = { "to-boolean": L, "to-color": Ce, "to-number": F, "to-string": I };
var Kt = class e16 {
  constructor(e53, t2, n2) {
    this.type = e53, this.args = t2, this.key = n2;
  }
  static parse(t2, n2) {
    if (t2.length < 2) return n2.error(`Expected at least one argument.`);
    let r2 = t2[0];
    if (!Gt[r2]) throw Error(`Can't parse ${r2} as it is not part of the known types`);
    if ((r2 === `to-boolean` || r2 === `to-string`) && t2.length !== 2) return n2.error(`Expected one argument.`);
    let i2 = Gt[r2], a2 = [];
    for (let e53 = 1; e53 < t2.length; e53++) {
      let r3 = n2.parse(t2[e53], e53, R);
      if (!r3) return null;
      a2.push(r3);
    }
    return new e16(i2, a2, n2.key);
  }
  evaluate(e53) {
    switch (this.type.kind) {
      case `boolean`:
        return !!this.args[0].evaluate(e53);
      case `color`: {
        let t2, n2;
        for (let r2 of this.args) {
          if (t2 = r2.evaluate(e53), n2 = null, t2 instanceof V) return t2;
          if (typeof t2 == `string`) {
            let n3 = e53.parseColor(t2);
            if (n3) return n3;
          } else if (Array.isArray(t2) && (n2 = t2.length < 3 || t2.length > 4 ? `Invalid rgba value ${JSON.stringify(t2)}: expected an array containing either three or four numeric values.` : wt(t2[0], t2[1], t2[2], t2[3]), !n2)) return new V(t2[0] / 255, t2[1] / 255, t2[2] / 255, t2[3]);
        }
        throw new H(n2 || `Could not parse color from value '${typeof t2 == `string` ? t2 : JSON.stringify(t2)}'`, this.key);
      }
      case `padding`: {
        let t2;
        for (let n2 of this.args) {
          t2 = n2.evaluate(e53);
          let r2 = gt.parse(t2);
          if (r2) return r2;
        }
        throw new H(`Could not parse padding from value '${typeof t2 == `string` ? t2 : JSON.stringify(t2)}'`, this.key);
      }
      case `numberArray`: {
        let t2;
        for (let n2 of this.args) {
          t2 = n2.evaluate(e53);
          let r2 = _t.parse(t2);
          if (r2) return r2;
        }
        throw new H(`Could not parse numberArray from value '${typeof t2 == `string` ? t2 : JSON.stringify(t2)}'`, this.key);
      }
      case `colorArray`: {
        let t2;
        for (let n2 of this.args) {
          t2 = n2.evaluate(e53);
          let r2 = vt.parse(t2);
          if (r2) return r2;
        }
        throw new H(`Could not parse colorArray from value '${typeof t2 == `string` ? t2 : JSON.stringify(t2)}'`, this.key);
      }
      case `variableAnchorOffsetCollection`: {
        let t2;
        for (let n2 of this.args) {
          t2 = n2.evaluate(e53);
          let r2 = bt.parse(t2);
          if (r2) return r2;
        }
        throw new H(`Could not parse variableAnchorOffsetCollection from value '${typeof t2 == `string` ? t2 : JSON.stringify(t2)}'`, this.key);
      }
      case `number`: {
        let t2 = null;
        for (let n2 of this.args) {
          if (t2 = n2.evaluate(e53), t2 === null) return 0;
          let r2 = Number(t2);
          if (!isNaN(r2)) return r2;
        }
        throw new H(`Could not convert ${JSON.stringify(t2)} to number.`, this.key);
      }
      case `formatted`:
        return ht.fromString(Et(this.args[0].evaluate(e53)));
      case `resolvedImage`:
        return xt.fromString(Et(this.args[0].evaluate(e53)));
      case `projectionDefinition`: {
        let t2 = this.args[0].evaluate(e53);
        if (St.parse(t2)) return t2;
        throw new H(`Could not parse projectionDefinition from value '${typeof t2 == `string` ? t2 : JSON.stringify(t2)}'`, this.key);
      }
      default:
        return Et(this.args[0].evaluate(e53));
    }
  }
  eachChild(e53) {
    this.args.forEach(e53);
  }
  outputDefined() {
    return this.args.every((e53) => e53.outputDefined());
  }
};
var qt = class e17 {
  constructor(e53, t2) {
    this.type = t2.type, this.bindings = [].concat(e53), this.result = t2;
  }
  evaluate(e53) {
    return this.result.evaluate(e53);
  }
  eachChild(e53) {
    for (let t2 of this.bindings) e53(t2[1]);
    e53(this.result);
  }
  static parse(t2, n2) {
    if (t2.length < 4) return n2.error(`Expected at least 3 arguments, but found ${t2.length - 1} instead.`);
    let r2 = [];
    for (let e53 = 1; e53 < t2.length - 1; e53 += 2) {
      let i3 = t2[e53];
      if (typeof i3 != `string`) return n2.error(`Expected string, but found ${typeof i3} instead.`, e53);
      if (/[^a-zA-Z0-9_]/.test(i3)) return n2.error(`Variable names must contain only alphanumeric characters or '_'.`, e53);
      let a2 = n2.parse(t2[e53 + 1], e53 + 1);
      if (!a2) return null;
      r2.push([i3, a2]);
    }
    let i2 = n2.parse(t2[t2.length - 1], t2.length - 1, n2.expectedType, r2);
    return i2 ? new e17(r2, i2) : null;
  }
  outputDefined() {
    return this.result.outputDefined();
  }
};
var Jt = class e18 {
  constructor(e53, t2) {
    this.type = t2.type, this.name = e53, this.boundExpression = t2;
  }
  static parse(t2, n2) {
    if (t2.length !== 2 || typeof t2[1] != `string`) return n2.error(`'var' expression requires exactly one string literal argument.`);
    let r2 = t2[1];
    return n2.scope.has(r2) ? new e18(r2, n2.scope.get(r2)) : n2.error(`Unknown variable "${r2}". Make sure "${r2}" has been bound in an enclosing "let" expression before using it.`, 1);
  }
  evaluate(e53) {
    return this.boundExpression.evaluate(e53);
  }
  eachChild() {
  }
  outputDefined() {
    return false;
  }
};
var Yt = class e19 {
  constructor(e53, t2, n2, r2) {
    this.type = e53, this.index = t2, this.input = n2, this.key = r2;
  }
  static parse(t2, n2) {
    if (t2.length !== 3) return n2.error(`Expected 2 arguments, but found ${t2.length - 1} instead.`);
    let r2 = n2.parse(t2[1], 1, F), i2 = n2.parse(t2[2], 2, Pe(n2.expectedType || R));
    if (!r2 || !i2) return null;
    let a2 = i2.type;
    return new e19(a2.itemType, r2, i2, n2.key);
  }
  evaluate(e53) {
    let t2 = this.index.evaluate(e53), n2 = this.input.evaluate(e53);
    if (t2 < 0) throw new H(`Array index out of bounds: ${t2} < 0.`, this.key);
    if (t2 >= n2.length) throw new H(`Array index out of bounds: ${t2} > ${n2.length - 1}.`, this.key);
    if (t2 !== Math.floor(t2)) throw new H(`Array index must be an integer, but found ${t2} instead.`, this.key);
    return n2[t2];
  }
  eachChild(e53) {
    e53(this.index), e53(this.input);
  }
  outputDefined() {
    return false;
  }
};
var Xt = class e20 {
  constructor(e53, t2, n2) {
    this.needle = e53, this.haystack = t2, this.key = n2, this.type = L;
  }
  static parse(t2, n2) {
    if (t2.length !== 3) return n2.error(`Expected 2 arguments, but found ${t2.length - 1} instead.`);
    let r2 = n2.parse(t2[1], 1, R), i2 = n2.parse(t2[2], 2, R);
    return !r2 || !i2 ? null : Le(r2.type, [L, I, F, Se, R]) ? new e20(r2, i2, n2.key) : n2.error(`Expected first argument to be of type boolean, string, number or null, but found ${z(r2.type)} instead`);
  }
  evaluate(e53) {
    let t2 = this.needle.evaluate(e53), n2 = this.haystack.evaluate(e53);
    if (!n2) return false;
    if (!Re(t2, [`boolean`, `string`, `number`, `null`])) throw new H(`Expected first argument to be of type boolean, string, number or null, but found ${z(U(t2))} instead.`, this.key);
    if (!Re(n2, [`string`, `array`])) throw new H(`Expected second argument to be of type array or string, but found ${z(U(n2))} instead.`, this.key);
    return n2.indexOf(t2) >= 0;
  }
  eachChild(e53) {
    e53(this.needle), e53(this.haystack);
  }
  outputDefined() {
    return true;
  }
};
var Zt = class e21 {
  constructor(e53, t2, n2, r2) {
    this.needle = e53, this.haystack = t2, this.key = n2, this.fromIndex = r2, this.type = F;
  }
  static parse(t2, n2) {
    if (t2.length <= 2 || t2.length >= 5) return n2.error(`Expected 2 or 3 arguments, but found ${t2.length - 1} instead.`);
    let r2 = n2.parse(t2[1], 1, R), i2 = n2.parse(t2[2], 2, R);
    if (!r2 || !i2) return null;
    if (!Le(r2.type, [L, I, F, Se, R])) return n2.error(`Expected first argument to be of type boolean, string, number or null, but found ${z(r2.type)} instead`);
    if (t2.length === 4) {
      let a2 = n2.parse(t2[3], 3, F);
      return a2 ? new e21(r2, i2, n2.key, a2) : null;
    }
    return new e21(r2, i2, n2.key);
  }
  evaluate(e53) {
    let t2 = this.needle.evaluate(e53), n2 = this.haystack.evaluate(e53);
    if (!Re(t2, [`boolean`, `string`, `number`, `null`])) throw new H(`Expected first argument to be of type boolean, string, number or null, but found ${z(U(t2))} instead.`, this.key);
    let r2;
    if (this.fromIndex && (r2 = this.fromIndex.evaluate(e53)), Re(n2, [`string`])) {
      let e54 = n2.indexOf(t2, r2);
      return e54 === -1 ? -1 : [...n2.slice(0, e54)].length;
    }
    if (Re(n2, [`array`])) return n2.indexOf(t2, r2);
    throw new H(`Expected second argument to be of type array or string, but found ${z(U(n2))} instead.`, this.key);
  }
  eachChild(e53) {
    e53(this.needle), e53(this.haystack), this.fromIndex && e53(this.fromIndex);
  }
  outputDefined() {
    return false;
  }
};
var Qt = class e22 {
  constructor(e53, t2, n2, r2, i2, a2) {
    this.inputType = e53, this.type = t2, this.input = n2, this.cases = r2, this.outputs = i2, this.otherwise = a2;
  }
  static parse(t2, n2) {
    if (t2.length < 5) return n2.error(`Expected at least 4 arguments, but found only ${t2.length - 1}.`);
    if (t2.length % 2 != 1) return n2.error(`Expected an even number of arguments.`);
    let r2, i2;
    n2.expectedType && n2.expectedType.kind !== `value` && (i2 = n2.expectedType);
    let a2 = {}, o2 = [];
    for (let e53 = 2; e53 < t2.length - 1; e53 += 2) {
      let s3 = t2[e53], c3 = t2[e53 + 1];
      Array.isArray(s3) || (s3 = [s3]);
      let l2 = n2.concat(e53);
      if (s3.length === 0) return l2.error(`Expected at least one branch label.`);
      for (let e54 of s3) {
        if (typeof e54 != `number` && typeof e54 != `string`) return l2.error(`Branch labels must be numbers or strings.`);
        if (typeof e54 == `number` && Math.abs(e54) > 2 ** 53 - 1) return l2.error(`Branch labels must be integers no larger than ${2 ** 53 - 1}.`);
        if (typeof e54 == `number` && Math.floor(e54) !== e54) return l2.error(`Numeric branch labels must be integer values.`);
        if (!r2) r2 = U(e54);
        else if (l2.checkSubtype(r2, U(e54))) return null;
        if (a2[String(e54)] !== void 0) return l2.error(`Branch labels must be unique.`);
        a2[String(e54)] = o2.length;
      }
      let u2 = n2.parse(c3, e53, i2);
      if (!u2) return null;
      i2 ||= u2.type, o2.push(u2);
    }
    let s2 = n2.parse(t2[1], 1, R);
    if (!s2) return null;
    let c2 = n2.parse(t2[t2.length - 1], t2.length - 1, i2);
    return !c2 || s2.type.kind !== `value` && n2.concat(1).checkSubtype(r2, s2.type) ? null : new e22(r2, i2, s2, a2, o2, c2);
  }
  evaluate(e53) {
    let t2 = this.input.evaluate(e53);
    return (U(t2) === this.inputType && this.outputs[this.cases[t2]] || this.otherwise).evaluate(e53);
  }
  eachChild(e53) {
    e53(this.input), this.outputs.forEach(e53), e53(this.otherwise);
  }
  outputDefined() {
    return this.outputs.every((e53) => e53.outputDefined()) && this.otherwise.outputDefined();
  }
};
var $t = class e23 {
  constructor(e53, t2, n2) {
    this.type = e53, this.branches = t2, this.otherwise = n2;
  }
  static parse(t2, n2) {
    if (t2.length < 4) return n2.error(`Expected at least 3 arguments, but found only ${t2.length - 1}.`);
    if (t2.length % 2 != 0) return n2.error(`Expected an odd number of arguments.`);
    let r2;
    n2.expectedType && n2.expectedType.kind !== `value` && (r2 = n2.expectedType);
    let i2 = [];
    for (let e53 = 1; e53 < t2.length - 1; e53 += 2) {
      let a3 = n2.parse(t2[e53], e53, L);
      if (!a3) return null;
      let o2 = n2.parse(t2[e53 + 1], e53 + 1, r2);
      if (!o2) return null;
      i2.push([a3, o2]), r2 ||= o2.type;
    }
    let a2 = n2.parse(t2[t2.length - 1], t2.length - 1, r2);
    if (!a2) return null;
    if (!r2) throw Error(`Can't infer output type`);
    return new e23(r2, i2, a2);
  }
  evaluate(e53) {
    for (let [t2, n2] of this.branches) if (t2.evaluate(e53)) return n2.evaluate(e53);
    return this.otherwise.evaluate(e53);
  }
  eachChild(e53) {
    for (let [t2, n2] of this.branches) e53(t2), e53(n2);
    e53(this.otherwise);
  }
  outputDefined() {
    return this.branches.every(([e53, t2]) => t2.outputDefined()) && this.otherwise.outputDefined();
  }
};
var en = class e24 {
  constructor(e53, t2, n2, r2, i2) {
    this.type = e53, this.input = t2, this.beginIndex = n2, this.key = r2, this.endIndex = i2;
  }
  static parse(t2, n2) {
    if (t2.length <= 2 || t2.length >= 5) return n2.error(`Expected 2 or 3 arguments, but found ${t2.length - 1} instead.`);
    let r2 = n2.parse(t2[1], 1, R), i2 = n2.parse(t2[2], 2, F);
    if (!r2 || !i2) return null;
    if (!Le(r2.type, [Pe(R), I, R])) return n2.error(`Expected first argument to be of type array or string, but found ${z(r2.type)} instead`);
    if (t2.length === 4) {
      let a2 = n2.parse(t2[3], 3, F);
      return a2 ? new e24(r2.type, r2, i2, n2.key, a2) : null;
    }
    return new e24(r2.type, r2, i2, n2.key);
  }
  evaluate(e53) {
    let t2 = this.input.evaluate(e53), n2 = this.beginIndex.evaluate(e53), r2;
    if (this.endIndex && (r2 = this.endIndex.evaluate(e53)), Re(t2, [`string`])) return [...t2].slice(n2, r2).join(``);
    if (Re(t2, [`array`])) return t2.slice(n2, r2);
    throw new H(`Expected first argument to be of type array or string, but found ${z(U(t2))} instead.`, this.key);
  }
  eachChild(e53) {
    e53(this.input), e53(this.beginIndex), this.endIndex && e53(this.endIndex);
  }
  outputDefined() {
    return false;
  }
};
var tn = class e25 {
  constructor(e53, t2) {
    this.type = e53, this.args = t2;
  }
  static parse(t2, n2) {
    if (t2.length < 2) return n2.error(`Expected at least one argument.`);
    let r2 = null, i2 = n2.expectedType;
    i2 && i2.kind !== `value` && (r2 = i2);
    let a2 = [];
    for (let e53 of t2.slice(1)) {
      let t3 = n2.parse(e53, 1 + a2.length, r2, void 0, { typeAnnotation: `omit` });
      if (!t3) return null;
      r2 ||= t3.type, a2.push(t3);
    }
    if (!r2) throw Error(`No output type`);
    return i2 && a2.some((e53) => Ie(i2, e53.type)) ? new e25(R, a2) : new e25(r2, a2);
  }
  evaluate(e53) {
    let t2 = null, n2 = 0, r2;
    for (let i2 of this.args) if (n2++, t2 = i2.evaluate(e53), t2 && t2 instanceof xt && !t2.available && (r2 ||= t2.name, t2 = null, n2 === this.args.length && (t2 = r2)), t2 !== null) break;
    return t2;
  }
  eachChild(e53) {
    this.args.forEach(e53);
  }
  outputDefined() {
    return this.args.every((e53) => e53.outputDefined());
  }
};
function nn(e53, t2) {
  return e53 === `==` || e53 === `!=` ? t2.kind === `boolean` || t2.kind === `string` || t2.kind === `number` || t2.kind === `null` || t2.kind === `value` : t2.kind === `string` || t2.kind === `number` || t2.kind === `value`;
}
function rn(e53, t2, n2) {
  return t2 === n2;
}
function an(e53, t2, n2) {
  return t2 !== n2;
}
function on(e53, t2, n2) {
  return t2 < n2;
}
function sn(e53, t2, n2) {
  return t2 > n2;
}
function cn(e53, t2, n2) {
  return t2 <= n2;
}
function ln(e53, t2, n2) {
  return t2 >= n2;
}
function un(e53, t2, n2, r2) {
  return r2.compare(t2, n2) === 0;
}
function dn(e53, t2, n2, r2) {
  return !un(e53, t2, n2, r2);
}
function fn(e53, t2, n2, r2) {
  return r2.compare(t2, n2) < 0;
}
function pn(e53, t2, n2, r2) {
  return r2.compare(t2, n2) > 0;
}
function mn(e53, t2, n2, r2) {
  return r2.compare(t2, n2) <= 0;
}
function hn(e53, t2, n2, r2) {
  return r2.compare(t2, n2) >= 0;
}
function gn(e53, t2, n2) {
  let r2 = e53 !== `==` && e53 !== `!=`;
  return class i2 {
    constructor(e54, t3, n3, r3) {
      this.lhs = e54, this.rhs = t3, this.key = n3, this.collator = r3, this.type = L, this.hasUntypedArgument = e54.type.kind === `value` || t3.type.kind === `value`;
    }
    static parse(e54, t3) {
      if (e54.length !== 3 && e54.length !== 4) return t3.error(`Expected two or three arguments.`);
      let n3 = e54[0], a2 = t3.parse(e54[1], 1, R);
      if (!a2) return null;
      if (!nn(n3, a2.type)) return t3.concat(1).error(`"${n3}" comparisons are not supported for type '${z(a2.type)}'.`);
      let o2 = t3.parse(e54[2], 2, R);
      if (!o2) return null;
      if (!nn(n3, o2.type)) return t3.concat(2).error(`"${n3}" comparisons are not supported for type '${z(o2.type)}'.`);
      if (a2.type.kind !== o2.type.kind && a2.type.kind !== `value` && o2.type.kind !== `value`) return t3.error(`Cannot compare types '${z(a2.type)}' and '${z(o2.type)}'.`);
      r2 && (a2.type.kind === `value` && o2.type.kind !== `value` ? a2 = new Wt(o2.type, [a2], t3.key) : a2.type.kind !== `value` && o2.type.kind === `value` && (o2 = new Wt(a2.type, [o2], t3.key)));
      let s2 = null;
      if (e54.length === 4) {
        if (a2.type.kind !== `string` && o2.type.kind !== `string` && a2.type.kind !== `value` && o2.type.kind !== `value`) return t3.error(`Cannot use collator to compare non-string types.`);
        if (s2 = t3.parse(e54[3], 3, De), !s2) return null;
      }
      return new i2(a2, o2, t3.key, s2);
    }
    evaluate(i3) {
      let a2 = this.lhs.evaluate(i3), o2 = this.rhs.evaluate(i3);
      if (r2 && this.hasUntypedArgument) {
        let t3 = U(a2), n3 = U(o2);
        if (t3.kind !== n3.kind || t3.kind !== `string` && t3.kind !== `number`) throw new H(`Expected arguments for "${e53}" to be (string, string) or (number, number), but found (${t3.kind}, ${n3.kind}) instead.`, this.key);
      }
      if (this.collator && !r2 && this.hasUntypedArgument) {
        let e54 = U(a2), n3 = U(o2);
        if (e54.kind !== `string` || n3.kind !== `string`) return t2(i3, a2, o2);
      }
      return this.collator ? n2(i3, a2, o2, this.collator.evaluate(i3)) : t2(i3, a2, o2);
    }
    eachChild(e54) {
      e54(this.lhs), e54(this.rhs), this.collator && e54(this.collator);
    }
    outputDefined() {
      return true;
    }
  };
}
var _n = gn(`==`, rn, un);
var vn = gn(`!=`, an, dn);
var yn = gn(`<`, on, fn);
var bn = gn(`>`, sn, pn);
var xn = gn(`<=`, cn, mn);
var Sn = gn(`>=`, ln, hn);
var Cn = class e26 {
  constructor(e53, t2, n2) {
    this.type = De, this.locale = n2, this.caseSensitive = e53, this.diacriticSensitive = t2;
  }
  static parse(t2, n2) {
    if (t2.length !== 2) return n2.error(`Expected one argument.`);
    let r2 = t2[1];
    if (typeof r2 != `object` || Array.isArray(r2)) return n2.error(`Collator options argument must be an object.`);
    let i2 = n2.parse(r2[`case-sensitive`] !== void 0 && r2[`case-sensitive`], 1, L);
    if (!i2) return null;
    let a2 = n2.parse(r2[`diacritic-sensitive`] !== void 0 && r2[`diacritic-sensitive`], 1, L);
    if (!a2) return null;
    let o2 = null;
    return r2.locale && (o2 = n2.parse(r2.locale, 1, I), !o2) ? null : new e26(i2, a2, o2);
  }
  evaluate(e53) {
    return new Ct(this.caseSensitive.evaluate(e53), this.diacriticSensitive.evaluate(e53), this.locale ? this.locale.evaluate(e53) : null);
  }
  eachChild(e53) {
    e53(this.caseSensitive), e53(this.diacriticSensitive), this.locale && e53(this.locale);
  }
  outputDefined() {
    return false;
  }
};
var wn = class e27 {
  constructor(e53, t2, n2, r2, i2, a2) {
    this.type = I, this.number = e53, this.locale = t2, this.currency = n2, this.unit = r2, this.minFractionDigits = i2, this.maxFractionDigits = a2;
  }
  static parse(t2, n2) {
    if (t2.length !== 3) return n2.error(`Expected two arguments.`);
    let r2 = n2.parse(t2[1], 1, F);
    if (!r2) return null;
    let i2 = t2[2];
    if (typeof i2 != `object` || Array.isArray(i2)) return n2.error(`NumberFormat options argument must be an object.`);
    let a2 = null;
    if (i2.locale && (a2 = n2.parse(i2.locale, 1, I), !a2)) return null;
    let o2 = null;
    if (i2.currency && (o2 = n2.parse(i2.currency, 1, I), !o2)) return null;
    let s2 = null;
    if (i2.unit && (s2 = n2.parse(i2.unit, 1, I), !s2)) return null;
    if (o2 && s2) return n2.error("NumberFormat options `currency` and `unit` are mutually exclusive");
    let c2 = null;
    if (i2[`min-fraction-digits`] && (c2 = n2.parse(i2[`min-fraction-digits`], 1, F), !c2)) return null;
    let l2 = null;
    return i2[`max-fraction-digits`] && (l2 = n2.parse(i2[`max-fraction-digits`], 1, F), !l2) ? null : new e27(r2, a2, o2, s2, c2, l2);
  }
  evaluate(e53) {
    return new Intl.NumberFormat(this.locale ? this.locale.evaluate(e53) : [], { style: this.currency ? `currency` : this.unit ? `unit` : `decimal`, currency: this.currency ? this.currency.evaluate(e53) : void 0, unit: this.unit ? this.unit.evaluate(e53) : void 0, minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(e53) : void 0, maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(e53) : void 0 }).format(this.number.evaluate(e53));
  }
  eachChild(e53) {
    e53(this.number), this.locale && e53(this.locale), this.currency && e53(this.currency), this.unit && e53(this.unit), this.minFractionDigits && e53(this.minFractionDigits), this.maxFractionDigits && e53(this.maxFractionDigits);
  }
  outputDefined() {
    return false;
  }
};
var Tn = class e28 {
  constructor(e53) {
    this.type = Me, this.input = e53;
  }
  static parse(t2, n2) {
    if (t2.length !== 2) return n2.error(`Expected two arguments.`);
    let r2 = n2.parse(t2[1], 1, I);
    return r2 ? new e28(r2) : n2.error(`No image name provided.`);
  }
  evaluate(e53) {
    let t2 = this.input.evaluate(e53), n2 = xt.fromString(t2);
    return n2 && e53.availableImages && (n2.available = e53.availableImages.indexOf(t2) > -1), n2;
  }
  eachChild(e53) {
    e53(this.input);
  }
  outputDefined() {
    return false;
  }
};
var En = class e29 {
  constructor(e53, t2) {
    this.input = e53, this.key = t2, this.type = F;
  }
  static parse(t2, n2) {
    if (t2.length !== 2) return n2.error(`Expected 1 argument, but found ${t2.length - 1} instead.`);
    let r2 = n2.parse(t2[1], 1);
    return r2 ? r2.type.kind !== `array` && r2.type.kind !== `string` && r2.type.kind !== `value` ? n2.error(`Expected argument of type string or array, but found ${z(r2.type)} instead.`) : new e29(r2, n2.key) : null;
  }
  evaluate(e53) {
    let t2 = this.input.evaluate(e53);
    if (typeof t2 == `string`) return [...t2].length;
    if (Array.isArray(t2)) return t2.length;
    throw new H(`Expected value to be of type string or array, but found ${z(U(t2))} instead.`, this.key);
  }
  eachChild(e53) {
    e53(this.input);
  }
  outputDefined() {
    return false;
  }
};
var Dn = 8192;
function On(e53, t2) {
  let n2 = An(e53[0]), r2 = Mn(e53[1]), i2 = 2 ** t2.z;
  return [Math.round(n2 * i2 * Dn), Math.round(r2 * i2 * Dn)];
}
function kn(e53, t2) {
  let n2 = 2 ** t2.z, r2 = (e53[0] / Dn + t2.x) / n2, i2 = (e53[1] / Dn + t2.y) / n2;
  return [jn(r2), Nn(i2)];
}
function An(e53) {
  return (180 + e53) / 360;
}
function jn(e53) {
  return e53 * 360 - 180;
}
function Mn(e53) {
  return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + e53 * Math.PI / 360))) / 360;
}
function Nn(e53) {
  return 360 / Math.PI * Math.atan(Math.exp((180 - e53 * 360) * Math.PI / 180)) - 90;
}
function Pn(e53, t2) {
  e53[0] = Math.min(e53[0], t2[0]), e53[1] = Math.min(e53[1], t2[1]), e53[2] = Math.max(e53[2], t2[0]), e53[3] = Math.max(e53[3], t2[1]);
}
function Fn(e53, t2) {
  return !(e53[0] <= t2[0] || e53[2] >= t2[2] || e53[1] <= t2[1] || e53[3] >= t2[3]);
}
function In(e53, t2, n2) {
  return t2[1] > e53[1] != n2[1] > e53[1] && e53[0] < (n2[0] - t2[0]) * (e53[1] - t2[1]) / (n2[1] - t2[1]) + t2[0];
}
function Ln(e53, t2, n2) {
  let r2 = e53[0] - t2[0], i2 = e53[1] - t2[1], a2 = e53[0] - n2[0], o2 = e53[1] - n2[1];
  return r2 * o2 - a2 * i2 === 0 && r2 * a2 <= 0 && i2 * o2 <= 0;
}
function Rn(e53, t2, n2, r2) {
  let i2 = [t2[0] - e53[0], t2[1] - e53[1]];
  return Wn([r2[0] - n2[0], r2[1] - n2[1]], i2) !== 0 && !!(Gn(e53, t2, n2, r2) && Gn(n2, r2, e53, t2));
}
function zn(e53, t2, n2) {
  for (let r2 of n2) for (let n3 = 0; n3 < r2.length - 1; ++n3) if (Rn(e53, t2, r2[n3], r2[n3 + 1])) return true;
  return false;
}
function Bn(e53, t2, n2 = false) {
  let r2 = false;
  for (let i2 of t2) for (let t3 = 0; t3 < i2.length - 1; t3++) {
    if (Ln(e53, i2[t3], i2[t3 + 1])) return n2;
    In(e53, i2[t3], i2[t3 + 1]) && (r2 = !r2);
  }
  return r2;
}
function Vn(e53, t2) {
  for (let n2 of t2) if (Bn(e53, n2)) return true;
  return false;
}
function Hn(e53, t2) {
  for (let n2 of e53) if (!Bn(n2, t2)) return false;
  for (let n2 = 0; n2 < e53.length - 1; ++n2) if (zn(e53[n2], e53[n2 + 1], t2)) return false;
  return true;
}
function Un(e53, t2) {
  for (let n2 of t2) if (Hn(e53, n2)) return true;
  return false;
}
function Wn(e53, t2) {
  return e53[0] * t2[1] - e53[1] * t2[0];
}
function Gn(e53, t2, n2, r2) {
  let i2 = e53[0] - n2[0], a2 = e53[1] - n2[1], o2 = t2[0] - n2[0], s2 = t2[1] - n2[1], c2 = r2[0] - n2[0], l2 = r2[1] - n2[1], u2 = i2 * l2 - c2 * a2, d2 = o2 * l2 - c2 * s2;
  return u2 > 0 && d2 < 0 || u2 < 0 && d2 > 0;
}
function Kn(e53, t2, n2) {
  let r2 = [];
  for (let i2 = 0; i2 < e53.length; i2++) {
    let a2 = [];
    for (let r3 = 0; r3 < e53[i2].length; r3++) {
      let o2 = On(e53[i2][r3], n2);
      Pn(t2, o2), a2.push(o2);
    }
    r2.push(a2);
  }
  return r2;
}
function qn(e53, t2, n2) {
  let r2 = [];
  for (let i2 = 0; i2 < e53.length; i2++) {
    let a2 = Kn(e53[i2], t2, n2);
    r2.push(a2);
  }
  return r2;
}
function Jn(e53, t2, n2, r2) {
  if (e53[0] < n2[0] || e53[0] > n2[2]) {
    let t3 = r2 * 0.5, i2 = e53[0] - n2[0] > t3 ? -r2 : n2[0] - e53[0] > t3 ? r2 : 0;
    i2 === 0 && (i2 = e53[0] - n2[2] > t3 ? -r2 : n2[2] - e53[0] > t3 ? r2 : 0), e53[0] += i2;
  }
  Pn(t2, e53);
}
function Yn(e53) {
  e53[0] = e53[1] = 1 / 0, e53[2] = e53[3] = -1 / 0;
}
function Xn(e53, t2, n2, r2) {
  let i2 = 2 ** r2.z * Dn, a2 = [r2.x * Dn, r2.y * Dn], o2 = [];
  for (let r3 of e53) for (let e54 of r3) {
    let r4 = [e54.x + a2[0], e54.y + a2[1]];
    Jn(r4, t2, n2, i2), o2.push(r4);
  }
  return o2;
}
function Zn(e53, t2, n2, r2) {
  let i2 = 2 ** r2.z * Dn, a2 = [r2.x * Dn, r2.y * Dn], o2 = [];
  for (let n3 of e53) {
    let e54 = [];
    for (let r3 of n3) {
      let n4 = [r3.x + a2[0], r3.y + a2[1]];
      Pn(t2, n4), e54.push(n4);
    }
    o2.push(e54);
  }
  if (t2[2] - t2[0] <= i2 / 2) {
    Yn(t2);
    for (let e54 of o2) for (let r3 of e54) Jn(r3, t2, n2, i2);
  }
  return o2;
}
function Qn(e53, t2) {
  let n2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0], i2 = e53.canonicalID();
  if (t2.type === `Polygon`) {
    let a2 = Kn(t2.coordinates, r2, i2), o2 = Xn(e53.geometry(), n2, r2, i2);
    if (!Fn(n2, r2)) return false;
    for (let e54 of o2) if (!Bn(e54, a2)) return false;
  }
  if (t2.type === `MultiPolygon`) {
    let a2 = qn(t2.coordinates, r2, i2), o2 = Xn(e53.geometry(), n2, r2, i2);
    if (!Fn(n2, r2)) return false;
    for (let e54 of o2) if (!Vn(e54, a2)) return false;
  }
  return true;
}
function $n(e53, t2) {
  let n2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0], r2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0], i2 = e53.canonicalID();
  if (t2.type === `Polygon`) {
    let a2 = Kn(t2.coordinates, r2, i2), o2 = Zn(e53.geometry(), n2, r2, i2);
    if (!Fn(n2, r2)) return false;
    for (let e54 of o2) if (!Hn(e54, a2)) return false;
  }
  if (t2.type === `MultiPolygon`) {
    let a2 = qn(t2.coordinates, r2, i2), o2 = Zn(e53.geometry(), n2, r2, i2);
    if (!Fn(n2, r2)) return false;
    for (let e54 of o2) if (!Un(e54, a2)) return false;
  }
  return true;
}
var er = class e30 {
  constructor(e53, t2) {
    this.type = L, this.geojson = e53, this.geometries = t2;
  }
  static parse(t2, n2) {
    if (t2.length !== 2) return n2.error(`'within' expression requires exactly one argument, but found ${t2.length - 1} instead.`);
    if (Tt(t2[1])) {
      let n3 = t2[1];
      if (n3.type === `FeatureCollection`) {
        let t3 = [];
        for (let e53 of n3.features) {
          let { type: n4, coordinates: r2 } = e53.geometry;
          n4 === `Polygon` && t3.push(r2), n4 === `MultiPolygon` && t3.push(...r2);
        }
        if (t3.length) return new e30(n3, { type: `MultiPolygon`, coordinates: t3 });
      } else if (n3.type === `Feature`) {
        let t3 = n3.geometry.type;
        if (t3 === `Polygon` || t3 === `MultiPolygon`) return new e30(n3, n3.geometry);
      } else if (n3.type === `Polygon` || n3.type === `MultiPolygon`) return new e30(n3, n3);
    }
    return n2.error(`'within' expression requires valid geojson object that contains polygon geometry type.`);
  }
  evaluate(e53) {
    if (e53.geometry() != null && e53.canonicalID() != null) {
      if (e53.geometryType() === `Point`) return Qn(e53, this.geometries);
      if (e53.geometryType() === `LineString`) return $n(e53, this.geometries);
    }
    return false;
  }
  eachChild() {
  }
  outputDefined() {
    return true;
  }
};
var tr = class {
  constructor(e53 = [], t2 = (e54, t3) => e54 < t3 ? -1 : +(e54 > t3)) {
    if (this.data = e53, this.length = this.data.length, this.compare = t2, this.length > 0) for (let e54 = (this.length >> 1) - 1; e54 >= 0; e54--) this._down(e54);
  }
  push(e53) {
    this.data.push(e53), this._up(this.length++);
  }
  pop() {
    if (this.length === 0) return;
    let e53 = this.data[0], t2 = this.data.pop();
    return --this.length > 0 && (this.data[0] = t2, this._down(0)), e53;
  }
  peek() {
    return this.data[0];
  }
  _up(e53) {
    let { data: t2, compare: n2 } = this, r2 = t2[e53];
    for (; e53 > 0; ) {
      let i2 = e53 - 1 >> 1, a2 = t2[i2];
      if (n2(r2, a2) >= 0) break;
      t2[e53] = a2, e53 = i2;
    }
    t2[e53] = r2;
  }
  _down(e53) {
    let { data: t2, compare: n2 } = this, r2 = this.length >> 1, i2 = t2[e53];
    for (; e53 < r2; ) {
      let r3 = (e53 << 1) + 1, a2 = r3 + 1;
      if (a2 < this.length && n2(t2[a2], t2[r3]) < 0 && (r3 = a2), n2(t2[r3], i2) >= 0) break;
      t2[e53] = t2[r3], e53 = r3;
    }
    t2[e53] = i2;
  }
};
var nr = Math.PI / 180;
var rr = class {
  constructor(e53) {
    let t2 = nr * 6378.137 * 1e3, n2 = Math.cos(e53 * nr), r2 = 1 / (1 - 0.0066943799901413165 * (1 - n2 * n2)), i2 = Math.sqrt(r2);
    this.kx = t2 * i2 * n2, this.ky = t2 * i2 * r2 * 0.9933056200098587;
  }
  distance(e53, t2) {
    let n2 = this.wrap(e53[0] - t2[0]) * this.kx, r2 = (e53[1] - t2[1]) * this.ky;
    return Math.sqrt(n2 * n2 + r2 * r2);
  }
  pointOnLine(e53, t2) {
    let n2 = 1 / 0, r2, i2, a2, o2;
    for (let s2 = 0; s2 < e53.length - 1; s2++) {
      let c2 = e53[s2][0], l2 = e53[s2][1], u2 = this.wrap(e53[s2 + 1][0] - c2) * this.kx, d2 = (e53[s2 + 1][1] - l2) * this.ky, f2 = 0;
      (u2 !== 0 || d2 !== 0) && (f2 = (this.wrap(t2[0] - c2) * this.kx * u2 + (t2[1] - l2) * this.ky * d2) / (u2 * u2 + d2 * d2), f2 > 1 ? (c2 = e53[s2 + 1][0], l2 = e53[s2 + 1][1]) : f2 > 0 && (c2 += u2 / this.kx * f2, l2 += d2 / this.ky * f2)), u2 = this.wrap(t2[0] - c2) * this.kx, d2 = (t2[1] - l2) * this.ky;
      let p2 = u2 * u2 + d2 * d2;
      p2 < n2 && (n2 = p2, r2 = c2, i2 = l2, a2 = s2, o2 = f2);
    }
    return { point: [r2, i2], index: a2, t: Math.max(0, Math.min(1, o2)) };
  }
  wrap(e53) {
    for (; e53 < -180; ) e53 += 360;
    for (; e53 > 180; ) e53 -= 360;
    return e53;
  }
};
function ir(e53, t2) {
  return t2[0] - e53[0];
}
function ar(e53) {
  return e53[1] - e53[0] + 1;
}
function or(e53, t2) {
  return e53[1] >= e53[0] && e53[1] < t2;
}
function sr(e53, t2) {
  if (e53[0] > e53[1]) return [null, null];
  let n2 = ar(e53);
  if (t2) {
    if (n2 === 2) return [e53, null];
    let t3 = Math.floor(n2 / 2);
    return [[e53[0], e53[0] + t3], [e53[0] + t3, e53[1]]];
  }
  if (n2 === 1) return [e53, null];
  let r2 = Math.floor(n2 / 2) - 1;
  return [[e53[0], e53[0] + r2], [e53[0] + r2 + 1, e53[1]]];
}
function cr(e53, t2) {
  if (!or(t2, e53.length)) return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  let n2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  for (let r2 = t2[0]; r2 <= t2[1]; ++r2) Pn(n2, e53[r2]);
  return n2;
}
function lr(e53) {
  let t2 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  for (let n2 of e53) for (let e54 of n2) Pn(t2, e54);
  return t2;
}
function ur(e53) {
  return e53[0] !== -1 / 0 && e53[1] !== -1 / 0 && e53[2] !== 1 / 0 && e53[3] !== 1 / 0;
}
function dr(e53, t2, n2) {
  if (!ur(e53) || !ur(t2)) return NaN;
  let r2 = 0, i2 = 0;
  return e53[2] < t2[0] && (r2 = t2[0] - e53[2]), e53[0] > t2[2] && (r2 = e53[0] - t2[2]), e53[1] > t2[3] && (i2 = e53[1] - t2[3]), e53[3] < t2[1] && (i2 = t2[1] - e53[3]), n2.distance([0, 0], [r2, i2]);
}
function fr(e53, t2, n2) {
  let r2 = n2.pointOnLine(t2, e53);
  return n2.distance(e53, r2.point);
}
function pr(e53, t2, n2, r2, i2) {
  let a2 = Math.min(fr(e53, [n2, r2], i2), fr(t2, [n2, r2], i2)), o2 = Math.min(fr(n2, [e53, t2], i2), fr(r2, [e53, t2], i2));
  return Math.min(a2, o2);
}
function mr(e53, t2, n2, r2, i2) {
  if (!(or(t2, e53.length) && or(r2, n2.length))) return 1 / 0;
  let a2 = 1 / 0;
  for (let o2 = t2[0]; o2 < t2[1]; ++o2) {
    let t3 = e53[o2], s2 = e53[o2 + 1];
    for (let e54 = r2[0]; e54 < r2[1]; ++e54) {
      let r3 = n2[e54], o3 = n2[e54 + 1];
      if (Rn(t3, s2, r3, o3)) return 0;
      a2 = Math.min(a2, pr(t3, s2, r3, o3, i2));
    }
  }
  return a2;
}
function hr(e53, t2, n2, r2, i2) {
  if (!(or(t2, e53.length) && or(r2, n2.length))) return NaN;
  let a2 = 1 / 0;
  for (let o2 = t2[0]; o2 <= t2[1]; ++o2) for (let t3 = r2[0]; t3 <= r2[1]; ++t3) if (a2 = Math.min(a2, i2.distance(e53[o2], n2[t3])), a2 === 0) return a2;
  return a2;
}
function gr(e53, t2, n2) {
  if (Bn(e53, t2, true)) return 0;
  let r2 = 1 / 0;
  for (let i2 of t2) {
    let t3 = i2[0], a2 = i2[i2.length - 1];
    if (t3 !== a2 && (r2 = Math.min(r2, fr(e53, [a2, t3], n2)), r2 === 0)) return r2;
    let o2 = n2.pointOnLine(i2, e53);
    if (r2 = Math.min(r2, n2.distance(e53, o2.point)), r2 === 0) return r2;
  }
  return r2;
}
function _r(e53, t2, n2, r2) {
  if (!or(t2, e53.length)) return NaN;
  for (let r3 = t2[0]; r3 <= t2[1]; ++r3) if (Bn(e53[r3], n2, true)) return 0;
  let i2 = 1 / 0;
  for (let a2 = t2[0]; a2 < t2[1]; ++a2) {
    let t3 = e53[a2], o2 = e53[a2 + 1];
    for (let e54 of n2) for (let n3 = 0, a3 = e54.length, s2 = a3 - 1; n3 < a3; s2 = n3++) {
      let a4 = e54[s2], c2 = e54[n3];
      if (Rn(t3, o2, a4, c2)) return 0;
      i2 = Math.min(i2, pr(t3, o2, a4, c2, r2));
    }
  }
  return i2;
}
function vr(e53, t2) {
  for (let n2 of e53) for (let e54 of n2) if (Bn(e54, t2, true)) return true;
  return false;
}
function yr(e53, t2, n2, r2 = 1 / 0) {
  let i2 = lr(e53), a2 = lr(t2);
  if (r2 !== 1 / 0 && dr(i2, a2, n2) >= r2) return r2;
  if (Fn(i2, a2)) {
    if (vr(e53, t2)) return 0;
  } else if (vr(t2, e53)) return 0;
  let o2 = 1 / 0;
  for (let r3 of e53) for (let e54 = 0, i3 = r3.length, a3 = i3 - 1; e54 < i3; a3 = e54++) {
    let i4 = r3[a3], s2 = r3[e54];
    for (let e55 of t2) for (let t3 = 0, r4 = e55.length, a4 = r4 - 1; t3 < r4; a4 = t3++) {
      let r5 = e55[a4], c2 = e55[t3];
      if (Rn(i4, s2, r5, c2)) return 0;
      o2 = Math.min(o2, pr(i4, s2, r5, c2, n2));
    }
  }
  return o2;
}
function br(e53, t2, n2, r2, i2, a2) {
  if (!a2) return;
  let o2 = dr(cr(r2, a2), i2, n2);
  o2 < t2 && e53.push([o2, a2, [0, 0]]);
}
function xr(e53, t2, n2, r2, i2, a2, o2) {
  if (!a2 || !o2) return;
  let s2 = dr(cr(r2, a2), cr(i2, o2), n2);
  s2 < t2 && e53.push([s2, a2, o2]);
}
function Sr(e53, t2, n2, r2, i2 = 1 / 0) {
  let a2 = Math.min(r2.distance(e53[0], n2[0][0]), i2);
  if (a2 === 0) return a2;
  let o2 = new tr([[0, [0, e53.length - 1], [0, 0]]], ir), s2 = lr(n2);
  for (; o2.length > 0; ) {
    let i3 = o2.pop();
    if (i3[0] >= a2) continue;
    let c2 = i3[1], l2 = t2 ? 50 : 100;
    if (ar(c2) <= l2) {
      if (!or(c2, e53.length)) return NaN;
      if (t2) {
        let t3 = _r(e53, c2, n2, r2);
        if (isNaN(t3) || t3 === 0) return t3;
        a2 = Math.min(a2, t3);
      } else for (let t3 = c2[0]; t3 <= c2[1]; ++t3) {
        let i4 = gr(e53[t3], n2, r2);
        if (a2 = Math.min(a2, i4), a2 === 0) return 0;
      }
    } else {
      let n3 = sr(c2, t2);
      br(o2, a2, r2, e53, s2, n3[0]), br(o2, a2, r2, e53, s2, n3[1]);
    }
  }
  return a2;
}
function Cr(e53, t2, n2, r2, i2, a2 = 1 / 0) {
  let o2 = Math.min(a2, i2.distance(e53[0], n2[0]));
  if (o2 === 0) return o2;
  let s2 = new tr([[0, [0, e53.length - 1], [0, n2.length - 1]]], ir);
  for (; s2.length > 0; ) {
    let a3 = s2.pop();
    if (a3[0] >= o2) continue;
    let c2 = a3[1], l2 = a3[2], u2 = t2 ? 50 : 100, d2 = r2 ? 50 : 100;
    if (ar(c2) <= u2 && ar(l2) <= d2) {
      if (!or(c2, e53.length) && or(l2, n2.length)) return NaN;
      let a4;
      if (t2 && r2) a4 = mr(e53, c2, n2, l2, i2), o2 = Math.min(o2, a4);
      else if (t2 && !r2) {
        let t3 = e53.slice(c2[0], c2[1] + 1);
        for (let e54 = l2[0]; e54 <= l2[1]; ++e54) if (a4 = fr(n2[e54], t3, i2), o2 = Math.min(o2, a4), o2 === 0) return o2;
      } else if (!t2 && r2) {
        let t3 = n2.slice(l2[0], l2[1] + 1);
        for (let n3 = c2[0]; n3 <= c2[1]; ++n3) if (a4 = fr(e53[n3], t3, i2), o2 = Math.min(o2, a4), o2 === 0) return o2;
      } else a4 = hr(e53, c2, n2, l2, i2), o2 = Math.min(o2, a4);
    } else {
      let a4 = sr(c2, t2), u3 = sr(l2, r2);
      xr(s2, o2, i2, e53, n2, a4[0], u3[0]), xr(s2, o2, i2, e53, n2, a4[0], u3[1]), xr(s2, o2, i2, e53, n2, a4[1], u3[0]), xr(s2, o2, i2, e53, n2, a4[1], u3[1]);
    }
  }
  return o2;
}
function wr(e53, t2) {
  let n2 = e53.geometry(), r2 = n2.flat().map((t3) => kn([t3.x, t3.y], e53.canonical));
  if (n2.length === 0) return NaN;
  let i2 = new rr(r2[0][1]), a2 = 1 / 0;
  for (let e54 of t2) {
    switch (e54.type) {
      case `Point`:
        a2 = Math.min(a2, Cr(r2, false, [e54.coordinates], false, i2, a2));
        break;
      case `LineString`:
        a2 = Math.min(a2, Cr(r2, false, e54.coordinates, true, i2, a2));
        break;
      case `Polygon`:
        a2 = Math.min(a2, Sr(r2, false, e54.coordinates, i2, a2));
    }
    if (a2 === 0) return a2;
  }
  return a2;
}
function Tr(e53, t2) {
  let n2 = e53.geometry(), r2 = n2.flat().map((t3) => kn([t3.x, t3.y], e53.canonical));
  if (n2.length === 0) return NaN;
  let i2 = new rr(r2[0][1]), a2 = 1 / 0;
  for (let e54 of t2) {
    switch (e54.type) {
      case `Point`:
        a2 = Math.min(a2, Cr(r2, true, [e54.coordinates], false, i2, a2));
        break;
      case `LineString`:
        a2 = Math.min(a2, Cr(r2, true, e54.coordinates, true, i2, a2));
        break;
      case `Polygon`:
        a2 = Math.min(a2, Sr(r2, true, e54.coordinates, i2, a2));
    }
    if (a2 === 0) return a2;
  }
  return a2;
}
function Er(e53, t2) {
  let n2 = e53.geometry();
  if (n2.length === 0 || n2[0].length === 0) return NaN;
  let r2 = Bt(n2, 0).map((t3) => t3.map((t4) => t4.map((t5) => kn([t5.x, t5.y], e53.canonical)))), i2 = new rr(r2[0][0][0][1]), a2 = 1 / 0;
  for (let e54 of t2) for (let t3 of r2) {
    switch (e54.type) {
      case `Point`:
        a2 = Math.min(a2, Sr([e54.coordinates], false, t3, i2, a2));
        break;
      case `LineString`:
        a2 = Math.min(a2, Sr(e54.coordinates, true, t3, i2, a2));
        break;
      case `Polygon`:
        a2 = Math.min(a2, yr(t3, e54.coordinates, i2, a2));
    }
    if (a2 === 0) return a2;
  }
  return a2;
}
function Dr(e53) {
  return e53.type === `MultiPolygon` ? e53.coordinates.map((e54) => ({ type: `Polygon`, coordinates: e54 })) : e53.type === `MultiLineString` ? e53.coordinates.map((e54) => ({ type: `LineString`, coordinates: e54 })) : e53.type === `MultiPoint` ? e53.coordinates.map((e54) => ({ type: `Point`, coordinates: e54 })) : [e53];
}
var Or = class e31 {
  constructor(e53, t2) {
    this.type = F, this.geojson = e53, this.geometries = t2;
  }
  static parse(t2, n2) {
    if (t2.length !== 2) return n2.error(`'distance' expression requires exactly one argument, but found ${t2.length - 1} instead.`);
    if (Tt(t2[1])) {
      let n3 = t2[1];
      if (n3.type === `FeatureCollection`) return new e31(n3, n3.features.map((e53) => Dr(e53.geometry)).flat());
      if (n3.type === `Feature`) return new e31(n3, Dr(n3.geometry));
      if (`type` in n3 && `coordinates` in n3) return new e31(n3, Dr(n3));
    }
    return n2.error(`'distance' expression requires valid geojson object that contains polygon geometry type.`);
  }
  evaluate(e53) {
    if (e53.geometry() != null && e53.canonicalID() != null) {
      if (e53.geometryType() === `Point`) return wr(e53, this.geometries);
      if (e53.geometryType() === `LineString`) return Tr(e53, this.geometries);
      if (e53.geometryType() === `Polygon`) return Er(e53, this.geometries);
    }
    return NaN;
  }
  eachChild() {
  }
  outputDefined() {
    return true;
  }
};
var kr = class e32 {
  constructor(e53) {
    let t2 = null;
    for (let n2 of e53) if (!t2) t2 = n2.type;
    else if (t2 === n2.type) continue;
    else {
      t2 = R;
      break;
    }
    this.type = Pe(t2 ?? R, e53.length), this.arr = e53;
  }
  static parse(t2, n2) {
    if (t2.length !== 2) return n2.error(`'semiliteral' expression requires exactly one argument, but found ${t2.length - 1} instead.`);
    if (!Tt(t2[1])) return n2.error(`invalid value of type "${typeof t2[1]}"`);
    let r2 = t2[1], i2 = U(r2);
    if (i2.kind === `array`) {
      let t3 = r2, i3 = n2.concat(1), a2 = [];
      for (let e53 = 0; e53 < t3.length; e53++) {
        let n3 = i3.parse(t3[e53], e53, R);
        if (!n3) return null;
        a2.push(n3);
      }
      return new e32(a2);
    }
    return new Dt(i2, r2);
  }
  evaluate(e53) {
    return this.arr.map((t2) => t2.evaluate(e53));
  }
  eachChild(e53) {
    this.arr.forEach(e53);
  }
  outputDefined() {
    return this.arr.every((e53) => e53.outputDefined());
  }
};
var Ar = class e33 {
  constructor(e53) {
    this.key = e53, this.type = R;
  }
  static parse(t2, n2) {
    if (t2.length !== 2) return n2.error(`Expected 1 argument, but found ${t2.length - 1} instead.`);
    let r2 = t2[1];
    return r2 == null ? n2.error(`Global state property must be defined.`) : typeof r2 == `string` ? new e33(r2) : n2.error(`Global state property must be string, but found ${typeof t2[1]} instead.`);
  }
  evaluate(e53) {
    let t2 = e53.globals?.globalState;
    return !t2 || Object.keys(t2).length === 0 ? null : rt(t2, this.key) ?? null;
  }
  eachChild() {
  }
  outputDefined() {
    return false;
  }
};
var jr = { "==": _n, "!=": vn, ">": bn, "<": yn, ">=": Sn, "<=": xn, array: Wt, at: Yt, boolean: Wt, case: $t, coalesce: tn, collator: Cn, format: It, image: Tn, in: Xt, "index-of": Zt, interpolate: Nt, "interpolate-hcl": Nt, "interpolate-lab": Nt, length: En, let: qt, literal: Dt, match: Qt, number: Wt, "number-format": wn, object: Wt, semiliteral: kr, slice: en, step: jt, string: Wt, "to-boolean": Kt, "to-color": Kt, "to-number": Kt, "to-string": Kt, var: Jt, within: er, distance: Or, "global-state": Ar };
var Mr = class extends Error {
  constructor(e53, t2) {
    super(t2), this.message = t2, this.key = e53;
  }
};
var Nr = class e34 {
  constructor(e53, t2 = []) {
    this.parent = e53, this.bindings = {};
    for (let [e54, n2] of t2) this.bindings[e54] = n2;
  }
  concat(t2) {
    return new e34(this, t2);
  }
  get(e53) {
    if (this.bindings[e53]) return this.bindings[e53];
    if (this.parent) return this.parent.get(e53);
    throw Error(`${e53} not found in scope.`);
  }
  has(e53) {
    return this.bindings[e53] ? true : this.parent ? this.parent.has(e53) : false;
  }
};
var Pr = class e35 {
  constructor(e53, t2, n2 = [], r2, i2 = new Nr(), a2 = []) {
    this.registry = e53, this.path = n2, this.key = n2.map((e54) => `[${e54}]`).join(``), this.scope = i2, this.errors = a2, this.expectedType = r2, this._isConstant = t2;
  }
  parse(e53, t2, n2, r2, i2 = {}) {
    return t2 == null ? this._parse(e53, i2) : this.concat(t2, n2, r2)._parse(e53, i2);
  }
  _parse(e53, t2) {
    (e53 === null || typeof e53 == `string` || typeof e53 == `boolean` || typeof e53 == `number`) && (e53 = [`literal`, e53]);
    let n2 = this.key;
    function r2(e54, t3, r3) {
      return r3 === `assert` ? new Wt(t3, [e54], n2) : r3 === `coerce` ? new Kt(t3, [e54], n2) : e54;
    }
    if (Array.isArray(e53)) {
      if (e53.length === 0) return this.error(`Expected an array with at least one element. If you wanted a literal array, use ["literal", []].`);
      let n3 = e53[0];
      if (typeof n3 != `string`) return this.error(`Expression name must be a string, but found ${typeof n3} instead. If you wanted a literal array, use ["literal", [...]].`, 0), null;
      let i2 = this.registry[n3];
      if (i2) {
        let n4 = i2.parse(e53, this);
        if (!n4) return null;
        if (this.expectedType) {
          let e54 = this.expectedType, i3 = n4.type;
          if ((e54.kind === `string` || e54.kind === `number` || e54.kind === `boolean` || e54.kind === `object` || e54.kind === `array`) && i3.kind === `value`) n4 = r2(n4, e54, t2.typeAnnotation || `assert`);
          else if (e54.kind === `projectionDefinition` && [`string`, `array`, `value`].includes(i3.kind) || [`color`, `formatted`, `resolvedImage`].includes(e54.kind) && [`value`, `string`].includes(i3.kind) || [`padding`, `numberArray`].includes(e54.kind) && [`value`, `number`, `array`].includes(i3.kind) || e54.kind === `colorArray` && [`value`, `string`, `array`].includes(i3.kind) || e54.kind === `variableAnchorOffsetCollection` && [`value`, `array`].includes(i3.kind)) n4 = r2(n4, e54, t2.typeAnnotation || `coerce`);
          else if (this.checkSubtype(e54, i3)) return null;
        }
        if (!(n4 instanceof Dt) && n4.type.kind !== `resolvedImage` && this._isConstant(n4)) {
          let e54 = new kt();
          try {
            n4 = new Dt(n4.type, n4.evaluate(e54));
          } catch (e55) {
            return this.error(e55.message), null;
          }
        }
        return n4;
      }
      return this.error(`Unknown expression "${n3}". If you wanted a literal array, use ["literal", [...]].`, 0);
    }
    return e53 === void 0 ? this.error(`'undefined' value invalid. Use null instead.`) : typeof e53 == `object` ? this.error(`Bare objects invalid. Use ["literal", {...}] instead.`) : this.error(`Expected an array, but found ${typeof e53} instead.`);
  }
  concat(t2, n2, r2) {
    let i2 = typeof t2 == `number` ? this.path.concat(t2) : this.path, a2 = r2 ? this.scope.concat(r2) : this.scope;
    return new e35(this.registry, this._isConstant, i2, n2 || null, a2, this.errors);
  }
  error(e53, ...t2) {
    let n2 = `${this.key}${t2.map((e54) => `[${e54}]`).join(``)}`;
    this.errors.push(new Mr(n2, e53));
  }
  checkSubtype(e53, t2) {
    let n2 = Ie(e53, t2);
    return n2 && this.error(n2), n2;
  }
};
var Fr = class e36 {
  constructor(e53, t2, n2, r2, i2) {
    this.name = e53, this.type = t2, this._evaluate = n2, this.args = r2, this.key = i2;
  }
  evaluate(e53) {
    return this._evaluate(e53, this.args, this.key);
  }
  eachChild(e53) {
    this.args.forEach(e53);
  }
  outputDefined() {
    return false;
  }
  static parse(t2, n2) {
    let r2 = t2[0], i2 = e36.definitions[r2];
    if (!i2) return n2.error(`Unknown expression "${r2}". If you wanted a literal array, use ["literal", [...]].`, 0);
    let a2 = Array.isArray(i2) ? i2[0] : i2.type, o2 = Array.isArray(i2) ? [[i2[1], i2[2]]] : i2.overloads, s2 = o2.filter(([e53]) => !Array.isArray(e53) || e53.length === t2.length - 1), c2 = null;
    for (let [i3, o3] of s2) {
      c2 = new Pr(n2.registry, Hr, n2.path, null, n2.scope);
      let s3 = [], l2 = false;
      for (let e53 = 1; e53 < t2.length; e53++) {
        let n3 = t2[e53], r3 = Array.isArray(i3) ? i3[e53 - 1] : i3.type, a3 = c2.parse(n3, 1 + s3.length, r3);
        if (!a3) {
          l2 = true;
          break;
        }
        s3.push(a3);
      }
      if (!l2) {
        if (Array.isArray(i3) && i3.length !== s3.length) c2.error(`Expected ${i3.length} arguments, but found ${s3.length} instead.`);
        else {
          for (let e53 = 0; e53 < s3.length; e53++) {
            let t3 = Array.isArray(i3) ? i3[e53] : i3.type, n3 = s3[e53];
            c2.concat(e53 + 1).checkSubtype(t3, n3.type);
          }
          if (c2.errors.length === 0) return new e36(r2, a2, o3, s3, n2.key);
        }
      }
    }
    if (s2.length === 1) n2.errors.push(...c2.errors);
    else {
      let e53 = (s2.length ? s2 : o2).map(([e54]) => Vr(e54)).join(` | `), r3 = [];
      for (let e54 = 1; e54 < t2.length; e54++) {
        let i3 = n2.parse(t2[e54], 1 + r3.length);
        if (!i3) return null;
        r3.push(z(i3.type));
      }
      n2.error(`Expected arguments of type ${e53}, but found (${r3.join(`, `)}) instead.`);
    }
    return null;
  }
  static register(t2, n2) {
    e36.definitions = n2;
    for (let r2 in n2) t2[r2] = e36;
  }
};
function Ir(e53, [t2, n2, r2, i2], a2) {
  t2 = t2.evaluate(e53), n2 = n2.evaluate(e53), r2 = r2.evaluate(e53);
  let o2 = i2 ? i2.evaluate(e53) : 1, s2 = wt(t2, n2, r2, o2);
  if (s2) throw new H(s2, a2);
  return new V(t2 / 255, n2 / 255, r2 / 255, o2, false);
}
function Lr(e53, t2) {
  return e53 in t2 && t2[e53] !== void 0;
}
function Rr(e53, t2) {
  let n2 = t2[e53];
  return n2 === void 0 ? null : n2;
}
function zr(e53, t2, n2, r2) {
  for (; n2 <= r2; ) {
    let i2 = n2 + r2 >> 1;
    if (t2[i2] === e53) return true;
    t2[i2] > e53 ? r2 = i2 - 1 : n2 = i2 + 1;
  }
  return false;
}
function Br(e53) {
  return { type: e53 };
}
Fr.register(jr, { error: [Ee, [I], (e53, [t2], n2) => {
  throw new H(t2.evaluate(e53), n2);
}], typeof: [I, [R], (e53, [t2]) => z(U(t2.evaluate(e53)))], "to-rgba": [Pe(F, 4), [Ce], (e53, [t2]) => {
  let [n2, r2, i2, a2] = t2.evaluate(e53).rgb;
  return [n2 * 255, r2 * 255, i2 * 255, a2];
}], rgb: [Ce, [F, F, F], Ir], rgba: [Ce, [F, F, F, F], Ir], has: { type: L, overloads: [[[I], (e53, [t2]) => Lr(t2.evaluate(e53), e53.properties())], [[I, Te], (e53, [t2, n2]) => Lr(t2.evaluate(e53), n2.evaluate(e53))]] }, get: { type: R, overloads: [[[I], (e53, [t2]) => Rr(t2.evaluate(e53), e53.properties())], [[I, Te], (e53, [t2, n2]) => Rr(t2.evaluate(e53), n2.evaluate(e53))]] }, "feature-state": [R, [I], (e53, [t2]) => Rr(t2.evaluate(e53), e53.featureState || {})], properties: [Te, [], (e53) => e53.properties()], "geometry-type": [I, [], (e53) => e53.geometryType()], id: [R, [], (e53) => e53.id()], zoom: [F, [], (e53) => e53.globals.zoom], "heatmap-density": [F, [], (e53) => e53.globals.heatmapDensity || 0], elevation: [F, [], (e53) => e53.globals.elevation || 0], "line-progress": [F, [], (e53) => e53.globals.lineProgress || 0], accumulated: [R, [], (e53) => e53.globals.accumulated === void 0 ? null : e53.globals.accumulated], "+": [F, Br(F), (e53, t2) => {
  let n2 = 0;
  for (let r2 of t2) n2 += r2.evaluate(e53);
  return n2;
}], "*": [F, Br(F), (e53, t2) => {
  let n2 = 1;
  for (let r2 of t2) n2 *= r2.evaluate(e53);
  return n2;
}], "-": { type: F, overloads: [[[F, F], (e53, [t2, n2]) => t2.evaluate(e53) - n2.evaluate(e53)], [[F], (e53, [t2]) => -t2.evaluate(e53)]] }, "/": [F, [F, F], (e53, [t2, n2]) => t2.evaluate(e53) / n2.evaluate(e53)], "%": [F, [F, F], (e53, [t2, n2]) => t2.evaluate(e53) % n2.evaluate(e53)], ln2: [F, [], () => Math.LN2], pi: [F, [], () => Math.PI], e: [F, [], () => Math.E], "^": [F, [F, F], (e53, [t2, n2]) => t2.evaluate(e53) ** +n2.evaluate(e53)], sqrt: [F, [F], (e53, [t2]) => Math.sqrt(t2.evaluate(e53))], log10: [F, [F], (e53, [t2]) => Math.log(t2.evaluate(e53)) / Math.LN10], ln: [F, [F], (e53, [t2]) => Math.log(t2.evaluate(e53))], log2: [F, [F], (e53, [t2]) => Math.log(t2.evaluate(e53)) / Math.LN2], sin: [F, [F], (e53, [t2]) => Math.sin(t2.evaluate(e53))], cos: [F, [F], (e53, [t2]) => Math.cos(t2.evaluate(e53))], tan: [F, [F], (e53, [t2]) => Math.tan(t2.evaluate(e53))], asin: [F, [F], (e53, [t2]) => Math.asin(t2.evaluate(e53))], acos: [F, [F], (e53, [t2]) => Math.acos(t2.evaluate(e53))], atan: [F, [F], (e53, [t2]) => Math.atan(t2.evaluate(e53))], min: [F, Br(F), (e53, t2) => Math.min(...t2.map((t3) => t3.evaluate(e53)))], max: [F, Br(F), (e53, t2) => Math.max(...t2.map((t3) => t3.evaluate(e53)))], abs: [F, [F], (e53, [t2]) => Math.abs(t2.evaluate(e53))], round: [F, [F], (e53, [t2]) => {
  let n2 = t2.evaluate(e53);
  return n2 < 0 ? -Math.round(-n2) : Math.round(n2);
}], floor: [F, [F], (e53, [t2]) => Math.floor(t2.evaluate(e53))], ceil: [F, [F], (e53, [t2]) => Math.ceil(t2.evaluate(e53))], "filter-==": [L, [I, R], (e53, [t2, n2]) => e53.properties()[t2.value] === n2.value], "filter-id-==": [L, [R], (e53, [t2]) => e53.id() === t2.value], "filter-type-==": [L, [I], (e53, [t2]) => e53.geometryType() === t2.value], "filter-<": [L, [I, R], (e53, [t2, n2]) => {
  let r2 = e53.properties()[t2.value], i2 = n2.value;
  return typeof r2 == typeof i2 && r2 < i2;
}], "filter-id-<": [L, [R], (e53, [t2]) => {
  let n2 = e53.id(), r2 = t2.value;
  return typeof n2 == typeof r2 && n2 < r2;
}], "filter->": [L, [I, R], (e53, [t2, n2]) => {
  let r2 = e53.properties()[t2.value], i2 = n2.value;
  return typeof r2 == typeof i2 && r2 > i2;
}], "filter-id->": [L, [R], (e53, [t2]) => {
  let n2 = e53.id(), r2 = t2.value;
  return typeof n2 == typeof r2 && n2 > r2;
}], "filter-<=": [L, [I, R], (e53, [t2, n2]) => {
  let r2 = e53.properties()[t2.value], i2 = n2.value;
  return typeof r2 == typeof i2 && r2 <= i2;
}], "filter-id-<=": [L, [R], (e53, [t2]) => {
  let n2 = e53.id(), r2 = t2.value;
  return typeof n2 == typeof r2 && n2 <= r2;
}], "filter->=": [L, [I, R], (e53, [t2, n2]) => {
  let r2 = e53.properties()[t2.value], i2 = n2.value;
  return typeof r2 == typeof i2 && r2 >= i2;
}], "filter-id->=": [L, [R], (e53, [t2]) => {
  let n2 = e53.id(), r2 = t2.value;
  return typeof n2 == typeof r2 && n2 >= r2;
}], "filter-has": [L, [R], (e53, [t2]) => {
  let n2 = t2.value, r2 = e53.properties();
  return n2 in r2 && r2[n2] !== void 0;
}], "filter-has-id": [L, [], (e53) => e53.id() !== null && e53.id() !== void 0], "filter-type-in": [L, [Pe(I)], (e53, [t2]) => t2.value.indexOf(e53.geometryType()) >= 0], "filter-id-in": [L, [Pe(R)], (e53, [t2]) => t2.value.indexOf(e53.id()) >= 0], "filter-in-small": [L, [I, Pe(R)], (e53, [t2, n2]) => n2.value.indexOf(e53.properties()[t2.value]) >= 0], "filter-in-large": [L, [I, Pe(R)], (e53, [t2, n2]) => zr(e53.properties()[t2.value], n2.value, 0, n2.value.length - 1)], all: { type: L, overloads: [[[L, L], (e53, [t2, n2]) => t2.evaluate(e53) && n2.evaluate(e53)], [Br(L), (e53, t2) => {
  for (let n2 of t2) if (!n2.evaluate(e53)) return false;
  return true;
}]] }, any: { type: L, overloads: [[[L, L], (e53, [t2, n2]) => t2.evaluate(e53) || n2.evaluate(e53)], [Br(L), (e53, t2) => {
  for (let n2 of t2) if (n2.evaluate(e53)) return true;
  return false;
}]] }, "!": [L, [L], (e53, [t2]) => !t2.evaluate(e53)], "is-supported-script": [L, [I], (e53, [t2]) => {
  let n2 = e53.globals && e53.globals.isSupportedScript;
  return !n2 || n2(t2.evaluate(e53));
}], upcase: [I, [I], (e53, [t2]) => t2.evaluate(e53).toUpperCase()], downcase: [I, [I], (e53, [t2]) => t2.evaluate(e53).toLowerCase()], concat: [I, Br(R), (e53, t2) => t2.map((t3) => Et(t3.evaluate(e53))).join(``)], split: [Pe(I), [I, I], (e53, [t2, n2]) => t2.evaluate(e53).split(n2.evaluate(e53))], join: [I, [Pe(I), I], (e53, [t2, n2]) => t2.evaluate(e53).join(n2.evaluate(e53))], "resolved-locale": [I, [De], (e53, [t2]) => t2.evaluate(e53).resolvedLocale()] });
function Vr(e53) {
  return Array.isArray(e53) ? `(${e53.map(z).join(`, `)})` : `(${z(e53.type)}...)`;
}
function Hr(e53) {
  if (e53 instanceof Jt) return Hr(e53.boundExpression);
  if (e53 instanceof Fr && e53.name === `error` || e53 instanceof Cn || e53 instanceof er || e53 instanceof Or || e53 instanceof Ar) return false;
  let t2 = e53 instanceof Kt || e53 instanceof Wt, n2 = true;
  return e53.eachChild((e54) => {
    n2 &&= t2 ? Hr(e54) : e54 instanceof Dt;
  }), n2 ? Ur(e53) && Gr(e53, [`zoom`, `heatmap-density`, `elevation`, `line-progress`, `accumulated`, `is-supported-script`]) : false;
}
function Ur(e53) {
  if (e53 instanceof Fr && (e53.name === `get` && e53.args.length === 1 || e53.name === `feature-state` || e53.name === `has` && e53.args.length === 1 || e53.name === `properties` || e53.name === `geometry-type` || e53.name === `id` || /^filter-/.test(e53.name)) || e53 instanceof er || e53 instanceof Or) return false;
  let t2 = true;
  return e53.eachChild((e54) => {
    t2 && !Ur(e54) && (t2 = false);
  }), t2;
}
function Wr(e53) {
  if (e53 instanceof Fr && e53.name === `feature-state`) return false;
  let t2 = true;
  return e53.eachChild((e54) => {
    t2 && !Wr(e54) && (t2 = false);
  }), t2;
}
function Gr(e53, t2) {
  if (e53 instanceof Fr && t2.indexOf(e53.name) >= 0) return false;
  let n2 = true;
  return e53.eachChild((e54) => {
    n2 && !Gr(e54, t2) && (n2 = false);
  }), n2;
}
function Kr(e53) {
  return e53[`property-type`] === `data-driven` || e53[`property-type`] === `cross-faded-data-driven`;
}
function qr(e53) {
  return !!e53.expression && e53.expression.parameters.indexOf(`zoom`) > -1;
}
function Jr(e53) {
  return !!e53.expression && e53.expression.interpolated;
}
var Yr = /^(.*)-transition$/;
function Xr(e53, ...t2) {
  for (let n2 of t2) for (let t3 in n2) e53[t3] = n2[t3];
  return e53;
}
function W(e53) {
  return e53 instanceof Number ? `number` : e53 instanceof String ? `string` : e53 instanceof Boolean ? `boolean` : Array.isArray(e53) ? `array` : e53 === null ? `null` : typeof e53;
}
function Zr(e53) {
  return typeof e53 == `object` && !!e53 && !Array.isArray(e53) && U(e53) === Te;
}
function Qr(e53) {
  return e53;
}
function $r(e53) {
  switch (e53.type) {
    case `color`:
      return V.parse;
    case `padding`:
      return gt.parse;
    case `numberArray`:
      return _t.parse;
    case `colorArray`:
      return vt.parse;
    default:
      return null;
  }
}
function ei(e53) {
  switch (e53) {
    case `exponential`:
      return ai;
    case `interval`:
      return ii;
    case `categorical`:
      return ri;
    case `identity`:
      return oi;
    default:
      throw Error(`Unknown function type "${e53}"`);
  }
}
function ti(e53, t2) {
  let n2 = e53.stops && typeof e53.stops[0][0] == `object`, r2 = n2 || e53.property !== void 0, i2 = n2 || !r2, a2 = e53.type || (Jr(t2) ? `exponential` : `interval`), o2 = $r(t2);
  if (o2 && (e53 = Xr({}, e53), e53.stops && (e53.stops = e53.stops.map((e54) => [e54[0], o2(e54[1])])), e53.default ? e53.default = o2(e53.default) : e53.default = o2(t2.default)), e53.colorSpace && !ft(e53.colorSpace)) throw Error(`Unknown color space: "${e53.colorSpace}"`);
  let s2 = ei(a2), c2, l2;
  if (a2 === `categorical`) {
    c2 = /* @__PURE__ */ Object.create(null);
    for (let t3 of e53.stops) c2[t3[0]] = t3[1];
    l2 = typeof e53.stops[0][0];
  }
  if (n2) {
    let n3 = {}, r3 = [];
    for (let t3 = 0; t3 < e53.stops.length; t3++) {
      let i4 = e53.stops[t3], a4 = i4[0].zoom;
      n3[a4] === void 0 && (n3[a4] = { zoom: a4, type: e53.type, property: e53.property, default: e53.default, stops: [] }, r3.push(a4)), n3[a4].stops.push([i4[0].value, i4[1]]);
    }
    let i3 = [];
    for (let e54 of r3) i3.push([n3[e54].zoom, ti(n3[e54], t2)]);
    let a3 = { name: `linear` };
    return { kind: `composite`, interpolationType: a3, interpolationFactor: Nt.interpolationFactor.bind(void 0, a3), zoomStops: i3.map((e54) => e54[0]), evaluate({ zoom: n4 }, r4) {
      return ai({ stops: i3, base: e53.base }, t2, n4).evaluate(n4, r4);
    } };
  }
  if (i2) {
    let n3 = a2 === `exponential` ? { name: `exponential`, base: e53.base === void 0 ? 1 : e53.base } : null;
    return { kind: `camera`, interpolationType: n3, interpolationFactor: Nt.interpolationFactor.bind(void 0, n3), zoomStops: e53.stops.map((e54) => e54[0]), evaluate: ({ zoom: n4 }) => s2(e53, t2, n4, c2, l2) };
  }
  return { kind: `source`, evaluate(n3, r3) {
    let i3 = r3 && r3.properties ? r3.properties[e53.property] : void 0;
    return i3 === void 0 ? ni(e53.default, t2.default) : s2(e53, t2, i3, c2, l2);
  } };
}
function ni(e53, t2, n2) {
  if (e53 !== void 0) return e53;
  if (t2 !== void 0) return t2;
  if (n2 !== void 0) return n2;
}
function ri(e53, t2, n2, r2, i2) {
  return ni(typeof n2 === i2 ? r2[n2] : void 0, e53.default, t2.default);
}
function ii(e53, t2, n2) {
  if (W(n2) !== `number`) return ni(e53.default, t2.default);
  let r2 = e53.stops.length;
  if (r2 === 1 || n2 <= e53.stops[0][0]) return e53.stops[0][1];
  if (n2 >= e53.stops[r2 - 1][0]) return e53.stops[r2 - 1][1];
  let i2 = At(e53.stops.map((e54) => e54[0]), n2, ``);
  return e53.stops[i2][1];
}
function ai(e53, t2, n2) {
  let r2 = e53.base === void 0 ? 1 : e53.base;
  if (W(n2) !== `number`) return ni(e53.default, t2.default);
  let i2 = e53.stops.length;
  if (i2 === 1 || n2 <= e53.stops[0][0]) return e53.stops[0][1];
  if (n2 >= e53.stops[i2 - 1][0]) return e53.stops[i2 - 1][1];
  let a2 = At(e53.stops.map((e54) => e54[0]), n2, ``), o2 = si(n2, r2, e53.stops[a2][0], e53.stops[a2 + 1][0]), s2 = e53.stops[a2][1], c2 = e53.stops[a2 + 1][1], l2 = Ft[t2.type] || Qr;
  return typeof s2.evaluate == `function` ? { evaluate(...t3) {
    let n3 = s2.evaluate.apply(void 0, t3), r3 = c2.evaluate.apply(void 0, t3);
    if (n3 !== void 0 && r3 !== void 0) return l2(n3, r3, o2, e53.colorSpace);
  } } : l2(s2, c2, o2, e53.colorSpace);
}
function oi(e53, t2, n2) {
  switch (t2.type) {
    case `color`:
      n2 = V.parse(n2);
      break;
    case `formatted`:
      n2 = ht.fromString(n2.toString());
      break;
    case `resolvedImage`:
      n2 = xt.fromString(n2.toString());
      break;
    case `padding`:
      n2 = gt.parse(n2);
      break;
    case `colorArray`:
      n2 = vt.parse(n2);
      break;
    case `numberArray`:
      n2 = _t.parse(n2);
      break;
    default:
      W(n2) !== t2.type && (t2.type !== `enum` || !t2.values[n2]) && (n2 = void 0);
  }
  return ni(n2, e53.default, t2.default);
}
function si(e53, t2, n2, r2) {
  let i2 = r2 - n2, a2 = e53 - n2;
  return i2 === 0 ? 0 : t2 === 1 ? a2 / i2 : (t2 ** +a2 - 1) / (t2 ** +i2 - 1);
}
function ci(e53) {
  return { result: `success`, value: e53 };
}
function li(e53) {
  return { result: `error`, value: e53 };
}
var ui = class {
  constructor(e53, t2, n2, r2) {
    this.expression = e53, this._warningHistory = {}, this._evaluator = new kt(), this._defaultValue = n2 ? wi(n2) : null, this._enumValues = n2 && n2.type === `enum` ? n2.values : null, this._globalState = r2, this._rootKey = t2;
  }
  evaluateWithoutErrorHandling(e53, t2, n2, r2, i2, a2) {
    return this._globalState && (e53 = Ti(e53, this._globalState)), this._evaluator.globals = e53, this._evaluator.feature = t2, this._evaluator.featureState = n2, this._evaluator.canonical = r2, this._evaluator.availableImages = i2 || null, this._evaluator.formattedSection = a2, this.expression.evaluate(this._evaluator);
  }
  evaluate(e53, t2, n2, r2, i2, a2) {
    this._globalState && (e53 = Ti(e53, this._globalState)), this._evaluator.globals = e53, this._evaluator.feature = t2 || null, this._evaluator.featureState = n2 || null, this._evaluator.canonical = r2, this._evaluator.availableImages = i2 || null, this._evaluator.formattedSection = a2 || null;
    try {
      let e54 = this.expression.evaluate(this._evaluator);
      if (e54 == null || typeof e54 == `number` && e54 !== e54) return this._defaultValue;
      if (this._enumValues && !(e54 in this._enumValues)) throw new H(`Expected value to be one of ${Object.keys(this._enumValues).map((e55) => JSON.stringify(e55)).join(`, `)}, but found ${JSON.stringify(e54)} instead.`, ``);
      return e54;
    } catch (e54) {
      let t3 = e54 instanceof H ? e54.path : ``, n3 = `${t3}|${e54.message}`;
      return this._warningHistory[n3] || (this._warningHistory[n3] = true, typeof console < `u` && console.warn(di(this._rootKey, t3, e54.message, this._defaultValue))), this._defaultValue;
    }
  }
};
function di(e53, t2, n2, r2) {
  return `${e53}${t2}: ${n2}${r2 == null ? `` : ` Falling back to ${String(r2)}.`}`;
}
function fi(e53) {
  if (!e53) throw Error(`rootKey must identify the location of the expression in the style JSON, e.g. "layers[3].paint.line-width".`);
}
function pi(e53) {
  return Array.isArray(e53) && e53.length > 0 && typeof e53[0] == `string` && e53[0] in jr;
}
function mi(e53, t2, n2, r2) {
  fi(t2);
  let i2 = new Pr(jr, Hr, [], n2 ? Ci(n2) : void 0), a2 = i2.parse(e53, void 0, void 0, void 0, n2 && n2.type === `string` ? { typeAnnotation: `coerce` } : void 0);
  return a2 ? ci(new ui(a2, t2, n2, r2)) : li(i2.errors);
}
var hi = class {
  constructor(e53, t2, n2) {
    this.kind = e53, this._styleExpression = t2, this.isStateDependent = e53 !== `constant` && !Wr(t2.expression), this.globalStateRefs = Si(t2.expression), this._globalState = n2;
  }
  evaluateWithoutErrorHandling(e53, t2, n2, r2, i2, a2) {
    return this._globalState && (e53 = Ti(e53, this._globalState)), this._styleExpression.evaluateWithoutErrorHandling(e53, t2, n2, r2, i2, a2);
  }
  evaluate(e53, t2, n2, r2, i2, a2) {
    return this._globalState && (e53 = Ti(e53, this._globalState)), this._styleExpression.evaluate(e53, t2, n2, r2, i2, a2);
  }
};
var gi = class {
  constructor(e53, t2, n2, r2, i2) {
    this.kind = e53, this.zoomStops = n2, this._styleExpression = t2, this.isStateDependent = e53 !== `camera` && !Wr(t2.expression), this.globalStateRefs = Si(t2.expression), this.interpolationType = r2, this._globalState = i2;
  }
  evaluateWithoutErrorHandling(e53, t2, n2, r2, i2, a2) {
    return this._globalState && (e53 = Ti(e53, this._globalState)), this._styleExpression.evaluateWithoutErrorHandling(e53, t2, n2, r2, i2, a2);
  }
  evaluate(e53, t2, n2, r2, i2, a2) {
    return this._globalState && (e53 = Ti(e53, this._globalState)), this._styleExpression.evaluate(e53, t2, n2, r2, i2, a2);
  }
  interpolationFactor(e53, t2, n2) {
    return this.interpolationType ? Nt.interpolationFactor(this.interpolationType, e53, t2, n2) : 0;
  }
};
function _i(e53) {
  return e53._styleExpression !== void 0;
}
function vi(e53, t2, n2, r2) {
  let i2 = mi(e53, t2, n2, r2);
  if (i2.result === `error`) return i2;
  let a2 = i2.value.expression, o2 = Ur(a2);
  if (!o2 && !Kr(n2)) return li([new Mr(``, `data expressions not supported`)]);
  let s2 = Gr(a2, [`zoom`]);
  if (!s2 && !qr(n2)) return li([new Mr(``, `zoom expressions not supported`)]);
  let c2 = xi(a2);
  if (!c2 && !s2) return li([new Mr(``, `"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.`)]);
  if (c2 instanceof Mr) return li([c2]);
  if (c2 instanceof Nt && !Jr(n2)) return li([new Mr(``, `"interpolate" expressions cannot be used with this property`)]);
  if (!c2) return ci(o2 ? new hi(`constant`, i2.value, r2) : new hi(`source`, i2.value, r2));
  let l2 = c2 instanceof Nt ? c2.interpolation : void 0;
  return ci(o2 ? new gi(`camera`, i2.value, c2.labels, l2, r2) : new gi(`composite`, i2.value, c2.labels, l2, r2));
}
var yi = class e37 {
  constructor(e53, t2, n2) {
    this.isStateDependent = false, this.globalStateRefs = /* @__PURE__ */ new Set(), this._globalState = null, fi(t2), this._parameters = e53, this._specification = n2, this._rootKey = t2, this._defaultValue = wi(n2), this._warningHistory = {};
    let r2 = ti(this._parameters, this._specification);
    this.kind = r2.kind, this.interpolationFactor = r2.interpolationFactor, this.zoomStops = r2.zoomStops, this.interpolationType = r2.interpolationType, this._innerEvaluate = r2.evaluate;
  }
  evaluate(e53, t2) {
    try {
      return this._innerEvaluate(e53, t2);
    } catch (e54) {
      let t3 = e54 instanceof Error ? e54.message : String(e54), n2 = `|${t3}`;
      return this._warningHistory[n2] || (this._warningHistory[n2] = true, typeof console < `u` && console.warn(di(this._rootKey, ``, t3, this._defaultValue))), this._defaultValue;
    }
  }
  static deserialize(t2) {
    return new e37(t2._parameters, t2._rootKey, t2._specification);
  }
  static serialize(e53) {
    return { _parameters: e53._parameters, _specification: e53._specification, _rootKey: e53._rootKey };
  }
};
function bi(e53, t2, n2, r2) {
  if (Zr(e53)) return new yi(e53, t2, n2);
  if (pi(e53)) {
    let i2 = vi(e53, t2, n2, r2);
    if (i2.result === `error`) throw Error(i2.value.map((e54) => `${e54.key}: ${e54.message}`).join(`, `));
    return i2.value;
  }
  {
    let t3 = e53;
    return n2.type === `color` && typeof e53 == `string` ? t3 = V.parse(e53) : n2.type === `padding` && (typeof e53 == `number` || Array.isArray(e53)) ? t3 = gt.parse(e53) : n2.type === `numberArray` && (typeof e53 == `number` || Array.isArray(e53)) ? t3 = _t.parse(e53) : n2.type === `colorArray` && (typeof e53 == `string` || Array.isArray(e53)) ? t3 = vt.parse(e53) : n2.type === `variableAnchorOffsetCollection` && Array.isArray(e53) ? t3 = bt.parse(e53) : n2.type === `projectionDefinition` && typeof e53 == `string` && (t3 = St.parse(e53)), { globalStateRefs: /* @__PURE__ */ new Set(), _globalState: null, kind: `constant`, evaluate: () => t3 };
  }
}
function xi(e53) {
  let t2 = null;
  if (e53 instanceof qt) t2 = xi(e53.result);
  else if (e53 instanceof tn) {
    for (let n2 of e53.args) if (t2 = xi(n2), t2) break;
  } else (e53 instanceof jt || e53 instanceof Nt) && e53.input instanceof Fr && e53.input.name === `zoom` && (t2 = e53);
  return t2 instanceof Mr || e53.eachChild((e54) => {
    let n2 = xi(e54);
    n2 instanceof Mr ? t2 = n2 : !t2 && n2 ? t2 = new Mr(``, `"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.`) : t2 && n2 && t2 !== n2 && (t2 = new Mr(``, `Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.`));
  }), t2;
}
function Si(e53, t2 = /* @__PURE__ */ new Set()) {
  return e53 instanceof Ar && t2.add(e53.key), e53.eachChild((e54) => {
    Si(e54, t2);
  }), t2;
}
function Ci(e53) {
  let t2 = { color: Ce, string: I, number: F, enum: I, boolean: L, formatted: Oe, padding: ke, numberArray: je, colorArray: Ae, projectionDefinition: we, resolvedImage: Me, variableAnchorOffsetCollection: Ne };
  return e53.type === `array` ? Pe(t2[e53.value] || R, e53.length) : t2[e53.type];
}
function wi(e53) {
  if (e53.type === `color` && Zr(e53.default)) return new V(0, 0, 0, 0);
  switch (e53.type) {
    case `color`:
      return V.parse(e53.default) || null;
    case `padding`:
      return gt.parse(e53.default) || null;
    case `numberArray`:
      return _t.parse(e53.default) || null;
    case `colorArray`:
      return vt.parse(e53.default) || null;
    case `variableAnchorOffsetCollection`:
      return bt.parse(e53.default) || null;
    case `projectionDefinition`:
      return St.parse(e53.default) || null;
    default:
      return e53.default === void 0 ? null : e53.default;
  }
}
function Ti(e53, t2) {
  let { zoom: n2, heatmapDensity: r2, elevation: i2, lineProgress: a2, isSupportedScript: o2, accumulated: s2 } = e53 ?? {};
  return { zoom: n2, heatmapDensity: r2, elevation: i2, lineProgress: a2, isSupportedScript: o2, accumulated: s2, globalState: t2 };
}
function Ei(e53) {
  let t2 = false;
  for (let n2 of e53) {
    let e54 = Di(n2);
    if (e54 === `expression`) return `expression`;
    e54 === `legacy` && (t2 = true);
  }
  return t2 ? `legacy` : `neutral`;
}
function Di(e53) {
  if (typeof e53 == `boolean`) return `neutral`;
  if (!Array.isArray(e53) || e53.length === 0) return `legacy`;
  switch (e53[0]) {
    case `has`:
      return e53.length < 2 || e53[1] === `$id` || e53[1] === `$type` ? `legacy` : e53.length === 2 ? `neutral` : `expression`;
    case `in`:
      return e53.length >= 3 && (typeof e53[1] != `string` || Array.isArray(e53[2])) ? `expression` : `legacy`;
    case `!in`:
    case `!has`:
      return `legacy`;
    case `==`:
    case `!=`:
    case `>`:
    case `>=`:
    case `<`:
    case `<=`:
      return e53.length !== 3 || Array.isArray(e53[1]) || Array.isArray(e53[2]) ? `expression` : `legacy`;
    case `none`:
      return `legacy`;
    case `any`:
    case `all`:
      return Ei(e53.slice(1));
    default:
      return `expression`;
  }
}
function Oi(e53) {
  return Di(e53) !== `legacy`;
}
function ki(e53) {
  return e53 === `$type` ? [`geometry-type`] : e53 === `$id` ? [`id`] : [`get`, e53];
}
function Ai(e53) {
  switch (e53[0]) {
    case `==`:
    case `!=`:
    case `<`:
    case `<=`:
    case `>`:
    case `>=`:
      return e53.length !== 3 || typeof e53[1] != `string` ? null : [e53[0], ki(e53[1]), e53[2]];
    case `in`:
    case `!in`: {
      if (e53.length < 2 || typeof e53[1] != `string`) return null;
      let t2 = [`in`, ki(e53[1]), [`literal`, e53.slice(2)]];
      return e53[0] === `!in` ? [`!`, t2] : t2;
    }
    case `has`:
    case `!has`: {
      if (e53.length !== 2 || typeof e53[1] != `string` || e53[1] === `$type` || e53[1] === `$id`) return null;
      let t2 = [`has`, e53[1]];
      return e53[0] === `!has` ? [`!`, t2] : t2;
    }
    default:
      return null;
  }
}
function ji(e53) {
  if ((e53[0] === `<` || e53[0] === `<=` || e53[0] === `>` || e53[0] === `>=`) && e53[1] === `$type`) return `"$type" cannot be use with operator "${e53[0]}"`;
  let t2 = Ai(e53);
  return t2 ? `Mixing deprecated filter syntax with expression syntax is not supported. Replace ${JSON.stringify(e53)} with ${JSON.stringify(t2)}.` : `Mixing deprecated filter syntax with expression syntax is not supported. Convert ${JSON.stringify(e53)} to expression syntax.`;
}
function Mi(e53, t2, n2) {
  let r2 = n2[e53];
  return Array.isArray(r2) ? Oi(r2) ? Ni(r2, t2.concat(e53)) : { path: t2.concat(e53), legacyFilter: r2 } : null;
}
function Ni(e53, t2 = []) {
  if (!Array.isArray(e53) || e53.length < 1) return null;
  switch (e53[0]) {
    case `all`:
    case `any`:
    case `none`:
      for (let n2 = 1; n2 < e53.length; n2++) {
        let r2 = Mi(n2, t2, e53);
        if (r2) return r2;
      }
      break;
    case `!`: {
      let n2 = Mi(1, t2, e53);
      if (n2) return n2;
      break;
    }
    case `case`:
      for (let n2 = 1; n2 < e53.length - 1; n2 += 2) {
        let r2 = Mi(n2, t2, e53);
        if (r2) return r2;
      }
  }
  return null;
}
function Pi(e53, t2) {
  let n2 = Ni(e53);
  if (!n2 || typeof console > `u`) return;
  let r2 = n2.path.map((e54) => `[${e54}]`).join(``);
  console.warn(`${t2}${r2}: ${ji(n2.legacyFilter)}`);
}
var Fi = { type: `boolean`, default: false, transition: false, "property-type": `data-driven`, expression: { interpolated: false, parameters: [`zoom`, `feature`] } };
function Ii(e53, t2, n2) {
  if (e53 == null) return { filter: () => true, needGeometry: false, getGlobalStateRefs: () => /* @__PURE__ */ new Set() };
  Oi(e53) ? Pi(e53, t2) : e53 = zi(e53);
  let r2 = mi(e53, t2, Fi, n2);
  if (r2.result === `error`) throw Error(r2.value.map((e54) => `${e54.key}: ${e54.message}`).join(`, `));
  return { filter: (e54, t3, n3) => r2.value.evaluate(e54, t3, {}, n3), needGeometry: Ri(e53), getGlobalStateRefs: () => Si(r2.value.expression) };
}
function Li(e53, t2) {
  return e53 < t2 ? -1 : +(e53 > t2);
}
function Ri(e53) {
  if (!Array.isArray(e53)) return false;
  if (e53[0] === `within` || e53[0] === `distance`) return true;
  for (let t2 = 1; t2 < e53.length; t2++) if (Ri(e53[t2])) return true;
  return false;
}
function zi(e53) {
  if (!e53) return true;
  let t2 = e53[0];
  return e53.length <= 1 ? t2 !== `any` : t2 === `==` ? Bi(e53[1], e53[2], `==`) : t2 === `!=` ? Wi(Bi(e53[1], e53[2], `==`)) : t2 === `<` || t2 === `>` || t2 === `<=` || t2 === `>=` ? Bi(e53[1], e53[2], t2) : t2 === `any` ? Vi(e53.slice(1)) : t2 === `all` ? [`all`].concat(e53.slice(1).map(zi)) : t2 === `none` ? [`all`].concat(e53.slice(1).map(zi).map(Wi)) : t2 === `in` ? Hi(e53[1], e53.slice(2)) : t2 === `!in` ? Wi(Hi(e53[1], e53.slice(2))) : t2 === `has` ? Ui(e53[1]) : t2 !== `!has` || Wi(Ui(e53[1]));
}
function Bi(e53, t2, n2) {
  switch (e53) {
    case `$type`:
      return [`filter-type-${n2}`, t2];
    case `$id`:
      return [`filter-id-${n2}`, t2];
    default:
      return [`filter-${n2}`, e53, t2];
  }
}
function Vi(e53) {
  return [`any`].concat(e53.map(zi));
}
function Hi(e53, t2) {
  if (t2.length === 0) return false;
  switch (e53) {
    case `$type`:
      return [`filter-type-in`, [`literal`, t2]];
    case `$id`:
      return [`filter-id-in`, [`literal`, t2]];
    default:
      return t2.length > 200 && !t2.some((e54) => typeof e54 != typeof t2[0]) ? [`filter-in-large`, e53, [`literal`, t2.sort(Li)]] : [`filter-in-small`, e53, [`literal`, t2]];
  }
}
function Ui(e53) {
  switch (e53) {
    case `$type`:
      return true;
    case `$id`:
      return [`filter-has-id`];
    default:
      return [`filter-has`, e53];
  }
}
function Wi(e53) {
  return [`!`, e53];
}
function Gi(e53) {
  let t2 = typeof e53;
  if (t2 === `number` || t2 === `boolean` || t2 === `string` || e53 == null) return JSON.stringify(e53);
  if (Array.isArray(e53)) {
    let t3 = `[`;
    for (let n3 of e53) t3 += `${Gi(n3)},`;
    return `${t3}]`;
  }
  let n2 = Object.keys(e53).sort(), r2 = `{`;
  for (let t3 = 0; t3 < n2.length; t3++) r2 += `${JSON.stringify(n2[t3])}:${Gi(e53[n2[t3]])},`;
  return `${r2}}`;
}
function Ki(e53) {
  let t2 = ``;
  for (let n2 of xe) t2 += `/${Gi(e53[n2])}`;
  return t2;
}
function qi(e53, t2) {
  let n2 = {};
  for (let r3 = 0; r3 < e53.length; r3++) {
    let i2 = t2 && t2[e53[r3].id] || Ki(e53[r3]);
    t2 && (t2[e53[r3].id] = i2);
    let a2 = n2[i2];
    a2 ||= n2[i2] = [], a2.push(e53[r3]);
  }
  let r2 = [];
  for (let e54 in n2) r2.push(n2[e54]);
  return r2;
}
function Ji(e53) {
  let t2 = e53.key, n2 = e53.value;
  return n2 ? [new P(t2, n2, `constants have been deprecated as of v8`)] : [];
}
function Yi(e53) {
  return e53 instanceof Number || e53 instanceof String || e53 instanceof Boolean ? e53.valueOf() : e53;
}
function Xi(e53) {
  if (Array.isArray(e53)) return e53.map(Xi);
  if (e53 instanceof Object && !(e53 instanceof Number || e53 instanceof String || e53 instanceof Boolean)) {
    let t2 = {};
    for (let n2 in e53) t2[n2] = Xi(e53[n2]);
    return t2;
  }
  return Yi(e53);
}
function Zi(e53) {
  let t2 = e53.key, n2 = e53.value, r2 = e53.valueSpec || {}, i2 = e53.objectElementValidators || {}, a2 = e53.style, o2 = e53.styleSpec, s2 = e53.validateSpec, c2 = [], l2 = W(n2);
  if (l2 !== `object`) return [new P(t2, n2, `object expected, ${l2} found`)];
  for (let e54 in n2) {
    let l3 = e54.split(`.`)[0], u2 = rt(r2, l3) || r2[`*`], d2;
    if (rt(i2, l3)) d2 = i2[l3];
    else if (rt(r2, l3)) {
      if (n2[e54] === void 0) continue;
      d2 = s2;
    } else if (i2[`*`]) d2 = i2[`*`];
    else if (r2[`*`]) d2 = s2;
    else {
      c2.push(new P(t2, n2[e54], `unknown property "${e54}"`));
      continue;
    }
    c2 = c2.concat(d2({ key: (t2 && `${t2}.`) + e54, value: n2[e54], valueSpec: u2, style: a2, styleSpec: o2, object: n2, objectKey: e54, validateSpec: s2 }, n2));
  }
  for (let e54 in r2) i2[e54] || r2[e54].required && r2[e54].default === void 0 && n2[e54] === void 0 && c2.push(new P(t2, n2, `missing required property "${e54}"`));
  return c2;
}
function Qi(e53) {
  let t2 = e53.value, n2 = e53.valueSpec, r2 = e53.validateSpec, i2 = e53.style, a2 = e53.styleSpec, o2 = e53.key, s2 = e53.arrayElementValidator || r2;
  if (W(t2) !== `array`) return [new P(o2, t2, `array expected, ${W(t2)} found`)];
  if (n2.length && t2.length !== n2.length) return [new P(o2, t2, `array length ${n2.length} expected, length ${t2.length} found`)];
  let c2 = { type: n2.value, values: n2.values };
  a2.$version < 7 && (c2.function = n2.function), W(n2.value) === `object` && (c2 = n2.value);
  let l2 = [];
  for (let n3 = 0; n3 < t2.length; n3++) l2 = l2.concat(s2({ array: t2, arrayIndex: n3, value: t2[n3], valueSpec: c2, validateSpec: e53.validateSpec, style: i2, styleSpec: a2, key: `${o2}[${n3}]` }));
  return l2;
}
function $i(e53) {
  let t2 = e53.key, n2 = e53.value, r2 = e53.valueSpec, i2 = W(n2);
  return i2 === `number` && n2 !== n2 && (i2 = `NaN`), i2 === `number` ? `minimum` in r2 && n2 < r2.minimum ? [new P(t2, n2, `${n2} is less than the minimum value ${r2.minimum}`)] : `maximum` in r2 && n2 > r2.maximum ? [new P(t2, n2, `${n2} is greater than the maximum value ${r2.maximum}`)] : [] : [new P(t2, n2, `number expected, ${i2} found`)];
}
function ea(e53) {
  let t2 = e53.valueSpec, n2 = Yi(e53.value.type), r2, i2 = {}, a2, o2, s2 = n2 !== `categorical` && e53.value.property === void 0, c2 = !s2, l2 = W(e53.value.stops) === `array` && W(e53.value.stops[0]) === `array` && W(e53.value.stops[0][0]) === `object`, u2 = Zi({ key: e53.key, value: e53.value, valueSpec: e53.styleSpec.function, validateSpec: e53.validateSpec, style: e53.style, styleSpec: e53.styleSpec, objectElementValidators: { stops: d2, default: m2 } });
  return n2 === `identity` && s2 && u2.push(new P(e53.key, e53.value, `missing required property "property"`)), n2 !== `identity` && !e53.value.stops && u2.push(new P(e53.key, e53.value, `missing required property "stops"`)), n2 === `exponential` && e53.valueSpec.expression && !Jr(e53.valueSpec) && u2.push(new P(e53.key, e53.value, `exponential functions not supported`)), e53.styleSpec.$version >= 8 && (c2 && !Kr(e53.valueSpec) ? u2.push(new P(e53.key, e53.value, `property functions not supported`)) : s2 && !qr(e53.valueSpec) && u2.push(new P(e53.key, e53.value, `zoom functions not supported`))), (n2 === `categorical` || l2) && e53.value.property === void 0 && u2.push(new P(e53.key, e53.value, `"property" property is required`)), u2;
  function d2(e54) {
    if (n2 === `identity`) return [new P(e54.key, e54.value, `identity function may not have a "stops" property`)];
    let t3 = [], r3 = e54.value;
    return t3 = t3.concat(Qi({ key: e54.key, value: r3, valueSpec: e54.valueSpec, validateSpec: e54.validateSpec, style: e54.style, styleSpec: e54.styleSpec, arrayElementValidator: f2 })), W(r3) === `array` && r3.length === 0 && t3.push(new P(e54.key, r3, `array must have at least one stop`)), t3;
  }
  function f2(e54) {
    let n3 = [], r3 = e54.value, s3 = e54.key;
    if (W(r3) !== `array`) return [new P(s3, r3, `array expected, ${W(r3)} found`)];
    if (r3.length !== 2) return [new P(s3, r3, `array length 2 expected, length ${r3.length} found`)];
    if (l2) {
      if (W(r3[0]) !== `object`) return [new P(s3, r3, `object expected, ${W(r3[0])} found`)];
      if (r3[0].zoom === void 0) return [new P(s3, r3, `object stop key must have zoom`)];
      if (r3[0].value === void 0) return [new P(s3, r3, `object stop key must have value`)];
      if (o2 && o2 > Yi(r3[0].zoom)) return [new P(s3, r3[0].zoom, `stop zoom values must appear in ascending order`)];
      Yi(r3[0].zoom) !== o2 && (o2 = Yi(r3[0].zoom), a2 = void 0, i2 = {}), n3 = n3.concat(Zi({ key: `${s3}[0]`, value: r3[0], valueSpec: { zoom: {} }, validateSpec: e54.validateSpec, style: e54.style, styleSpec: e54.styleSpec, objectElementValidators: { zoom: $i, value: p2 } }));
    } else n3 = n3.concat(p2({ key: `${s3}[0]`, value: r3[0], valueSpec: {}, validateSpec: e54.validateSpec, style: e54.style, styleSpec: e54.styleSpec }, r3));
    return pi(Xi(r3[1])) ? n3.concat([new P(`${s3}[1]`, r3[1], `expressions are not allowed in function stops.`)]) : n3.concat(e54.validateSpec({ key: `${s3}[1]`, value: r3[1], valueSpec: t2, validateSpec: e54.validateSpec, style: e54.style, styleSpec: e54.styleSpec }));
  }
  function p2(e54, o3) {
    let s3 = W(e54.value), c3 = Yi(e54.value), l3 = e54.value === null ? o3 : e54.value;
    if (!r2) r2 = s3;
    else if (s3 !== r2) return [new P(e54.key, l3, `${s3} stop domain type must match previous stop domain type ${r2}`)];
    if (s3 !== `number` && s3 !== `string` && s3 !== `boolean`) return [new P(e54.key, l3, `stop domain value must be a number, string, or boolean`)];
    if (s3 !== `number` && n2 !== `categorical`) {
      let r3 = `number expected, ${s3} found`;
      return Kr(t2) && n2 === void 0 && (r3 += '\nIf you intended to use a categorical function, specify `"type": "categorical"`.'), [new P(e54.key, l3, r3)];
    }
    return n2 === `categorical` && s3 === `number` && (!isFinite(c3) || Math.floor(c3) !== c3) ? [new P(e54.key, l3, `integer expected, found ${c3}`)] : n2 !== `categorical` && s3 === `number` && a2 !== void 0 && c3 < a2 ? [new P(e54.key, l3, `stop domain values must appear in ascending order`)] : (a2 = c3, n2 === `categorical` && c3 in i2 ? [new P(e54.key, l3, `stop domain values must be unique`)] : (i2[c3] = true, []));
  }
  function m2(e54) {
    return e54.validateSpec({ key: e54.key, value: e54.value, valueSpec: t2, validateSpec: e54.validateSpec, style: e54.style, styleSpec: e54.styleSpec });
  }
}
function ta(e53) {
  let t2 = (e53.expressionContext === `property` ? vi : mi)(Xi(e53.value), e53.key, e53.valueSpec);
  if (t2.result === `error`) return t2.value.map((t3) => new P(`${e53.key}${t3.key}`, e53.value, t3.message));
  let n2 = t2.value.expression || t2.value._styleExpression.expression;
  if (e53.expressionContext === `property` && e53.propertyKey === `text-font` && !n2.outputDefined()) return [new P(e53.key, e53.value, `Invalid data expression for "${e53.propertyKey}". Output values must be contained as literals within the expression.`)];
  if (e53.expressionContext === `property` && e53.propertyType === `layout` && !Wr(n2)) return [new P(e53.key, e53.value, `"feature-state" data expressions are not supported with layout properties.`)];
  if (e53.expressionContext === `filter` && !Wr(n2)) return [new P(e53.key, e53.value, `"feature-state" data expressions are not supported with filters.`)];
  if (e53.expressionContext && e53.expressionContext.indexOf(`cluster`) === 0) {
    if (!Gr(n2, [`zoom`, `feature-state`])) return [new P(e53.key, e53.value, `"zoom" and "feature-state" expressions are not supported with cluster properties.`)];
    if (e53.expressionContext === `cluster-initial` && !Ur(n2)) return [new P(e53.key, e53.value, `Feature data expressions are not supported with initial expression part of cluster properties.`)];
  }
  return [];
}
function na(e53) {
  let t2 = e53.value, n2 = e53.key, r2 = W(t2);
  return r2 === `boolean` ? [] : [new P(n2, t2, `boolean expected, ${r2} found`)];
}
function ra(e53) {
  let t2 = e53.key, n2 = e53.value, r2 = W(n2);
  return r2 === `string` ? V.parse(String(n2)) ? [] : [new P(t2, n2, `color expected, "${n2}" found`)] : [new P(t2, n2, `color expected, ${r2} found`)];
}
function ia(e53) {
  let t2 = e53.key, n2 = e53.value, r2 = e53.valueSpec, i2 = [];
  return Array.isArray(r2.values) ? r2.values.indexOf(Yi(n2)) === -1 && i2.push(new P(t2, n2, `expected one of [${r2.values.join(`, `)}], ${JSON.stringify(n2)} found`)) : Object.keys(r2.values).indexOf(Yi(n2)) === -1 && i2.push(new P(t2, n2, `expected one of [${Object.keys(r2.values).join(`, `)}], ${JSON.stringify(n2)} found`)), i2;
}
function aa(e53, t2) {
  let n2 = e53;
  for (let e54 of t2) n2 = n2[e54];
  return n2;
}
function oa(e53, t2) {
  let n2 = Ni(t2);
  return n2 ? [new P(`${e53.key}${n2.path.map((e54) => `[${e54}]`).join(``)}`, aa(e53.value, n2.path), ji(n2.legacyFilter), null, `warning`)] : [];
}
function sa(e53) {
  let t2 = Xi(e53.value);
  return Oi(t2) ? [...oa(e53, t2), ...ta(Xr({}, e53, { expressionContext: `filter`, valueSpec: { value: `boolean` } }))] : ca(e53);
}
function ca(e53) {
  let t2 = e53.value, n2 = e53.key;
  if (W(t2) !== `array`) return [new P(n2, t2, `array expected, ${W(t2)} found`)];
  let r2 = e53.styleSpec, i2, a2 = [];
  if (t2.length < 1) return [new P(n2, t2, `filter array must have at least 1 element`)];
  switch (a2 = a2.concat(ia({ key: `${n2}[0]`, value: t2[0], valueSpec: r2.filter_operator, style: e53.style, styleSpec: e53.styleSpec })), Yi(t2[0])) {
    case `<`:
    case `<=`:
    case `>`:
    case `>=`:
      t2.length >= 2 && Yi(t2[1]) === `$type` && a2.push(new P(n2, t2, `"$type" cannot be use with operator "${t2[0]}"`));
    case `==`:
    case `!=`:
      t2.length !== 3 && a2.push(new P(n2, t2, `filter array for operator "${t2[0]}" must have 3 elements`));
    case `in`:
    case `!in`:
      t2.length >= 2 && (i2 = W(t2[1]), i2 !== `string` && a2.push(new P(`${n2}[1]`, t2[1], `string expected, ${i2} found`)));
      for (let o2 = 2; o2 < t2.length; o2++) i2 = W(t2[o2]), Yi(t2[1]) === `$type` ? a2 = a2.concat(ia({ key: `${n2}[${o2}]`, value: t2[o2], valueSpec: r2.geometry_type, style: e53.style, styleSpec: e53.styleSpec })) : i2 !== `string` && i2 !== `number` && i2 !== `boolean` && a2.push(new P(`${n2}[${o2}]`, t2[o2], `string, number, or boolean expected, ${i2} found`));
      break;
    case `any`:
    case `all`:
    case `none`:
      for (let r3 = 1; r3 < t2.length; r3++) a2 = a2.concat(ca({ key: `${n2}[${r3}]`, value: t2[r3], style: e53.style, styleSpec: e53.styleSpec }));
      break;
    case `has`:
    case `!has`:
      i2 = W(t2[1]), t2.length === 2 ? i2 !== `string` && a2.push(new P(`${n2}[1]`, t2[1], `string expected, ${i2} found`)) : a2.push(new P(n2, t2, `filter array for "${t2[0]}" operator must have 2 elements`));
  }
  return a2;
}
function la(e53, t2) {
  let n2 = e53.key, r2 = e53.validateSpec, i2 = e53.style, a2 = e53.styleSpec, o2 = e53.value, s2 = e53.objectKey, c2 = a2[`${t2}_${e53.layerType}`];
  if (!c2) return [];
  let l2 = s2.match(Yr);
  if (t2 === `paint` && l2 && c2[l2[1]] && c2[l2[1]].transition) return r2({ key: n2, value: o2, valueSpec: a2.transition, style: i2, styleSpec: a2 });
  let u2 = e53.valueSpec || c2[s2];
  if (!u2) return [new P(n2, o2, `unknown property "${s2}"`)];
  let d2;
  if (W(o2) === `string` && Kr(u2) && !u2.tokens && (d2 = /^{([^}]+)}$/.exec(o2))) return [new P(n2, o2, `"${s2}" does not support interpolation syntax
Use an identity property function instead: \`{ "type": "identity", "property": ${JSON.stringify(d2[1])} }\`.`)];
  let f2 = [];
  return e53.layerType === `symbol` && s2 === `text-font` && Zr(Xi(o2)) && Yi(o2.type) === `identity` && f2.push(new P(n2, o2, `"text-font" does not support identity functions`)), f2.concat(r2({ key: e53.key, value: o2, valueSpec: u2, style: i2, styleSpec: a2, expressionContext: `property`, propertyType: t2, propertyKey: s2 }));
}
function ua(e53) {
  return la(e53, `paint`);
}
function da(e53) {
  return la(e53, `layout`);
}
function fa(e53) {
  let t2 = [], n2 = e53.value, r2 = e53.key, i2 = e53.style, a2 = e53.styleSpec;
  if (W(n2) !== `object`) return [new P(r2, n2, `object expected, ${W(n2)} found`)];
  !n2.type && !n2.ref && t2.push(new P(r2, n2, `either "type" or "ref" is required`));
  let o2 = Yi(n2.type), s2 = Yi(n2.ref);
  if (n2.id) {
    let a3 = Yi(n2.id);
    for (let o3 = 0; o3 < e53.arrayIndex; o3++) {
      let e54 = i2.layers[o3];
      Yi(e54.id) === a3 && t2.push(new P(r2, n2.id, `duplicate layer id "${n2.id}", previously used at line ${e54.id.__line__}`));
    }
  }
  if (`ref` in n2) {
    [`type`, `source`, `source-layer`, `filter`, `layout`].forEach((e55) => {
      e55 in n2 && t2.push(new P(r2, n2[e55], `"${e55}" is prohibited for ref layers`));
    });
    let e54;
    i2.layers.forEach((t3) => {
      Yi(t3.id) === s2 && (e54 = t3);
    }), e54 ? e54.ref ? t2.push(new P(r2, n2.ref, `ref cannot reference another ref layer`)) : o2 = Yi(e54.type) : t2.push(new P(r2, n2.ref, `ref layer "${s2}" not found`));
  } else if (o2 !== `background`) {
    if (!n2.source) t2.push(new P(r2, n2, `missing required property "source"`));
    else {
      let e54 = i2.sources && i2.sources[n2.source], a3 = e54 && Yi(e54.type);
      e54 ? a3 === `vector` && o2 === `raster` ? t2.push(new P(r2, n2.source, `layer "${n2.id}" requires a raster source`)) : a3 !== `raster-dem` && o2 === `hillshade` || a3 !== `raster-dem` && o2 === `color-relief` ? t2.push(new P(r2, n2.source, `layer "${n2.id}" requires a raster-dem source`)) : a3 === `raster` && o2 !== `raster` ? t2.push(new P(r2, n2.source, `layer "${n2.id}" requires a vector source`)) : a3 === `vector` && !n2[`source-layer`] ? t2.push(new P(r2, n2, `layer "${n2.id}" must specify a "source-layer"`)) : a3 === `raster-dem` && o2 !== `hillshade` && o2 !== `color-relief` ? t2.push(new P(r2, n2.source, `raster-dem source can only be used with layer type 'hillshade' or 'color-relief'.`)) : o2 === `line` && n2.paint && n2.paint[`line-gradient`] && (a3 !== `geojson` || !e54.lineMetrics) && t2.push(new P(r2, n2, `layer "${n2.id}" specifies a line-gradient, which requires a GeoJSON source with \`lineMetrics\` enabled.`)) : t2.push(new P(r2, n2.source, `source "${n2.source}" not found`));
    }
  }
  return o2 === `raster` && n2.paint?.resampling && n2.paint?.[`raster-resampling`] && t2.push(new P(r2, n2.paint, `layer "${n2.id}" redundantly specifies "resampling" and "raster-resampling" paint properties, but only one is allowed. It is advised to use "resampling".`)), t2 = t2.concat(Zi({ key: r2, value: n2, valueSpec: a2.layer, style: e53.style, styleSpec: e53.styleSpec, validateSpec: e53.validateSpec, objectElementValidators: { "*"() {
    return [];
  }, type() {
    return e53.validateSpec({ key: `${r2}.type`, value: n2.type, valueSpec: a2.layer.type, style: e53.style, styleSpec: e53.styleSpec, validateSpec: e53.validateSpec, object: n2, objectKey: `type` });
  }, filter: sa, layout(e54) {
    return Zi({ layer: n2, key: e54.key, value: e54.value, style: e54.style, styleSpec: e54.styleSpec, validateSpec: e54.validateSpec, objectElementValidators: { "*"(e55) {
      return da(Xr({ layerType: o2 }, e55));
    } } });
  }, paint(e54) {
    return Zi({ layer: n2, key: e54.key, value: e54.value, style: e54.style, styleSpec: e54.styleSpec, validateSpec: e54.validateSpec, objectElementValidators: { "*"(e55) {
      return ua(Xr({ layerType: o2 }, e55));
    } } });
  } } })), t2;
}
function pa(e53) {
  let t2 = e53.value, n2 = e53.key, r2 = W(t2);
  return r2 === `string` ? [] : [new P(n2, t2, `string expected, ${r2} found`)];
}
function ma(e53) {
  let t2 = e53.sourceName ?? ``, n2 = e53.value, r2 = e53.styleSpec, i2 = r2.source_raster_dem, a2 = e53.style, o2 = [], s2 = W(n2);
  if (n2 === void 0) return o2;
  if (s2 !== `object`) return o2.push(new P(`source_raster_dem`, n2, `object expected, ${s2} found`)), o2;
  let c2 = Yi(n2.encoding) === `custom`, l2 = [`redFactor`, `greenFactor`, `blueFactor`, `baseShift`], u2 = e53.value.encoding ? `"${e53.value.encoding}"` : `Default`;
  for (let s3 in n2) !c2 && l2.includes(s3) ? o2.push(new P(s3, n2[s3], `In "${t2}": "${s3}" is only valid when "encoding" is set to "custom". ${u2} encoding found`)) : i2[s3] ? o2 = o2.concat(e53.validateSpec({ key: s3, value: n2[s3], valueSpec: i2[s3], validateSpec: e53.validateSpec, style: a2, styleSpec: r2 })) : o2.push(new P(s3, n2[s3], `unknown property "${s3}"`));
  return o2;
}
var ha = { promoteId: _a };
function ga(e53) {
  let t2 = e53.value, n2 = e53.key, r2 = e53.styleSpec, i2 = e53.style, a2 = e53.validateSpec;
  if (!t2.type) return [new P(n2, t2, `"type" is required`)];
  let o2 = Yi(t2.type), s2;
  switch (o2) {
    case `vector`:
    case `raster`:
      return s2 = Zi({ key: n2, value: t2, valueSpec: r2[`source_${o2.replace(`-`, `_`)}`], style: e53.style, styleSpec: r2, objectElementValidators: ha, validateSpec: a2 }), s2;
    case `raster-dem`:
      return s2 = ma({ sourceName: n2, value: t2, style: e53.style, styleSpec: r2, validateSpec: a2 }), s2;
    case `geojson`:
      if (s2 = Zi({ key: n2, value: t2, valueSpec: r2.source_geojson, style: i2, styleSpec: r2, validateSpec: a2, objectElementValidators: ha }), t2.cluster) for (let e54 in t2.clusterProperties) {
        let [r3, i3] = t2.clusterProperties[e54], o3 = typeof r3 == `string` ? [r3, [`accumulated`], [`get`, e54]] : r3;
        s2.push(...ta({ key: `${n2}.${e54}.map`, value: i3, validateSpec: a2, expressionContext: `cluster-map` })), s2.push(...ta({ key: `${n2}.${e54}.reduce`, value: o3, validateSpec: a2, expressionContext: `cluster-reduce` }));
      }
      return s2;
    case `video`:
      return Zi({ key: n2, value: t2, valueSpec: r2.source_video, style: i2, validateSpec: a2, styleSpec: r2 });
    case `image`:
      return Zi({ key: n2, value: t2, valueSpec: r2.source_image, style: i2, validateSpec: a2, styleSpec: r2 });
    case `canvas`:
      return [new P(n2, null, `Please use runtime APIs to add canvas sources, rather than including them in stylesheets.`, `source.canvas`)];
    default:
      return ia({ key: `${n2}.type`, value: t2.type, valueSpec: { values: [`vector`, `raster`, `raster-dem`, `geojson`, `video`, `image`] }, style: i2, validateSpec: a2, styleSpec: r2 });
  }
}
function _a({ key: e53, value: t2 }) {
  if (W(t2) === `string`) return pa({ key: e53, value: t2 });
  {
    let n2 = [];
    for (let r2 in t2) n2.push(...pa({ key: `${e53}.${r2}`, value: t2[r2] }));
    return n2;
  }
}
function va(e53) {
  let t2 = e53.value, n2 = e53.styleSpec, r2 = n2.light, i2 = e53.style, a2 = [], o2 = W(t2);
  if (t2 === void 0) return a2;
  if (o2 !== `object`) return a2 = a2.concat([new P(`light`, t2, `object expected, ${o2} found`)]), a2;
  for (let o3 in t2) {
    let s2 = o3.match(Yr);
    a2 = s2 && r2[s2[1]] && r2[s2[1]].transition ? a2.concat(e53.validateSpec({ key: o3, value: t2[o3], valueSpec: n2.transition, validateSpec: e53.validateSpec, style: i2, styleSpec: n2 })) : r2[o3] ? a2.concat(e53.validateSpec({ key: o3, value: t2[o3], valueSpec: r2[o3], validateSpec: e53.validateSpec, style: i2, styleSpec: n2 })) : a2.concat([new P(o3, t2[o3], `unknown property "${o3}"`)]);
  }
  return a2;
}
function ya(e53) {
  let t2 = e53.value, n2 = e53.styleSpec, r2 = n2.sky, i2 = e53.style, a2 = W(t2);
  if (t2 === void 0) return [];
  if (a2 !== `object`) return [new P(`sky`, t2, `object expected, ${a2} found`)];
  let o2 = [];
  for (let a3 in t2) {
    let s2 = a3.match(Yr);
    o2 = s2 && r2[s2[1]] && r2[s2[1]].transition ? o2.concat(e53.validateSpec({ key: a3, value: t2[a3], valueSpec: n2.transition, style: i2, styleSpec: n2 })) : r2[a3] ? o2.concat(e53.validateSpec({ key: a3, value: t2[a3], valueSpec: r2[a3], style: i2, styleSpec: n2 })) : o2.concat([new P(a3, t2[a3], `unknown property "${a3}"`)]);
  }
  return o2;
}
function ba(e53) {
  let t2 = e53.value, n2 = e53.styleSpec, r2 = n2.terrain, i2 = e53.style, a2 = [], o2 = W(t2);
  if (t2 === void 0) return a2;
  if (o2 !== `object`) return a2 = a2.concat([new P(`terrain`, t2, `object expected, ${o2} found`)]), a2;
  for (let o3 in t2) a2 = r2[o3] ? a2.concat(e53.validateSpec({ key: o3, value: t2[o3], valueSpec: r2[o3], validateSpec: e53.validateSpec, style: i2, styleSpec: n2 })) : a2.concat([new P(o3, t2[o3], `unknown property "${o3}"`)]);
  return a2;
}
function xa(e53) {
  return pa(e53).length === 0 ? [] : ta(e53);
}
function Sa(e53) {
  return pa(e53).length === 0 ? [] : ta(e53);
}
function Ca(e53) {
  let t2 = e53.key, n2 = e53.value;
  if (W(n2) === `array`) {
    if (n2.length < 1 || n2.length > 4) return [new P(t2, n2, `padding requires 1 to 4 values; ${n2.length} values found`)];
    let r2 = { type: `number` }, i2 = [];
    for (let a2 = 0; a2 < n2.length; a2++) i2 = i2.concat(e53.validateSpec({ key: `${t2}[${a2}]`, value: n2[a2], validateSpec: e53.validateSpec, valueSpec: r2 }));
    return i2;
  }
  return $i({ key: t2, value: n2, valueSpec: {} });
}
function wa(e53) {
  let t2 = e53.key, n2 = e53.value;
  if (W(n2) === `array`) {
    let r2 = { type: `number` };
    if (n2.length < 1) return [new P(t2, n2, `array length at least 1 expected, length 0 found`)];
    let i2 = [];
    for (let a2 = 0; a2 < n2.length; a2++) i2 = i2.concat(e53.validateSpec({ key: `${t2}[${a2}]`, value: n2[a2], validateSpec: e53.validateSpec, valueSpec: r2 }));
    return i2;
  }
  return $i({ key: t2, value: n2, valueSpec: {} });
}
function Ta(e53) {
  let t2 = e53.key, n2 = e53.value;
  if (W(n2) === `array`) {
    if (n2.length < 1) return [new P(t2, n2, `array length at least 1 expected, length 0 found`)];
    let e54 = [];
    for (let r2 = 0; r2 < n2.length; r2++) e54 = e54.concat(ra({ key: `${t2}[${r2}]`, value: n2[r2], valueSpec: {} }));
    return e54;
  }
  return ra({ key: t2, value: n2, valueSpec: {} });
}
function Ea(e53) {
  let t2 = e53.key, n2 = e53.value, r2 = W(n2), i2 = e53.styleSpec;
  if (r2 !== `array` || n2.length < 1 || n2.length % 2 != 0) return [new P(t2, n2, `variableAnchorOffsetCollection requires a non-empty array of even length`)];
  let a2 = [];
  for (let r3 = 0; r3 < n2.length; r3 += 2) a2 = a2.concat(ia({ key: `${t2}[${r3}]`, value: n2[r3], valueSpec: i2.layout_symbol[`text-anchor`] })), a2 = a2.concat(Qi({ key: `${t2}[${r3 + 1}]`, value: n2[r3 + 1], valueSpec: { length: 2, value: `number` }, validateSpec: e53.validateSpec, style: e53.style, styleSpec: i2 }));
  return a2;
}
function Da(e53) {
  let t2 = [], n2 = e53.value, r2 = e53.key;
  if (Array.isArray(n2)) {
    let i2 = [], a2 = [];
    for (let o2 in n2) n2[o2].id && i2.includes(n2[o2].id) && t2.push(new P(r2, n2, `all the sprites' ids must be unique, but ${n2[o2].id} is duplicated`)), i2.push(n2[o2].id), n2[o2].url && a2.includes(n2[o2].url) && t2.push(new P(r2, n2, `all the sprites' URLs must be unique, but ${n2[o2].url} is duplicated`)), a2.push(n2[o2].url), t2 = t2.concat(Zi({ key: `${r2}[${o2}]`, value: n2[o2], valueSpec: { id: { type: `string`, required: true }, url: { type: `string`, required: true } }, validateSpec: e53.validateSpec }));
    return t2;
  }
  return pa({ key: r2, value: n2 });
}
function Oa(e53) {
  let t2 = e53.value, n2 = e53.styleSpec, r2 = n2.projection, i2 = e53.style, a2 = W(t2);
  if (t2 === void 0) return [];
  if (a2 !== `object`) return [new P(`projection`, t2, `object expected, ${a2} found`)];
  let o2 = [];
  for (let a3 in t2) o2 = r2[a3] ? o2.concat(e53.validateSpec({ key: a3, value: t2[a3], valueSpec: r2[a3], style: i2, styleSpec: n2 })) : o2.concat([new P(a3, t2[a3], `unknown property "${a3}"`)]);
  return o2;
}
function ka(e53) {
  let t2 = e53.key, n2 = e53.value;
  n2 = n2 instanceof String ? n2.valueOf() : n2;
  let r2 = W(n2);
  return r2 === `array` && !ja(n2) && !Aa(n2) ? [new P(t2, n2, `projection expected, invalid array ${JSON.stringify(n2)} found`)] : [`array`, `string`].includes(r2) ? [] : [new P(t2, n2, `projection expected, invalid type "${r2}" found`)];
}
function Aa(e53) {
  return !![`interpolate`, `step`, `literal`].includes(e53[0]);
}
function ja(e53) {
  return Array.isArray(e53) && e53.length === 3 && typeof e53[0] == `string` && typeof e53[1] == `string` && typeof e53[2] == `number`;
}
function Ma(e53) {
  return !!e53 && e53.constructor === Object;
}
function Na(e53) {
  return Ma(e53.value) ? [] : [new P(e53.key, e53.value, `object expected, ${W(e53.value)} found`)];
}
var Pa = 1114111;
var Fa = /^u\+(?:([0-9a-f]{1,6})(?:-([0-9a-f]{1,6}))?|([0-9a-f]{0,5}\?{1,6}))$/i;
function Ia(e53, t2) {
  if (W(t2) !== `string`) return [];
  let n2 = `${t2}`, r2 = () => [new P(e53, t2, `invalid unicode range, expected a value such as "U+26", "U+0-10FFFF" or "U+4??"`)], i2 = n2.match(Fa);
  if (!i2) return r2();
  let [, a2, o2, s2] = i2;
  if (s2 !== void 0) return s2.length > 6 ? r2() : [];
  let c2 = parseInt(a2, 16), l2 = o2 === void 0 ? c2 : parseInt(o2, 16);
  return c2 > Pa || l2 > Pa ? [new P(e53, t2, `unicode range is out of bounds, the maximum code point is U+10FFFF`)] : c2 > l2 ? [new P(e53, t2, `unicode range start must not be greater than its end, but ${n2} is`)] : [];
}
function La(e53) {
  let t2 = e53.key ?? `font-faces`, n2 = e53.value, r2 = e53.validateSpec, i2 = e53.styleSpec ?? be, a2 = e53.style;
  if (!Ma(n2)) return [new P(t2, n2, `object expected, ${W(n2)} found`)];
  let o2 = [];
  for (let e54 in n2) {
    let s2 = n2[e54], c2 = W(s2);
    if (c2 === `string`) o2.push(...pa({ key: `${t2}.${e54}`, value: s2 }));
    else if (c2 === `array`) {
      let n3 = { url: { type: `string`, required: true }, "unicode-range": { type: `array`, value: `string` } };
      for (let [c3, l2] of s2.entries()) {
        let s3 = `${t2}.${e54}[${c3}]`;
        o2.push(...Zi({ key: s3, value: l2, valueSpec: n3, styleSpec: i2, style: a2, validateSpec: r2 }));
        let u2 = Ma(l2) ? l2[`unicode-range`] : void 0;
        if (W(u2) === `array`) for (let [e55, t3] of u2.entries()) o2.push(...Ia(`${s3}.unicode-range[${e55}]`, t3));
      }
    } else o2.push(new P(`${t2}.${e54}`, s2, `string or array expected, ${c2} found`));
  }
  return o2;
}
var Ra = { "*"() {
  return [];
}, array: Qi, boolean: na, number: $i, color: ra, constants: Ji, enum: ia, filter: sa, function: ea, layer: fa, object: Zi, source: ga, light: va, sky: ya, terrain: ba, projection: Oa, projectionDefinition: ka, string: pa, formatted: xa, resolvedImage: Sa, padding: Ca, numberArray: wa, colorArray: Ta, variableAnchorOffsetCollection: Ea, sprite: Da, state: Na, fontFaces: La };
function za(e53) {
  let t2 = e53.value, n2 = e53.valueSpec, r2 = e53.styleSpec;
  return e53.validateSpec = za, n2.expression && Zr(Yi(t2)) ? ea(e53) : n2.expression && pi(Xi(t2)) ? ta(e53) : n2.type && Ra[n2.type] ? Ra[n2.type](e53) : Zi(Xr({}, e53, { valueSpec: n2.type ? r2[n2.type] : n2 }));
}
function Ba(e53) {
  let t2 = e53.value, n2 = e53.key, r2 = pa(e53);
  return r2.length || (t2.indexOf(`{fontstack}`) === -1 && r2.push(new P(n2, t2, `"glyphs" url must include a "{fontstack}" token`)), t2.indexOf(`{range}`) === -1 && r2.push(new P(n2, t2, `"glyphs" url must include a "{range}" token`))), r2;
}
function Va(e53, t2 = N) {
  let n2 = [];
  return n2 = n2.concat(za({ key: ``, value: e53, valueSpec: t2.$root, styleSpec: t2, style: e53, validateSpec: za, objectElementValidators: { glyphs: Ba, "*"() {
    return [];
  } } })), e53.constants && (n2 = n2.concat(Ji({ key: `constants`, value: e53.constants, style: e53, styleSpec: t2, validateSpec: za }))), Ua(n2);
}
Va.source = Wa(Ha(ga)), Va.sprite = Wa(Ha(Da)), Va.glyphs = Wa(Ha(Ba)), Va.fontFaces = Wa(Ha(La)), Va.light = Wa(Ha(va)), Va.sky = Wa(Ha(ya)), Va.terrain = Wa(Ha(ba)), Va.state = Wa(Ha(Na)), Va.layer = Wa(Ha(fa)), Va.filter = Wa(Ha(sa)), Va.paintProperty = Wa(Ha(ua)), Va.layoutProperty = Wa(Ha(da));
function Ha(e53) {
  return function(t2) {
    return e53(Object.assign({}, t2, { validateSpec: za }));
  };
}
function Ua(e53) {
  return [].concat(e53).sort((e54, t2) => e54.line - t2.line);
}
function Wa(e53) {
  return function(...t2) {
    return Ua(e53.apply(this, t2));
  };
}
var Ga = { type: `enum`, "property-type": `data-constant`, expression: { interpolated: false, parameters: [`global-state`] }, values: { visible: {}, none: {} }, transition: false, default: `visible` };
var Ka = class {
  constructor(e53, t2, n2) {
    this._rootKey = t2, this._globalState = n2, this.setValue(e53);
  }
  evaluate() {
    return this._literalValue ?? this._compiledValue.evaluate({});
  }
  setValue(e53) {
    if (e53 == null || e53 === `visible` || e53 === `none`) {
      this._literalValue = e53 === `none` ? `none` : `visible`, this._compiledValue = void 0, this._globalStateRefs = /* @__PURE__ */ new Set();
      return;
    }
    let t2 = mi(e53, this._rootKey, Ga, this._globalState);
    if (t2.result === `error`) throw this._literalValue = `visible`, this._compiledValue = void 0, Error(t2.value.map((e54) => `${e54.key}: ${e54.message}`).join(`, `));
    this._literalValue = void 0, this._compiledValue = t2.value, this._globalStateRefs = Si(t2.value.expression);
  }
  getGlobalStateRefs() {
    return this._globalStateRefs;
  }
};
function qa(e53, t2, n2) {
  return new Ka(e53, t2, n2);
}
var Ja = { MAX_PARALLEL_IMAGE_REQUESTS: 16, MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME: 8, MAX_TILE_CACHE_ZOOM_LEVELS: 5, REGISTERED_PROTOCOLS: {}, WORKER_URL: `` };
function Ya(e53) {
  return Ja.REGISTERED_PROTOCOLS[e53.substring(0, e53.indexOf(`://`))];
}
function Xa(e53, t2) {
  Ja.REGISTERED_PROTOCOLS[e53] = t2;
}
function Za(e53) {
  delete Ja.REGISTERED_PROTOCOLS[e53];
}
var Qa = `global-dispatcher`;
var $a = class extends Error {
  constructor(e53, t2, n2, r2) {
    super(`AJAXError: ${t2} (${e53}): ${n2}`), this.status = e53, this.statusText = t2, this.url = n2, this.body = r2;
  }
};
function eo() {
  if (te(self)) return self.worker?.referrer;
  if (window.location.protocol === `blob:`) try {
    return window.parent.location.href;
  } catch {
  }
  return window.location.href;
}
var to = (e53) => e53.startsWith(`file:`) || eo()?.startsWith(`file:`) && !/^\w+:/.test(e53);
async function no(e53, t2) {
  let n2 = new Request(e53.url, { method: e53.method || `GET`, body: e53.body, credentials: e53.credentials, headers: e53.headers, cache: e53.cache, referrer: eo(), referrerPolicy: e53.referrerPolicy, signal: t2.signal });
  e53.type === `json` && !n2.headers.has(`Accept`) && n2.headers.set(`Accept`, `application/json`);
  let r2;
  try {
    r2 = await fetch(n2);
  } catch (t3) {
    throw _e(t3) ? t3 : new $a(0, y(t3).message, e53.url, new Blob());
  }
  if (!r2.ok) {
    let t3 = await r2.blob();
    throw new $a(r2.status, r2.statusText, e53.url, t3);
  }
  let i2;
  i2 = e53.type === `arrayBuffer` || e53.type === `image` ? r2.arrayBuffer() : e53.type === `json` ? r2.json() : r2.text();
  let a2 = await i2;
  return ve(t2.signal), { data: a2, cacheControl: r2.headers.get(`Cache-Control`), expires: r2.headers.get(`Expires`), etag: r2.headers.get(`ETag`) };
}
function ro(e53, t2) {
  return new Promise((n2, r2) => {
    let i2 = new XMLHttpRequest();
    i2.open(e53.method || `GET`, e53.url, true), (e53.type === `arrayBuffer` || e53.type === `image`) && (i2.responseType = `arraybuffer`);
    for (let t3 in e53.headers) i2.setRequestHeader(t3, e53.headers[t3]);
    e53.type === `json` && (i2.responseType = `text`, e53.headers?.Accept || i2.setRequestHeader(`Accept`, `application/json`)), i2.withCredentials = e53.credentials === `include`, i2.onerror = () => {
      r2(Error(i2.statusText));
    }, i2.onload = () => {
      if (!t2.signal.aborted) {
        if ((i2.status >= 200 && i2.status < 300 || i2.status === 0) && i2.response !== null) {
          let t3 = i2.response;
          if (e53.type === `json`) try {
            t3 = JSON.parse(i2.response);
          } catch (e54) {
            r2(e54);
            return;
          }
          n2({ data: t3, cacheControl: i2.getResponseHeader(`Cache-Control`), expires: i2.getResponseHeader(`Expires`), etag: i2.getResponseHeader(`ETag`) });
        } else {
          let t3 = new Blob([i2.response], { type: i2.getResponseHeader(`Content-Type`) });
          r2(new $a(i2.status, i2.statusText, e53.url, t3));
        }
      }
    }, t2.signal.addEventListener(`abort`, () => {
      i2.abort(), r2(new ge(t2.signal.reason));
    }), i2.send(e53.body);
  });
}
var io = async function(e53, t2) {
  if (e53.url.includes(`://`) && !/^https?:|^file:/.test(e53.url)) {
    let n2 = Ya(e53.url);
    if (n2) {
      let r2 = await n2(e53, t2);
      return !r2.data && e53.type === `arrayBuffer` ? w(r2, { data: /* @__PURE__ */ new ArrayBuffer(0) }) : r2;
    }
    if (te(self) && self.worker?.actor) return self.worker.actor.sendAsync({ type: `GR`, data: e53, targetMapId: Qa }, t2);
  }
  if (!to(e53.url)) {
    if (fetch && Request && AbortController && Object.hasOwn(Request.prototype, `signal`)) return no(e53, t2);
    if (te(self) && self.worker?.actor) return self.worker.actor.sendAsync({ type: `GR`, data: e53, mustQueue: true, targetMapId: Qa }, t2);
  }
  return ro(e53, t2);
};
var ao = (e53, t2) => io(w(e53, { type: `json` }), t2);
var oo = (e53, t2) => io(w(e53, { type: `arrayBuffer` }), t2);
var so = {};
function G(e53, t2, n2 = {}) {
  if (so[e53]) throw Error(`${e53} is already registered.`);
  Object.defineProperty(t2, "_classRegistryKey", { value: e53, writeable: false }), so[e53] = { klass: t2, omit: n2.omit || [], shallow: n2.shallow || [] };
}
G(`Object`, Object), G(`Set`, Set), G(`TransferableGridIndex`, ye), G(`Color`, V), G(`Error`, Error), G(`AJAXError`, $a), G(`ResolvedImage`, xt), G(`StylePropertyFunction`, yi), G(`StyleExpression`, ui, { omit: [`_evaluator`] }), G(`ZoomDependentExpression`, gi), G(`ZoomConstantExpression`, hi), G(`CompoundExpression`, Fr, { omit: [`_evaluate`] });
for (let e53 in jr) jr[e53]._classRegistryKey || G(`Expression_${e53}`, jr[e53]);
function co(e53) {
  return e53 && typeof ArrayBuffer < `u` && (e53 instanceof ArrayBuffer || e53.constructor?.name === `ArrayBuffer`);
}
function lo(e53) {
  let t2 = e53.constructor;
  return e53.$name || t2._classRegistryKey;
}
function uo(e53) {
  if (typeof e53 != `object` || !e53) return false;
  let t2 = lo(e53);
  return t2 && t2 !== `Object`;
}
function fo(e53) {
  return !uo(e53) && (e53 == null || typeof e53 == `boolean` || typeof e53 == `number` || typeof e53 == `string` || e53 instanceof Boolean || e53 instanceof Number || e53 instanceof String || e53 instanceof Date || e53 instanceof RegExp || e53 instanceof Blob || e53 instanceof Error || co(e53) || ne(e53) || ArrayBuffer.isView(e53) || e53 instanceof ImageData);
}
function po(e53, t2) {
  if (fo(e53)) return (co(e53) || ne(e53)) && t2 && t2.push(e53), ArrayBuffer.isView(e53) && t2 && t2.push(e53.buffer), e53 instanceof ImageData && t2 && t2.push(e53.data.buffer), e53;
  if (Array.isArray(e53)) {
    let n3 = [];
    for (let r3 of e53) n3.push(po(r3, t2));
    return n3;
  }
  if (typeof e53 != `object`) throw Error(`can't serialize object of type ${typeof e53}`);
  let n2 = lo(e53);
  if (!n2) throw Error(`can't serialize object of unregistered class ${e53.constructor.name}`);
  if (!so[n2]) throw Error(`${n2} is not registered.`);
  let { klass: r2 } = so[n2], i2 = r2.serialize ? r2.serialize(e53, t2) : {};
  if (!r2.serialize) {
    for (let r3 in e53) {
      if (!e53.hasOwnProperty(r3) || so[n2].omit.includes(r3)) continue;
      let a2 = e53[r3];
      a2 !== void 0 && (i2[r3] = so[n2].shallow.includes(r3) ? a2 : po(a2, t2));
    }
    e53 instanceof Error && (i2.message = e53.message);
  } else if (i2 === t2?.[t2.length - 1]) throw Error(`statically serialized object won't survive transfer of $name property`);
  if (i2.$name) throw Error(`$name property is reserved for worker serialization logic.`);
  return n2 !== `Object` && (i2.$name = n2), i2;
}
function mo(e53) {
  if (fo(e53)) return e53;
  if (Array.isArray(e53)) return e53.map(mo);
  if (typeof e53 != `object`) throw Error(`can't deserialize object of type ${typeof e53}`);
  let t2 = lo(e53) || `Object`;
  if (!so[t2]) throw Error(`can't deserialize unregistered class ${t2}`);
  let { klass: n2 } = so[t2];
  if (!n2) throw Error(`can't deserialize unregistered class ${t2}`);
  if (n2.deserialize) return n2.deserialize(e53);
  let r2 = Object.create(n2.prototype);
  for (let n3 of Object.keys(e53)) {
    if (n3 === `$name`) continue;
    let i2 = e53[n3];
    r2[n3] = so[t2].shallow.includes(n3) ? i2 : mo(i2);
  }
  return r2;
}
var ho = class {
  constructor(e53) {
    this._methodToThrottle = e53, this._triggered = false, this._channel = new MessageChannel(), this._channel.port2.onmessage = () => this._invoke();
  }
  trigger() {
    this._triggered || (this._triggered = true, this._channel?.port1.postMessage(true), setTimeout(() => this._invoke(), 0));
  }
  _invoke() {
    this._triggered && (this._triggered = false, this._methodToThrottle());
  }
  remove() {
    delete this._channel, this._methodToThrottle = () => {
    };
  }
};
var go = { once: true };
var _o = class {
  constructor(e53, t2) {
    this.target = e53, this.mapId = t2, this.resolveRejects = {}, this.tasks = {}, this.taskQueue = [], this.abortControllers = {}, this.messageHandlers = {}, this.invoker = new ho(() => this.process()), this.subscription = le(this.target, `message`, (e54) => this.receive(e54), false), this.globalScope = te(self) ? e53 : window;
  }
  registerMessageHandler(e53, t2) {
    this.messageHandlers[e53] = t2;
  }
  unregisterMessageHandler(e53) {
    delete this.messageHandlers[e53];
  }
  sendAsync(e53, t2) {
    return new Promise((n2, r2) => {
      let i2 = Math.round(Math.random() * 1e18).toString(36).substring(0, 10), a2 = t2 ? le(t2.signal, `abort`, () => {
        a2?.unsubscribe(), delete this.resolveRejects[i2];
        let n3 = { id: i2, type: `<cancel>`, origin: location.origin, targetMapId: e53.targetMapId, sourceMapId: this.mapId };
        this.target.postMessage(n3), r2(new ge(t2.signal.reason));
      }, go) : null;
      this.resolveRejects[i2] = { resolve: (e54) => {
        a2?.unsubscribe(), n2(e54);
      }, reject: (e54) => {
        a2?.unsubscribe(), r2(e54);
      } };
      let o2 = [], s2 = { ...e53, id: i2, sourceMapId: this.mapId, origin: location.origin, data: po(e53.data, o2) };
      this.target.postMessage(s2, { transfer: o2 });
    });
  }
  receive(e53) {
    let t2 = e53.data, n2 = t2.id, r2 = [`file://`, `resource://android`, `null`], i2 = [t2.origin, location.origin], a2 = t2.origin === location.origin, o2 = i2.some((e54) => r2.includes(e54));
    if ((a2 || o2) && !(t2.targetMapId && this.mapId !== t2.targetMapId)) {
      if (t2.type === `<cancel>`) {
        delete this.tasks[n2];
        let e54 = this.abortControllers[n2];
        delete this.abortControllers[n2], e54 && e54.abort();
      } else te(self) || t2.mustQueue ? (this.tasks[n2] = t2, this.taskQueue.push(n2), this.invoker.trigger()) : this.processTask(n2, t2);
    }
  }
  process() {
    if (this.taskQueue.length === 0) return;
    let e53 = this.taskQueue.shift(), t2 = this.tasks[e53];
    delete this.tasks[e53], this.taskQueue.length > 0 && this.invoker.trigger(), t2 && this.processTask(e53, t2);
  }
  async processTask(e53, t2) {
    if (t2.type === `<response>`) {
      let n3 = this.resolveRejects[e53];
      if (delete this.resolveRejects[e53], !n3) return;
      t2.error ? n3.reject(y(mo(t2.error))) : n3.resolve(mo(t2.data));
      return;
    }
    if (!this.messageHandlers[t2.type]) {
      this.completeTask(e53, null, null);
      return;
    }
    let n2 = mo(t2.data), r2 = new AbortController();
    this.abortControllers[e53] = r2;
    try {
      let i2 = await this.messageHandlers[t2.type](t2.sourceMapId, n2, r2);
      this.completeTask(e53, null, i2);
    } catch (t3) {
      this.completeTask(e53, y(t3));
    }
  }
  completeTask(e53, t2, n2) {
    let r2 = [];
    delete this.abortControllers[e53];
    let i2 = { id: e53, type: `<response>`, sourceMapId: this.mapId, origin: location.origin, error: t2 ? po(t2) : null, data: po(n2, r2) };
    this.target.postMessage(i2, { transfer: r2 });
  }
  remove() {
    this.invoker.remove(), this.subscription.unsubscribe();
  }
};
var vo = Va;
new Set(Object.keys(N).filter((e53) => e53.startsWith(`source_`)).map((e53) => e53.slice(7).replaceAll(`_`, `-`)));
function yo(e53, t2) {
  let n2 = false;
  for (let r2 of t2) r2.severity === `warning` ? j(r2.message) : (e53.fire(new me(Error(r2.message))), n2 = true);
  return n2;
}
function bo(e53, t2, n2, r2) {
  return r2?.validate !== false && yo(e53, t2({ styleSpec: N, ...n2 }));
}
var xo = class {
  constructor() {
    this.first = true;
  }
  update(e53, t2) {
    let n2 = Math.floor(e53);
    return this.first ? (this.first = false, this.lastIntegerZoom = n2, this.lastIntegerZoomTime = 0, this.lastZoom = e53, this.lastFloorZoom = n2, true) : (this.lastFloorZoom > n2 ? (this.lastIntegerZoom = n2 + 1, this.lastIntegerZoomTime = t2) : this.lastFloorZoom < n2 && (this.lastIntegerZoom = n2, this.lastIntegerZoomTime = t2), e53 !== this.lastZoom && (this.lastZoom = e53, this.lastFloorZoom = n2, true));
  }
};
var K = class {
  constructor(e53, t2) {
    this.zoom = e53, t2 ? (this.now = t2.now || 0, this.fadeDuration = t2.fadeDuration || 0, this.zoomHistory = t2.zoomHistory || new xo(), this.transition = t2.transition || {}) : (this.now = 0, this.fadeDuration = 0, this.zoomHistory = new xo(), this.transition = {});
  }
  crossFadingFactor() {
    return this.fadeDuration === 0 ? 1 : Math.min((this.now - this.zoomHistory.lastIntegerZoomTime) / this.fadeDuration, 1);
  }
  getCrossfadeParameters() {
    let e53 = this.zoom, t2 = e53 - Math.floor(e53), n2 = this.crossFadingFactor();
    return e53 > this.zoomHistory.lastIntegerZoom ? { fromScale: 2, toScale: 1, t: t2 + (1 - t2) * n2 } : { fromScale: 0.5, toScale: 1, t: 1 - (1 - n2) * t2 };
  }
};
var So = class {
  constructor(e53, t2, n2, r2) {
    this.property = e53, this.value = t2, this.expression = bi(t2 === void 0 ? e53.specification.default : t2, n2, e53.specification, r2);
  }
  isDataDriven() {
    return this.expression.kind === `source` || this.expression.kind === `composite`;
  }
  getGlobalStateRefs() {
    return this.expression.globalStateRefs || /* @__PURE__ */ new Set();
  }
  readsGlobalState(e53) {
    let t2 = this.getGlobalStateRefs();
    return e53.some((e54) => t2.has(e54));
  }
  possiblyEvaluate(e53, t2, n2) {
    return this.property.possiblyEvaluate(this, e53, t2, n2);
  }
};
var Co = class {
  constructor(e53, t2, n2) {
    this.property = e53, this.value = new So(e53, void 0, t2, n2);
  }
  transitioned(e53, t2) {
    return t2.value === this.value ? t2 : new To(this.property, this.value, t2, w({}, e53.transition, this.transition), e53.now);
  }
  untransitioned() {
    return new To(this.property, this.value, null, {}, 0);
  }
};
var wo = class {
  constructor(e53, t2, n2) {
    this._properties = e53, this._values = Object.create(e53.defaultTransitionablePropertyValues), this._globalState = n2, this._rootKey = t2;
  }
  _propertyRootKey(e53) {
    return `${this._rootKey}.${String(e53)}`;
  }
  hasProperty(e53) {
    return e53 in this._properties.defaultTransitionablePropertyValues;
  }
  getValue(e53) {
    return k(this._values[e53].value.value);
  }
  setValue(e53, t2) {
    Object.hasOwn(this._values, e53) || (this._values[e53] = new Co(this._values[e53].property, this._propertyRootKey(e53), this._globalState)), this._values[e53].value = new So(this._values[e53].property, t2 === null ? void 0 : k(t2), this._propertyRootKey(e53), this._globalState);
  }
  setValues(e53) {
    for (let t2 in e53) {
      let n2 = e53[t2];
      t2.endsWith(`-transition`) ? this.setTransition(t2.slice(0, -11), n2) : O(this._values[t2].value.value, n2) || this.setValue(t2, n2);
    }
  }
  getTransition(e53) {
    return k(this._values[e53].transition);
  }
  setTransition(e53, t2) {
    Object.hasOwn(this._values, e53) || (this._values[e53] = new Co(this._values[e53].property, this._propertyRootKey(e53), this._globalState)), this._values[e53].transition = k(t2) || void 0;
  }
  retainPriorGlobalState(e53, t2, n2) {
    for (let r2 of Object.keys(n2._values)) for (let i2 = n2._values[r2]; i2; i2 = i2.prior) {
      let { value: n3 } = i2;
      n3.property.specification.transition && !n3.isDataDriven() && n3.expression._globalState === this._globalState && n3.readsGlobalState(e53) && (i2.value = new So(n3.property, n3.value, this._propertyRootKey(r2), t2));
    }
  }
  applyGlobalStateChange(e53, t2, n2, r2) {
    this.retainPriorGlobalState(e53, t2, n2);
    let i2 = false;
    for (let t3 of Object.keys(this._values)) {
      let { value: n3 } = this._values[t3];
      n3.readsGlobalState(e53) && (this.setValue(t3, n3.value), i2 = true);
    }
    return i2 ? this.transitioned(r2, n2) : n2;
  }
  serialize() {
    let e53 = {};
    for (let t2 of Object.keys(this._values)) {
      let n2 = this.getValue(t2);
      n2 !== void 0 && (e53[t2] = n2);
      let r2 = this.getTransition(t2);
      r2 !== void 0 && (e53[`${t2}-transition`] = r2);
    }
    return e53;
  }
  transitioned(e53, t2) {
    let n2 = new Eo(this._properties);
    for (let r2 of Object.keys(this._values)) n2._values[r2] = this._values[r2].transitioned(e53, t2._values[r2]);
    return n2;
  }
  untransitioned() {
    let e53 = new Eo(this._properties);
    for (let t2 of Object.keys(this._values)) e53._values[t2] = this._values[t2].untransitioned();
    return e53;
  }
};
var To = class {
  constructor(e53, t2, n2, r2, i2) {
    this.property = e53, this.value = t2, this.begin = i2 + r2.delay || 0, this.end = this.begin + r2.duration || 0, e53.specification.transition && (r2.delay || r2.duration) && (this.prior = n2);
  }
  possiblyEvaluate(e53, t2, n2) {
    let r2 = e53.now || 0, i2 = this.value.possiblyEvaluate(e53, t2, n2), a2 = this.prior;
    if (!a2) return i2;
    if (r2 > this.end || this.value.isDataDriven()) return this.prior = null, i2;
    if (r2 < this.begin) return a2.possiblyEvaluate(e53, t2, n2);
    {
      let o2 = (r2 - this.begin) / (this.end - this.begin);
      return this.property.interpolate(a2.possiblyEvaluate(e53, t2, n2), i2, b(o2));
    }
  }
};
var Eo = class {
  constructor(e53) {
    this._properties = e53, this._values = Object.create(e53.defaultTransitioningPropertyValues);
  }
  possiblyEvaluate(e53, t2, n2) {
    let r2 = new ko(this._properties);
    for (let i2 of Object.keys(this._values)) r2._values[i2] = this._values[i2].possiblyEvaluate(e53, t2, n2);
    return r2;
  }
  hasTransition() {
    for (let e53 of Object.keys(this._values)) if (this._values[e53].prior) return true;
    return false;
  }
};
var Do = class {
  constructor(e53, t2, n2) {
    this._properties = e53, this._values = Object.create(e53.defaultPropertyValues), this._globalState = n2, this._rootKey = t2;
  }
  _propertyRootKey(e53) {
    return `${this._rootKey}.${String(e53)}`;
  }
  hasValue(e53) {
    return this._values[e53].value !== void 0;
  }
  hasProperty(e53) {
    return e53 in this._properties.defaultPropertyValues;
  }
  getValue(e53) {
    return k(this._values[e53].value);
  }
  setValue(e53, t2) {
    this._values[e53] = new So(this._values[e53].property, t2 === null ? void 0 : k(t2), this._propertyRootKey(e53), this._globalState);
  }
  serialize() {
    let e53 = {};
    for (let t2 of Object.keys(this._values)) {
      let n2 = this.getValue(t2);
      n2 !== void 0 && (e53[t2] = n2);
    }
    return e53;
  }
  possiblyEvaluate(e53, t2, n2) {
    let r2 = new ko(this._properties);
    for (let i2 of Object.keys(this._values)) r2._values[i2] = this._values[i2].possiblyEvaluate(e53, t2, n2);
    return r2;
  }
};
var Oo = class {
  constructor(e53, t2, n2) {
    this.property = e53, this.value = t2, this.parameters = n2;
  }
  isConstant() {
    return this.value.kind === `constant`;
  }
  constantOr(e53) {
    return this.value.kind === `constant` ? this.value.value : e53;
  }
  evaluate(e53, t2, n2, r2) {
    return this.property.evaluate(this.value, this.parameters, e53, t2, n2, r2);
  }
};
var ko = class {
  constructor(e53) {
    this._properties = e53, this._values = Object.create(e53.defaultPossiblyEvaluatedValues);
  }
  get(e53) {
    return this._values[e53];
  }
};
function Ao(e53) {
  if (Array.isArray(e53)) return e53.length;
  let t2 = e53?.values;
  return Array.isArray(t2) ? t2.length : void 0;
}
function jo(e53, t2) {
  let n2 = Ao(e53), r2 = Ao(t2);
  return n2 !== void 0 && r2 !== void 0 && n2 !== r2;
}
var q = class {
  constructor(e53, t2) {
    this.specification = e53, this.name = t2;
  }
  possiblyEvaluate(e53, t2) {
    if (e53.isDataDriven()) throw Error(`Value should not be data driven`);
    return e53.expression.evaluate(t2);
  }
  interpolate(e53, t2, n2) {
    if (jo(e53, t2)) return j(`Property "${this.name}" is trying to interpolate arrays of different lengths. Rendering may 'jump'.`), t2;
    let r2 = this.specification.type, i2 = Ft[r2];
    return i2 ? i2(e53, t2, n2) : e53;
  }
};
var J = class {
  constructor(e53, t2, n2) {
    this.specification = e53, this.name = t2, this.overrides = n2;
  }
  possiblyEvaluate(e53, t2, n2, r2) {
    return e53.expression.kind === `constant` || e53.expression.kind === `camera` ? new Oo(this, { kind: `constant`, value: e53.expression.evaluate(t2, null, {}, n2, r2) }, t2) : new Oo(this, e53.expression, t2);
  }
  interpolate(e53, t2, n2) {
    if (e53.value.kind !== `constant` || t2.value.kind !== `constant`) return e53;
    if (e53.value.value === void 0 || t2.value.value === void 0) return new Oo(this, { kind: `constant`, value: void 0 }, e53.parameters);
    if (jo(e53.value.value, t2.value.value)) return j(`Property "${this.name}" is trying to interpolate arrays of different lengths. Rendering may 'jump'.`), t2;
    let r2 = this.specification.type, i2 = Ft[r2];
    if (i2) {
      let r3 = i2(e53.value.value, t2.value.value, n2);
      return new Oo(this, { kind: `constant`, value: r3 }, e53.parameters);
    }
    return e53;
  }
  evaluate(e53, t2, n2, r2, i2, a2) {
    return e53.kind === `constant` ? e53.value : e53.evaluate(t2, n2, r2, i2, a2);
  }
};
var Mo = class extends J {
  possiblyEvaluate(e53, t2, n2, r2) {
    if (e53.value === void 0) return new Oo(this, { kind: `constant`, value: void 0 }, t2);
    if (e53.expression.kind === `constant`) {
      let i2 = e53.expression.evaluate(t2, null, {}, n2, r2), a2 = e53.property.specification.type === `resolvedImage` && typeof i2 != `string` ? i2.name : i2, o2 = this._calculate(a2, a2, a2, t2);
      return new Oo(this, { kind: `constant`, value: o2 }, t2);
    }
    if (e53.expression.kind === `camera`) {
      let n3 = this._calculate(e53.expression.evaluate({ zoom: t2.zoom - 1 }), e53.expression.evaluate({ zoom: t2.zoom }), e53.expression.evaluate({ zoom: t2.zoom + 1 }), t2);
      return new Oo(this, { kind: `constant`, value: n3 }, t2);
    }
    return new Oo(this, e53.expression, t2);
  }
  evaluate(e53, t2, n2, r2, i2, a2) {
    if (e53.kind === `source`) {
      let o2 = e53.evaluate(t2, n2, r2, i2, a2);
      return this._calculate(o2, o2, o2, t2);
    }
    return e53.kind === `composite` ? this._calculate(e53.evaluate({ zoom: Math.floor(t2.zoom) - 1 }, n2, r2), e53.evaluate({ zoom: Math.floor(t2.zoom) }, n2, r2), e53.evaluate({ zoom: Math.floor(t2.zoom) + 1 }, n2, r2), t2) : e53.value;
  }
  _calculate(e53, t2, n2, r2) {
    return r2.zoom > r2.zoomHistory.lastIntegerZoom ? { from: e53, to: t2 } : { from: n2, to: t2 };
  }
  interpolate(e53) {
    return e53;
  }
};
var No = class {
  constructor(e53, t2) {
    this.specification = e53, this.name = t2;
  }
  possiblyEvaluate(e53, t2, n2, r2) {
    if (e53.value !== void 0) {
      if (e53.expression.kind === `constant`) {
        let i2 = e53.expression.evaluate(t2, null, {}, n2, r2);
        return this._calculate(i2, i2, i2, t2);
      }
      return this._calculate(e53.expression.evaluate(new K(Math.floor(t2.zoom - 1), t2)), e53.expression.evaluate(new K(Math.floor(t2.zoom), t2)), e53.expression.evaluate(new K(Math.floor(t2.zoom + 1), t2)), t2);
    }
  }
  _calculate(e53, t2, n2, r2) {
    return r2.zoom > r2.zoomHistory.lastIntegerZoom ? { from: e53, to: t2 } : { from: n2, to: t2 };
  }
  interpolate(e53) {
    return e53;
  }
};
var Po = class {
  constructor(e53, t2) {
    this.specification = e53, this.name = t2;
  }
  possiblyEvaluate(e53, t2, n2, r2) {
    return !!e53.expression.evaluate(t2, null, {}, n2, r2);
  }
  interpolate() {
    return false;
  }
};
var Fo = class {
  constructor(e53) {
    this.properties = e53, this.defaultPropertyValues = {}, this.defaultTransitionablePropertyValues = {}, this.defaultTransitioningPropertyValues = {}, this.defaultPossiblyEvaluatedValues = {}, this.overridableProperties = [];
    for (let t2 in e53) {
      let n2 = e53[t2];
      n2.specification.overridable && this.overridableProperties.push(t2);
      let r2 = this.defaultPropertyValues[t2] = new So(n2, void 0, n2.name, void 0), i2 = this.defaultTransitionablePropertyValues[t2] = new Co(n2, n2.name, void 0);
      this.defaultTransitioningPropertyValues[t2] = i2.untransitioned(), this.defaultPossiblyEvaluatedValues[t2] = r2.possiblyEvaluate({});
    }
  }
};
G(`DataDrivenProperty`, J), G(`DataConstantProperty`, q), G(`CrossFadedDataDrivenProperty`, Mo), G(`CrossFadedProperty`, No), G(`ColorRampProperty`, Po);
var Io = ` is a PAINT property not a LAYOUT property. Use get/setPaintProperty instead?`;
var Lo = ` is a LAYOUT property not a PAINT property. Use get/setLayoutProperty instead?`;
var Ro = class extends he {
  constructor(e53, t2, n2) {
    if (super(), this.id = e53.id, this.type = e53.type, this._globalState = n2, this._featureFilter = { filter: () => true, needGeometry: false, getGlobalStateRefs: () => /* @__PURE__ */ new Set() }, this._visibilityExpression = qa(this.visibility, `layers[${this.id}].layout.visibility`, n2), e53.type !== `custom` && (this.metadata = e53.metadata, this.minzoom = e53.minzoom, this.maxzoom = e53.maxzoom, e53.type !== `background` && (this.source = e53.source, this.sourceLayer = e53[`source-layer`], this.filter = e53.filter, this._featureFilter = Ii(e53.filter, `layers[${this.id}].filter`, n2)), t2.layout && (this._unevaluatedLayout = new Do(t2.layout, `layers[${this.id}].layout`, n2)), t2.paint)) {
      this._transitionablePaint = new wo(t2.paint, `layers[${this.id}].paint`, n2);
      for (let t3 in e53.paint) this.setPaintProperty(t3, e53.paint[t3], { validate: false });
      for (let t3 in e53.layout) this.setLayoutProperty(t3, e53.layout[t3], { validate: false });
      this._transitioningPaint = this._transitionablePaint.untransitioned(), this.paint = new ko(t2.paint);
    }
  }
  setFilter(e53) {
    this.filter = e53, this._featureFilter = Ii(e53, `layers[${this.id}].filter`, this._globalState);
  }
  getCrossfadeParameters() {
    return this._crossfadeParameters;
  }
  getLayoutProperty(e53) {
    if (e53 === `visibility`) return this.visibility;
    if (this._transitionablePaint?.hasProperty(e53)) throw Error(e53 + Io);
    if (!this._unevaluatedLayout) throw Error(`Cannot get layout property "${e53}" on layer type "${this.type}" which has no layout properties.`);
    return this._unevaluatedLayout.getValue(e53);
  }
  getLayoutAffectingGlobalStateRefs() {
    let e53 = /* @__PURE__ */ new Set();
    for (let t2 of this._visibilityExpression.getGlobalStateRefs()) e53.add(t2);
    if (this._unevaluatedLayout) for (let t2 in this._unevaluatedLayout._values) {
      let n2 = this._unevaluatedLayout._values[t2];
      for (let t3 of n2.getGlobalStateRefs()) e53.add(t3);
    }
    for (let t2 of this._featureFilter.getGlobalStateRefs()) e53.add(t2);
    return e53;
  }
  getPaintAffectingGlobalStateRefs() {
    let e53 = new globalThis.Map();
    if (this._transitionablePaint) for (let t2 in this._transitionablePaint._values) {
      let n2 = this._transitionablePaint._values[t2].value;
      for (let r2 of n2.getGlobalStateRefs()) {
        let i2 = e53.get(r2) ?? [];
        i2.push({ name: t2, value: n2.value }), e53.set(r2, i2);
      }
    }
    return e53;
  }
  getVisibilityAffectingGlobalStateRefs() {
    return this._visibilityExpression.getGlobalStateRefs();
  }
  setLayoutProperty(e53, t2, n2 = {}) {
    e53 === `visibility` ? (this.visibility = t2, this._visibilityExpression.setValue(t2), this.recalculateVisibility()) : this._transitionablePaint?.hasProperty(e53) ? this.fire(new me(/* @__PURE__ */ Error(e53 + Io))) : t2 != null && this._validate(vo.layoutProperty, `layers.${this.id}.layout.${e53}`, e53, t2, n2) || this._unevaluatedLayout.setValue(e53, t2);
  }
  getPaintProperty(e53) {
    if (e53.endsWith(`-transition`)) {
      let t2 = e53.slice(0, -11);
      if (t2 === `visibility` || this._unevaluatedLayout?.hasProperty(t2)) throw Error(e53 + Lo);
      return this._transitionablePaint.getTransition(t2);
    }
    if (e53 === `visibility` || this._unevaluatedLayout?.hasProperty(e53)) throw Error(e53 + Lo);
    return this._transitionablePaint.getValue(e53);
  }
  setPaintProperty(e53, t2, n2 = {}) {
    if (e53 === `visibility` || this._unevaluatedLayout?.hasProperty(e53)) return this.fire(new me(/* @__PURE__ */ Error(e53 + Lo))), false;
    if (t2 != null && this._validate(vo.paintProperty, `layers.${this.id}.paint.${e53}`, e53, t2, n2)) return false;
    if (e53.endsWith(`-transition`)) return this._transitionablePaint.setTransition(e53.slice(0, -11), t2 || void 0), false;
    {
      let n3 = this._transitionablePaint._values[e53], r2 = n3.property.specification[`property-type`] === `cross-faded-data-driven`, i2 = n3.value.isDataDriven(), a2 = n3.value;
      this._transitionablePaint.setValue(e53, t2), this._handleSpecialPaintPropertyUpdate(e53);
      let o2 = this._transitionablePaint._values[e53].value;
      return o2.isDataDriven() || i2 || r2 || this._handleOverridablePaintPropertyUpdate(e53, a2, o2);
    }
  }
  _handleSpecialPaintPropertyUpdate(e53) {
  }
  _handleOverridablePaintPropertyUpdate(e53, t2, n2) {
    return false;
  }
  isHidden(e53 = this.minzoom, t2 = false) {
    return this.minzoom && e53 < (t2 ? Math.floor(this.minzoom) : this.minzoom) || this.maxzoom && e53 >= this.maxzoom ? true : this._evaluatedVisibility === `none`;
  }
  updateTransitions(e53) {
    this._transitioningPaint = this._transitionablePaint.transitioned(e53, this._transitioningPaint);
  }
  retainPriorGlobalState(e53, t2) {
    this._transitionablePaint?.retainPriorGlobalState(e53, t2, this._transitioningPaint);
  }
  hasTransition() {
    return this._transitioningPaint.hasTransition();
  }
  recalculateVisibility() {
    this._evaluatedVisibility = this._visibilityExpression.evaluate();
  }
  recalculate(e53, t2) {
    e53.getCrossfadeParameters && (this._crossfadeParameters = e53.getCrossfadeParameters()), this._unevaluatedLayout && (this.layout = this._unevaluatedLayout.possiblyEvaluate(e53, void 0, t2)), this.paint = this._transitioningPaint.possiblyEvaluate(e53, void 0, t2);
  }
  serialize() {
    let e53 = { id: this.id, type: this.type, source: this.source, "source-layer": this.sourceLayer, metadata: this.metadata, minzoom: this.minzoom, maxzoom: this.maxzoom, filter: this.filter, layout: this._unevaluatedLayout?.serialize(), paint: this._transitionablePaint?.serialize() };
    return this.visibility && (e53.layout ||= {}, e53.layout.visibility = this.visibility), D(e53, (e54, t2) => e54 !== void 0 && !(t2 === `layout` && !Object.keys(e54).length) && !(t2 === `paint` && !Object.keys(e54).length));
  }
  _validate(e53, t2, n2, r2, i2 = {}) {
    return bo(this, e53, { key: t2, layerType: this.type, objectKey: n2, value: r2 }, i2);
  }
  is3D() {
    return false;
  }
  isTileClipped() {
    return false;
  }
  hasOffscreenPass() {
    return false;
  }
  resize() {
  }
  isStateDependent() {
    for (let e53 in this.paint._values) {
      let t2 = this.paint.get(e53);
      if (t2 instanceof Oo && Kr(t2.property.specification) && (t2.value.kind === `source` || t2.value.kind === `composite`) && t2.value.isStateDependent) return true;
    }
    return false;
  }
};
var zo = { Int8: Int8Array, Uint8: Uint8Array, Int16: Int16Array, Uint16: Uint16Array, Int32: Int32Array, Uint32: Uint32Array, Float32: Float32Array };
var Bo = class {
  constructor(e53, t2) {
    this._structArray = e53, this._pos1 = t2 * this.size, this._pos2 = this._pos1 / 2, this._pos4 = this._pos1 / 4, this._pos8 = this._pos1 / 8;
  }
};
var Vo = class {
  constructor() {
    this.isTransferred = false, this.capacity = -1, this.resize(0);
  }
  static serialize(e53, t2) {
    return e53._trim(), t2 && (e53.isTransferred = true, t2.push(e53.arrayBuffer)), { length: e53.length, arrayBuffer: e53.arrayBuffer };
  }
  static deserialize(e53) {
    let t2 = Object.create(this.prototype);
    return t2.arrayBuffer = e53.arrayBuffer, t2.length = e53.length, t2.capacity = e53.arrayBuffer.byteLength / t2.bytesPerElement, t2._refreshViews(), t2;
  }
  _trim() {
    this.length !== this.capacity && (this.capacity = this.length, this.arrayBuffer = this.arrayBuffer.slice(0, this.length * this.bytesPerElement), this._refreshViews());
  }
  clear() {
    this.length = 0;
  }
  resize(e53) {
    this.reserve(e53), this.length = e53;
  }
  reserve(e53) {
    if (e53 > this.capacity) {
      this.capacity = Math.max(e53, Math.floor(this.capacity * 5), 128), this.arrayBuffer = new ArrayBuffer(this.capacity * this.bytesPerElement);
      let t2 = this.uint8;
      this._refreshViews(), t2 && this.uint8.set(t2);
    }
  }
  _refreshViews() {
    throw Error(`_refreshViews() must be implemented by each concrete StructArray layout`);
  }
  freeBufferAfterUpload() {
    this.arrayBuffer = /* @__PURE__ */ new ArrayBuffer(0), this._refreshViews();
  }
};
function Ho(e53, t2 = 1) {
  let n2 = 0, r2 = 0;
  return { members: e53.map((e54) => {
    let i2 = Uo(e54.type), a2 = n2 = Wo(n2, Math.max(t2, i2)), o2 = e54.components || 1;
    return r2 = Math.max(r2, i2), n2 += i2 * o2, { name: e54.name, type: e54.type, components: o2, offset: a2 };
  }), size: Wo(n2, Math.max(r2, t2)), alignment: t2 };
}
function Uo(e53) {
  return zo[e53].BYTES_PER_ELEMENT;
}
function Wo(e53, t2) {
  return Math.ceil(e53 / t2) * t2;
}
var Go = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2) {
    let n2 = this.length;
    return this.resize(n2 + 1), this.emplace(n2, e53, t2);
  }
  emplace(e53, t2, n2) {
    let r2 = e53 * 2;
    return this.int16[r2 + 0] = t2, this.int16[r2 + 1] = n2, e53;
  }
};
Go.prototype.bytesPerElement = 4, G(`StructArrayLayout2i4`, Go);
var Ko = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2) {
    let r2 = this.length;
    return this.resize(r2 + 1), this.emplace(r2, e53, t2, n2);
  }
  emplace(e53, t2, n2, r2) {
    let i2 = e53 * 3;
    return this.int16[i2 + 0] = t2, this.int16[i2 + 1] = n2, this.int16[i2 + 2] = r2, e53;
  }
};
Ko.prototype.bytesPerElement = 6, G(`StructArrayLayout3i6`, Ko);
var qo = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2) {
    let i2 = this.length;
    return this.resize(i2 + 1), this.emplace(i2, e53, t2, n2, r2);
  }
  emplace(e53, t2, n2, r2, i2) {
    let a2 = e53 * 4;
    return this.int16[a2 + 0] = t2, this.int16[a2 + 1] = n2, this.int16[a2 + 2] = r2, this.int16[a2 + 3] = i2, e53;
  }
};
qo.prototype.bytesPerElement = 8, G(`StructArrayLayout4i8`, qo);
var Jo = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2) {
    let o2 = this.length;
    return this.resize(o2 + 1), this.emplace(o2, e53, t2, n2, r2, i2, a2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2) {
    let s2 = e53 * 6;
    return this.int16[s2 + 0] = t2, this.int16[s2 + 1] = n2, this.int16[s2 + 2] = r2, this.int16[s2 + 3] = i2, this.int16[s2 + 4] = a2, this.int16[s2 + 5] = o2, e53;
  }
};
Jo.prototype.bytesPerElement = 12, G(`StructArrayLayout2i4i12`, Jo);
var Yo = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.int8 = new Int8Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = this.length;
    return this.resize(c2 + 1), this.emplace(c2, e53, t2, n2, r2, i2, a2, o2, s2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = e53 * 5, u2 = e53 * 10;
    return this.int16[l2 + 0] = t2, this.int16[l2 + 1] = n2, this.uint8[u2 + 4] = r2, this.uint8[u2 + 5] = i2, this.uint8[u2 + 6] = a2, this.uint8[u2 + 7] = o2, this.int8[u2 + 8] = s2, this.int8[u2 + 9] = c2, e53;
  }
};
Yo.prototype.bytesPerElement = 10, G(`StructArrayLayout2i4ub2b10`, Yo);
var Xo = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2) {
    let n2 = this.length;
    return this.resize(n2 + 1), this.emplace(n2, e53, t2);
  }
  emplace(e53, t2, n2) {
    let r2 = e53 * 2;
    return this.float32[r2 + 0] = t2, this.float32[r2 + 1] = n2, e53;
  }
};
Xo.prototype.bytesPerElement = 8, G(`StructArrayLayout2f8`, Xo);
var Zo = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
    let u2 = this.length;
    return this.resize(u2 + 1), this.emplace(u2, e53, t2, n2, r2, i2, a2, o2, s2, c2, l2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
    let d2 = e53 * 10;
    return this.uint16[d2 + 0] = t2, this.uint16[d2 + 1] = n2, this.uint16[d2 + 2] = r2, this.uint16[d2 + 3] = i2, this.uint16[d2 + 4] = a2, this.uint16[d2 + 5] = o2, this.uint16[d2 + 6] = s2, this.uint16[d2 + 7] = c2, this.uint16[d2 + 8] = l2, this.uint16[d2 + 9] = u2, e53;
  }
};
Zo.prototype.bytesPerElement = 20, G(`StructArrayLayout10ui20`, Zo);
var Qo = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = this.length;
    return this.resize(c2 + 1), this.emplace(c2, e53, t2, n2, r2, i2, a2, o2, s2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = e53 * 8;
    return this.uint16[l2 + 0] = t2, this.uint16[l2 + 1] = n2, this.uint16[l2 + 2] = r2, this.uint16[l2 + 3] = i2, this.uint16[l2 + 4] = a2, this.uint16[l2 + 5] = o2, this.uint16[l2 + 6] = s2, this.uint16[l2 + 7] = c2, e53;
  }
};
Qo.prototype.bytesPerElement = 16, G(`StructArrayLayout8ui16`, Qo);
var $o = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2) {
    let p2 = this.length;
    return this.resize(p2 + 1), this.emplace(p2, e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2) {
    let m2 = e53 * 14, h2 = e53 * 7;
    return this.int16[m2 + 0] = t2, this.int16[m2 + 1] = n2, this.int16[m2 + 2] = r2, this.int16[m2 + 3] = i2, this.uint16[m2 + 4] = a2, this.uint16[m2 + 5] = o2, this.uint16[m2 + 6] = s2, this.uint16[m2 + 7] = c2, this.int16[m2 + 8] = l2, this.int16[m2 + 9] = u2, this.int16[m2 + 10] = d2, this.int16[m2 + 11] = f2, this.float32[h2 + 6] = p2, e53;
  }
};
$o.prototype.bytesPerElement = 28, G(`StructArrayLayout4i4ui4i1f28`, $o);
var es = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2) {
    let r2 = this.length;
    return this.resize(r2 + 1), this.emplace(r2, e53, t2, n2);
  }
  emplace(e53, t2, n2, r2) {
    let i2 = e53 * 3;
    return this.float32[i2 + 0] = t2, this.float32[i2 + 1] = n2, this.float32[i2 + 2] = r2, e53;
  }
};
es.prototype.bytesPerElement = 12, G(`StructArrayLayout3f12`, es);
var ts = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer);
  }
  emplaceBack(e53) {
    let t2 = this.length;
    return this.resize(t2 + 1), this.emplace(t2, e53);
  }
  emplace(e53, t2) {
    let n2 = e53 * 1;
    return this.uint32[n2 + 0] = t2, e53;
  }
};
ts.prototype.bytesPerElement = 4, G(`StructArrayLayout1ul4`, ts);
var ns = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = this.length;
    return this.resize(l2 + 1), this.emplace(l2, e53, t2, n2, r2, i2, a2, o2, s2, c2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
    let u2 = e53 * 10, d2 = e53 * 5;
    return this.int16[u2 + 0] = t2, this.int16[u2 + 1] = n2, this.int16[u2 + 2] = r2, this.int16[u2 + 3] = i2, this.int16[u2 + 4] = a2, this.int16[u2 + 5] = o2, this.uint32[d2 + 3] = s2, this.uint16[u2 + 8] = c2, this.uint16[u2 + 9] = l2, e53;
  }
};
ns.prototype.bytesPerElement = 20, G(`StructArrayLayout6i1ul2ui20`, ns);
var rs = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2) {
    let o2 = this.length;
    return this.resize(o2 + 1), this.emplace(o2, e53, t2, n2, r2, i2, a2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2) {
    let s2 = e53 * 6;
    return this.int16[s2 + 0] = t2, this.int16[s2 + 1] = n2, this.int16[s2 + 2] = r2, this.int16[s2 + 3] = i2, this.int16[s2 + 4] = a2, this.int16[s2 + 5] = o2, e53;
  }
};
rs.prototype.bytesPerElement = 12, G(`StructArrayLayout2i2i2i12`, rs);
var is = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2) {
    let a2 = this.length;
    return this.resize(a2 + 1), this.emplace(a2, e53, t2, n2, r2, i2);
  }
  emplace(e53, t2, n2, r2, i2, a2) {
    let o2 = e53 * 4, s2 = e53 * 8;
    return this.float32[o2 + 0] = t2, this.float32[o2 + 1] = n2, this.float32[o2 + 2] = r2, this.int16[s2 + 6] = i2, this.int16[s2 + 7] = a2, e53;
  }
};
is.prototype.bytesPerElement = 16, G(`StructArrayLayout2f1f2i16`, is);
var as = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2) {
    let o2 = this.length;
    return this.resize(o2 + 1), this.emplace(o2, e53, t2, n2, r2, i2, a2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2) {
    let s2 = e53 * 16, c2 = e53 * 4, l2 = e53 * 8;
    return this.uint8[s2 + 0] = t2, this.uint8[s2 + 1] = n2, this.float32[c2 + 1] = r2, this.float32[c2 + 2] = i2, this.int16[l2 + 6] = a2, this.int16[l2 + 7] = o2, e53;
  }
};
as.prototype.bytesPerElement = 16, G(`StructArrayLayout2ub2f2i16`, as);
var os = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2) {
    let r2 = this.length;
    return this.resize(r2 + 1), this.emplace(r2, e53, t2, n2);
  }
  emplace(e53, t2, n2, r2) {
    let i2 = e53 * 3;
    return this.uint16[i2 + 0] = t2, this.uint16[i2 + 1] = n2, this.uint16[i2 + 2] = r2, e53;
  }
};
os.prototype.bytesPerElement = 6, G(`StructArrayLayout3ui6`, os);
var ss = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2) {
    let v2 = this.length;
    return this.resize(v2 + 1), this.emplace(v2, e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2) {
    let y2 = e53 * 26, b2 = e53 * 13, x2 = e53 * 52;
    return this.int16[y2 + 0] = t2, this.int16[y2 + 1] = n2, this.uint16[y2 + 2] = r2, this.uint16[y2 + 3] = i2, this.uint32[b2 + 2] = a2, this.uint32[b2 + 3] = o2, this.uint32[b2 + 4] = s2, this.uint16[y2 + 10] = c2, this.uint16[y2 + 11] = l2, this.uint16[y2 + 12] = u2, this.float32[b2 + 7] = d2, this.float32[b2 + 8] = f2, this.uint8[x2 + 36] = p2, this.uint8[x2 + 37] = m2, this.uint8[x2 + 38] = h2, this.uint32[b2 + 10] = g2, this.int16[y2 + 22] = _2, this.float32[b2 + 12] = v2, e53;
  }
};
ss.prototype.bytesPerElement = 52, G(`StructArrayLayout2i2ui3ul3ui2f3ub1ul1i1f52`, ss);
var cs = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.int16 = new Int16Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2, O2) {
    let k2 = this.length;
    return this.resize(k2 + 1), this.emplace(k2, e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2, O2);
  }
  emplace(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2, O2, k2) {
    let A2 = e53 * 34, j2 = e53 * 17;
    return this.int16[A2 + 0] = t2, this.int16[A2 + 1] = n2, this.int16[A2 + 2] = r2, this.int16[A2 + 3] = i2, this.int16[A2 + 4] = a2, this.int16[A2 + 5] = o2, this.int16[A2 + 6] = s2, this.int16[A2 + 7] = c2, this.uint16[A2 + 8] = l2, this.uint16[A2 + 9] = u2, this.uint16[A2 + 10] = d2, this.uint16[A2 + 11] = f2, this.uint16[A2 + 12] = p2, this.uint16[A2 + 13] = m2, this.uint16[A2 + 14] = h2, this.uint16[A2 + 15] = g2, this.uint16[A2 + 16] = _2, this.uint16[A2 + 17] = v2, this.uint16[A2 + 18] = y2, this.uint16[A2 + 19] = b2, this.uint16[A2 + 20] = x2, this.uint16[A2 + 21] = S2, this.uint16[A2 + 22] = C2, this.uint32[j2 + 12] = w2, this.float32[j2 + 13] = T2, this.float32[j2 + 14] = E2, this.uint16[A2 + 30] = D2, this.uint16[A2 + 31] = O2, this.float32[j2 + 16] = k2, e53;
  }
};
cs.prototype.bytesPerElement = 68, G(`StructArrayLayout8i15ui1ul2f2ui1f68`, cs);
var ls = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
  }
  emplaceBack(e53) {
    let t2 = this.length;
    return this.resize(t2 + 1), this.emplace(t2, e53);
  }
  emplace(e53, t2) {
    let n2 = e53 * 1;
    return this.float32[n2 + 0] = t2, e53;
  }
};
ls.prototype.bytesPerElement = 4, G(`StructArrayLayout1f4`, ls);
var us = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2) {
    let r2 = this.length;
    return this.resize(r2 + 1), this.emplace(r2, e53, t2, n2);
  }
  emplace(e53, t2, n2, r2) {
    let i2 = e53 * 6, a2 = e53 * 3;
    return this.uint16[i2 + 0] = t2, this.float32[a2 + 1] = n2, this.float32[a2 + 2] = r2, e53;
  }
};
us.prototype.bytesPerElement = 12, G(`StructArrayLayout1ui2f12`, us);
var ds = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint32 = new Uint32Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2) {
    let r2 = this.length;
    return this.resize(r2 + 1), this.emplace(r2, e53, t2, n2);
  }
  emplace(e53, t2, n2, r2) {
    let i2 = e53 * 2, a2 = e53 * 4;
    return this.uint32[i2 + 0] = t2, this.uint16[a2 + 2] = n2, this.uint16[a2 + 3] = r2, e53;
  }
};
ds.prototype.bytesPerElement = 8, G(`StructArrayLayout1ul2ui8`, ds);
var fs = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2) {
    let n2 = this.length;
    return this.resize(n2 + 1), this.emplace(n2, e53, t2);
  }
  emplace(e53, t2, n2) {
    let r2 = e53 * 2;
    return this.uint16[r2 + 0] = t2, this.uint16[r2 + 1] = n2, e53;
  }
};
fs.prototype.bytesPerElement = 4, G(`StructArrayLayout2ui4`, fs);
var ps = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.uint16 = new Uint16Array(this.arrayBuffer);
  }
  emplaceBack(e53) {
    let t2 = this.length;
    return this.resize(t2 + 1), this.emplace(t2, e53);
  }
  emplace(e53, t2) {
    let n2 = e53 * 1;
    return this.uint16[n2 + 0] = t2, e53;
  }
};
ps.prototype.bytesPerElement = 2, G(`StructArrayLayout1ui2`, ps);
var ms = class extends Vo {
  _refreshViews() {
    this.uint8 = new Uint8Array(this.arrayBuffer), this.float32 = new Float32Array(this.arrayBuffer);
  }
  emplaceBack(e53, t2, n2, r2) {
    let i2 = this.length;
    return this.resize(i2 + 1), this.emplace(i2, e53, t2, n2, r2);
  }
  emplace(e53, t2, n2, r2, i2) {
    let a2 = e53 * 4;
    return this.float32[a2 + 0] = t2, this.float32[a2 + 1] = n2, this.float32[a2 + 2] = r2, this.float32[a2 + 3] = i2, e53;
  }
};
ms.prototype.bytesPerElement = 16, G(`StructArrayLayout4f16`, ms);
var hs = class extends Bo {
  get anchorPointX() {
    return this._structArray.int16[this._pos2 + 0];
  }
  get anchorPointY() {
    return this._structArray.int16[this._pos2 + 1];
  }
  get x1() {
    return this._structArray.int16[this._pos2 + 2];
  }
  get y1() {
    return this._structArray.int16[this._pos2 + 3];
  }
  get x2() {
    return this._structArray.int16[this._pos2 + 4];
  }
  get y2() {
    return this._structArray.int16[this._pos2 + 5];
  }
  get featureIndex() {
    return this._structArray.uint32[this._pos4 + 3];
  }
  get sourceLayerIndex() {
    return this._structArray.uint16[this._pos2 + 8];
  }
  get bucketIndex() {
    return this._structArray.uint16[this._pos2 + 9];
  }
  get anchorPoint() {
    return new l(this.anchorPointX, this.anchorPointY);
  }
};
hs.prototype.size = 20;
var gs = class extends ns {
  get(e53) {
    return new hs(this, e53);
  }
};
G(`CollisionBoxArray`, gs);
var _s = class extends Bo {
  get anchorX() {
    return this._structArray.int16[this._pos2 + 0];
  }
  get anchorY() {
    return this._structArray.int16[this._pos2 + 1];
  }
  get glyphStartIndex() {
    return this._structArray.uint16[this._pos2 + 2];
  }
  get numGlyphs() {
    return this._structArray.uint16[this._pos2 + 3];
  }
  get vertexStartIndex() {
    return this._structArray.uint32[this._pos4 + 2];
  }
  get lineStartIndex() {
    return this._structArray.uint32[this._pos4 + 3];
  }
  get lineLength() {
    return this._structArray.uint32[this._pos4 + 4];
  }
  get segment() {
    return this._structArray.uint16[this._pos2 + 10];
  }
  get lowerSize() {
    return this._structArray.uint16[this._pos2 + 11];
  }
  get upperSize() {
    return this._structArray.uint16[this._pos2 + 12];
  }
  get lineOffsetX() {
    return this._structArray.float32[this._pos4 + 7];
  }
  get lineOffsetY() {
    return this._structArray.float32[this._pos4 + 8];
  }
  get writingMode() {
    return this._structArray.uint8[this._pos1 + 36];
  }
  get placedOrientation() {
    return this._structArray.uint8[this._pos1 + 37];
  }
  set placedOrientation(e53) {
    this._structArray.uint8[this._pos1 + 37] = e53;
  }
  get hidden() {
    return this._structArray.uint8[this._pos1 + 38];
  }
  set hidden(e53) {
    this._structArray.uint8[this._pos1 + 38] = e53;
  }
  get crossTileID() {
    return this._structArray.uint32[this._pos4 + 10];
  }
  set crossTileID(e53) {
    this._structArray.uint32[this._pos4 + 10] = e53;
  }
  get associatedIconIndex() {
    return this._structArray.int16[this._pos2 + 22];
  }
  get heightOffset() {
    return this._structArray.float32[this._pos4 + 12];
  }
};
_s.prototype.size = 52;
var vs = class extends ss {
  get(e53) {
    return new _s(this, e53);
  }
};
G(`PlacedSymbolArray`, vs);
var ys = class extends Bo {
  get anchorX() {
    return this._structArray.int16[this._pos2 + 0];
  }
  get anchorY() {
    return this._structArray.int16[this._pos2 + 1];
  }
  get rightJustifiedTextSymbolIndex() {
    return this._structArray.int16[this._pos2 + 2];
  }
  get centerJustifiedTextSymbolIndex() {
    return this._structArray.int16[this._pos2 + 3];
  }
  get leftJustifiedTextSymbolIndex() {
    return this._structArray.int16[this._pos2 + 4];
  }
  get verticalPlacedTextSymbolIndex() {
    return this._structArray.int16[this._pos2 + 5];
  }
  get placedIconSymbolIndex() {
    return this._structArray.int16[this._pos2 + 6];
  }
  get verticalPlacedIconSymbolIndex() {
    return this._structArray.int16[this._pos2 + 7];
  }
  get key() {
    return this._structArray.uint16[this._pos2 + 8];
  }
  get textBoxStartIndex() {
    return this._structArray.uint16[this._pos2 + 9];
  }
  get textBoxEndIndex() {
    return this._structArray.uint16[this._pos2 + 10];
  }
  get verticalTextBoxStartIndex() {
    return this._structArray.uint16[this._pos2 + 11];
  }
  get verticalTextBoxEndIndex() {
    return this._structArray.uint16[this._pos2 + 12];
  }
  get iconBoxStartIndex() {
    return this._structArray.uint16[this._pos2 + 13];
  }
  get iconBoxEndIndex() {
    return this._structArray.uint16[this._pos2 + 14];
  }
  get verticalIconBoxStartIndex() {
    return this._structArray.uint16[this._pos2 + 15];
  }
  get verticalIconBoxEndIndex() {
    return this._structArray.uint16[this._pos2 + 16];
  }
  get featureIndex() {
    return this._structArray.uint16[this._pos2 + 17];
  }
  get numHorizontalGlyphVertices() {
    return this._structArray.uint16[this._pos2 + 18];
  }
  get numVerticalGlyphVertices() {
    return this._structArray.uint16[this._pos2 + 19];
  }
  get numIconVertices() {
    return this._structArray.uint16[this._pos2 + 20];
  }
  get numVerticalIconVertices() {
    return this._structArray.uint16[this._pos2 + 21];
  }
  get useRuntimeCollisionCircles() {
    return this._structArray.uint16[this._pos2 + 22];
  }
  get crossTileID() {
    return this._structArray.uint32[this._pos4 + 12];
  }
  set crossTileID(e53) {
    this._structArray.uint32[this._pos4 + 12] = e53;
  }
  get textBoxScale() {
    return this._structArray.float32[this._pos4 + 13];
  }
  get collisionCircleDiameter() {
    return this._structArray.float32[this._pos4 + 14];
  }
  get textAnchorOffsetStartIndex() {
    return this._structArray.uint16[this._pos2 + 30];
  }
  get textAnchorOffsetEndIndex() {
    return this._structArray.uint16[this._pos2 + 31];
  }
  get heightOffset() {
    return this._structArray.float32[this._pos4 + 16];
  }
};
ys.prototype.size = 68;
var bs = class extends cs {
  get(e53) {
    return new ys(this, e53);
  }
};
G(`SymbolInstanceArray`, bs);
var xs = class extends ls {
  getoffsetX(e53) {
    return this.float32[e53 * 1 + 0];
  }
};
G(`GlyphOffsetArray`, xs);
var Ss = class extends Ko {
  getx(e53) {
    return this.int16[e53 * 3 + 0];
  }
  gety(e53) {
    return this.int16[e53 * 3 + 1];
  }
  gettileUnitDistanceFromAnchor(e53) {
    return this.int16[e53 * 3 + 2];
  }
};
G(`SymbolLineVertexArray`, Ss);
var Cs = class extends Bo {
  get textAnchor() {
    return this._structArray.uint16[this._pos2 + 0];
  }
  get textOffset0() {
    return this._structArray.float32[this._pos4 + 1];
  }
  get textOffset1() {
    return this._structArray.float32[this._pos4 + 2];
  }
};
Cs.prototype.size = 12;
var ws = class extends us {
  get(e53) {
    return new Cs(this, e53);
  }
};
G(`TextAnchorOffsetArray`, ws);
var Ts = class extends Bo {
  get featureIndex() {
    return this._structArray.uint32[this._pos4 + 0];
  }
  get sourceLayerIndex() {
    return this._structArray.uint16[this._pos2 + 2];
  }
  get bucketIndex() {
    return this._structArray.uint16[this._pos2 + 3];
  }
};
Ts.prototype.size = 8;
var Es = class extends ds {
  get(e53) {
    return new Ts(this, e53);
  }
};
G(`FeatureIndexArray`, Es);
var Ds = class extends Go {
};
var Os = class extends Go {
};
var ks = class extends Go {
};
var As = class extends Jo {
};
var js = class extends Yo {
};
var Ms = class extends Xo {
};
var Ns = class extends Zo {
};
var Ps = class extends Qo {
};
var Fs = class extends $o {
};
var Is = class extends es {
};
var Ls = class extends ts {
};
var Rs = class extends rs {
};
var zs = class extends as {
};
var Bs = class extends os {
};
var Vs = class extends fs {
};
var Hs = Ho([{ name: `a_pos`, components: 2, type: `Int16` }], 4);
var Us = Hs.members;
Hs.size, Hs.alignment;
var Ws = class e38 {
  constructor(e53 = []) {
    this._forceNewSegmentOnNextPrepare = false, this.segments = e53;
  }
  prepareSegment(t2, n2, r2, i2) {
    let a2 = this.segments[this.segments.length - 1];
    return t2 > e38.MAX_VERTEX_ARRAY_LENGTH && j(`Max vertices per segment is ${e38.MAX_VERTEX_ARRAY_LENGTH}: bucket requested ${t2}. Consider using the \`fillLargeMeshArrays\` function if you require meshes with more than ${e38.MAX_VERTEX_ARRAY_LENGTH} vertices.`), this._forceNewSegmentOnNextPrepare || !a2 || a2.vertexLength + t2 > e38.MAX_VERTEX_ARRAY_LENGTH || a2.sortKey !== i2 ? this.createNewSegment(n2, r2, i2) : a2;
  }
  createNewSegment(e53, t2, n2) {
    let r2 = { vertexOffset: e53.length, primitiveOffset: t2.length, vertexLength: 0, primitiveLength: 0, vaos: {} };
    return n2 !== void 0 && (r2.sortKey = n2), this._forceNewSegmentOnNextPrepare = false, this.segments.push(r2), r2;
  }
  getOrCreateLatestSegment(e53, t2, n2) {
    return this.prepareSegment(0, e53, t2, n2);
  }
  forceNewSegmentOnNextPrepare() {
    this._forceNewSegmentOnNextPrepare = true;
  }
  get() {
    return this.segments;
  }
  destroy() {
    for (let e53 of this.segments) for (let t2 in e53.vaos) e53.vaos[t2].destroy();
  }
  static simpleSegment(t2, n2, r2, i2) {
    return new e38([{ vertexOffset: t2, primitiveOffset: n2, vertexLength: r2, primitiveLength: i2, vaos: {}, sortKey: 0 }]);
  }
};
Ws.MAX_VERTEX_ARRAY_LENGTH = 2 ** 16 - 1, G(`SegmentVector`, Ws);
function Gs(e53, t2) {
  return e53 = S(Math.floor(e53), 0, 255), t2 = S(Math.floor(t2), 0, 255), 256 * e53 + t2;
}
var Ks = Ho([{ name: `a_pattern_from`, components: 4, type: `Uint16` }, { name: `a_pattern_to`, components: 4, type: `Uint16` }, { name: `a_pixel_ratio_from`, components: 1, type: `Uint16` }, { name: `a_pixel_ratio_to`, components: 1, type: `Uint16` }]);
var qs = Ho([{ name: `a_dasharray_from`, components: 4, type: `Uint16` }, { name: `a_dasharray_to`, components: 4, type: `Uint16` }]);
var Js = /* @__PURE__ */ o(((e53, t2) => {
  function n2(e54, t3) {
    for (var n3 = e54.length & 3, r2 = e54.length - n3, i2 = t3, a2, o2 = 3432918353, s2 = 461845907, c2, l2 = 0; l2 < r2; ) c2 = e54.charCodeAt(l2) & 255 | (e54.charCodeAt(++l2) & 255) << 8 | (e54.charCodeAt(++l2) & 255) << 16 | (e54.charCodeAt(++l2) & 255) << 24, ++l2, c2 = (c2 & 65535) * o2 + (((c2 >>> 16) * o2 & 65535) << 16) | 0, c2 = c2 << 15 | c2 >>> 17, c2 = (c2 & 65535) * s2 + (((c2 >>> 16) * s2 & 65535) << 16) | 0, i2 ^= c2, i2 = i2 << 13 | i2 >>> 19, a2 = (i2 & 65535) * 5 + (((i2 >>> 16) * 5 & 65535) << 16) | 0, i2 = (a2 & 65535) + 27492 + (((a2 >>> 16) + 58964 & 65535) << 16);
    switch (c2 = 0, n3) {
      case 3:
        c2 ^= (e54.charCodeAt(l2 + 2) & 255) << 16;
      case 2:
        c2 ^= (e54.charCodeAt(l2 + 1) & 255) << 8;
      case 1:
        c2 ^= e54.charCodeAt(l2) & 255, c2 = (c2 & 65535) * o2 + (((c2 >>> 16) * o2 & 65535) << 16) | 0, c2 = c2 << 15 | c2 >>> 17, c2 = (c2 & 65535) * s2 + (((c2 >>> 16) * s2 & 65535) << 16) | 0, i2 ^= c2;
    }
    return i2 ^= e54.length, i2 ^= i2 >>> 16, i2 = (i2 & 65535) * 2246822507 + (((i2 >>> 16) * 2246822507 & 65535) << 16) | 0, i2 ^= i2 >>> 13, i2 = (i2 & 65535) * 3266489909 + (((i2 >>> 16) * 3266489909 & 65535) << 16) | 0, i2 ^= i2 >>> 16, i2 >>> 0;
  }
  t2 !== void 0 && (t2.exports = n2);
}));
var Ys = /* @__PURE__ */ o(((e53, t2) => {
  function n2(e54, t3) {
    for (var n3 = e54.length, r2 = t3 ^ n3, i2 = 0, a2; n3 >= 4; ) a2 = e54.charCodeAt(i2) & 255 | (e54.charCodeAt(++i2) & 255) << 8 | (e54.charCodeAt(++i2) & 255) << 16 | (e54.charCodeAt(++i2) & 255) << 24, a2 = (a2 & 65535) * 1540483477 + (((a2 >>> 16) * 1540483477 & 65535) << 16), a2 ^= a2 >>> 24, a2 = (a2 & 65535) * 1540483477 + (((a2 >>> 16) * 1540483477 & 65535) << 16), r2 = (r2 & 65535) * 1540483477 + (((r2 >>> 16) * 1540483477 & 65535) << 16) ^ a2, n3 -= 4, ++i2;
    switch (n3) {
      case 3:
        r2 ^= (e54.charCodeAt(i2 + 2) & 255) << 16;
      case 2:
        r2 ^= (e54.charCodeAt(i2 + 1) & 255) << 8;
      case 1:
        r2 ^= e54.charCodeAt(i2) & 255, r2 = (r2 & 65535) * 1540483477 + (((r2 >>> 16) * 1540483477 & 65535) << 16);
    }
    return r2 ^= r2 >>> 13, r2 = (r2 & 65535) * 1540483477 + (((r2 >>> 16) * 1540483477 & 65535) << 16), r2 ^= r2 >>> 15, r2 >>> 0;
  }
  t2.exports = n2;
}));
var Xs = /* @__PURE__ */ c((/* @__PURE__ */ o(((e53, t2) => {
  var n2 = Js(), r2 = Ys();
  t2.exports = n2, t2.exports.murmur3 = n2, t2.exports.murmur2 = r2;
})))(), 1);
var Zs = class e39 {
  constructor() {
    this.ids = [], this.positions = [], this.indexed = false;
  }
  add(e53, t2, n2, r2) {
    this.ids.push(Qs(e53)), this.positions.push(t2, n2, r2);
  }
  getPositions(e53) {
    if (!this.indexed) throw Error(`Trying to get index, but feature positions are not indexed`);
    let t2 = Qs(e53), n2 = 0, r2 = this.ids.length - 1;
    for (; n2 < r2; ) {
      let e54 = n2 + r2 >> 1;
      this.ids[e54] >= t2 ? r2 = e54 : n2 = e54 + 1;
    }
    let i2 = [];
    for (; this.ids[n2] === t2; ) {
      let e54 = this.positions[3 * n2], t3 = this.positions[3 * n2 + 1], r3 = this.positions[3 * n2 + 2];
      i2.push({ index: e54, start: t3, end: r3 }), n2++;
    }
    return i2;
  }
  static serialize(e53, t2) {
    let n2 = new Float64Array(e53.ids), r2 = new Uint32Array(e53.positions);
    return $s(n2, r2, 0, n2.length - 1), t2 && t2.push(n2.buffer, r2.buffer), { ids: n2, positions: r2 };
  }
  static deserialize(t2) {
    let n2 = new e39();
    return n2.ids = t2.ids, n2.positions = t2.positions, n2.indexed = true, n2;
  }
};
function Qs(e53) {
  let t2 = +e53;
  return !isNaN(t2) && t2 <= 2 ** 53 - 1 ? t2 : (0, Xs.default)(String(e53));
}
function $s(e53, t2, n2, r2) {
  for (; n2 < r2; ) {
    let i2 = e53[n2 + r2 >> 1], a2 = n2 - 1, o2 = r2 + 1;
    for (; ; ) {
      do
        a2++;
      while (e53[a2] < i2);
      do
        o2--;
      while (e53[o2] > i2);
      if (a2 >= o2) break;
      ec(e53, a2, o2), ec(t2, 3 * a2, 3 * o2), ec(t2, 3 * a2 + 1, 3 * o2 + 1), ec(t2, 3 * a2 + 2, 3 * o2 + 2);
    }
    o2 - n2 < r2 - o2 ? ($s(e53, t2, n2, o2), n2 = o2 + 1) : ($s(e53, t2, o2 + 1, r2), r2 = o2);
  }
}
function ec(e53, t2, n2) {
  let r2 = e53[t2];
  e53[t2] = e53[n2], e53[n2] = r2;
}
G(`FeaturePositionMap`, Zs);
var tc = class {
  constructor(e53, t2) {
    this.gl = e53.gl, this.location = t2;
  }
};
var nc = class extends tc {
  constructor(e53, t2) {
    super(e53, t2), this.current = 0;
  }
  set(e53) {
    this.current !== e53 && (this.current = e53, this.gl.uniform1f(this.location, e53));
  }
};
var rc = class extends tc {
  constructor(e53, t2) {
    super(e53, t2), this.current = [0, 0, 0, 0];
  }
  set(e53) {
    (e53[0] !== this.current[0] || e53[1] !== this.current[1] || e53[2] !== this.current[2] || e53[3] !== this.current[3]) && (this.current = e53, this.gl.uniform4f(this.location, e53[0], e53[1], e53[2], e53[3]));
  }
};
var ic = class extends tc {
  constructor(e53, t2) {
    super(e53, t2), this.current = V.transparent;
  }
  set(e53) {
    (e53.r !== this.current.r || e53.g !== this.current.g || e53.b !== this.current.b || e53.a !== this.current.a) && (this.current = e53, this.gl.uniform4f(this.location, e53.r, e53.g, e53.b, e53.a));
  }
};
function ac(e53) {
  return [Gs(255 * e53.r, 255 * e53.g), Gs(255 * e53.b, 255 * e53.a)];
}
var oc = class {
  constructor(e53, t2, n2) {
    this.value = e53, this.uniformNames = t2.map((e54) => `u_${e54}`), this.type = n2;
  }
  setUniform(e53, t2, n2) {
    e53.set(n2.constantOr(this.value));
  }
  getBinding(e53, t2, n2) {
    return this.type === `color` ? new ic(e53, t2) : new nc(e53, t2);
  }
};
var sc = class {
  constructor(e53, t2) {
    this.uniformNames = t2.map((e54) => `u_${e54}`), this.patternFrom = null, this.patternTo = null, this.dashFrom = null, this.dashTo = null, this.pixelRatioFrom = 1, this.pixelRatioTo = 1;
  }
  setConstantPatternPositions(e53, t2) {
    this.pixelRatioFrom = t2.pixelRatio, this.pixelRatioTo = e53.pixelRatio, this.patternFrom = t2.tlbr, this.patternTo = e53.tlbr;
  }
  setConstantDashPositions(e53, t2) {
    this.dashTo = [0, e53.y, e53.height, e53.width], this.dashFrom = [0, t2.y, t2.height, t2.width];
  }
  setUniform(e53, t2, n2, r2) {
    let i2 = null;
    r2 === `u_pattern_to` ? i2 = this.patternTo : r2 === `u_pattern_from` ? i2 = this.patternFrom : r2 === `u_dasharray_to` ? i2 = this.dashTo : r2 === `u_dasharray_from` ? i2 = this.dashFrom : r2 === `u_pixel_ratio_to` ? i2 = this.pixelRatioTo : r2 === `u_pixel_ratio_from` && (i2 = this.pixelRatioFrom), i2 !== null && e53.set(i2);
  }
  getBinding(e53, t2, n2) {
    return n2.startsWith(`u_pattern`) || n2.startsWith(`u_dasharray_`) ? new rc(e53, t2) : new nc(e53, t2);
  }
};
var cc = class {
  constructor(e53, t2, n2, r2) {
    this.expression = e53, this.type = n2, this.maxValue = 0, this.paintVertexAttributes = t2.map((e54) => ({ name: `a_${e54}`, type: `Float32`, components: n2 === `color` ? 2 : 1, offset: 0 })), this.paintVertexArray = new r2();
  }
  populatePaintArray(e53, t2, n2) {
    let r2 = this.paintVertexArray.length, i2 = this.expression.evaluate(new K(0, n2), t2, {}, n2.canonical, [], n2.formattedSection);
    this.paintVertexArray.resize(e53), this._setPaintValue(r2, e53, i2);
  }
  updatePaintArray(e53, t2, n2, r2, i2) {
    let a2 = this.expression.evaluate(new K(0, i2), n2, r2);
    this._setPaintValue(e53, t2, a2);
  }
  _setPaintValue(e53, t2, n2) {
    if (this.type === `color`) {
      let r2 = ac(n2);
      for (let n3 = e53; n3 < t2; n3++) this.paintVertexArray.emplace(n3, r2[0], r2[1]);
    } else {
      for (let r2 = e53; r2 < t2; r2++) this.paintVertexArray.emplace(r2, n2);
      this.maxValue = Math.max(this.maxValue, Math.abs(n2));
    }
  }
  upload(e53) {
    this.paintVertexArray?.arrayBuffer.byteLength && (this.paintVertexBuffer?.buffer ? this.paintVertexBuffer.updateData(this.paintVertexArray) : this.paintVertexBuffer = e53.createVertexBuffer(this.paintVertexArray, this.paintVertexAttributes, this.expression.isStateDependent));
  }
  destroy() {
    this.paintVertexBuffer && this.paintVertexBuffer.destroy();
  }
};
var lc = class {
  constructor(e53, t2, n2, r2, i2, a2) {
    this.expression = e53, this.uniformNames = t2.map((e54) => `u_${e54}_t`), this.type = n2, this.useIntegerZoom = r2, this.zoom = i2, this.maxValue = 0, this.paintVertexAttributes = t2.map((e54) => ({ name: `a_${e54}`, type: `Float32`, components: n2 === `color` ? 4 : 2, offset: 0 })), this.paintVertexArray = new a2();
  }
  populatePaintArray(e53, t2, n2) {
    let r2 = this.expression.evaluate(new K(this.zoom, n2), t2, {}, n2.canonical, [], n2.formattedSection), i2 = this.expression.evaluate(new K(this.zoom + 1, n2), t2, {}, n2.canonical, [], n2.formattedSection), a2 = this.paintVertexArray.length;
    this.paintVertexArray.resize(e53), this._setPaintValue(a2, e53, r2, i2);
  }
  updatePaintArray(e53, t2, n2, r2, i2) {
    let a2 = this.expression.evaluate(new K(this.zoom, i2), n2, r2), o2 = this.expression.evaluate(new K(this.zoom + 1, i2), n2, r2);
    this._setPaintValue(e53, t2, a2, o2);
  }
  _setPaintValue(e53, t2, n2, r2) {
    if (this.type === `color`) {
      let i2 = ac(n2), a2 = ac(r2);
      for (let n3 = e53; n3 < t2; n3++) this.paintVertexArray.emplace(n3, i2[0], i2[1], a2[0], a2[1]);
    } else {
      for (let i2 = e53; i2 < t2; i2++) this.paintVertexArray.emplace(i2, n2, r2);
      this.maxValue = Math.max(this.maxValue, Math.abs(n2), Math.abs(r2));
    }
  }
  upload(e53) {
    this.paintVertexArray?.arrayBuffer.byteLength && (this.paintVertexBuffer?.buffer ? this.paintVertexBuffer.updateData(this.paintVertexArray) : this.paintVertexBuffer = e53.createVertexBuffer(this.paintVertexArray, this.paintVertexAttributes, this.expression.isStateDependent));
  }
  destroy() {
    this.paintVertexBuffer && this.paintVertexBuffer.destroy();
  }
  setUniform(e53, t2) {
    let n2 = this.useIntegerZoom ? Math.floor(t2.zoom) : t2.zoom, r2 = S(this.expression.interpolationFactor(n2, this.zoom, this.zoom + 1), 0, 1);
    e53.set(r2);
  }
  getBinding(e53, t2, n2) {
    return new nc(e53, t2);
  }
};
var uc = class {
  constructor(e53, t2, n2, r2, i2, a2) {
    this.expression = e53, this.type = t2, this.useIntegerZoom = n2, this.zoom = r2, this.layerId = a2, this.zoomInPaintVertexArray = new i2(), this.zoomOutPaintVertexArray = new i2();
  }
  populatePaintArray(e53, t2, n2) {
    let r2 = this.zoomInPaintVertexArray.length;
    this.zoomInPaintVertexArray.resize(e53), this.zoomOutPaintVertexArray.resize(e53), this._setPaintValues(r2, e53, this.getPositionIds(t2), n2);
  }
  updatePaintArray(e53, t2, n2, r2, i2) {
    this._setPaintValues(e53, t2, this.getPositionIds(n2), i2);
  }
  _setPaintValues(e53, t2, n2, r2) {
    let i2 = this.getPositions(r2);
    if (!i2 || !n2) return;
    let a2 = i2[n2.min], o2 = i2[n2.mid], s2 = i2[n2.max];
    if (a2 && o2 && s2) for (let n3 = e53; n3 < t2; n3++) this.emplace(this.zoomInPaintVertexArray, n3, a2, o2), this.emplace(this.zoomOutPaintVertexArray, n3, s2, o2);
  }
  upload(e53) {
    if (this.zoomInPaintVertexArray?.arrayBuffer.byteLength && this.zoomOutPaintVertexArray?.arrayBuffer.byteLength) {
      let t2 = this.getVertexAttributes();
      this.zoomInPaintVertexBuffer = e53.createVertexBuffer(this.zoomInPaintVertexArray, t2, this.expression.isStateDependent), this.zoomOutPaintVertexBuffer = e53.createVertexBuffer(this.zoomOutPaintVertexArray, t2, this.expression.isStateDependent);
    }
  }
  destroy() {
    this.zoomOutPaintVertexBuffer && this.zoomOutPaintVertexBuffer.destroy(), this.zoomInPaintVertexBuffer && this.zoomInPaintVertexBuffer.destroy();
  }
};
var dc = class extends uc {
  getPositions(e53) {
    return e53.imagePositions;
  }
  getPositionIds(e53) {
    return e53.patterns?.[this.layerId];
  }
  getVertexAttributes() {
    return Ks.members;
  }
  emplace(e53, t2, n2, r2) {
    e53.emplace(t2, n2.tlbr[0], n2.tlbr[1], n2.tlbr[2], n2.tlbr[3], r2.tlbr[0], r2.tlbr[1], r2.tlbr[2], r2.tlbr[3], n2.pixelRatio, r2.pixelRatio);
  }
};
var fc = class extends uc {
  getPositions(e53) {
    return e53.dashPositions;
  }
  getPositionIds(e53) {
    return e53.dashes?.[this.layerId];
  }
  getVertexAttributes() {
    return qs.members;
  }
  emplace(e53, t2, n2, r2) {
    e53.emplace(t2, 0, n2.y, n2.height, n2.width, 0, r2.y, r2.height, r2.width);
  }
};
var pc = class {
  constructor(e53, t2, n2) {
    this.binders = {}, this._buffers = [];
    let r2 = [];
    for (let i2 in e53.paint._values) {
      if (!n2(i2)) continue;
      let a2 = e53.paint.get(i2);
      if (!(a2 instanceof Oo) || !Kr(a2.property.specification)) continue;
      let o2 = hc(i2, e53.type), s2 = a2.value, c2 = a2.property.specification.type, l2 = a2.property.useIntegerZoom, u2 = a2.property.specification[`property-type`], d2 = u2 === `cross-faded` || u2 === `cross-faded-data-driven`;
      if (s2.kind === `constant`) this.binders[i2] = d2 ? new sc(s2.value, o2) : new oc(s2.value, o2, c2), r2.push(`/u_${i2}`);
      else if (s2.kind === `source` || d2) {
        let n3 = _c(i2, c2, `source`);
        this.binders[i2] = d2 ? i2 === `line-dasharray` ? new fc(s2, c2, l2, t2, n3, e53.id) : new dc(s2, c2, l2, t2, n3, e53.id) : new cc(s2, o2, c2, n3), r2.push(`/a_${i2}`);
      } else {
        let e54 = _c(i2, c2, `composite`);
        this.binders[i2] = new lc(s2, o2, c2, l2, t2, e54), r2.push(`/z_${i2}`);
      }
    }
    this.cacheKey = r2.sort().join(``);
  }
  getMaxValue(e53) {
    let t2 = this.binders[e53];
    return t2 instanceof cc || t2 instanceof lc ? t2.maxValue : 0;
  }
  populatePaintArrays(e53, t2, n2) {
    for (let r2 in this.binders) {
      let i2 = this.binders[r2];
      (i2 instanceof cc || i2 instanceof lc || i2 instanceof uc) && i2.populatePaintArray(e53, t2, n2);
    }
  }
  setConstantPatternPositions(e53, t2) {
    for (let n2 in this.binders) {
      let r2 = this.binders[n2];
      r2 instanceof sc && r2.setConstantPatternPositions(e53, t2);
    }
  }
  setConstantDashPositions(e53, t2) {
    for (let n2 in this.binders) {
      let r2 = this.binders[n2];
      r2 instanceof sc && r2.setConstantDashPositions(e53, t2);
    }
  }
  updatePaintArrays(e53, t2, n2, r2, i2) {
    let a2 = false;
    for (let o2 of e53) {
      let e54 = t2.getPositions(o2.id);
      for (let t3 of e54) {
        let e55 = n2.feature(t3.index);
        for (let n3 in this.binders) {
          let s2 = this.binders[n3];
          (s2 instanceof cc || s2 instanceof lc || s2 instanceof uc) && s2.expression.isStateDependent === true && (s2.expression = r2.paint.get(n3).value, s2.updatePaintArray(t3.start, t3.end, e55, o2.state, i2), a2 = true);
        }
      }
    }
    return a2;
  }
  defines() {
    let e53 = [];
    for (let t2 in this.binders) {
      let n2 = this.binders[t2];
      (n2 instanceof oc || n2 instanceof sc) && e53.push(...n2.uniformNames.map((e54) => `#define HAS_UNIFORM_${e54}`));
    }
    return e53;
  }
  getBinderAttributes() {
    let e53 = [];
    for (let t2 in this.binders) {
      let n2 = this.binders[t2];
      if (n2 instanceof cc || n2 instanceof lc) for (let t3 of n2.paintVertexAttributes) e53.push(t3.name);
      else if (n2 instanceof uc) {
        let t3 = n2.getVertexAttributes();
        for (let n3 of t3) e53.push(n3.name);
      }
    }
    return e53;
  }
  getBinderUniforms() {
    let e53 = [];
    for (let t2 in this.binders) {
      let n2 = this.binders[t2];
      if (n2 instanceof oc || n2 instanceof sc || n2 instanceof lc) for (let t3 of n2.uniformNames) e53.push(t3);
    }
    return e53;
  }
  getPaintVertexBuffers() {
    return this._buffers;
  }
  getUniforms(e53, t2) {
    let n2 = [];
    for (let r2 in this.binders) {
      let i2 = this.binders[r2];
      if (i2 instanceof oc || i2 instanceof sc || i2 instanceof lc) {
        for (let a2 of i2.uniformNames) if (t2[a2]) {
          let o2 = i2.getBinding(e53, t2[a2], a2);
          n2.push({ name: a2, property: r2, binding: o2 });
        }
      }
    }
    return n2;
  }
  setUniforms(e53, t2, n2, r2) {
    for (let { name: e54, property: i2, binding: a2 } of t2) this.binders[i2].setUniform(a2, r2, n2.get(i2), e54);
  }
  updatePaintBuffers(e53) {
    this._buffers = [];
    for (let t2 in this.binders) {
      let n2 = this.binders[t2];
      if (e53 && n2 instanceof uc) {
        let t3 = e53.fromScale === 2 ? n2.zoomInPaintVertexBuffer : n2.zoomOutPaintVertexBuffer;
        t3 && this._buffers.push(t3);
      } else (n2 instanceof cc || n2 instanceof lc) && n2.paintVertexBuffer && this._buffers.push(n2.paintVertexBuffer);
    }
  }
  upload(e53) {
    for (let t2 in this.binders) {
      let n2 = this.binders[t2];
      (n2 instanceof cc || n2 instanceof lc || n2 instanceof uc) && n2.upload(e53);
    }
    this.updatePaintBuffers();
  }
  destroy() {
    for (let e53 in this.binders) {
      let t2 = this.binders[e53];
      (t2 instanceof cc || t2 instanceof lc || t2 instanceof uc) && t2.destroy();
    }
  }
};
var mc = class {
  constructor(e53, t2, n2 = () => true) {
    this.programConfigurations = {};
    for (let r2 of e53) this.programConfigurations[r2.id] = new pc(r2, t2, n2);
    this.needsUpload = false, this._featureMap = new Zs(), this._bufferOffset = 0;
  }
  populatePaintArrays(e53, t2, n2, r2) {
    for (let n3 in this.programConfigurations) this.programConfigurations[n3].populatePaintArrays(e53, t2, r2);
    t2.id !== void 0 && this._featureMap.add(t2.id, n2, this._bufferOffset, e53), this._bufferOffset = e53, this.needsUpload = true;
  }
  updatePaintArrays(e53, t2, n2, r2) {
    for (let i2 of n2) this.needsUpload = this.programConfigurations[i2.id].updatePaintArrays(e53, this._featureMap, t2, i2, r2) || this.needsUpload;
  }
  get(e53) {
    return this.programConfigurations[e53];
  }
  upload(e53) {
    if (this.needsUpload) {
      for (let t2 in this.programConfigurations) this.programConfigurations[t2].upload(e53);
      this.needsUpload = false;
    }
  }
  destroy() {
    for (let e53 in this.programConfigurations) this.programConfigurations[e53].destroy();
  }
};
function hc(e53, t2) {
  return { "text-opacity": [`opacity`], "icon-opacity": [`opacity`], "text-color": [`fill_color`], "icon-color": [`fill_color`], "text-halo-color": [`halo_color`], "icon-halo-color": [`halo_color`], "text-halo-blur": [`halo_blur`], "icon-halo-blur": [`halo_blur`], "text-halo-width": [`halo_width`], "icon-halo-width": [`halo_width`], "line-gap-width": [`gapwidth`], "line-dasharray": [`dasharray_to`, `dasharray_from`], "line-pattern": [`pattern_to`, `pattern_from`, `pixel_ratio_to`, `pixel_ratio_from`], "fill-pattern": [`pattern_to`, `pattern_from`, `pixel_ratio_to`, `pixel_ratio_from`], "fill-extrusion-pattern": [`pattern_to`, `pattern_from`, `pixel_ratio_to`, `pixel_ratio_from`] }[e53] || [e53.replace(`${t2}-`, ``).replace(/-/g, `_`)];
}
function gc(e53) {
  return { "line-pattern": { source: Ns, composite: Ns }, "fill-pattern": { source: Ns, composite: Ns }, "fill-extrusion-pattern": { source: Ns, composite: Ns }, "line-dasharray": { source: Ps, composite: Ps } }[e53];
}
function _c(e53, t2, n2) {
  let r2 = { color: { source: Xo, composite: ms }, number: { source: ls, composite: Xo } };
  return gc(e53)?.[n2] || r2[t2][n2];
}
G(`ConstantBinder`, oc), G(`CrossFadedConstantBinder`, sc), G(`SourceExpressionBinder`, cc), G(`CrossFadedPatternBinder`, dc), G(`CrossFadedDasharrayBinder`, fc), G(`CompositeExpressionBinder`, lc), G(`ProgramConfiguration`, pc, { omit: [`_buffers`] }), G(`ProgramConfigurationSet`, mc);
var vc = 2 ** 14 - 1;
var yc = -vc - 1;
function bc(e53) {
  let t2 = v / e53.extent, n2 = e53.loadGeometry();
  for (let e54 of n2) for (let n3 of e54) {
    let e55 = Math.round(n3.x * t2), r2 = Math.round(n3.y * t2);
    n3.x = S(e55, yc, vc), n3.y = S(r2, yc, vc), (e55 < n3.x || e55 > n3.x + 1 || r2 < n3.y || r2 > n3.y + 1) && j(`Geometry exceeds allowed extent, reduce your vector tile buffer size`);
  }
  return n2;
}
function xc(e53, t2) {
  return { type: e53.type, id: e53.id, properties: e53.properties, geometry: t2 ? bc(e53) : [] };
}
var Sc = class e40 {
  constructor() {
    this.minX = 1 / 0, this.maxX = -1 / 0, this.minY = 1 / 0, this.maxY = -1 / 0;
  }
  extend(e53) {
    return this.minX = Math.min(this.minX, e53.x), this.minY = Math.min(this.minY, e53.y), this.maxX = Math.max(this.maxX, e53.x), this.maxY = Math.max(this.maxY, e53.y), this;
  }
  expandBy(e53) {
    return this.minX -= e53, this.minY -= e53, this.maxX += e53, this.maxY += e53, (this.minX > this.maxX || this.minY > this.maxY) && (this.minX = 1 / 0, this.maxX = -1 / 0, this.minY = 1 / 0, this.maxY = -1 / 0), this;
  }
  shrinkBy(e53) {
    return this.expandBy(-e53);
  }
  map(t2) {
    let n2 = new e40();
    return n2.extend(t2(new l(this.minX, this.minY))), n2.extend(t2(new l(this.maxX, this.minY))), n2.extend(t2(new l(this.minX, this.maxY))), n2.extend(t2(new l(this.maxX, this.maxY))), n2;
  }
  static fromPoints(t2) {
    let n2 = new e40();
    for (let e53 of t2) n2.extend(e53);
    return n2;
  }
  contains(e53) {
    return e53.x >= this.minX && e53.x <= this.maxX && e53.y >= this.minY && e53.y <= this.maxY;
  }
  empty() {
    return this.minX > this.maxX;
  }
  width() {
    return this.maxX - this.minX;
  }
  height() {
    return this.maxY - this.minY;
  }
  covers(e53) {
    return !this.empty() && !e53.empty() && e53.minX >= this.minX && e53.maxX <= this.maxX && e53.minY >= this.minY && e53.maxY <= this.maxY;
  }
  intersects(e53) {
    return !this.empty() && !e53.empty() && e53.minX <= this.maxX && e53.maxX >= this.minX && e53.minY <= this.maxY && e53.maxY >= this.minY;
  }
};
Sc.fromPoints([new l(0, 0), new l(v, v)]);
function Cc(e53, t2) {
  return e53.x === t2.x && (e53.x < 0 || e53.x > 8192) || e53.y === t2.y && (e53.y < 0 || e53.y > 8192);
}
function wc(e53) {
  return e53.every((e54) => e54.x < 0) || e53.every((e54) => e54.x > 8192) || e53.every((e54) => e54.y < 0) || e53.every((e54) => e54.y > 8192);
}
function Tc(e53) {
  return e53.x < 0 || e53.x >= 8192 || e53.y < 0 || e53.y >= 8192;
}
var Ec = -32768;
function Dc(e53, t2, n2, r2, i2) {
  e53.emplaceBack(Ec + t2 * 8 + r2, Ec + n2 * 8 + i2);
}
var Oc = class {
  constructor(e53) {
    this.zoom = e53.zoom, this.overscaling = e53.overscaling, this.layers = e53.layers, this.layerIds = this.layers.map((e54) => e54.id), this.index = e53.index, this.hasDependencies = false, this.layoutVertexArray = new Os(), this.indexArray = new Bs(), this.segments = new Ws(), this.programConfigurations = new mc(e53.layers, e53.zoom), this.stateDependentLayerIds = this.layers.filter((e54) => e54.isStateDependent()).map((e54) => e54.id);
  }
  populate(e53, t2, n2) {
    let r2 = this.layers[0], i2 = [], a2 = null, o2 = false, s2 = r2.type === `heatmap`;
    if (r2.type === `circle`) {
      let e54 = r2;
      a2 = e54.layout.get(`circle-sort-key`), o2 = !a2.isConstant(), s2 ||= e54.paint.get(`circle-pitch-alignment`) === `map`;
    }
    let c2 = s2 ? t2.subdivisionGranularity.circle : 1, l2 = new K(this.zoom), u2 = this.layers[0]._featureFilter.needGeometry;
    for (let { feature: t3, id: r3, index: s3, sourceLayerIndex: c3 } of e53) {
      let e54 = xc(t3, u2);
      if (!this.layers[0]._featureFilter.filter(l2, e54, n2)) continue;
      let d2 = o2 ? a2.evaluate(e54, {}, n2) : void 0, f2 = { id: r3, properties: t3.properties, type: t3.type, sourceLayerIndex: c3, index: s3, geometry: u2 ? e54.geometry : bc(t3), patterns: {}, sortKey: d2 };
      i2.push(f2);
    }
    o2 && i2.sort((e54, t3) => e54.sortKey - t3.sortKey);
    for (let r3 of i2) {
      let { geometry: i3, index: a3, sourceLayerIndex: o3 } = r3, s3 = e53[a3].feature;
      this.addFeature(r3, i3, a3, n2, c2), t2.featureIndex.insert(s3, i3, a3, o3, this.index);
    }
  }
  update(e53, t2, n2) {
    this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e53, t2, this.stateDependentLayers, { imagePositions: n2 });
  }
  addFeatures(e53) {
  }
  isEmpty() {
    return this.layoutVertexArray.length === 0;
  }
  uploadPending() {
    return !this.uploaded || this.programConfigurations.needsUpload;
  }
  upload(e53) {
    this.uploaded || (this.layoutVertexBuffer = e53.createVertexBuffer(this.layoutVertexArray, Us), this.indexBuffer = e53.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e53), this.uploaded = true;
  }
  destroy() {
    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy());
  }
  addFeature(e53, t2, n2, r2, i2 = 1) {
    let a2;
    switch (i2) {
      case 1:
        a2 = [0, 7];
        break;
      case 3:
        a2 = [0, 2, 5, 7];
        break;
      case 5:
        a2 = [0, 1, 3, 4, 6, 7];
        break;
      case 7:
        a2 = [0, 1, 2, 3, 4, 5, 6, 7];
        break;
      default:
        throw Error(`Invalid circle bucket granularity: ${i2}; valid values are 1, 3, 5, 7.`);
    }
    let o2 = a2.length;
    for (let n3 of t2) for (let t3 of n3) {
      let n4 = t3.x, r3 = t3.y;
      if (Tc(t3)) continue;
      let i3 = this.segments.prepareSegment(o2 * o2, this.layoutVertexArray, this.indexArray, e53.sortKey), s2 = i3.vertexLength;
      for (let e54 = 0; e54 < o2; e54++) for (let t4 = 0; t4 < o2; t4++) Dc(this.layoutVertexArray, n4, r3, a2[t4], a2[e54]);
      for (let e54 = 0; e54 < o2 - 1; e54++) for (let t4 = 0; t4 < o2 - 1; t4++) {
        let n5 = s2 + e54 * o2 + t4, r4 = s2 + (e54 + 1) * o2 + t4;
        this.indexArray.emplaceBack(n5, r4 + 1, n5 + 1), this.indexArray.emplaceBack(n5, r4, r4 + 1);
      }
      i3.vertexLength += o2 * o2, i3.primitiveLength += (o2 - 1) * (o2 - 1) * 2;
    }
    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e53, n2, { imagePositions: {}, canonical: r2 });
  }
};
G(`CircleBucket`, Oc, { omit: [`layers`] });
function kc(e53, t2) {
  for (let n2 of e53) if (zc(t2, n2)) return true;
  for (let n2 of t2) if (zc(e53, n2)) return true;
  return Pc(e53, t2);
}
function Ac(e53, t2, n2) {
  return zc(e53, t2) ? true : Ic(t2, e53, n2);
}
function jc(e53, t2) {
  if (e53.length === 1) return Rc(t2, e53[0]);
  for (let n2 of t2) for (let t3 of n2) if (zc(e53, t3)) return true;
  for (let n2 of e53) if (Rc(t2, n2)) return true;
  for (let n2 of t2) if (Pc(e53, n2)) return true;
  return false;
}
function Mc(e53, t2, n2) {
  for (let r2 of t2) {
    if (e53.length >= 3) {
      for (let t3 of r2) if (zc(e53, t3)) return true;
    }
    if (Nc(e53, r2, n2)) return true;
  }
  return false;
}
function Nc(e53, t2, n2) {
  if (e53.length > 1) {
    if (Pc(e53, t2)) return true;
    for (let r2 of t2) if (Ic(r2, e53, n2)) return true;
  }
  for (let r2 of e53) if (Ic(r2, t2, n2)) return true;
  return false;
}
function Pc(e53, t2) {
  if (e53.length === 0 || t2.length === 0) return false;
  for (let n2 = 0; n2 < e53.length - 1; n2++) {
    let r2 = e53[n2], i2 = e53[n2 + 1];
    for (let e54 = 0; e54 < t2.length - 1; e54++) {
      let n3 = t2[e54], a2 = t2[e54 + 1];
      if (Fc(r2, i2, n3, a2)) return true;
    }
  }
  return false;
}
function Fc(e53, t2, n2, r2) {
  return ee(e53, n2, r2) !== ee(t2, n2, r2) && ee(e53, t2, n2) !== ee(e53, t2, r2);
}
function Ic(e53, t2, n2) {
  let r2 = n2 * n2;
  if (t2.length === 1) return e53.distSqr(t2[0]) < r2;
  for (let n3 = 1; n3 < t2.length; n3++) {
    let i2 = t2[n3 - 1], a2 = t2[n3];
    if (Lc(e53, i2, a2) < r2) return true;
  }
  return false;
}
function Lc(e53, t2, n2) {
  let r2 = t2.distSqr(n2);
  if (r2 === 0) return e53.distSqr(t2);
  let i2 = ((e53.x - t2.x) * (n2.x - t2.x) + (e53.y - t2.y) * (n2.y - t2.y)) / r2;
  return i2 < 0 ? e53.distSqr(t2) : i2 > 1 ? e53.distSqr(n2) : e53.distSqr(n2.sub(t2)._mult(i2)._add(t2));
}
function Rc(e53, t2) {
  let n2 = false, r2, i2, a2;
  for (let o2 of e53) {
    r2 = o2;
    for (let e54 = 0, o3 = r2.length - 1; e54 < r2.length; o3 = e54++) i2 = r2[e54], a2 = r2[o3], i2.y > t2.y != a2.y > t2.y && t2.x < (a2.x - i2.x) * (t2.y - i2.y) / (a2.y - i2.y) + i2.x && (n2 = !n2);
  }
  return n2;
}
function zc(e53, t2) {
  let n2 = false;
  for (let r2 = 0, i2 = e53.length - 1; r2 < e53.length; i2 = r2++) {
    let a2 = e53[r2], o2 = e53[i2];
    a2.y > t2.y != o2.y > t2.y && t2.x < (o2.x - a2.x) * (t2.y - a2.y) / (o2.y - a2.y) + a2.x && (n2 = !n2);
  }
  return n2;
}
function Bc(e53, t2, n2, r2, i2) {
  for (let a3 of e53) if (t2 <= a3.x && n2 <= a3.y && r2 >= a3.x && i2 >= a3.y) return true;
  let a2 = [new l(t2, n2), new l(t2, i2), new l(r2, i2), new l(r2, n2)];
  if (e53.length > 2) {
    for (let t3 of a2) if (zc(e53, t3)) return true;
  }
  for (let t3 = 0; t3 < e53.length - 1; t3++) {
    let n3 = e53[t3], r3 = e53[t3 + 1];
    if (Vc(n3, r3, a2)) return true;
  }
  return false;
}
function Vc(e53, t2, n2) {
  let r2 = n2[0], i2 = n2[2];
  if (e53.x < r2.x && t2.x < r2.x || e53.x > i2.x && t2.x > i2.x || e53.y < r2.y && t2.y < r2.y || e53.y > i2.y && t2.y > i2.y) return false;
  let a2 = ee(e53, t2, n2[0]);
  return a2 !== ee(e53, t2, n2[1]) || a2 !== ee(e53, t2, n2[2]) || a2 !== ee(e53, t2, n2[3]);
}
function Hc(e53, t2, n2) {
  let r2 = t2.paint.get(e53).value;
  return r2.kind === `constant` ? r2.value : n2.programConfigurations.get(t2.id).getMaxValue(e53);
}
function Uc(e53) {
  return Math.sqrt(e53[0] * e53[0] + e53[1] * e53[1]);
}
function Wc(e53, t2, n2, r2, i2) {
  if (!t2[0] && !t2[1]) return e53;
  let a2 = l.convert(t2)._mult(i2);
  n2 === `viewport` && a2._rotate(-r2);
  let o2 = [];
  for (let t3 of e53) o2.push(t3.sub(a2));
  return o2;
}
function Gc(e53) {
  let t2 = [];
  for (let n2 = 0; n2 < e53.length; n2++) {
    let r2 = e53[n2], i2 = t2.at(-1);
    (n2 === 0 || i2 && !r2.equals(i2)) && t2.push(r2);
  }
  return t2;
}
function Kc(e53, t2) {
  let n2 = [];
  for (let r2 of e53) {
    let e54 = Gc(r2), i2 = [];
    for (let n3 = 0; n3 < e54.length; n3++) {
      let r3 = e54[n3], a2 = e54[n3 - 1], o2 = e54[n3 + 1], s2 = n3 === 0 ? new l(0, 0) : r3.sub(a2)._unit()._perp(), c2 = n3 === e54.length - 1 ? new l(0, 0) : o2.sub(r3)._unit()._perp(), u2 = s2._add(c2)._unit(), d2 = u2.x * c2.x + u2.y * c2.y;
      d2 !== 0 && u2._mult(1 / d2), i2.push(u2._mult(t2)._add(r3));
    }
    n2.push(i2);
  }
  return n2;
}
function qc({ queryGeometry: e53, size: t2 }, n2) {
  return Ac(e53, n2, t2);
}
function Jc({ queryGeometry: e53, size: t2, transform: n2, unwrappedTileID: r2, getElevation: i2 }, a2) {
  return Ac(e53, a2, t2 * (n2.projectTileCoordinates(a2.x, a2.y, r2, i2?.(a2.x, a2.y)).signedDistanceFromCamera / n2.cameraToCenterDistance));
}
function Yc({ queryGeometry: e53, size: t2, transform: n2, unwrappedTileID: r2, getElevation: i2 }, a2) {
  let o2 = n2.projectTileCoordinates(a2.x, a2.y, r2, i2?.(a2.x, a2.y)).signedDistanceFromCamera, s2 = t2 * (n2.cameraToCenterDistance / o2);
  return Ac(e53, Qc(a2, n2, r2, i2), s2);
}
function Xc({ queryGeometry: e53, size: t2, transform: n2, unwrappedTileID: r2, getElevation: i2 }, a2) {
  return Ac(e53, Qc(a2, n2, r2, i2), t2);
}
function Zc({ queryGeometry: e53, size: t2, transform: n2, unwrappedTileID: r2, getElevation: i2, pitchAlignment: a2 = `map`, pitchScale: o2 = `map` }, s2) {
  let c2 = a2 === `map` ? o2 === `map` ? qc : Jc : o2 === `map` ? Yc : Xc, l2 = { queryGeometry: e53, size: t2, transform: n2, unwrappedTileID: r2, getElevation: i2 };
  for (let e54 of s2) for (let t3 of e54) if (c2(l2, t3)) return true;
  return false;
}
function Qc(e53, t2, n2, r2) {
  let i2 = t2.projectTileCoordinates(e53.x, e53.y, n2, r2?.(e53.x, e53.y)).point;
  return new l((i2.x * 0.5 + 0.5) * t2.width, (-i2.y * 0.5 + 0.5) * t2.height);
}
function $c(e53, t2, n2, r2) {
  return e53.map((e54) => Qc(e54, t2, n2, r2));
}
var el;
var tl = () => el ||= new Fo({ "circle-sort-key": new J(N.layout_circle[`circle-sort-key`], `circle-sort-key`) });
var nl;
var rl = () => nl ||= new Fo({ "circle-radius": new J(N.paint_circle[`circle-radius`], `circle-radius`), "circle-color": new J(N.paint_circle[`circle-color`], `circle-color`), "circle-blur": new J(N.paint_circle[`circle-blur`], `circle-blur`), "circle-opacity": new J(N.paint_circle[`circle-opacity`], `circle-opacity`), "circle-translate": new q(N.paint_circle[`circle-translate`], `circle-translate`), "circle-translate-anchor": new q(N.paint_circle[`circle-translate-anchor`], `circle-translate-anchor`), "circle-pitch-scale": new q(N.paint_circle[`circle-pitch-scale`], `circle-pitch-scale`), "circle-pitch-alignment": new q(N.paint_circle[`circle-pitch-alignment`], `circle-pitch-alignment`), "circle-stroke-width": new J(N.paint_circle[`circle-stroke-width`], `circle-stroke-width`), "circle-stroke-color": new J(N.paint_circle[`circle-stroke-color`], `circle-stroke-color`), "circle-stroke-opacity": new J(N.paint_circle[`circle-stroke-opacity`], `circle-stroke-opacity`) });
var il = { get paint() {
  return rl();
}, get layout() {
  return tl();
} };
var al = class extends Ro {
  constructor(e53, t2) {
    super(e53, il, t2);
  }
  createBucket(e53) {
    return new Oc(e53);
  }
  queryRadius(e53) {
    let t2 = e53;
    return Hc(`circle-radius`, this, t2) + Hc(`circle-stroke-width`, this, t2) + Uc(this.paint.get(`circle-translate`));
  }
  queryIntersectsFeature({ queryGeometry: e53, feature: t2, featureState: n2, geometry: r2, transform: i2, pixelsToTileUnits: a2, unwrappedTileID: o2, getElevation: s2 }) {
    let c2 = Wc(e53, this.paint.get(`circle-translate`), this.paint.get(`circle-translate-anchor`), -i2.bearingInRadians, a2), l2 = this.paint.get(`circle-radius`).evaluate(t2, n2) + this.paint.get(`circle-stroke-width`).evaluate(t2, n2), u2 = this.paint.get(`circle-pitch-scale`), d2 = this.paint.get(`circle-pitch-alignment`), f2, p2;
    return d2 === `map` ? (f2 = c2, p2 = l2 * a2) : (f2 = $c(c2, i2, o2, s2), p2 = l2), Zc({ queryGeometry: f2, size: p2, transform: i2, unwrappedTileID: o2, getElevation: s2, pitchAlignment: d2, pitchScale: u2 }, r2);
  }
};
var ol = class extends Oc {
};
G(`HeatmapBucket`, ol, { omit: [`layers`] });
var sl;
var cl = () => sl ||= new Fo({ "heatmap-radius": new J(N.paint_heatmap[`heatmap-radius`], `heatmap-radius`), "heatmap-weight": new J(N.paint_heatmap[`heatmap-weight`], `heatmap-weight`), "heatmap-intensity": new q(N.paint_heatmap[`heatmap-intensity`], `heatmap-intensity`), "heatmap-color": new Po(N.paint_heatmap[`heatmap-color`], `heatmap-color`), "heatmap-opacity": new q(N.paint_heatmap[`heatmap-opacity`], `heatmap-opacity`) });
var ll = { get paint() {
  return cl();
} };
function ul(e53, { width: t2, height: n2 }, r2, i2) {
  if (!i2) i2 = new Uint8Array(t2 * n2 * r2);
  else if (i2 instanceof Uint8ClampedArray) i2 = new Uint8Array(i2.buffer);
  else if (i2.length !== t2 * n2 * r2) throw RangeError(`mismatched image size. expected: ${i2.length} but got: ${t2 * n2 * r2}`);
  return e53.width = t2, e53.height = n2, e53.data = i2, e53;
}
function dl(e53, { width: t2, height: n2 }, r2) {
  if (t2 === e53.width && n2 === e53.height) return;
  let i2 = ul({}, { width: t2, height: n2 }, r2);
  fl(e53, i2, { x: 0, y: 0 }, { x: 0, y: 0 }, { width: Math.min(e53.width, t2), height: Math.min(e53.height, n2) }, r2), e53.width = t2, e53.height = n2, e53.data = i2.data;
}
function fl(e53, t2, n2, r2, i2, a2) {
  if (i2.width === 0 || i2.height === 0) return t2;
  if (i2.width > e53.width || i2.height > e53.height || n2.x > e53.width - i2.width || n2.y > e53.height - i2.height) throw RangeError(`out of range source coordinates for image copy`);
  if (i2.width > t2.width || i2.height > t2.height || r2.x > t2.width - i2.width || r2.y > t2.height - i2.height) throw RangeError(`out of range destination coordinates for image copy`);
  let o2 = e53.data, s2 = t2.data;
  if (o2 === s2) throw Error(`srcData equals dstData, so image is already copied`);
  for (let c2 = 0; c2 < i2.height; c2++) {
    let l2 = ((n2.y + c2) * e53.width + n2.x) * a2, u2 = ((r2.y + c2) * t2.width + r2.x) * a2;
    for (let e54 = 0; e54 < i2.width * a2; e54++) s2[u2 + e54] = o2[l2 + e54];
  }
  return t2;
}
var pl = class e41 {
  constructor(e53, t2) {
    ul(this, e53, 1, t2);
  }
  resize(e53) {
    dl(this, e53, 1);
  }
  clone() {
    return new e41({ width: this.width, height: this.height }, new Uint8Array(this.data));
  }
  static copy(e53, t2, n2, r2, i2) {
    fl(e53, t2, n2, r2, i2, 1);
  }
};
var ml = class e42 {
  constructor(e53, t2) {
    ul(this, e53, 4, t2);
  }
  resize(e53) {
    dl(this, e53, 4);
  }
  replace(e53, t2) {
    t2 ? this.data.set(e53) : this.data = e53 instanceof Uint8ClampedArray ? new Uint8Array(e53.buffer) : e53;
  }
  clone() {
    return new e42({ width: this.width, height: this.height }, new Uint8Array(this.data));
  }
  static copy(e53, t2, n2, r2, i2) {
    fl(e53, t2, n2, r2, i2, 4);
  }
  setPixel(e53, t2, n2) {
    let r2 = (e53 * this.width + t2) * 4;
    this.data[r2 + 0] = Math.round(n2.r * 255 / n2.a), this.data[r2 + 1] = Math.round(n2.g * 255 / n2.a), this.data[r2 + 2] = Math.round(n2.b * 255 / n2.a), this.data[r2 + 3] = Math.round(n2.a * 255);
  }
};
function hl(e53) {
  let t2 = new Uint8Array(e53.length);
  for (let n2 = 0; n2 < e53.length; n2 += 4) {
    let r2 = e53[n2 + 3];
    t2[n2 + 0] = Math.round(e53[n2 + 0] * r2 / 255), t2[n2 + 1] = Math.round(e53[n2 + 1] * r2 / 255), t2[n2 + 2] = Math.round(e53[n2 + 2] * r2 / 255), t2[n2 + 3] = r2;
  }
  return t2;
}
G(`AlphaImage`, pl), G(`RGBAImage`, ml);
function gl(e53) {
  let t2 = {}, n2 = e53.resolution || 256, r2 = e53.clips ? e53.clips.length : 1, i2 = e53.image || new ml({ width: n2, height: r2 });
  if (!T(n2)) throw Error(`width is not a power of 2 - ${n2}`);
  let a2 = (r3, a3, o2) => {
    t2[e53.evaluationKey] = o2;
    let s2 = e53.expression.evaluate(t2);
    i2.setPixel(r3 / 4 / n2, a3 / 4, s2);
  };
  if (e53.clips) for (let t3 = 0, i3 = 0; t3 < r2; ++t3, i3 += n2 * 4) for (let r3 = 0, o2 = 0; r3 < n2; r3++, o2 += 4) {
    let s2 = r3 / (n2 - 1), { start: c2, end: l2 } = e53.clips[t3], u2 = c2 * (1 - s2) + l2 * s2;
    a2(i3, o2, u2);
  }
  else for (let e54 = 0, t3 = 0; e54 < n2; e54++, t3 += 4) {
    let r3 = e54 / (n2 - 1);
    a2(0, t3, r3);
  }
  return i2;
}
var _l = class extends Ro {
  createBucket(e53) {
    return new ol(e53);
  }
  constructor(e53, t2) {
    super(e53, ll, t2), this.heatmapFbos = /* @__PURE__ */ new Map(), this._updateColorRamp();
  }
  _handleSpecialPaintPropertyUpdate(e53) {
    e53 === `heatmap-color` && this._updateColorRamp();
  }
  _updateColorRamp() {
    let e53 = this._transitionablePaint._values[`heatmap-color`].value.expression;
    this.colorRamp = gl({ expression: e53, evaluationKey: `heatmapDensity`, image: this.colorRamp }), this.colorRampTexture = null;
  }
  resize() {
    this.heatmapFbos.has(`big-fb`) && this.heatmapFbos.delete(`big-fb`);
  }
  queryRadius(e53) {
    return Hc(`heatmap-radius`, this, e53);
  }
  queryIntersectsFeature({ queryGeometry: e53, feature: t2, featureState: n2, geometry: r2, transform: i2, pixelsToTileUnits: a2, unwrappedTileID: o2, getElevation: s2 }) {
    return Zc({ queryGeometry: e53, size: this.paint.get(`heatmap-radius`).evaluate(t2, n2) * a2, transform: i2, unwrappedTileID: o2, getElevation: s2 }, r2);
  }
  hasOffscreenPass() {
    return this.paint.get(`heatmap-opacity`) !== 0 && !this.isHidden();
  }
};
var vl;
var yl = () => vl ||= new Fo({ "hillshade-illumination-direction": new q(N.paint_hillshade[`hillshade-illumination-direction`], `hillshade-illumination-direction`), "hillshade-illumination-altitude": new q(N.paint_hillshade[`hillshade-illumination-altitude`], `hillshade-illumination-altitude`), "hillshade-illumination-anchor": new q(N.paint_hillshade[`hillshade-illumination-anchor`], `hillshade-illumination-anchor`), "hillshade-exaggeration": new q(N.paint_hillshade[`hillshade-exaggeration`], `hillshade-exaggeration`), "hillshade-shadow-color": new q(N.paint_hillshade[`hillshade-shadow-color`], `hillshade-shadow-color`), "hillshade-highlight-color": new q(N.paint_hillshade[`hillshade-highlight-color`], `hillshade-highlight-color`), "hillshade-accent-color": new q(N.paint_hillshade[`hillshade-accent-color`], `hillshade-accent-color`), "hillshade-method": new q(N.paint_hillshade[`hillshade-method`], `hillshade-method`), resampling: new q(N.paint_hillshade.resampling, `resampling`) });
var bl = { get paint() {
  return yl();
} };
var xl = class extends Ro {
  constructor(e53, t2) {
    super(e53, bl, t2), this.recalculate({ zoom: 0, zoomHistory: {} }, void 0);
  }
  getIlluminationProperties() {
    let e53 = this.paint.get(`hillshade-illumination-direction`).values, t2 = this.paint.get(`hillshade-illumination-altitude`).values, n2 = this.paint.get(`hillshade-highlight-color`).values, r2 = this.paint.get(`hillshade-shadow-color`).values, i2 = Math.max(e53.length, t2.length, n2.length, r2.length);
    e53 = e53.concat(Array(i2 - e53.length).fill(e53.at(-1))), t2 = t2.concat(Array(i2 - t2.length).fill(t2.at(-1))), n2 = n2.concat(Array(i2 - n2.length).fill(n2.at(-1))), r2 = r2.concat(Array(i2 - r2.length).fill(r2.at(-1)));
    let a2 = t2.map(ue);
    return { directionRadians: e53.map(ue), altitudeRadians: a2, shadowColor: r2, highlightColor: n2 };
  }
  hasOffscreenPass() {
    return this.paint.get(`hillshade-exaggeration`) !== 0 && !this.isHidden();
  }
};
var Sl;
var Cl = () => Sl ||= new Fo({ "color-relief-opacity": new q(N[`paint_color-relief`][`color-relief-opacity`], `color-relief-opacity`), "color-relief-color": new Po(N[`paint_color-relief`][`color-relief-color`], `color-relief-color`), resampling: new q(N[`paint_color-relief`].resampling, `resampling`) });
var wl = { get paint() {
  return Cl();
} };
function Tl(e53) {
  return `data` in e53;
}
var El = class {
  constructor(e53, t2, n2, r2) {
    this.context = e53, this.format = n2, this.texture = e53.gl.createTexture(), this._ownedHandle = this.texture, this.update(t2, r2);
  }
  update(e53, t2, n2) {
    let { width: r2, height: i2 } = e53, a2 = (this.size?.[0] !== r2 || this.size[1] !== i2) && !n2, { context: o2 } = this, { gl: s2 } = o2;
    this.useMipmap = !!t2?.useMipmap, a2 && this.size && this.format === s2.RGBA && (s2.deleteTexture(this.texture), this.texture = s2.createTexture(), this._ownedHandle = this.texture, this.magFilter = void 0, this.minFilter = void 0, this.wrap = void 0), s2.bindTexture(s2.TEXTURE_2D, this.texture), o2.pixelStoreUnpackFlipY.set(false), o2.pixelStoreUnpack.set(1);
    let c2 = this.format === s2.RGBA && t2?.premultiply !== false;
    if (a2) {
      if (this.size = [r2, i2], this.format === s2.RGBA && r2 > 0 && i2 > 0) {
        let t3 = this.useMipmap ? Math.floor(Math.log2(Math.max(r2, i2))) + 1 : 1;
        if (s2.texStorage2D(s2.TEXTURE_2D, t3, s2.RGBA8, r2, i2), Tl(e53)) {
          o2.pixelStoreUnpackPremultiplyAlpha.set(false);
          let { data: t4 } = e53;
          c2 && t4 && (t4 = hl(t4)), t4 && s2.texSubImage2D(s2.TEXTURE_2D, 0, 0, 0, r2, i2, s2.RGBA, s2.UNSIGNED_BYTE, t4);
        } else o2.pixelStoreUnpackPremultiplyAlpha.set(c2), s2.texSubImage2D(s2.TEXTURE_2D, 0, 0, 0, s2.RGBA, s2.UNSIGNED_BYTE, e53);
      } else Tl(e53) ? (o2.pixelStoreUnpackPremultiplyAlpha.set(false), this._uploadRawData(e53, c2, r2, i2, s2)) : (o2.pixelStoreUnpackPremultiplyAlpha.set(c2), this._uploadDomImage(e53, s2));
    } else {
      let { x: t3, y: a3 } = n2 || { x: 0, y: 0 };
      Tl(e53) ? (o2.pixelStoreUnpackPremultiplyAlpha.set(false), this._updateRawData(e53, c2, t3, a3, r2, i2, s2)) : (o2.pixelStoreUnpackPremultiplyAlpha.set(c2), this._updateDomImage(e53, t3, a3, s2));
    }
    this.useMipmap && !(Tl(e53) && e53.data === null) && s2.generateMipmap(s2.TEXTURE_2D), o2.pixelStoreUnpackFlipY.setDefault(), o2.pixelStoreUnpack.setDefault(), o2.pixelStoreUnpackPremultiplyAlpha.setDefault();
  }
  _uploadDomImage(e53, t2) {
    t2.texImage2D(t2.TEXTURE_2D, 0, this.format, this.format, t2.UNSIGNED_BYTE, e53);
  }
  _uploadRawData(e53, t2, n2, r2, i2) {
    let { data: a2 } = e53;
    t2 && a2 && (a2 = hl(a2)), i2.texImage2D(i2.TEXTURE_2D, 0, this.format, n2, r2, 0, this.format, i2.UNSIGNED_BYTE, a2);
  }
  _updateDomImage(e53, t2, n2, r2) {
    r2.texSubImage2D(r2.TEXTURE_2D, 0, t2, n2, r2.RGBA, r2.UNSIGNED_BYTE, e53);
  }
  _updateRawData(e53, t2, n2, r2, i2, a2, o2) {
    let { data: s2 } = e53;
    t2 && s2 && (s2 = hl(s2)), o2.texSubImage2D(o2.TEXTURE_2D, 0, n2, r2, i2, a2, o2.RGBA, o2.UNSIGNED_BYTE, s2);
  }
  bind(e53, t2, n2) {
    let { context: r2 } = this, { gl: i2 } = r2;
    this.texture !== this._ownedHandle && (this.texture = this._ownedHandle), i2.bindTexture(i2.TEXTURE_2D, this.texture), (n2 === i2.LINEAR_MIPMAP_NEAREST || n2 === i2.LINEAR_MIPMAP_LINEAR) && !this.useMipmap && (n2 = i2.LINEAR);
    let a2 = n2 || e53;
    e53 !== this.magFilter && (i2.texParameteri(i2.TEXTURE_2D, i2.TEXTURE_MAG_FILTER, e53), this.magFilter = e53), a2 !== this.minFilter && (i2.texParameteri(i2.TEXTURE_2D, i2.TEXTURE_MIN_FILTER, a2), this.minFilter = a2), t2 !== this.wrap && (i2.texParameteri(i2.TEXTURE_2D, i2.TEXTURE_WRAP_S, t2), i2.texParameteri(i2.TEXTURE_2D, i2.TEXTURE_WRAP_T, t2), this.wrap = t2);
  }
  generateMipmap() {
    if (!this.useMipmap) return;
    let { gl: e53 } = this.context;
    e53.bindTexture(e53.TEXTURE_2D, this.texture), e53.generateMipmap(e53.TEXTURE_2D);
  }
  destroy() {
    let { gl: e53 } = this.context;
    e53.deleteTexture(this.texture), this.texture = null, this._ownedHandle = null;
  }
};
var Dl = class e43 {
  static {
    this.byteViewCache = /* @__PURE__ */ new WeakMap();
  }
  constructor(t2, n2, r2, i2 = 1, a2 = 1, o2 = 1, s2 = 0) {
    if (this.uid = t2, n2.height !== n2.width) throw RangeError(`DEM tiles must be square`);
    if (r2 && ![`mapbox`, `terrarium`, `custom`].includes(r2)) {
      j(`"${r2}" is not a valid encoding type. Valid types include "mapbox", "terrarium" and "custom".`);
      return;
    }
    this.stride = n2.height;
    let c2 = this.dim = n2.height - 4;
    switch (this.data = new Uint32Array(n2.data.buffer), e43.byteViewCache.set(this, new Uint8Array(this.data.buffer)), r2) {
      case `terrarium`:
        this.redFactor = 256, this.greenFactor = 1, this.blueFactor = 1 / 256, this.baseShift = 32768;
        break;
      case `custom`:
        this.redFactor = i2, this.greenFactor = a2, this.blueFactor = o2, this.baseShift = s2;
        break;
      default:
        this.redFactor = 6553.6, this.greenFactor = 25.6, this.blueFactor = 0.1, this.baseShift = 1e4;
    }
    for (let e53 = -2; e53 < c2 + 2; e53++) {
      let t3 = this._idx(0, Math.max(0, Math.min(c2 - 1, e53)));
      (e53 < 0 || e53 >= c2) && this.data.copyWithin(this._idx(0, e53), t3, t3 + c2), this.data.fill(this.data[t3], this._idx(-2, e53), this._idx(0, e53)), this.data.fill(this.data[t3 + c2 - 1], this._idx(c2, e53), this._idx(c2 + 1, e53) + 1);
    }
    let l2 = this._getByteView();
    this.min = 2 ** 53 - 1, this.max = -(2 ** 53 - 1);
    for (let e53 = 0; e53 < c2; e53++) for (let t3 = 0; t3 < c2; t3++) {
      let n3 = this._idx(e53, t3) * 4, r3 = this._unpackAtIndex(l2, n3);
      r3 > this.max && (this.max = r3), r3 < this.min && (this.min = r3);
    }
  }
  get(e53, t2) {
    let n2 = this._getByteView(), r2 = this._idx(e53, t2) * 4;
    return this._unpackAtIndex(n2, r2);
  }
  sampleBilinear(e53, t2) {
    let n2 = Math.floor(e53), r2 = Math.floor(t2);
    if (n2 < -1 || n2 >= this.dim || r2 < -1 || r2 >= this.dim) throw RangeError(`Out of range source coordinates for DEM data. x: ${e53}, y: ${t2}, dim: ${this.dim}`);
    let i2 = this._getByteView(), a2 = ((r2 + 2) * this.stride + n2 + 2) * 4, o2 = this.stride * 4, s2 = e53 - n2, c2 = t2 - r2, l2 = this._unpackAtIndex(i2, a2), u2 = this._unpackAtIndex(i2, a2 + 4), d2 = this._unpackAtIndex(i2, a2 + o2), f2 = this._unpackAtIndex(i2, a2 + o2 + 4);
    return l2 * (1 - s2) * (1 - c2) + u2 * s2 * (1 - c2) + d2 * (1 - s2) * c2 + f2 * s2 * c2;
  }
  getUnpackVector() {
    return [this.redFactor, this.greenFactor, this.blueFactor, this.baseShift];
  }
  _idx(e53, t2) {
    if (e53 < -2 || e53 >= this.dim + 2 || t2 < -2 || t2 >= this.dim + 2) throw RangeError(`Out of range source coordinates for DEM data. x: ${e53}, y: ${t2}, dim: ${this.dim}`);
    return (t2 + 2) * this.stride + (e53 + 2);
  }
  unpack(e53, t2, n2) {
    return e53 * this.redFactor + t2 * this.greenFactor + n2 * this.blueFactor - this.baseShift;
  }
  pack(e53) {
    return Ol(e53, this.getUnpackVector());
  }
  getPixels() {
    return new ml({ width: this.stride, height: this.stride }, this._getByteView());
  }
  backfillBorder(e53, t2, n2) {
    if (this.dim !== e53.dim) throw Error(`dem dimension mismatch`);
    let r2 = t2 * this.dim, i2 = t2 * this.dim + this.dim, a2 = n2 * this.dim, o2 = n2 * this.dim + this.dim;
    switch (t2) {
      case -1:
        r2 = i2 - 2;
        break;
      case 1:
        i2 = r2 + 2;
    }
    switch (n2) {
      case -1:
        a2 = o2 - 2;
        break;
      case 1:
        o2 = a2 + 2;
    }
    let s2 = -t2 * this.dim, c2 = -n2 * this.dim;
    for (let t3 = a2; t3 < o2; t3++) for (let n3 = r2; n3 < i2; n3++) this.data[this._idx(n3, t3)] = e53.data[this._idx(n3 + s2, t3 + c2)];
  }
  _getByteView() {
    let t2 = e43.byteViewCache.get(this);
    return t2?.buffer !== this.data.buffer && (t2 = new Uint8Array(this.data.buffer), e43.byteViewCache.set(this, t2)), t2;
  }
  _unpackAtIndex(e53, t2) {
    return this.unpack(e53[t2], e53[t2 + 1], e53[t2 + 2]);
  }
};
function Ol(e53, t2) {
  let n2 = t2[0], r2 = t2[1], i2 = t2[2], a2 = t2[3], o2 = [n2, r2, i2].filter((e54) => e54 !== 0);
  if (o2.length === 0) return { r: 0, g: 0, b: 0 };
  let s2 = Math.min(...o2), c2 = Math.round((e53 + a2) / s2), l2 = (e54) => e54 === 0 ? 0 : Math.floor(c2 * s2 / e54) % 256;
  return { r: l2(n2), g: l2(r2), b: l2(i2) };
}
G(`DEMData`, Dl);
var kl = class extends Ro {
  constructor(e53, t2) {
    super(e53, wl, t2);
  }
  _createColorRamp(e53) {
    let t2 = { elevationStops: [], colorStops: [] }, n2 = this._transitionablePaint._values[`color-relief-color`].value.expression;
    if (n2 instanceof hi && n2._styleExpression.expression instanceof Nt) {
      this.colorRampExpression = n2;
      let e54 = n2._styleExpression.expression;
      t2.elevationStops = e54.labels, t2.colorStops = [];
      for (let n3 of t2.elevationStops) t2.colorStops.push(e54.evaluate({ globals: { elevation: n3 } }));
    }
    if (t2.elevationStops.length < 1 && (t2.elevationStops = [0], t2.colorStops = [V.transparent]), t2.elevationStops.length < 2 && (t2.elevationStops.push(t2.elevationStops[0] + 1), t2.colorStops.push(t2.colorStops[0])), t2.elevationStops.length <= e53) return t2;
    let r2 = { elevationStops: [], colorStops: [] }, i2 = (t2.elevationStops.length - 1) / (e53 - 1);
    for (let e54 = 0; e54 < t2.elevationStops.length - 0.5; e54 += i2) r2.elevationStops.push(t2.elevationStops[Math.round(e54)]), r2.colorStops.push(t2.colorStops[Math.round(e54)]);
    return j(`Too many colors in specification of ${this.id} color-relief layer, may not render properly. Max possible colors: ${e53}, provided: ${t2.elevationStops.length}`), r2;
  }
  _colorRampChanged() {
    return this.colorRampExpression != this._transitionablePaint._values[`color-relief-color`].value.expression;
  }
  getColorRampTextures(e53, t2, n2) {
    if (this.colorRampTextures && !this._colorRampChanged()) return this.colorRampTextures;
    let r2 = this._createColorRamp(t2), i2 = new ml({ width: r2.colorStops.length, height: 1 }), a2 = new ml({ width: r2.colorStops.length, height: 1 });
    for (let e54 = 0; e54 < r2.elevationStops.length; e54++) {
      let t3 = Ol(r2.elevationStops[e54], n2);
      a2.setPixel(0, e54, new V(t3.r / 255, t3.g / 255, t3.b / 255, 1)), i2.setPixel(0, e54, r2.colorStops[e54]);
    }
    return this.colorRampTextures = { elevationTexture: new El(e53, a2, e53.gl.RGBA), colorTexture: new El(e53, i2, e53.gl.RGBA) }, this.colorRampTextures;
  }
  hasOffscreenPass() {
    return !this.isHidden() && !!this.colorRampTextures;
  }
};
var Al = Ho([{ name: `a_pos`, components: 2, type: `Int16` }], 4);
var jl = Al.members;
Al.size, Al.alignment;
function Ml(e53, t2, n2) {
  let r2 = n2.patternDependencies, i2 = false;
  for (let n3 of t2) {
    let t3 = n3.paint.get(`${e53}-pattern`);
    t3.isConstant() || (i2 = true);
    let a2 = t3.constantOr(null);
    a2 && (i2 = true, r2[a2.to] = true, r2[a2.from] = true);
  }
  return i2;
}
function Nl(e53, t2, n2, r2, i2) {
  let { zoom: a2 } = r2, o2 = i2.patternDependencies;
  for (let r3 of t2) {
    let t3 = r3.paint.get(`${e53}-pattern`).value;
    if (t3.kind !== `constant`) {
      let e54 = t3.evaluate({ zoom: a2 - 1 }, n2, {}, i2.availableImages), s2 = t3.evaluate({ zoom: a2 }, n2, {}, i2.availableImages), c2 = t3.evaluate({ zoom: a2 + 1 }, n2, {}, i2.availableImages);
      e54 = e54?.name ? e54.name : e54, s2 = s2?.name ? s2.name : s2, c2 = c2?.name ? c2.name : c2, o2[e54] = true, o2[s2] = true, o2[c2] = true, n2.patterns[r3.id] = { min: e54, mid: s2, max: c2 };
    }
  }
  return n2;
}
var Pl = /* @__PURE__ */ new Set();
var Fl = false;
function Il(e53, t2, n2 = 2) {
  let r2 = t2 && t2.length, i2 = r2 ? t2[0] * n2 : e53.length;
  Pl.size && Pl.clear();
  let a2 = Ll(e53, 0, i2, n2, true), o2 = [];
  if (!a2 || a2.next === a2.prev) return o2;
  let s2 = 0, c2 = 0, l2 = 0;
  if (r2 && (a2 = Gl(e53, t2, a2, n2)), e53.length > 80 * n2) {
    s2 = e53[0], c2 = e53[1];
    let t3 = s2, r3 = c2;
    for (let a3 = n2; a3 < i2; a3 += n2) {
      let n3 = e53[a3], i3 = e53[a3 + 1];
      n3 < s2 && (s2 = n3), i3 < c2 && (c2 = i3), n3 > t3 && (t3 = n3), i3 > r3 && (r3 = i3);
    }
    l2 = Math.max(t3 - s2, r3 - c2), l2 = l2 === 0 ? 0 : 32767 / l2;
  }
  return zl(a2, o2, s2, c2, l2), o2;
}
function Ll(e53, t2, n2, r2, i2) {
  let a2 = null;
  if (i2 === Ou(e53, t2, n2, r2) > 0) for (let i3 = t2; i3 < n2; i3 += r2) a2 = Tu(i3 / r2 | 0, e53[i3], e53[i3 + 1], a2);
  else for (let i3 = n2 - r2; i3 >= t2; i3 -= r2) a2 = Tu(i3 / r2 | 0, e53[i3], e53[i3 + 1], a2);
  return a2 && vu(a2, a2.next) && (Eu(a2), a2 = a2.next), a2;
}
function Rl(e53, t2 = e53) {
  let n2 = t2 === e53, r2 = e53, i2;
  do
    i2 = false, r2 !== r2.next && (Pl.size === 0 || !Pl.has(r2)) && (vu(r2, r2.next) || _u(r2.prev, r2, r2.next) === 0) ? ((n2 || r2 === t2) && (t2 = r2.prev), Fl = true, Eu(r2), r2 = r2.prev, i2 = true) : (n2 || r2 !== t2) && (r2 = r2.next, i2 = !n2);
  while (i2 || r2 !== t2);
  return t2;
}
function zl(e53, t2, n2, r2, i2) {
  i2 && uu(e53, n2, r2, i2);
  let a2 = e53, o2 = false;
  for (; e53.prev !== e53.next; ) {
    let s2 = e53.prev, c2 = e53.next;
    if (_u(s2, e53, c2) < 0 && (i2 ? Vl(e53, n2, r2, i2) : Bl(e53))) t2.push(s2.i, e53.i, c2.i), Eu(e53), e53 = c2, a2 = c2;
    else if (e53 = c2, e53 === a2) {
      if (Fl = false, e53 = Rl(e53), Fl) {
        a2 = e53;
        continue;
      }
      if (!o2) {
        e53 = Hl(e53, t2), a2 = e53, o2 = true;
        continue;
      }
      Ul(e53, t2, n2, r2, i2);
      break;
    }
  }
}
function Bl(e53) {
  let t2 = e53.prev, n2 = e53, r2 = e53.next, i2 = t2.x, a2 = n2.x, o2 = r2.x, s2 = t2.y, c2 = n2.y, l2 = r2.y, u2 = Math.min(i2, a2, o2), d2 = Math.min(s2, c2, l2), f2 = Math.max(i2, a2, o2), p2 = Math.max(s2, c2, l2), m2 = r2.next;
  for (; m2 !== t2; ) {
    if (m2.x >= u2 && m2.x <= f2 && m2.y >= d2 && m2.y <= p2 && (i2 !== m2.x || s2 !== m2.y) && hu(i2, s2, a2, c2, o2, l2, m2.x, m2.y) && _u(m2.prev, m2, m2.next) >= 0) return false;
    m2 = m2.next;
  }
  return true;
}
function Vl(e53, t2, n2, r2) {
  let i2 = e53.prev, a2 = e53, o2 = e53.next, s2 = i2.x, c2 = a2.x, l2 = o2.x, u2 = i2.y, d2 = a2.y, f2 = o2.y, p2 = Math.min(s2, c2, l2), m2 = Math.min(u2, d2, f2), h2 = Math.max(s2, c2, l2), g2 = Math.max(u2, d2, f2), _2 = pu(p2, m2, t2, n2, r2), v2 = pu(h2, g2, t2, n2, r2), y2 = e53.prevZ;
  for (; y2 && y2.z >= _2; ) {
    if (y2.x >= p2 && y2.x <= h2 && y2.y >= m2 && y2.y <= g2 && y2 !== o2 && (s2 !== y2.x || u2 !== y2.y) && hu(s2, u2, c2, d2, l2, f2, y2.x, y2.y) && _u(y2.prev, y2, y2.next) >= 0) return false;
    y2 = y2.prevZ;
  }
  let b2 = e53.nextZ;
  for (; b2 && b2.z <= v2; ) {
    if (b2.x >= p2 && b2.x <= h2 && b2.y >= m2 && b2.y <= g2 && b2 !== o2 && (s2 !== b2.x || u2 !== b2.y) && hu(s2, u2, c2, d2, l2, f2, b2.x, b2.y) && _u(b2.prev, b2, b2.next) >= 0) return false;
    b2 = b2.nextZ;
  }
  return true;
}
function Hl(e53, t2) {
  let n2 = e53, r2 = false;
  do {
    let i2 = n2.prev, a2 = n2.next.next;
    yu(i2, n2, n2.next, a2, false) && Su(i2, a2) && Su(a2, i2) && (t2.push(i2.i, n2.i, a2.i), Eu(n2), Eu(n2.next), n2 = e53 = a2, r2 = true), n2 = n2.next;
  } while (n2 !== e53);
  return r2 ? Rl(n2) : n2;
}
function Ul(e53, t2, n2, r2, i2) {
  let a2 = e53;
  do {
    let e54 = a2.next.next;
    for (; e54 !== a2.prev; ) {
      if (a2.i !== e54.i && gu(a2, e54)) {
        let o2 = wu(a2, e54);
        a2 = Rl(a2, a2.next), o2 = Rl(o2, o2.next), zl(a2, t2, n2, r2, i2), zl(o2, t2, n2, r2, i2);
        return;
      }
      e54 = e54.next;
    }
    a2 = a2.next;
  } while (a2 !== e53);
}
var Wl = false;
function Gl(e53, t2, n2, r2) {
  let i2 = [];
  for (let n3 = 0, a2 = t2.length; n3 < a2; n3++) {
    let o2 = Ll(e53, t2[n3] * r2, n3 < a2 - 1 ? t2[n3 + 1] * r2 : e53.length, r2, false);
    o2 === o2.next && Pl.add(o2), i2.push(mu(o2));
  }
  i2.sort(Kl), Ql(e53.length / r2, t2.length), $l(n2, n2), Wl = true;
  for (let e54 = 0; e54 < i2.length; e54++) n2 = ql(i2[e54], n2);
  return Wl = false, Rl(n2);
}
function Kl(e53, t2) {
  return e53.x - t2.x || e53.y - t2.y || (e53.next.y - e53.y) / (e53.next.x - e53.x) - (t2.next.y - t2.y) / (t2.next.x - t2.x);
}
function ql(e53, t2) {
  let n2 = ru(e53, t2);
  if (!n2) return t2;
  let r2 = wu(n2, e53), i2 = r2.next;
  return $l(n2, i2.next), Rl(r2, r2.next), Rl(n2, n2.next);
}
var Jl = /* @__PURE__ */ new Float64Array();
var Yl = 0;
var Xl = [];
var Zl = [];
function Ql(e53, t2) {
  let n2 = Math.ceil((e53 + 2 * t2) / 16) + t2 + 2;
  Jl.length < n2 * 4 && (Jl = new Float64Array(n2 * 4)), Yl = 0;
}
function $l(e53, t2) {
  let n2 = e53;
  do {
    let e54 = Yl++;
    Xl[e54] = n2;
    let r2 = n2.x, i2 = n2.y, a2 = n2.x, o2 = n2.y, s2 = 0;
    do {
      let t3 = n2.next;
      n2.z = e54, t3.x < r2 && (r2 = t3.x), t3.x > a2 && (a2 = t3.x), t3.y < i2 && (i2 = t3.y), t3.y > o2 && (o2 = t3.y), n2 = t3;
    } while (++s2 < 16 && n2 !== t2);
    Zl[e54] = n2;
    let c2 = e54 * 4;
    Jl[c2] = r2, Jl[c2 + 1] = i2, Jl[c2 + 2] = a2, Jl[c2 + 3] = o2;
  } while (n2 !== t2);
}
function eu(e53, t2) {
  let n2 = e53.z * 4;
  t2.x < Jl[n2] && (Jl[n2] = t2.x), t2.y < Jl[n2 + 1] && (Jl[n2 + 1] = t2.y), t2.x > Jl[n2 + 2] && (Jl[n2 + 2] = t2.x), t2.y > Jl[n2 + 3] && (Jl[n2 + 3] = t2.y);
}
function tu(e53) {
  let t2 = Zl[e53];
  for (; t2.prev.next !== t2; ) t2 = t2.next;
  return Zl[e53] = t2, t2;
}
function nu(e53) {
  let t2 = Xl[e53];
  for (; t2.prev.next !== t2; ) t2 = t2.next;
  return Xl[e53] = t2, t2;
}
function ru(e53, t2) {
  let n2 = t2, r2 = e53.x, i2 = e53.y, a2 = -1 / 0, o2;
  if (vu(e53, n2)) return n2;
  for (let t3 = 0, s3 = 0; t3 < Yl; t3++, s3 += 4) {
    if (i2 < Jl[s3 + 1] || i2 > Jl[s3 + 3] || Jl[s3] > r2 || Jl[s3 + 2] <= a2) continue;
    let c3 = tu(t3);
    n2 = nu(t3);
    do {
      if (n2.prev.next === n2) {
        if (vu(e53, n2.next)) return n2.next;
        if (i2 <= n2.y && i2 >= n2.next.y && n2.next.y !== n2.y) {
          let e54 = n2.x + (i2 - n2.y) * (n2.next.x - n2.x) / (n2.next.y - n2.y);
          if (e54 <= r2 && e54 > a2 && (a2 = e54, o2 = n2.x < n2.next.x ? n2 : n2.next, e54 === r2)) return o2;
        }
      }
      n2 = n2.next;
    } while (n2 !== c3);
  }
  if (!o2) return null;
  let s2 = o2.x, c2 = o2.y, l2 = Math.min(i2, c2), u2 = Math.max(i2, c2), d2 = 1 / 0;
  for (let t3 = 0, f2 = 0; t3 < Yl; t3++, f2 += 4) {
    if (Jl[f2 + 2] < s2 || Jl[f2] > r2 || Jl[f2 + 3] < l2 || Jl[f2 + 1] > u2) continue;
    let p2 = tu(t3);
    n2 = nu(t3);
    do {
      if (n2.prev.next === n2 && r2 >= n2.x && n2.x >= s2 && r2 !== n2.x && hu(i2 < c2 ? r2 : a2, i2, s2, c2, i2 < c2 ? a2 : r2, i2, n2.x, n2.y)) {
        let t4 = Math.abs(i2 - n2.y) / (r2 - n2.x);
        (Su(n2, e53) || n2.y === i2 && n2.next.y === i2 && n2.next.x > r2) && (t4 < d2 || t4 === d2 && (n2.x > o2.x || n2.x === o2.x && iu(o2, n2))) && (o2 = n2, d2 = t4);
      }
      n2 = n2.next;
    } while (n2 !== p2);
  }
  return o2;
}
function iu(e53, t2) {
  return _u(e53.prev, e53, t2.prev) < 0 && _u(t2.next, e53, e53.next) < 0;
}
var au = [];
var ou = [];
var su = /* @__PURE__ */ new Uint32Array();
var cu = /* @__PURE__ */ new Uint32Array();
var lu = /* @__PURE__ */ new Uint32Array(256);
function uu(e53, t2, n2, r2) {
  let i2 = e53, a2 = 0;
  do
    i2.z = pu(i2.x, i2.y, t2, n2, r2), au[a2++] = i2, i2 = i2.next;
  while (i2 !== e53);
  du(a2);
  let o2 = null;
  for (let e54 = 0; e54 < a2; e54++) {
    let t3 = au[e54];
    t3.prevZ = o2, o2 && (o2.nextZ = t3), o2 = t3;
  }
  o2.nextZ = null, au.fill(null, 0, a2), ou.fill(null, 0, a2);
}
function du(e53) {
  if (e53 <= 32) for (let t2 = 1; t2 < e53; t2++) {
    let e54 = au[t2], n2 = e54.z, r2 = t2 - 1;
    for (; r2 >= 0 && au[r2].z > n2; ) au[r2 + 1] = au[r2], r2--;
    au[r2 + 1] = e54;
  }
  else {
    su.length < e53 && (su = new Uint32Array(e53), cu = new Uint32Array(e53), ou = Array(e53));
    for (let t2 = 0; t2 < e53; t2++) su[t2] = au[t2].z;
    fu(e53, au, su, ou, cu, 0), fu(e53, ou, cu, au, su, 8), fu(e53, au, su, ou, cu, 16), fu(e53, ou, cu, au, su, 24);
  }
}
function fu(e53, t2, n2, r2, i2, a2) {
  lu.fill(0);
  for (let t3 = 0; t3 < e53; t3++) lu[n2[t3] >>> a2 & 255]++;
  let o2 = 0;
  for (let e54 = 0; e54 < 256; e54++) {
    let t3 = lu[e54];
    lu[e54] = o2, o2 += t3;
  }
  for (let o3 = 0; o3 < e53; o3++) {
    let e54 = n2[o3], s2 = lu[e54 >>> a2 & 255]++;
    r2[s2] = t2[o3], i2[s2] = e54;
  }
}
function pu(e53, t2, n2, r2, i2) {
  return e53 = (e53 - n2) * i2 | 0, t2 = (t2 - r2) * i2 | 0, e53 = (e53 | e53 << 8) & 16711935, e53 = (e53 | e53 << 4) & 252645135, e53 = (e53 | e53 << 2) & 858993459, e53 = (e53 | e53 << 1) & 1431655765, t2 = (t2 | t2 << 8) & 16711935, t2 = (t2 | t2 << 4) & 252645135, t2 = (t2 | t2 << 2) & 858993459, t2 = (t2 | t2 << 1) & 1431655765, e53 | t2 << 1;
}
function mu(e53) {
  let t2 = e53, n2 = e53;
  do
    (t2.x < n2.x || t2.x === n2.x && t2.y < n2.y) && (n2 = t2), t2 = t2.next;
  while (t2 !== e53);
  return n2;
}
function hu(e53, t2, n2, r2, i2, a2, o2, s2) {
  return (i2 - o2) * (t2 - s2) >= (e53 - o2) * (a2 - s2) && (e53 - o2) * (r2 - s2) >= (n2 - o2) * (t2 - s2) && (n2 - o2) * (a2 - s2) >= (i2 - o2) * (r2 - s2);
}
function gu(e53, t2) {
  let n2 = vu(e53, t2) && _u(e53.prev, e53, e53.next) > 0 && _u(t2.prev, t2, t2.next) > 0;
  return e53.next.i !== t2.i && (n2 || Su(e53, t2) && Su(t2, e53) && (_u(e53.prev, e53, t2.prev) !== 0 || _u(e53, t2.prev, t2) !== 0)) && !xu(e53, t2) && (n2 || Cu(e53, t2));
}
function _u(e53, t2, n2) {
  return (t2.y - e53.y) * (n2.x - t2.x) - (t2.x - e53.x) * (n2.y - t2.y);
}
function vu(e53, t2) {
  return e53.x === t2.x && e53.y === t2.y;
}
function yu(e53, t2, n2, r2, i2 = true) {
  let a2 = _u(e53, t2, n2), o2 = _u(e53, t2, r2), s2 = _u(n2, r2, e53), c2 = _u(n2, r2, t2);
  return (a2 > 0 && o2 < 0 || a2 < 0 && o2 > 0) && (s2 > 0 && c2 < 0 || s2 < 0 && c2 > 0) ? true : i2 ? !!(a2 === 0 && bu(e53, n2, t2) || o2 === 0 && bu(e53, r2, t2) || s2 === 0 && bu(n2, e53, r2) || c2 === 0 && bu(n2, t2, r2)) : false;
}
function bu(e53, t2, n2) {
  return t2.x <= Math.max(e53.x, n2.x) && t2.x >= Math.min(e53.x, n2.x) && t2.y <= Math.max(e53.y, n2.y) && t2.y >= Math.min(e53.y, n2.y);
}
function xu(e53, t2) {
  let n2 = Math.min(e53.x, t2.x), r2 = Math.max(e53.x, t2.x), i2 = Math.min(e53.y, t2.y), a2 = Math.max(e53.y, t2.y), o2 = e53;
  do {
    let s2 = o2.next;
    if (o2.x > r2 && s2.x > r2 || o2.x < n2 && s2.x < n2 || o2.y > a2 && s2.y > a2 || o2.y < i2 && s2.y < i2) o2 = s2;
    else {
      if (o2.i !== e53.i && s2.i !== e53.i && o2.i !== t2.i && s2.i !== t2.i && yu(o2, s2, e53, t2)) return true;
      o2 = s2;
    }
  } while (o2 !== e53);
  return false;
}
function Su(e53, t2) {
  return _u(e53.prev, e53, e53.next) < 0 ? _u(e53, t2, e53.next) >= 0 && _u(e53, e53.prev, t2) >= 0 : _u(e53, t2, e53.prev) < 0 || _u(e53, e53.next, t2) < 0;
}
function Cu(e53, t2) {
  let n2 = e53, r2 = false, i2 = (e53.x + t2.x) / 2, a2 = (e53.y + t2.y) / 2;
  do {
    let e54 = n2.next;
    n2.y > a2 != e54.y > a2 && i2 < (e54.x - n2.x) * (a2 - n2.y) / (e54.y - n2.y) + n2.x && (r2 = !r2), n2 = e54;
  } while (n2 !== e53);
  return r2;
}
function wu(e53, t2) {
  let n2 = Du(e53.i, e53.x, e53.y), r2 = Du(t2.i, t2.x, t2.y), i2 = e53.next, a2 = t2.prev;
  return e53.next = t2, t2.prev = e53, n2.next = i2, i2.prev = n2, r2.next = n2, n2.prev = r2, a2.next = r2, r2.prev = a2, r2;
}
function Tu(e53, t2, n2, r2) {
  let i2 = Du(e53, t2, n2);
  return r2 ? (i2.next = r2.next, i2.prev = r2, r2.next.prev = i2, r2.next = i2) : (i2.prev = i2, i2.next = i2), i2;
}
function Eu(e53) {
  e53.next.prev = e53.prev, e53.prev.next = e53.next, e53.prevZ && (e53.prevZ.nextZ = e53.nextZ), e53.nextZ && (e53.nextZ.prevZ = e53.prevZ), Wl && eu(e53.prev, e53.next);
}
function Du(e53, t2, n2) {
  return { i: e53, x: t2, y: n2, prev: null, next: null, z: 0, prevZ: null, nextZ: null };
}
function Ou(e53, t2, n2, r2) {
  let i2 = 0;
  for (let a2 = t2, o2 = n2 - r2; a2 < n2; a2 += r2) i2 += (e53[o2] - e53[a2]) * (e53[a2 + 1] + e53[o2 + 1]), o2 = a2;
  return i2;
}
var ku = class {
  constructor(e53, t2) {
    if (t2 > e53) throw Error(`Min granularity must not be greater than base granularity.`);
    this._baseZoomGranularity = e53, this._minGranularity = t2;
  }
  getGranularityForZoomLevel(e53) {
    let t2 = 1 << e53;
    return Math.max(Math.floor(this._baseZoomGranularity / t2), this._minGranularity, 1);
  }
};
var Au = class e44 {
  constructor(e53) {
    this.fill = e53.fill, this.line = e53.line, this.tile = e53.tile, this.stencil = e53.stencil, this.circle = e53.circle;
  }
  static {
    this.noSubdivision = new e44({ fill: new ku(0, 0), line: new ku(0, 0), tile: new ku(0, 0), stencil: new ku(0, 0), circle: 1 });
  }
};
G(`SubdivisionGranularityExpression`, ku), G(`SubdivisionGranularitySetting`, Au);
var ju = -32768;
var Mu = 32767;
var Nu = class {
  constructor(e53, t2) {
    this._vertexBuffer = [], this._vertexDictionary = /* @__PURE__ */ new Map(), this._used = false, this._granularity = e53, this._granularityCellSize = v / e53, this._canonical = t2;
  }
  _getKey(e53, t2) {
    return e53 += 32768, t2 += 32768, e53 << 16 | t2;
  }
  _vertexToIndex(e53, t2) {
    if (e53 < -32768 || t2 < -32768 || e53 > 32767 || t2 > 32767) throw Error(`Vertex coordinates are out of signed 16 bit integer range.`);
    let n2 = Math.round(e53) | 0, r2 = Math.round(t2) | 0, i2 = this._getKey(n2, r2), a2 = this._vertexDictionary.get(i2);
    if (a2 !== void 0) return a2;
    let o2 = this._vertexBuffer.length / 2;
    return this._vertexDictionary.set(i2, o2), this._vertexBuffer.push(n2, r2), o2;
  }
  _subdivideTrianglesScanline(e53, t2) {
    if (this._granularity < 2) return zu(this._vertexBuffer, Ru(e53, t2));
    let n2 = [], r2 = e53.length;
    for (let i2 = 0; i2 < r2; i2 += 3) {
      let r3 = [t2[e53[i2 + 0]], t2[e53[i2 + 1]], t2[e53[i2 + 2]]], a2 = [this._vertexBuffer[r3[0] * 2 + 0], this._vertexBuffer[r3[0] * 2 + 1], this._vertexBuffer[r3[1] * 2 + 0], this._vertexBuffer[r3[1] * 2 + 1], this._vertexBuffer[r3[2] * 2 + 0], this._vertexBuffer[r3[2] * 2 + 1]], o2 = 1 / 0, s2 = 1 / 0, c2 = -1 / 0, l2 = -1 / 0;
      for (let e54 = 0; e54 < 3; e54++) {
        let t3 = a2[e54 * 2], n3 = a2[e54 * 2 + 1];
        o2 = Math.min(o2, t3), c2 = Math.max(c2, t3), s2 = Math.min(s2, n3), l2 = Math.max(l2, n3);
      }
      if (o2 === c2 || s2 === l2) continue;
      let u2 = Math.floor(o2 / this._granularityCellSize), d2 = Math.ceil(c2 / this._granularityCellSize), f2 = Math.floor(s2 / this._granularityCellSize), p2 = Math.ceil(l2 / this._granularityCellSize);
      if (u2 === d2 && f2 === p2) n2.push(...r3);
      else for (let e54 = f2; e54 < p2; e54++) {
        let t3 = this._scanlineGenerateVertexRingForCellRow(e54, a2, r3);
        Bu(this._vertexBuffer, t3, n2);
      }
    }
    return n2;
  }
  _scanlineGenerateVertexRingForCellRow(e53, t2, n2) {
    let r2 = e53 * this._granularityCellSize, i2 = r2 + this._granularityCellSize, a2 = [];
    for (let e54 = 0; e54 < 3; e54++) {
      let o2 = t2[e54 * 2], s2 = t2[e54 * 2 + 1], c2 = t2[(e54 + 1) * 2 % 6], l2 = t2[((e54 + 1) * 2 + 1) % 6], u2 = t2[(e54 + 2) * 2 % 6], d2 = t2[((e54 + 2) * 2 + 1) % 6], f2 = c2 - o2, p2 = l2 - s2, m2 = f2 === 0, h2 = p2 === 0, g2 = (r2 - s2) / p2, _2 = (i2 - s2) / p2, v2 = Math.min(g2, _2), y2 = Math.max(g2, _2);
      if (!h2 && (v2 >= 1 || y2 <= 0) || h2 && (s2 < r2 || s2 > i2)) {
        l2 >= r2 && l2 <= i2 && a2.push(n2[(e54 + 1) % 3]);
        continue;
      }
      if (!h2 && v2 > 0) {
        let e55 = o2 + f2 * v2, t3 = s2 + p2 * v2;
        a2.push(this._vertexToIndex(e55, t3));
      }
      let b2 = o2 + f2 * Math.max(v2, 0), x2 = o2 + f2 * Math.min(y2, 1);
      if (m2 || this._generateIntraEdgeVertices(a2, o2, s2, c2, l2, b2, x2), !h2 && y2 < 1) {
        let e55 = o2 + f2 * y2, t3 = s2 + p2 * y2;
        a2.push(this._vertexToIndex(e55, t3));
      }
      (h2 || l2 >= r2 && l2 <= i2) && a2.push(n2[(e54 + 1) % 3]), !h2 && (l2 <= r2 || l2 >= i2) && this._generateInterEdgeVertices(a2, o2, s2, c2, l2, u2, d2, x2, r2, i2);
    }
    return a2;
  }
  _generateIntraEdgeVertices(e53, t2, n2, r2, i2, a2, o2) {
    let s2 = r2 - t2, c2 = i2 - n2, l2 = c2 === 0, u2 = l2 ? Math.min(t2, r2) : Math.min(a2, o2), d2 = l2 ? Math.max(t2, r2) : Math.max(a2, o2), f2 = Math.floor(u2 / this._granularityCellSize) + 1, p2 = Math.ceil(d2 / this._granularityCellSize) - 1;
    if (l2 ? t2 < r2 : a2 < o2) for (let r3 = f2; r3 <= p2; r3++) {
      let i3 = r3 * this._granularityCellSize, a3 = n2 + c2 * (i3 - t2) / s2;
      e53.push(this._vertexToIndex(i3, a3));
    }
    else for (let r3 = p2; r3 >= f2; r3--) {
      let i3 = r3 * this._granularityCellSize, a3 = n2 + c2 * (i3 - t2) / s2;
      e53.push(this._vertexToIndex(i3, a3));
    }
  }
  _generateInterEdgeVertices(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
    let u2 = i2 - n2, d2 = a2 - r2, f2 = o2 - i2, p2 = (c2 - i2) / f2, m2 = (l2 - i2) / f2, h2 = Math.min(p2, m2), g2 = Math.max(p2, m2), _2 = r2 + d2 * h2, v2 = Math.floor(Math.min(_2, s2) / this._granularityCellSize) + 1, y2 = Math.ceil(Math.max(_2, s2) / this._granularityCellSize) - 1, b2 = s2 < _2, x2 = f2 === 0;
    if (x2 && (o2 === c2 || o2 === l2)) return;
    if (x2 || h2 >= 1 || g2 <= 0) {
      let e54 = t2 - a2, r3 = n2 - o2, i3 = (c2 - o2) / r3, u3 = (l2 - o2) / r3, d3 = a2 + e54 * Math.min(i3, u3);
      v2 = Math.floor(Math.min(d3, s2) / this._granularityCellSize) + 1, y2 = Math.ceil(Math.max(d3, s2) / this._granularityCellSize) - 1, b2 = s2 < d3;
    }
    let S2 = u2 > 0 ? l2 : c2;
    if (b2) for (let t3 = v2; t3 <= y2; t3++) {
      let n3 = t3 * this._granularityCellSize;
      e53.push(this._vertexToIndex(n3, S2));
    }
    else for (let t3 = y2; t3 >= v2; t3--) {
      let n3 = t3 * this._granularityCellSize;
      e53.push(this._vertexToIndex(n3, S2));
    }
  }
  _generateOutline(e53, t2) {
    let n2 = [], r2 = 0;
    for (let i2 of e53) {
      let e54 = this._granularity < 2 ? this._ringPathIndices(i2, r2, t2) : this._pointArrayToIndices(Fu(i2, this._granularity, true));
      r2 += i2.length;
      let a2 = [];
      for (let t3 = 1; t3 < e54.length; t3++) a2.push(e54[t3 - 1]), a2.push(e54[t3]);
      n2.push(a2);
    }
    return n2;
  }
  _ringPathIndices(e53, t2, n2) {
    let r2 = n2.slice(t2, t2 + e53.length);
    return r2.length >= 2 && Iu(e53) && r2.push(r2[0]), r2;
  }
  _handlePoles(e53) {
    let t2 = false, n2 = false;
    this._canonical && (this._canonical.y === 0 && (t2 = true), this._canonical.y === (1 << this._canonical.z) - 1 && (n2 = true)), (t2 || n2) && this._fillPoles(e53, t2, n2);
  }
  _ensureNoPoleVertices() {
    let e53 = this._vertexBuffer;
    for (let t2 = 0; t2 < e53.length; t2 += 2) {
      let n2 = e53[t2 + 1];
      n2 === -32768 && (e53[t2 + 1] = -32767), n2 === 32767 && (e53[t2 + 1] = 32766);
    }
  }
  _generatePoleQuad(e53, t2, n2, r2, i2, a2) {
    r2 > i2 == (a2 === -32768) ? (e53.push(n2), e53.push(t2), e53.push(this._vertexToIndex(r2, a2)), e53.push(this._vertexToIndex(i2, a2)), e53.push(n2), e53.push(this._vertexToIndex(r2, a2))) : (e53.push(t2), e53.push(n2), e53.push(this._vertexToIndex(r2, a2)), e53.push(n2), e53.push(this._vertexToIndex(i2, a2)), e53.push(this._vertexToIndex(r2, a2)));
  }
  _fillPoles(e53, t2, n2) {
    let r2 = this._vertexBuffer, i2 = v, a2 = e53.length;
    for (let o2 = 2; o2 < a2; o2 += 3) {
      let a3 = e53[o2 - 2], s2 = e53[o2 - 1], c2 = e53[o2], l2 = r2[a3 * 2], u2 = r2[a3 * 2 + 1], d2 = r2[s2 * 2], f2 = r2[s2 * 2 + 1], p2 = r2[c2 * 2], m2 = r2[c2 * 2 + 1];
      t2 && (u2 === 0 && f2 === 0 && this._generatePoleQuad(e53, a3, s2, l2, d2, ju), f2 === 0 && m2 === 0 && this._generatePoleQuad(e53, s2, c2, d2, p2, ju), m2 === 0 && u2 === 0 && this._generatePoleQuad(e53, c2, a3, p2, l2, ju)), n2 && (u2 === i2 && f2 === i2 && this._generatePoleQuad(e53, a3, s2, l2, d2, Mu), f2 === i2 && m2 === i2 && this._generatePoleQuad(e53, s2, c2, d2, p2, Mu), m2 === i2 && u2 === i2 && this._generatePoleQuad(e53, c2, a3, p2, l2, Mu));
    }
  }
  _initializeVertices(e53) {
    let t2 = [];
    for (let n2 = 0; n2 < e53.length; n2 += 2) t2.push(this._vertexToIndex(e53[n2], e53[n2 + 1]));
    return t2;
  }
  subdividePolygonInternal(e53, t2) {
    if (this._used) throw Error(`Subdivision: multiple use not allowed.`);
    this._used = true;
    let { flattened: n2, holeIndices: r2 } = Lu(e53), i2 = this._initializeVertices(n2), a2;
    try {
      let e54 = Il(n2, r2);
      a2 = this._subdivideTrianglesScanline(e54, i2);
    } catch (e54) {
      console.error(e54);
    }
    let o2 = [];
    return t2 && (o2 = this._generateOutline(e53, i2)), this._ensureNoPoleVertices(), this._handlePoles(a2), this._granularity >= 2 && this._canonical?.z === 0 && (a2 = this._removeTrianglesOutsideTileX(a2), o2 = o2.map((e54) => this._removeLinesOutsideTileX(e54))), { verticesFlattened: this._vertexBuffer, indicesTriangles: a2, indicesLineList: o2 };
  }
  _vertexOutsideTileX(e53) {
    let t2 = this._vertexBuffer[e53 * 2];
    return t2 < 0 || t2 > 8192;
  }
  _removeTrianglesOutsideTileX(e53) {
    let t2 = [];
    for (let n2 = 0; n2 < e53.length; n2 += 3) this._vertexOutsideTileX(e53[n2]) || this._vertexOutsideTileX(e53[n2 + 1]) || this._vertexOutsideTileX(e53[n2 + 2]) || t2.push(e53[n2], e53[n2 + 1], e53[n2 + 2]);
    return t2;
  }
  _removeLinesOutsideTileX(e53) {
    let t2 = [];
    for (let n2 = 0; n2 < e53.length; n2 += 2) this._vertexOutsideTileX(e53[n2]) || this._vertexOutsideTileX(e53[n2 + 1]) || t2.push(e53[n2], e53[n2 + 1]);
    return t2;
  }
  _pointArrayToIndices(e53) {
    let t2 = [];
    for (let n2 of e53) t2.push(this._vertexToIndex(n2.x, n2.y));
    return t2;
  }
};
function Pu(e53, t2, n2, r2 = true) {
  return new Nu(n2, t2).subdividePolygonInternal(e53, r2);
}
function Fu(e53, t2, n2 = false) {
  if (!e53 || e53.length < 1 || e53.length < 2) return [];
  let r2 = n2 && Iu(e53);
  if (t2 < 2) return r2 ? [...e53, e53[0]] : [...e53];
  let i2 = Math.floor(v / t2), a2 = [];
  a2.push(new l(e53[0].x, e53[0].y));
  let o2 = e53.length, s2 = r2 ? o2 : o2 - 1;
  for (let t3 = 0; t3 < s2; t3++) {
    let n3 = e53[t3], r3 = t3 < o2 - 1 ? e53[t3 + 1] : e53[0], s3 = n3.x, c2 = n3.y, u2 = r3.x, d2 = r3.y, f2 = s3 !== u2, p2 = c2 !== d2;
    if (!f2 && !p2) continue;
    let m2 = u2 - s3, h2 = d2 - c2, g2 = Math.abs(m2), _2 = Math.abs(h2), v2 = s3, y2 = c2;
    for (; ; ) {
      let e54 = m2 > 0 ? (Math.floor(v2 / i2) + 1) * i2 : (Math.ceil(v2 / i2) - 1) * i2, t4 = h2 > 0 ? (Math.floor(y2 / i2) + 1) * i2 : (Math.ceil(y2 / i2) - 1) * i2, n4 = Math.abs(v2 - e54), r4 = Math.abs(y2 - t4), o3 = Math.abs(v2 - u2), s4 = Math.abs(y2 - d2), c3 = f2 ? n4 / g2 : 1 / 0, b3 = p2 ? r4 / _2 : 1 / 0;
      if ((o3 <= n4 || !f2) && (s4 <= r4 || !p2)) break;
      if (c3 < b3 && f2 || !p2) {
        v2 = e54, y2 += h2 * c3;
        let t5 = new l(v2, Math.round(y2));
        (a2[a2.length - 1].x !== t5.x || a2[a2.length - 1].y !== t5.y) && a2.push(t5);
      } else {
        v2 += m2 * b3, y2 = t4;
        let e55 = new l(Math.round(v2), y2);
        (a2[a2.length - 1].x !== e55.x || a2[a2.length - 1].y !== e55.y) && a2.push(e55);
      }
    }
    let b2 = new l(u2, d2);
    (a2[a2.length - 1].x !== b2.x || a2[a2.length - 1].y !== b2.y) && a2.push(b2);
  }
  return a2;
}
function Iu(e53) {
  return !e53[0].equals(e53[e53.length - 1]);
}
function Lu(e53) {
  let t2 = [], n2 = [];
  for (let r2 of e53) if (r2.length !== 0) {
    r2 !== e53[0] && t2.push(n2.length / 2);
    for (let e54 of r2) n2.push(e54.x), n2.push(e54.y);
  }
  return { flattened: n2, holeIndices: t2 };
}
function Ru(e53, t2) {
  let n2 = Array(e53.length);
  for (let r2 = 0; r2 < e53.length; r2++) n2[r2] = t2[e53[r2]];
  return n2;
}
function zu(e53, t2) {
  let n2 = [];
  for (let r2 = 0; r2 < t2.length; r2 += 3) {
    let i2 = t2[r2], a2 = t2[r2 + 1], o2 = t2[r2 + 2], s2 = e53[i2 * 2], c2 = e53[i2 * 2 + 1], l2 = e53[a2 * 2], u2 = e53[a2 * 2 + 1], d2 = e53[o2 * 2], f2 = e53[o2 * 2 + 1], p2 = l2 - s2, m2 = u2 - c2, h2 = d2 - s2;
    p2 * (f2 - c2) - m2 * h2 > 0 ? (n2.push(i2), n2.push(o2), n2.push(a2)) : (n2.push(i2), n2.push(a2), n2.push(o2));
  }
  return n2;
}
function Bu(e53, t2, n2) {
  if (t2.length === 0) throw Error(`Subdivision vertex ring is empty.`);
  let r2 = 0, i2 = e53[t2[0] * 2];
  for (let n3 = 1; n3 < t2.length; n3++) {
    let a3 = e53[t2[n3] * 2];
    a3 < i2 && (i2 = a3, r2 = n3);
  }
  let a2 = t2.length, o2 = r2, s2 = (o2 + 1) % a2;
  for (; ; ) {
    let r3 = o2 - 1 >= 0 ? o2 - 1 : a2 - 1, i3 = (s2 + 1) % a2, c2 = e53[t2[r3] * 2], l2 = e53[t2[r3] * 2 + 1], u2 = e53[t2[i3] * 2], d2 = e53[t2[i3] * 2 + 1], f2 = e53[t2[o2] * 2], p2 = e53[t2[o2] * 2 + 1], m2 = e53[t2[s2] * 2], h2 = e53[t2[s2] * 2 + 1], g2 = false;
    if (c2 < u2) g2 = true;
    else if (c2 > u2) g2 = false;
    else {
      let e54 = h2 - p2, t3 = -(m2 - f2), n3 = p2 < h2 ? 1 : -1;
      ((c2 - f2) * e54 + (l2 - p2) * t3) * n3 > ((u2 - f2) * e54 + (d2 - p2) * t3) * n3 && (g2 = true);
    }
    if (g2) {
      let e54 = t2[r3], i4 = t2[o2], c3 = t2[s2];
      e54 !== i4 && e54 !== c3 && i4 !== c3 && n2.push(c3, i4, e54), o2--, o2 < 0 && (o2 = a2 - 1);
    } else {
      let e54 = t2[i3], r4 = t2[o2], c3 = t2[s2];
      e54 !== r4 && e54 !== c3 && r4 !== c3 && n2.push(c3, r4, e54), s2++, s2 >= a2 && (s2 = 0);
    }
    if (r3 === i3) break;
  }
}
function Vu(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = i2.length / 2, u2 = o2 && s2 && c2;
  if (l2 < Ws.MAX_VERTEX_ARRAY_LENGTH) {
    let d2 = t2.prepareSegment(l2, n2, r2), f2 = d2.vertexLength;
    for (let e54 = 0; e54 < a2.length; e54 += 3) r2.emplaceBack(f2 + a2[e54], f2 + a2[e54 + 1], f2 + a2[e54 + 2]);
    d2.vertexLength += l2, d2.primitiveLength += a2.length / 3;
    let p2, m2;
    u2 && (m2 = o2.prepareSegment(l2, n2, s2), p2 = m2.vertexLength, m2.vertexLength += l2);
    for (let t3 = 0; t3 < i2.length; t3 += 2) e53(i2[t3], i2[t3 + 1]);
    if (u2) for (let e54 of c2) {
      for (let t3 = 1; t3 < e54.length; t3 += 2) s2.emplaceBack(p2 + e54[t3 - 1], p2 + e54[t3]);
      m2.primitiveLength += e54.length / 2;
    }
  } else Uu(t2, n2, r2, i2, a2, e53), u2 && Wu(o2, n2, s2, i2, c2, e53), t2.forceNewSegmentOnNextPrepare(), o2?.forceNewSegmentOnNextPrepare();
}
function Hu(e53, t2, n2, r2, i2, a2, o2) {
  if (a2) {
    let a3 = r2.count;
    return n2(t2[i2 * 2], t2[i2 * 2 + 1]), e53[i2] = r2.count, r2.count++, o2.vertexLength++, a3;
  }
  return e53[i2];
}
function Uu(e53, t2, n2, r2, i2, a2) {
  let o2 = [];
  for (let e54 = 0; e54 < r2.length / 2; e54++) o2.push(-1);
  let s2 = { count: 0 }, c2 = 0, l2 = e53.getOrCreateLatestSegment(t2, n2), u2 = l2.vertexLength;
  for (let d2 = 2; d2 < i2.length; d2 += 3) {
    let f2 = i2[d2 - 2], p2 = i2[d2 - 1], m2 = i2[d2], h2 = o2[f2] < c2, g2 = o2[p2] < c2, _2 = o2[m2] < c2, v2 = +!!h2 + +!!g2 + +!!_2;
    l2.vertexLength + v2 > Ws.MAX_VERTEX_ARRAY_LENGTH && (l2 = e53.createNewSegment(t2, n2), c2 = s2.count, h2 = true, g2 = true, _2 = true, u2 = 0);
    let y2 = Hu(o2, r2, a2, s2, f2, h2, l2), b2 = Hu(o2, r2, a2, s2, p2, g2, l2), x2 = Hu(o2, r2, a2, s2, m2, _2, l2);
    n2.emplaceBack(u2 + y2 - c2, u2 + b2 - c2, u2 + x2 - c2), l2.primitiveLength++;
  }
}
function Wu(e53, t2, n2, r2, i2, a2) {
  let o2 = [];
  for (let e54 = 0; e54 < r2.length / 2; e54++) o2.push(-1);
  let s2 = { count: 0 }, c2 = 0, l2 = e53.getOrCreateLatestSegment(t2, n2), u2 = l2.vertexLength;
  for (let d2 of i2) for (let i3 = 1; i3 < d2.length; i3 += 2) {
    let f2 = d2[i3 - 1], p2 = d2[i3], m2 = o2[f2] < c2, h2 = o2[p2] < c2, g2 = +!!m2 + +!!h2;
    l2.vertexLength + g2 > Ws.MAX_VERTEX_ARRAY_LENGTH && (l2 = e53.createNewSegment(t2, n2), c2 = s2.count, m2 = true, h2 = true, u2 = 0);
    let _2 = Hu(o2, r2, a2, s2, f2, m2, l2), v2 = Hu(o2, r2, a2, s2, p2, h2, l2);
    n2.emplaceBack(u2 + _2 - c2, u2 + v2 - c2), l2.primitiveLength++;
  }
}
var Gu = class {
  constructor(e53) {
    this.zoom = e53.zoom, this.overscaling = e53.overscaling, this.layers = e53.layers, this.layerIds = this.layers.map((e54) => e54.id), this.index = e53.index, this.hasDependencies = false, this.sdfPatterns = {}, this.patternFeatures = [], this.layoutVertexArray = new ks(), this.indexArray = new Bs(), this.indexArray2 = new Vs(), this.programConfigurations = new mc(e53.layers, e53.zoom), this.segments = new Ws(), this.segments2 = new Ws(), this.stateDependentLayerIds = this.layers.filter((e54) => e54.isStateDependent()).map((e54) => e54.id);
  }
  populate(e53, t2, n2) {
    this.hasDependencies = Ml(`fill`, this.layers, t2);
    let r2 = this.layers[0].layout.get(`fill-sort-key`), i2 = !r2.isConstant(), a2 = [], o2 = new K(this.zoom), s2 = this.layers[0]._featureFilter.needGeometry;
    for (let { feature: c2, id: l2, index: u2, sourceLayerIndex: d2 } of e53) {
      let e54 = xc(c2, s2);
      if (!this.layers[0]._featureFilter.filter(o2, e54, n2)) continue;
      let f2 = i2 ? r2.evaluate(e54, {}, n2, t2.availableImages) : void 0, p2 = { id: l2, properties: c2.properties, type: c2.type, sourceLayerIndex: d2, index: u2, geometry: s2 ? e54.geometry : bc(c2), patterns: {}, sortKey: f2 };
      a2.push(p2);
    }
    i2 && a2.sort((e54, t3) => e54.sortKey - t3.sortKey);
    for (let r3 of a2) {
      let { geometry: i3, index: a3, sourceLayerIndex: o3 } = r3;
      if (this.hasDependencies) {
        let e54 = Nl(`fill`, this.layers, r3, { zoom: this.zoom }, t2);
        this.patternFeatures.push(e54);
      } else this.addFeature(r3, i3, a3, n2, {}, t2.subdivisionGranularity);
      let s3 = e53[a3].feature;
      t2.featureIndex.insert(s3, i3, a3, o3, this.index);
    }
  }
  update(e53, t2, n2) {
    this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e53, t2, this.stateDependentLayers, { imagePositions: n2 });
  }
  addFeatures({ options: e53, canonical: t2, patternPositions: n2, patternMap: r2 }) {
    this.detectSdfPatterns(r2);
    for (let r3 of this.patternFeatures) this.addFeature(r3, r3.geometry, r3.index, t2, n2, e53.subdivisionGranularity);
  }
  detectSdfPatterns(e53) {
    for (let t2 of this.patternFeatures) for (let n2 in t2.patterns) {
      let r2 = t2.patterns[n2];
      this.recordSdfPattern(n2, e53[r2.min]), this.recordSdfPattern(n2, e53[r2.mid]), this.recordSdfPattern(n2, e53[r2.max]);
    }
    for (let t2 of this.layers) {
      let n2 = t2.paint.get(`fill-pattern`).constantOr(null);
      n2 && (this.recordSdfPattern(t2.id, e53[n2.from.toString()]), this.recordSdfPattern(t2.id, e53[n2.to.toString()]));
    }
  }
  recordSdfPattern(e53, t2) {
    if (!t2) return;
    let n2 = t2.sdf === true, r2 = this.sdfPatterns[e53];
    r2 === void 0 ? this.sdfPatterns[e53] = n2 : r2 !== n2 && j(`Style sheet warning: Cannot mix SDF and non-SDF fill patterns in layer "${e53}"`);
  }
  isEmpty() {
    return this.layoutVertexArray.length === 0;
  }
  uploadPending() {
    return !this.uploaded || this.programConfigurations.needsUpload;
  }
  upload(e53) {
    this.uploaded || (this.layoutVertexBuffer = e53.createVertexBuffer(this.layoutVertexArray, jl), this.indexBuffer = e53.createIndexBuffer(this.indexArray), this.indexBuffer2 = e53.createIndexBuffer(this.indexArray2)), this.programConfigurations.upload(e53), this.uploaded = true;
  }
  destroy() {
    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.indexBuffer2.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.segments2.destroy());
  }
  addFeature(e53, t2, n2, r2, i2, a2) {
    for (let e54 of Bt(t2, 500)) {
      let t3 = Pu(e54, r2, a2.fill.getGranularityForZoomLevel(r2.z)), n3 = this.layoutVertexArray;
      Vu((e55, t4) => {
        n3.emplaceBack(e55, t4);
      }, this.segments, this.layoutVertexArray, this.indexArray, t3.verticesFlattened, t3.indicesTriangles, this.segments2, this.indexArray2, t3.indicesLineList);
    }
    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e53, n2, { imagePositions: i2, canonical: r2 });
  }
};
G(`FillBucket`, Gu, { omit: [`layers`, `patternFeatures`] });
var Ku;
var qu = () => Ku ||= new Fo({ "fill-sort-key": new J(N.layout_fill[`fill-sort-key`], `fill-sort-key`) });
var Ju;
var Yu = () => Ju ||= new Fo({ "fill-antialias": new q(N.paint_fill[`fill-antialias`], `fill-antialias`), "fill-opacity": new J(N.paint_fill[`fill-opacity`], `fill-opacity`), "fill-layer-opacity": new q(N.paint_fill[`fill-layer-opacity`], `fill-layer-opacity`), "fill-color": new J(N.paint_fill[`fill-color`], `fill-color`), "fill-outline-color": new J(N.paint_fill[`fill-outline-color`], `fill-outline-color`), "fill-translate": new q(N.paint_fill[`fill-translate`], `fill-translate`), "fill-translate-anchor": new q(N.paint_fill[`fill-translate-anchor`], `fill-translate-anchor`), "fill-pattern": new Mo(N.paint_fill[`fill-pattern`], `fill-pattern`) });
var Xu = { get paint() {
  return Yu();
}, get layout() {
  return qu();
} };
var Zu = class extends Ro {
  constructor(e53, t2) {
    super(e53, Xu, t2);
  }
  recalculate(e53, t2) {
    super.recalculate(e53, t2);
    let n2 = this.paint._values[`fill-outline-color`];
    n2.value.kind === `constant` && n2.value.value === void 0 && (this.paint._values[`fill-outline-color`] = this.paint._values[`fill-color`]);
  }
  createBucket(e53) {
    return new Gu(e53);
  }
  queryRadius() {
    return Uc(this.paint.get(`fill-translate`));
  }
  queryIntersectsFeature({ queryGeometry: e53, geometry: t2, transform: n2, pixelsToTileUnits: r2 }) {
    return jc(Wc(e53, this.paint.get(`fill-translate`), this.paint.get(`fill-translate-anchor`), -n2.bearingInRadians, r2), t2);
  }
  isTileClipped() {
    return true;
  }
};
var Qu = Ho([{ name: `a_pos`, components: 2, type: `Int16` }, { name: `a_normal_ed`, components: 4, type: `Int16` }], 4);
var $u = Ho([{ name: `a_centroid`, components: 2, type: `Int16` }], 4);
var ed = Qu.members;
Qu.size, Qu.alignment;
var td = class {
  constructor(e53, t2, n2, r2, i2) {
    for (this.properties = /* @__PURE__ */ Object.create(null), this.extent = n2, this.type = 0, this.id = void 0, this._pbf = e53, this._geometry = -1, this._keys = r2, this._values = i2; e53.pos < t2; ) {
      let t3 = e53.readVarint();
      if (t3 === 8) this.id = e53.readVarint();
      else if (t3 === 18) {
        let t4 = e53.readVarint() + e53.pos;
        for (; e53.pos < t4; ) {
          let t5 = r2[e53.readVarint()], n3 = i2[e53.readVarint()];
          this.properties[t5] = n3;
        }
      } else t3 === 24 ? this.type = e53.readVarint() : (t3 === 34 && (this._geometry = e53.pos), e53.skip(t3));
    }
  }
  loadGeometry() {
    if (this._geometry < 0) throw Error(`feature has no geometry`);
    let e53 = this._pbf;
    e53.pos = this._geometry;
    let t2 = e53.readVarint() + e53.pos, n2 = [], r2, i2 = 1, a2 = 0, o2 = 0, s2 = 0;
    for (; e53.pos < t2; ) {
      if (a2 <= 0) {
        let t3 = e53.readVarint();
        if (i2 = t3 & 7, a2 = t3 >> 3, a2 === 0) continue;
      }
      if (a2--, i2 === 1) o2 += e53.readSVarint(), s2 += e53.readSVarint(), r2 && n2.push(r2), r2 = [new l(o2, s2)];
      else if (i2 === 2) o2 += e53.readSVarint(), s2 += e53.readSVarint(), r2 && r2.push(new l(o2, s2));
      else if (i2 === 7) r2 && r2.push(r2[0].clone());
      else throw Error(`unknown command ${i2}`);
    }
    return r2 && n2.push(r2), n2;
  }
  bbox() {
    if (this._geometry < 0) throw Error(`feature has no geometry`);
    let e53 = this._pbf;
    e53.pos = this._geometry;
    let t2 = e53.readVarint() + e53.pos, n2 = 1, r2 = 0, i2 = 0, a2 = 0, o2 = 1 / 0, s2 = -1 / 0, c2 = 1 / 0, l2 = -1 / 0;
    for (; e53.pos < t2; ) {
      if (r2 <= 0) {
        let t3 = e53.readVarint();
        if (n2 = t3 & 7, r2 = t3 >> 3, r2 === 0) continue;
      }
      if (r2--, n2 === 1 || n2 === 2) i2 += e53.readSVarint(), a2 += e53.readSVarint(), i2 < o2 && (o2 = i2), i2 > s2 && (s2 = i2), a2 < c2 && (c2 = a2), a2 > l2 && (l2 = a2);
      else if (n2 !== 7) throw Error(`unknown command ${n2}`);
    }
    return [o2, c2, s2, l2];
  }
  toGeoJSON(e53, t2, n2) {
    let r2 = this.extent * 2 ** n2, i2 = this.extent * e53, a2 = this.extent * t2, o2 = this.loadGeometry();
    function s2(e54) {
      return [(e54.x + i2) * 360 / r2 - 180, 360 / Math.PI * Math.atan(Math.exp((1 - (e54.y + a2) * 2 / r2) * Math.PI)) - 90];
    }
    function c2(e54) {
      return e54.map(s2);
    }
    let l2;
    if (this.type === 1) {
      let e54 = [];
      for (let t4 of o2) e54.push(t4[0]);
      let t3 = c2(e54);
      l2 = e54.length === 1 ? { type: `Point`, coordinates: t3[0] } : { type: `MultiPoint`, coordinates: t3 };
    } else if (this.type === 2) {
      let e54 = o2.map(c2);
      l2 = e54.length === 1 ? { type: `LineString`, coordinates: e54[0] } : { type: `MultiLineString`, coordinates: e54 };
    } else if (this.type === 3) {
      let e54 = nd(o2), t3 = [];
      for (let n3 of e54) t3.push(n3.map(c2));
      l2 = t3.length === 1 ? { type: `Polygon`, coordinates: t3[0] } : { type: `MultiPolygon`, coordinates: t3 };
    } else throw Error(`unknown feature type`);
    let u2 = { type: `Feature`, geometry: l2, properties: this.properties };
    return this.id != null && (u2.id = this.id), u2;
  }
};
td.types = [`Unknown`, `Point`, `LineString`, `Polygon`];
function nd(e53) {
  let t2 = e53.length;
  if (t2 <= 1) return [e53];
  let n2 = [], r2, i2;
  for (let a2 = 0; a2 < t2; a2++) {
    let t3 = rd(e53[a2]);
    t3 !== 0 && (i2 === void 0 && (i2 = t3 < 0), i2 === t3 < 0 ? (r2 && n2.push(r2), r2 = [e53[a2]]) : r2 && r2.push(e53[a2]));
  }
  return r2 && n2.push(r2), n2;
}
function rd(e53) {
  let t2 = 0;
  for (let n2 = 0, r2 = e53.length, i2 = r2 - 1, a2, o2; n2 < r2; i2 = n2++) a2 = e53[n2], o2 = e53[i2], t2 += (o2.x - a2.x) * (a2.y + o2.y);
  return t2;
}
var id = class {
  constructor(e53, t2) {
    for (this.version = 1, this.name = ``, this.extent = 4096, this.length = 0, this._pbf = e53, this._keys = [], this._values = [], this._features = [], t2 === void 0 && (t2 = e53.length); e53.pos < t2; ) {
      let t3 = e53.readVarint();
      t3 === 10 ? this.name = e53.readString() : t3 === 18 ? (this._features.push(e53.pos), e53.skip(t3)) : t3 === 26 ? this._keys.push(e53.readString()) : t3 === 34 ? this._values.push(ad(e53)) : t3 === 40 ? this.extent = e53.readVarint() : t3 === 120 ? this.version = e53.readVarint() : e53.skip(t3);
    }
    this.length = this._features.length;
  }
  feature(e53) {
    if (e53 < 0 || e53 >= this._features.length) throw Error(`feature index out of bounds`);
    this._pbf.pos = this._features[e53];
    let t2 = this._pbf.readVarint() + this._pbf.pos;
    return new td(this._pbf, t2, this.extent, this._keys, this._values);
  }
};
function ad(e53) {
  let t2 = null, n2 = e53.readVarint() + e53.pos;
  for (; e53.pos < n2; ) {
    let n3 = e53.readVarint();
    t2 = n3 === 10 ? e53.readString() : n3 === 21 ? e53.readFloat() : n3 === 25 ? e53.readDouble() : n3 === 32 ? e53.readVarint(true) : n3 === 40 ? e53.readVarint() : n3 === 48 ? e53.readSVarint() : n3 === 56 ? e53.readBoolean() : (e53.skip(n3), null);
  }
  if (t2 == null) throw Error(`unknown feature value`);
  return t2;
}
var od = class {
  constructor(e53, t2 = e53.length) {
    let n2 = /* @__PURE__ */ Object.create(null);
    for (; e53.pos < t2; ) {
      let t3 = e53.readVarint();
      if (t3 === 26) {
        let t4 = new id(e53, e53.readVarint() + e53.pos);
        t4.length && (n2[t4.name] = t4);
      } else e53.skip(t3);
    }
    this.layers = n2;
  }
};
var sd = 63710088e-1;
var cd = class e45 {
  constructor(e53, t2) {
    if (isNaN(e53) || isNaN(t2)) throw Error(`Invalid LngLat object: (${e53}, ${t2})`);
    if (this.lng = +e53, this.lat = +t2, this.lat > 90 || this.lat < -90) throw Error(`Invalid LngLat latitude value: must be between -90 and 90`);
  }
  wrap() {
    return new e45(C(this.lng, -180, 180), this.lat);
  }
  toArray() {
    return [this.lng, this.lat];
  }
  toString() {
    return `LngLat(${this.lng}, ${this.lat})`;
  }
  distanceTo(e53) {
    let t2 = Math.PI / 180, n2 = this.lat * t2, r2 = e53.lat * t2, i2 = Math.sin(n2) * Math.sin(r2) + Math.cos(n2) * Math.cos(r2) * Math.cos((e53.lng - this.lng) * t2);
    return sd * Math.acos(Math.min(i2, 1));
  }
  static convert(t2) {
    if (t2 instanceof e45) return t2;
    if (Array.isArray(t2) && (t2.length === 2 || t2.length === 3)) return new e45(Number(t2[0]), Number(t2[1]));
    if (!Array.isArray(t2) && typeof t2 == `object` && t2) return new e45(Number(`lng` in t2 ? t2.lng : t2.lon), Number(t2.lat));
    throw Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]");
  }
};
var ld = 6378137;
var ud = { origin: [-Math.PI * ld, Math.PI * ld], extentAtZoom0: 2 * Math.PI * ld };
var dd = 2 * Math.PI * sd;
function fd(e53) {
  return dd * Math.cos(e53 * Math.PI / 180);
}
function pd(e53) {
  return (180 + e53) / 360;
}
function md(e53) {
  return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + e53 * Math.PI / 360))) / 360;
}
function hd(e53, t2) {
  return e53 / fd(t2);
}
function gd(e53) {
  return e53 * 360 - 180;
}
function _d(e53) {
  let t2 = 180 - e53 * 360;
  return 360 / Math.PI * Math.atan(Math.exp(t2 * Math.PI / 180)) - 90;
}
function vd(e53, t2) {
  return e53 * fd(_d(t2));
}
function yd(e53) {
  return 1 / Math.cos(e53 * Math.PI / 180);
}
var bd = class e46 {
  constructor(e53, t2, n2 = 0) {
    this.x = +e53, this.y = +t2, this.z = +n2;
  }
  static fromLngLat(t2, n2 = 0) {
    let r2 = cd.convert(t2);
    return new e46(pd(r2.lng), md(r2.lat), hd(n2, r2.lat));
  }
  toLngLat() {
    return new cd(gd(this.x), _d(this.y));
  }
  toAltitude() {
    return vd(this.z, this.y);
  }
  meterInMercatorCoordinateUnits() {
    return 1 / dd * yd(_d(this.y));
  }
};
var xd = new class {
  constructor() {
    this.name = `mercator`, this.wraps = true, this.tileMatrixSet = ud;
  }
  worldFromLngLat(e53, t2, n2) {
    return new bd(pd(e53), md(t2), n2 === void 0 ? 0 : hd(n2, t2));
  }
  lngLatFromWorld(e53, t2) {
    return new cd(gd(e53), _d(t2));
  }
  hasLngLat(e53, t2) {
    return true;
  }
  metersPerWorldUnit(e53, t2) {
    return 1 / (1 / dd * yd(_d(t2)));
  }
  worldZFromAltitude(e53, t2) {
    return hd(e53, t2.lat);
  }
}();
function Sd(e53, t2, n2) {
  let r2 = 1 / (1 << n2.z);
  return new bd(e53 / v * r2 + n2.x * r2, t2 / v * r2 + n2.y * r2);
}
function Cd(e53, t2, n2) {
  return Sd(e53, t2, n2).toLngLat();
}
function wd(e53, t2) {
  return t2 <= 0 || !e53 || e53.length === 0 ? e53 : e53.map((e54) => kd(e54, t2));
}
function Td(e53, t2) {
  let n2 = Cd(v / 2, v / 2, t2), r2 = bd.fromLngLat(n2).meterInMercatorCoordinateUnits(), i2 = (1 << t2.z) * v;
  return e53 * r2 * i2;
}
var Ed = Math.cos(35 * Math.PI / 180);
function Dd(e53) {
  let t2 = [null];
  for (let n3 = 1; n3 < e53.length; n3++) {
    let r3 = e53[n3].sub(e53[n3 - 1]), i3 = !Cc(e53[n3], e53[n3 - 1]) && r3.mag() > 0;
    t2.push(i3 ? r3._perp() : null);
  }
  let n2 = e53.length - 1, r2 = n2 > 1 && e53[0].equals(e53[n2]), i2 = [null];
  for (let e54 = 1; e54 <= n2; e54++) {
    let a2 = t2[e54];
    if (!a2) {
      i2.push(null);
      continue;
    }
    let o2 = r2 && e54 === 1 ? t2[n2] : t2[e54 - 1], s2 = r2 && e54 === n2 ? t2[1] : t2[e54 + 1];
    i2.push({ start: Od(a2, o2), end: Od(a2, s2) });
  }
  return i2;
}
function Od(e53, t2) {
  if (!t2) return e53.unit();
  let n2 = e53.mag(), r2 = t2.mag();
  return e53.x * t2.x + e53.y * t2.y < Ed * n2 * r2 || n2 >= 2 * r2 ? e53.unit() : r2 >= 2 * n2 ? t2.unit() : e53.add(t2)._unit();
}
function kd(e53, t2) {
  if (!e53 || e53.length < 3) return e53;
  let n2 = e53[0].x === e53[e53.length - 1].x && e53[0].y === e53[e53.length - 1].y, r2 = n2 ? e53.length - 1 : e53.length;
  if (r2 < 3) return e53;
  let i2 = [], a2 = Cc(e53[r2 - 1], e53[0]);
  for (let n3 = 0; n3 < r2; n3++) {
    let o3 = e53[(n3 - 1 + r2) % r2], s2 = e53[n3], c2 = e53[(n3 + 1) % r2], l2 = Cc(s2, c2);
    a2 || l2 ? i2.push(s2.clone()) : jd(i2, o3, s2, c2, t2), a2 = l2;
  }
  let o2 = Ad(i2);
  return o2.length < 3 ? e53 : (n2 && o2.push(o2[0].clone()), o2);
}
function Ad(e53) {
  let t2 = [];
  for (let n2 of e53) {
    let e54 = n2.round(), r2 = t2[t2.length - 1];
    (r2?.x !== e54.x || r2?.y !== e54.y) && t2.push(e54);
  }
  for (; t2.length > 1 && t2[0].x === t2[t2.length - 1].x && t2[0].y === t2[t2.length - 1].y; ) t2.pop();
  return t2;
}
function jd(e53, t2, n2, r2, i2) {
  let a2 = t2.sub(n2), o2 = r2.sub(n2), s2 = a2.mag(), c2 = o2.mag();
  if (s2 < 1e-6 || c2 < 1e-6) {
    e53.push(n2.clone());
    return;
  }
  a2._div(s2), o2._div(c2);
  let l2 = a2.x * o2.x + a2.y * o2.y;
  if (Math.abs(l2) > Math.cos(5 * Math.PI / 180)) {
    e53.push(n2.clone());
    return;
  }
  let u2 = 0.2, d2 = Math.min(i2, s2 * u2, c2 * u2), f2 = n2.add(a2.mult(d2)), p2 = n2.add(o2.mult(d2)), m2 = Math.sqrt((1 + l2) / 2), h2 = n2.add(a2.add(o2)._unit()._mult(d2 / m2)), g2 = f2.sub(h2).angleWith(p2.sub(h2)), _2 = Math.max(2, Math.ceil(Math.abs(g2) / (Math.PI / 6) - 1e-6));
  for (let t3 = 0; t3 <= _2; t3++) e53.push(f2.rotateAround(t3 / _2 * g2, h2));
}
var Md = 8192;
function Nd(e53, t2, n2, r2, i2, a2, o2, s2) {
  e53.emplaceBack(t2, n2, Math.floor(r2 * Md) * 2 + o2, i2 * Md * 2, a2 * Md * 2, Math.round(s2));
}
var Pd = class {
  constructor(e53) {
    this.zoom = e53.zoom, this.overscaling = e53.overscaling, this.layers = e53.layers, this.layerIds = this.layers.map((e54) => e54.id), this.index = e53.index, this.hasDependencies = false, this.layoutVertexArray = new As(), this.centroidVertexArray = new Ds(), this.indexArray = new Bs(), this.programConfigurations = new mc(e53.layers, e53.zoom), this.segments = new Ws(), this.stateDependentLayerIds = this.layers.filter((e54) => e54.isStateDependent()).map((e54) => e54.id);
  }
  populate(e53, t2, n2) {
    this.features = [], this.hasDependencies = Ml(`fill-extrusion`, this.layers, t2);
    let r2 = new K(this.zoom), i2 = this.layers[0], a2 = i2.layout.get(`fill-extrusion-rounded-corner-distance`), o2 = a2 > 0 ? Td(a2, n2) : 0, s2 = i2._featureFilter.needGeometry;
    for (let { feature: a3, id: c2, index: l2, sourceLayerIndex: u2 } of e53) {
      let e54 = xc(a3, s2);
      if (!i2._featureFilter.filter(r2, e54, n2)) continue;
      let d2 = { id: c2, sourceLayerIndex: u2, index: l2, geometry: wd(s2 ? e54.geometry : bc(a3), o2), properties: a3.properties, type: a3.type, patterns: {} };
      this.hasDependencies ? this.features.push(Nl(`fill-extrusion`, this.layers, d2, { zoom: this.zoom }, t2)) : this.addFeature(d2, d2.geometry, l2, n2, {}, t2.subdivisionGranularity), t2.featureIndex.insert(a3, d2.geometry, l2, u2, this.index, true);
    }
  }
  addFeatures({ options: e53, canonical: t2, patternPositions: n2 }) {
    for (let r2 of this.features) {
      let { geometry: i2 } = r2;
      this.addFeature(r2, i2, r2.index, t2, n2, e53.subdivisionGranularity);
    }
  }
  update(e53, t2, n2) {
    this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e53, t2, this.stateDependentLayers, { imagePositions: n2 });
  }
  isEmpty() {
    return this.layoutVertexArray.length === 0 && this.centroidVertexArray.length === 0;
  }
  uploadPending() {
    return !this.uploaded || this.programConfigurations.needsUpload;
  }
  upload(e53) {
    this.uploaded || (this.layoutVertexBuffer = e53.createVertexBuffer(this.layoutVertexArray, ed), this.centroidVertexBuffer = e53.createVertexBuffer(this.centroidVertexArray, $u.members, true), this.indexBuffer = e53.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e53), this.uploaded = true;
  }
  destroy() {
    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.centroidVertexBuffer.destroy());
  }
  addFeature(e53, t2, n2, r2, i2, a2) {
    for (let n3 of Bt(t2, 500)) {
      let t3 = { x: 0, y: 0, sampleCount: 0 }, i3 = this.layoutVertexArray.length;
      this.processPolygon(t3, r2, e53, n3, a2);
      let o2 = this.layoutVertexArray.length - i3, s2 = Math.floor(t3.x / t3.sampleCount), c2 = Math.floor(t3.y / t3.sampleCount);
      for (let e54 = 0; e54 < o2; e54++) this.centroidVertexArray.emplaceBack(s2, c2);
    }
    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e53, n2, { imagePositions: i2, canonical: r2 });
  }
  processPolygon(e53, t2, n2, r2, i2) {
    if (r2.length < 1 || wc(r2[0])) return;
    for (let t3 of r2) t3.length !== 0 && Fd(e53, t3);
    let a2 = { segment: this.segments.prepareSegment(4, this.layoutVertexArray, this.indexArray) }, o2 = i2.fill.getGranularityForZoomLevel(t2.z), s2 = td.types[n2.type] === `Polygon`;
    for (let e54 of r2) {
      if (e54.length === 0 || wc(e54)) continue;
      let t3 = Fu(e54, o2, s2);
      this._generateSideFaces(t3, a2);
    }
    if (!s2) return;
    let c2 = Pu(r2, t2, o2, false), l2 = this.layoutVertexArray;
    Vu((e54, t3) => {
      Nd(l2, e54, t3, 0, 0, 1, 1, 0);
    }, this.segments, this.layoutVertexArray, this.indexArray, c2.verticesFlattened, c2.indicesTriangles);
  }
  _generateSideFaces(e53, t2) {
    let n2 = 0, r2 = this.layers[0].layout.get(`fill-extrusion-rounded-corner-distance`) > 0 ? Dd(e53) : null;
    for (let i2 = 1; i2 < e53.length; i2++) {
      let a2 = e53[i2], o2 = e53[i2 - 1];
      if (Cc(a2, o2) || r2 && !r2[i2]) continue;
      t2.segment.vertexLength + 4 > Ws.MAX_VERTEX_ARRAY_LENGTH && (t2.segment = this.segments.prepareSegment(4, this.layoutVertexArray, this.indexArray));
      let s2 = a2.sub(o2)._perp()._unit(), { start: c2, end: l2 } = r2 ? r2[i2] : { start: s2, end: s2 }, u2 = o2.dist(a2);
      n2 + u2 > 32768 && (n2 = 0), Nd(this.layoutVertexArray, a2.x, a2.y, l2.x, l2.y, 0, 0, n2), Nd(this.layoutVertexArray, a2.x, a2.y, l2.x, l2.y, 0, 1, n2), n2 += u2, Nd(this.layoutVertexArray, o2.x, o2.y, c2.x, c2.y, 0, 0, n2), Nd(this.layoutVertexArray, o2.x, o2.y, c2.x, c2.y, 0, 1, n2);
      let d2 = t2.segment.vertexLength;
      this.indexArray.emplaceBack(d2, d2 + 2, d2 + 1), this.indexArray.emplaceBack(d2 + 1, d2 + 2, d2 + 3), t2.segment.vertexLength += 4, t2.segment.primitiveLength += 2;
    }
  }
};
function Fd(e53, t2) {
  for (let n2 = 0; n2 < t2.length; n2++) {
    let r2 = t2[n2];
    (n2 !== t2.length - 1 || t2[0].x !== r2.x || t2[0].y !== r2.y) && (e53.x += r2.x, e53.y += r2.y, e53.sampleCount++);
  }
}
G(`FillExtrusionBucket`, Pd, { omit: [`layers`, `features`] });
var Id;
var Ld = () => Id ||= new Fo({ "fill-extrusion-rounded-corner-distance": new q(N[`layout_fill-extrusion`][`fill-extrusion-rounded-corner-distance`], `fill-extrusion-rounded-corner-distance`) });
var Rd;
var zd = () => Rd ||= new Fo({ "fill-extrusion-opacity": new q(N[`paint_fill-extrusion`][`fill-extrusion-opacity`], `fill-extrusion-opacity`), "fill-extrusion-color": new J(N[`paint_fill-extrusion`][`fill-extrusion-color`], `fill-extrusion-color`), "fill-extrusion-translate": new q(N[`paint_fill-extrusion`][`fill-extrusion-translate`], `fill-extrusion-translate`), "fill-extrusion-translate-anchor": new q(N[`paint_fill-extrusion`][`fill-extrusion-translate-anchor`], `fill-extrusion-translate-anchor`), "fill-extrusion-pattern": new Mo(N[`paint_fill-extrusion`][`fill-extrusion-pattern`], `fill-extrusion-pattern`), "fill-extrusion-height": new J(N[`paint_fill-extrusion`][`fill-extrusion-height`], `fill-extrusion-height`), "fill-extrusion-base": new J(N[`paint_fill-extrusion`][`fill-extrusion-base`], `fill-extrusion-base`), "fill-extrusion-vertical-gradient": new q(N[`paint_fill-extrusion`][`fill-extrusion-vertical-gradient`], `fill-extrusion-vertical-gradient`) });
var Bd = { get paint() {
  return zd();
}, get layout() {
  return Ld();
} };
var Vd = class extends Ro {
  constructor(e53, t2) {
    super(e53, Bd, t2);
  }
  createBucket(e53) {
    return new Pd(e53);
  }
  queryRadius() {
    return Uc(this.paint.get(`fill-extrusion-translate`));
  }
  is3D() {
    return true;
  }
  queryIntersectsFeature({ queryGeometry: e53, feature: t2, featureState: n2, geometry: r2, transform: i2, pixelsToTileUnits: a2, pixelPosMatrix: o2 }) {
    let s2 = Wc(e53, this.paint.get(`fill-extrusion-translate`), this.paint.get(`fill-extrusion-translate-anchor`), -i2.bearingInRadians, a2), c2 = this.paint.get(`fill-extrusion-height`).evaluate(t2, n2), l2 = this.paint.get(`fill-extrusion-base`).evaluate(t2, n2), u2 = Kd(s2, o2, 0), d2 = Gd(r2, l2, c2, o2), f2 = d2[0], p2 = d2[1];
    return Wd(f2, p2, u2);
  }
};
function Hd(e53, t2) {
  return e53.x * t2.x + e53.y * t2.y;
}
function Ud(e53, t2) {
  if (e53.length === 1) {
    let n2 = 0, r2 = t2[n2++], i2;
    for (; !i2 || r2.equals(i2); ) if (i2 = t2[n2++], !i2) return 1 / 0;
    for (; n2 < t2.length; n2++) {
      let a2 = t2[n2], o2 = e53[0], s2 = i2.sub(r2), c2 = a2.sub(r2), l2 = o2.sub(r2), u2 = Hd(s2, s2), d2 = Hd(s2, c2), f2 = Hd(c2, c2), p2 = Hd(l2, s2), m2 = Hd(l2, c2), h2 = u2 * f2 - d2 * d2, g2 = (f2 * p2 - d2 * m2) / h2, _2 = (u2 * m2 - d2 * p2) / h2, v2 = 1 - g2 - _2, y2 = r2.z * v2 + i2.z * g2 + a2.z * _2;
      if (isFinite(y2)) return y2;
    }
    return 1 / 0;
  }
  {
    let e54 = 1 / 0;
    for (let n2 of t2) e54 = Math.min(e54, n2.z);
    return e54;
  }
}
function Wd(e53, t2, n2) {
  let r2 = 1 / 0;
  jc(n2, t2) && (r2 = Ud(n2, t2[0]));
  for (let i2 = 0; i2 < t2.length; i2++) {
    let a2 = t2[i2], o2 = e53[i2];
    for (let e54 = 0; e54 < a2.length - 1; e54++) {
      let t3 = a2[e54], i3 = a2[e54 + 1], s2 = o2[e54], c2 = [t3, i3, o2[e54 + 1], s2, t3];
      kc(n2, c2) && (r2 = Math.min(r2, Ud(n2, c2)));
    }
  }
  return r2 !== 1 / 0 && r2;
}
function Gd(e53, t2, n2, r2) {
  let i2 = [], a2 = [], o2 = r2[8] * t2, s2 = r2[9] * t2, c2 = r2[10] * t2, u2 = r2[11] * t2, d2 = r2[8] * n2, f2 = r2[9] * n2, p2 = r2[10] * n2, m2 = r2[11] * n2;
  for (let t3 of e53) {
    let e54 = [], n3 = [];
    for (let i3 of t3) {
      let t4 = i3.x, a3 = i3.y, h2 = r2[0] * t4 + r2[4] * a3 + r2[12], g2 = r2[1] * t4 + r2[5] * a3 + r2[13], _2 = r2[2] * t4 + r2[6] * a3 + r2[14], v2 = r2[3] * t4 + r2[7] * a3 + r2[15], y2 = h2 + o2, b2 = g2 + s2, x2 = _2 + c2, S2 = v2 + u2, C2 = h2 + d2, w2 = g2 + f2, T2 = _2 + p2, E2 = v2 + m2, D2 = new l(y2 / S2, b2 / S2);
      D2.z = x2 / S2, e54.push(D2);
      let O2 = new l(C2 / E2, w2 / E2);
      O2.z = T2 / E2, n3.push(O2);
    }
    i2.push(e54), a2.push(n3);
  }
  return [i2, a2];
}
function Kd(e53, t2, n2) {
  let r2 = [];
  for (let i2 of e53) {
    let e54 = [i2.x, i2.y, n2, 1];
    _(e54, e54, t2), r2.push(new l(e54[0] / e54[3], e54[1] / e54[3]));
  }
  return r2;
}
function qd(e53, t2, n2, r2) {
  let i2 = [t2, n2];
  for (; i2.length; ) n2 = i2.pop(), t2 = i2.pop(), Jd(e53, t2, n2, r2, i2);
}
function Jd(e53, t2, n2, r2, i2) {
  let a2 = r2, o2 = t2 + (n2 - t2 >> 1), s2 = n2 - t2, c2, l2 = e53[t2], u2 = e53[t2 + 1], d2 = e53[n2], f2 = e53[n2 + 1];
  for (let r3 = t2 + 3; r3 < n2; r3 += 3) {
    let t3 = Yd(e53[r3], e53[r3 + 1], l2, u2, d2, f2);
    if (t3 > a2) c2 = r3, a2 = t3;
    else if (t3 === a2) {
      let e54 = Math.abs(r3 - o2);
      e54 < s2 && (c2 = r3, s2 = e54);
    }
  }
  a2 > r2 && (e53[c2 + 2] = a2, c2 - t2 > 3 && i2.push(t2, c2), n2 - c2 > 3 && i2.push(c2, n2));
}
function Yd(e53, t2, n2, r2, i2, a2) {
  let o2 = i2 - n2, s2 = a2 - r2;
  if (o2 !== 0 || s2 !== 0) {
    let c2 = ((e53 - n2) * o2 + (t2 - r2) * s2) / (o2 * o2 + s2 * s2);
    c2 > 1 ? (n2 = i2, r2 = a2) : c2 > 0 && (n2 += o2 * c2, r2 += s2 * c2);
  }
  return o2 = e53 - n2, s2 = t2 - r2, o2 * o2 + s2 * s2;
}
function Xd(e53, t2, n2, r2) {
  let i2 = { type: t2, geom: n2 }, a2 = { id: e53 ?? null, type: i2.type, geometry: i2.geom, tags: r2, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
  switch (i2.type) {
    case `Point`:
    case `MultiPoint`:
      Qd(a2, i2.geom);
      break;
    case `LineString`:
      Qd(a2, i2.geom.points);
      break;
    case `Polygon`:
      Qd(a2, i2.geom[0].points);
      break;
    case `MultiLineString`:
      for (let e54 of i2.geom) Qd(a2, e54.points);
      break;
    case `MultiPolygon`:
      for (let e54 of i2.geom) Qd(a2, e54[0].points);
  }
  return a2;
}
function Zd(e53) {
  let t2 = e53;
  e53.points.length > 64 && (t2.points = new Float64Array(e53.points));
}
function Qd(e53, t2) {
  for (let n2 = 0; n2 < t2.length; n2 += 3) e53.minX = Math.min(e53.minX, t2[n2]), e53.minY = Math.min(e53.minY, t2[n2 + 1]), e53.maxX = Math.max(e53.maxX, t2[n2]), e53.maxY = Math.max(e53.maxY, t2[n2 + 1]);
}
var $d = class {
  projectX(e53) {
    return e53 / 360 + 0.5;
  }
  projectY(e53) {
    let t2 = Math.sin(e53 * Math.PI / 180), n2 = 0.5 - 0.25 * Math.log((1 + t2) / (1 - t2)) / Math.PI;
    return n2 < 0 ? 0 : n2 > 1 ? 1 : n2;
  }
  unprojectX(e53) {
    return (e53 - 0.5) * 360;
  }
  unprojectY(e53) {
    let t2 = (180 - e53 * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(t2)) / Math.PI - 90;
  }
};
var ef = class {
  projectX(e53) {
    return e53;
  }
  projectY(e53) {
    return e53;
  }
  unprojectX(e53) {
    return e53;
  }
  unprojectY(e53) {
    return e53;
  }
};
var tf = new $d();
var nf = new ef();
function rf(e53) {
  return e53 === `unitSquare` ? nf : tf;
}
function af(e53, t2, n2) {
  let r2 = [];
  switch (e53.type) {
    case `FeatureCollection`:
      for (let i2 = 0; i2 < e53.features.length; i2++) of(r2, e53.features[i2], t2, n2, i2);
      break;
    case `Feature`:
      of(r2, e53, t2, n2);
      break;
    default:
      of(r2, { type: `Feature`, geometry: e53, properties: void 0 }, t2, n2);
  }
  return r2;
}
function of(e53, t2, n2, r2, i2) {
  let a2 = e53.length;
  if (sf(e53, t2, n2, i2), !r2) return;
  let o2 = cf(t2, n2, i2);
  o2 != null && (e53.length > a2 ? r2.delete(o2) : r2.set(o2, { ...t2, id: o2 }));
}
function sf(e53, t2, n2, r2, i2 = 0) {
  if (!t2.geometry) return;
  if (i2 > 1024) throw Error(`GeometryCollection nesting exceeds supported depth: 1024`);
  if (t2.geometry.type === `GeometryCollection`) {
    lf(e53, t2, t2.geometry, n2, r2, i2 + 1);
    return;
  }
  if (!t2.geometry.coordinates?.length) return;
  let a2 = cf(t2, n2, r2), o2 = (n2.tolerance / ((1 << n2.maxZoom) * n2.extent)) ** 2, s2 = rf(n2.coordinates);
  switch (t2.geometry.type) {
    case `Point`:
      uf(e53, a2, t2.geometry, s2, t2.properties);
      return;
    case `MultiPoint`:
      df(e53, a2, t2.geometry, s2, t2.properties);
      return;
    case `LineString`:
      ff(e53, a2, t2.geometry, o2, s2, t2.properties);
      return;
    case `MultiLineString`:
      pf(e53, a2, t2.geometry, o2, s2, n2, t2.properties);
      return;
    case `Polygon`:
      mf(e53, a2, t2.geometry, o2, s2, t2.properties);
      return;
    case `MultiPolygon`:
      hf(e53, a2, t2.geometry, o2, s2, t2.properties);
      return;
    default:
      throw Error(`Input data is not a valid GeoJSON object.`);
  }
}
function cf(e53, t2, n2) {
  return t2.promoteId ? e53.properties?.[t2.promoteId] : t2.generateId ? n2 || 0 : e53.id;
}
function lf(e53, t2, n2, r2, i2, a2 = 0) {
  for (let o2 of n2.geometries) sf(e53, { id: t2.id, type: `Feature`, geometry: o2, properties: t2.properties }, r2, i2, a2);
}
function uf(e53, t2, n2, r2, i2) {
  let a2 = [];
  a2.push(r2.projectX(n2.coordinates[0]), r2.projectY(n2.coordinates[1]), 0), e53.push(Xd(t2, `Point`, a2, i2));
}
function df(e53, t2, n2, r2, i2) {
  let a2 = [];
  for (let e54 of n2.coordinates) a2.push(r2.projectX(e54[0]), r2.projectY(e54[1]), 0);
  e53.push(Xd(t2, `MultiPoint`, a2, i2));
}
function ff(e53, t2, n2, r2, i2, a2) {
  let o2 = { points: [] };
  gf(n2.coordinates, o2, r2, false, i2), e53.push(Xd(t2, `LineString`, o2, a2));
}
function pf(e53, t2, n2, r2, i2, a2, o2) {
  if (a2.lineMetrics) for (let a3 of n2.coordinates) {
    let n3 = { points: [] };
    gf(a3, n3, r2, false, i2), e53.push(Xd(t2, `LineString`, n3, o2));
  }
  else {
    let a3 = [];
    _f(n2.coordinates, a3, r2, false, i2), e53.push(Xd(t2, `MultiLineString`, a3, o2));
  }
}
function mf(e53, t2, n2, r2, i2, a2) {
  let o2 = [];
  _f(n2.coordinates, o2, r2, true, i2), e53.push(Xd(t2, `Polygon`, o2, a2));
}
function hf(e53, t2, n2, r2, i2, a2) {
  let o2 = [];
  for (let e54 of n2.coordinates) {
    let t3 = [];
    _f(e54, t3, r2, true, i2), t3.length && o2.push(t3);
  }
  o2.length && e53.push(Xd(t2, `MultiPolygon`, o2, a2));
}
function gf(e53, t2, n2, r2, i2) {
  let a2, o2, s2 = 0;
  for (let n3 = 0; n3 < e53.length; n3++) {
    let c3 = i2.projectX(e53[n3][0]), l2 = i2.projectY(e53[n3][1]);
    t2.points.push(c3, l2, 0), n3 > 0 && (s2 += r2 ? (a2 * l2 - c3 * o2) / 2 : Math.sqrt((c3 - a2) ** 2 + (l2 - o2) ** 2)), a2 = c3, o2 = l2;
  }
  let c2 = t2.points.length - 3;
  t2.points[2] = 1, n2 > 0 && qd(t2.points, 0, c2, n2), t2.points[c2 + 2] = 1, Zd(t2), t2.size = Math.abs(s2), t2.start = 0, t2.end = t2.size;
}
function _f(e53, t2, n2, r2, i2) {
  for (let a2 = 0; a2 < e53.length; a2++) {
    let o2 = { points: [] };
    gf(e53[a2], o2, n2, r2, i2), t2.push(o2);
  }
}
function vf(e53, t2 = tf) {
  return { type: `FeatureCollection`, features: e53.map((e54) => yf(e54, t2)) };
}
function yf(e53, t2 = tf) {
  let n2 = { type: `Feature`, geometry: bf(e53, t2), properties: e53.tags };
  return e53.id != null && (n2.id = e53.id), n2;
}
function bf(e53, t2) {
  let { type: n2, geometry: r2 } = e53;
  switch (n2) {
    case `Point`:
      return { type: n2, coordinates: Sf(r2[0], r2[1], t2) };
    case `MultiPoint`:
      return { type: n2, coordinates: xf(r2, t2) };
    case `LineString`:
      return { type: n2, coordinates: xf(r2.points, t2) };
    case `MultiLineString`:
    case `Polygon`:
      return { type: n2, coordinates: r2.map((e54) => xf(e54.points, t2)) };
    case `MultiPolygon`:
      return { type: n2, coordinates: r2.map((e54) => e54.map((e55) => xf(e55.points, t2))) };
  }
}
function xf(e53, t2 = tf) {
  let n2 = [];
  for (let r2 = 0; r2 < e53.length; r2 += 3) n2.push(Sf(e53[r2], e53[r2 + 1], t2));
  return n2;
}
function Sf(e53, t2, n2) {
  return [n2.unprojectX(e53), n2.unprojectY(t2)];
}
function Cf(e53, t2, n2, r2, i2, a2, o2, s2) {
  if (n2 /= t2, r2 /= t2, a2 >= n2 && o2 < r2) return e53;
  if (o2 < n2 || a2 >= r2) return null;
  let c2 = [];
  for (let t3 of e53) {
    let e54 = i2 === 0 ? t3.minX : t3.minY, a3 = i2 === 0 ? t3.maxX : t3.maxY;
    if (e54 >= n2 && a3 < r2) c2.push(t3);
    else if (!(a3 < n2 || e54 >= r2)) switch (t3.type) {
      case `Point`:
      case `MultiPoint`:
        wf(t3, c2, n2, r2, i2);
        continue;
      case `LineString`:
        Tf(t3, c2, n2, r2, i2, s2);
        continue;
      case `MultiLineString`:
        Ef(t3, c2, n2, r2, i2);
        continue;
      case `Polygon`:
        Df(t3, c2, n2, r2, i2);
        continue;
      case `MultiPolygon`:
        Of(t3, c2, n2, r2, i2);
        continue;
    }
  }
  return c2.length ? c2 : null;
}
function wf(e53, t2, n2, r2, i2) {
  let a2 = [];
  if (kf(e53.geometry, a2, n2, r2, i2), !a2.length) return;
  let o2 = a2.length === 3 ? `Point` : `MultiPoint`;
  t2.push(Xd(e53.id, o2, a2, e53.tags));
}
function Tf(e53, t2, n2, r2, i2, a2) {
  let o2 = [];
  if (Af(e53.geometry, o2, n2, r2, i2, false, a2.lineMetrics), o2.length) {
    if (a2.lineMetrics) for (let n3 of o2) t2.push(Xd(e53.id, `LineString`, n3, e53.tags));
    else o2.length > 1 ? t2.push(Xd(e53.id, `MultiLineString`, o2, e53.tags)) : t2.push(Xd(e53.id, `LineString`, o2[0], e53.tags));
  }
}
function Ef(e53, t2, n2, r2, i2) {
  let a2 = [];
  Mf(e53.geometry, a2, n2, r2, i2, false), a2.length && (a2.length === 1 ? t2.push(Xd(e53.id, `LineString`, a2[0], e53.tags)) : t2.push(Xd(e53.id, `MultiLineString`, a2, e53.tags)));
}
function Df(e53, t2, n2, r2, i2) {
  let a2 = [];
  Mf(e53.geometry, a2, n2, r2, i2, true), a2.length && t2.push(Xd(e53.id, `Polygon`, a2, e53.tags));
}
function Of(e53, t2, n2, r2, i2) {
  let a2 = [];
  for (let t3 of e53.geometry) {
    let e54 = [];
    Mf(t3, e54, n2, r2, i2, true), e54.length && a2.push(e54);
  }
  a2.length && t2.push(Xd(e53.id, `MultiPolygon`, a2, e53.tags));
}
function kf(e53, t2, n2, r2, i2) {
  for (let a2 = 0; a2 < e53.length; a2 += 3) {
    let o2 = e53[a2 + i2];
    o2 >= n2 && o2 <= r2 && Nf(t2, e53[a2], e53[a2 + 1], e53[a2 + 2]);
  }
}
function Af(e53, t2, n2, r2, i2, a2, o2) {
  let s2 = jf(e53), c2 = i2 === 0 ? Pf : Ff, l2 = e53.start, u2, d2;
  for (let f3 = 0; f3 < e53.points.length - 3; f3 += 3) {
    let p3 = e53.points[f3], m3 = e53.points[f3 + 1], h3 = e53.points[f3 + 2], g3 = e53.points[f3 + 3], _2 = e53.points[f3 + 4], v2 = i2 === 0 ? p3 : m3, y2 = i2 === 0 ? g3 : _2, b2 = false;
    o2 && (u2 = Math.sqrt((p3 - g3) ** 2 + (m3 - _2) ** 2)), v2 < n2 ? y2 >= n2 && (d2 = c2(s2, p3, m3, g3, _2, n2), o2 && (s2.start = l2 + u2 * d2)) : v2 > r2 ? y2 <= r2 && (d2 = c2(s2, p3, m3, g3, _2, r2), o2 && (s2.start = l2 + u2 * d2)) : Nf(s2.points, p3, m3, h3), y2 < n2 && v2 >= n2 && (d2 = c2(s2, p3, m3, g3, _2, n2), b2 = true), y2 > r2 && v2 <= r2 && (d2 = c2(s2, p3, m3, g3, _2, r2), b2 = true), !a2 && b2 && (o2 && (s2.end = l2 + u2 * d2), t2.push(s2), s2 = jf(e53)), o2 && (l2 += u2);
  }
  let f2 = e53.points.length - 3, p2 = e53.points[f2], m2 = e53.points[f2 + 1], h2 = e53.points[f2 + 2], g2 = i2 === 0 ? p2 : m2;
  g2 >= n2 && g2 <= r2 && Nf(s2.points, p2, m2, h2), f2 = s2.points.length - 3, a2 && f2 >= 3 && (s2.points[f2] !== s2.points[0] || s2.points[f2 + 1] !== s2.points[1]) && Nf(s2.points, s2.points[0], s2.points[1], s2.points[2]), s2.points.length && (Zd(s2), t2.push(s2));
}
function jf(e53) {
  return { points: [], size: e53.size, start: e53.start, end: e53.end };
}
function Mf(e53, t2, n2, r2, i2, a2) {
  for (let o2 of e53) Af(o2, t2, n2, r2, i2, a2, false);
}
function Nf(e53, t2, n2, r2) {
  e53.push(t2, n2, r2);
}
function Pf(e53, t2, n2, r2, i2, a2) {
  let o2 = (a2 - t2) / (r2 - t2);
  return Nf(e53.points, a2, n2 + (i2 - n2) * o2, 1), o2;
}
function Ff(e53, t2, n2, r2, i2, a2) {
  let o2 = (a2 - n2) / (i2 - n2);
  return Nf(e53.points, t2 + (r2 - t2) * o2, a2, 1), o2;
}
function If(e53, t2) {
  if (!t2.wrap) return e53;
  let n2 = t2.buffer / t2.extent, r2 = e53, i2 = Cf(e53, 1, -1 - n2, n2, 0, -1, 2, t2), a2 = Cf(e53, 1, 1 - n2, 2 + n2, 0, -1, 2, t2);
  return !i2 && !a2 || (r2 = Cf(e53, 1, -n2, 1 + n2, 0, -1, 2, t2) || [], i2 && (r2 = Lf(i2, 1).concat(r2)), a2 && (r2 = r2.concat(Lf(a2, -1)))), r2;
}
function Lf(e53, t2) {
  let n2 = [];
  for (let r2 of e53) switch (r2.type) {
    case `Point`:
    case `MultiPoint`: {
      let e54 = Rf(r2.geometry, t2);
      n2.push(Xd(r2.id, r2.type, e54, r2.tags));
      continue;
    }
    case `LineString`: {
      let e54 = zf(r2.geometry, t2);
      n2.push(Xd(r2.id, r2.type, e54, r2.tags));
      continue;
    }
    case `MultiLineString`:
    case `Polygon`: {
      let e54 = [];
      for (let n3 of r2.geometry) e54.push(zf(n3, t2));
      n2.push(Xd(r2.id, r2.type, e54, r2.tags));
      continue;
    }
    case `MultiPolygon`: {
      let e54 = [];
      for (let n3 of r2.geometry) {
        let r3 = [];
        for (let e55 of n3) r3.push(zf(e55, t2));
        e54.push(r3);
      }
      n2.push(Xd(r2.id, r2.type, e54, r2.tags));
      continue;
    }
  }
  return n2;
}
function Rf(e53, t2) {
  let n2 = [];
  for (let r2 = 0; r2 < e53.length; r2 += 3) n2.push(e53[r2] + t2, e53[r2 + 1], e53[r2 + 2]);
  return n2;
}
function zf(e53, t2) {
  let n2 = { points: [], size: e53.size };
  e53.start !== void 0 && (n2.start = e53.start, n2.end = e53.end);
  for (let r2 = 0; r2 < e53.points.length; r2 += 3) n2.points.push(e53.points[r2] + t2, e53.points[r2 + 1], e53.points[r2 + 2]);
  return Zd(n2), n2;
}
function Bf(e53, t2, n2, r2) {
  let i2 = Kf(t2, n2), a2 = [];
  if (i2.removeAll && (a2 = e53, e53 = [], r2?.clear()), i2.remove.size || i2.add.size) {
    for (let e54 of i2.remove) r2?.delete(e54);
    let t3 = [];
    for (let n3 of e53) (i2.remove.has(n3.id) || i2.add.has(n3.id)) && t3.push(n3);
    if (t3.length) {
      a2 = a2.concat(t3);
      let n3 = new Set(t3.map((e54) => e54.id));
      e53 = e53.filter((e54) => !n3.has(e54.id));
    }
    if (i2.add.size) {
      let t4 = af({ type: `FeatureCollection`, features: Array.from(i2.add.values()) }, n2, r2);
      t4 = If(t4, n2), a2 = a2.concat(t4), e53 = e53.concat(t4);
    }
  }
  if (i2.update.size) {
    let t3 = /* @__PURE__ */ new Map(), o2 = [];
    for (let n3 of e53) i2.update.has(n3.id) ? t3.set(n3.id, [...t3.get(n3.id) || [], n3]) : o2.push(n3);
    for (let [e54, s2] of i2.update) {
      let i3 = t3.get(e54);
      if (!i3 || i3.length === 0) {
        if (!r2?.has(e54)) continue;
        let t4 = Hf(e54, s2, n2, r2);
        a2 = a2.concat(t4), o2 = o2.concat(t4);
        continue;
      }
      let c2 = Vf(i3, s2, n2, r2);
      a2 = a2.concat(i3, c2), o2 = o2.concat(c2);
    }
    e53 = o2;
  }
  return { affected: a2, source: e53 };
}
function Vf(e53, t2, n2, r2) {
  let i2 = !!t2.newGeometry, a2 = Wf(t2);
  if (i2) {
    let i3 = e53[0], o2 = a2 ? Gf(i3.tags, t2) : i3.tags;
    return Uf(i3.id, t2.newGeometry, o2, n2, r2);
  }
  if (a2) {
    let n3 = [];
    for (let r3 of e53) {
      let e54 = { ...r3 };
      e54.tags = Gf(e54.tags, t2), n3.push(e54);
    }
    return n3;
  }
  return e53;
}
function Hf(e53, t2, n2, r2) {
  let i2 = r2.get(e53), a2 = Wf(t2) ? Gf(i2.properties, t2) : i2.properties;
  return t2.newGeometry ? Uf(e53, t2.newGeometry, a2, n2, r2) : (r2.set(e53, { ...i2, properties: a2 }), []);
}
function Uf(e53, t2, n2, r2, i2) {
  return If(af({ type: `FeatureCollection`, features: [{ type: `Feature`, id: e53, geometry: t2, properties: n2 }] }, { ...r2, promoteId: void 0, generateId: false }, i2), r2);
}
function Wf(e53) {
  return e53.removeAllProperties || e53.removeProperties?.length > 0 || e53.addOrUpdateProperties?.length > 0;
}
function Gf(e53, t2) {
  if (t2.removeAllProperties) return {};
  let n2 = { ...e53 || {} };
  if (t2.removeProperties) for (let e54 of t2.removeProperties) delete n2[e54];
  if (t2.addOrUpdateProperties) for (let { key: e54, value: r2 } of t2.addOrUpdateProperties) n2[e54] = r2;
  return n2;
}
function Kf(e53, t2) {
  return e53 ? { removeAll: e53.removeAll, remove: new Set(e53.remove || []), add: new Map(e53.add?.map((e54) => [t2.promoteId ? e54.properties?.[t2.promoteId] : e54.id, e54])), update: new Map(e53.update?.map((e54) => [e54.id, e54])) } : { remove: /* @__PURE__ */ new Set(), add: /* @__PURE__ */ new Map(), update: /* @__PURE__ */ new Map() };
}
var qf = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
var Jf = /* @__PURE__ */ new Uint32Array(96);
var Yf = class e47 {
  static from(t2) {
    if (!t2 || t2.byteLength === void 0 || t2.buffer) throw Error(`Data must be an instance of ArrayBuffer or SharedArrayBuffer.`);
    let [n2, r2] = new Uint8Array(t2, 0, 2);
    if (n2 !== 219) throw Error(`Data does not appear to be in a KDBush format.`);
    let i2 = r2 >> 4;
    if (i2 !== 1) throw Error(`Got v${i2} data when expected v1.`);
    let a2 = qf[r2 & 15];
    if (!a2) throw Error(`Unrecognized array type.`);
    let [o2] = new Uint16Array(t2, 2, 1), [s2] = new Uint32Array(t2, 4, 1);
    return new e47(s2, o2, a2, void 0, t2);
  }
  constructor(e53, t2 = 64, n2 = Float64Array, r2 = ArrayBuffer, i2) {
    if (isNaN(e53) || e53 < 0) throw Error(`Unexpected numItems value: ${e53}.`);
    this.numItems = +e53, this.nodeSize = Math.min(Math.max(+t2, 2), 65535), this.ArrayType = n2, this.IndexArrayType = e53 < 65536 ? Uint16Array : Uint32Array;
    let a2 = qf.indexOf(this.ArrayType), o2 = e53 * 2 * this.ArrayType.BYTES_PER_ELEMENT, s2 = e53 * this.IndexArrayType.BYTES_PER_ELEMENT, c2 = (8 - s2 % 8) % 8;
    if (a2 < 0) throw Error(`Unexpected typed array class: ${n2}.`);
    if (i2) this.data = i2, this.ids = new this.IndexArrayType(i2, 8, e53), this.coords = new n2(i2, 8 + s2 + c2, e53 * 2), this._pos = e53 * 2, this._finished = true;
    else {
      let i3 = this.data = new r2(8 + o2 + s2 + c2);
      this.ids = new this.IndexArrayType(i3, 8, e53), this.coords = new n2(i3, 8 + s2 + c2, e53 * 2), this._pos = 0, this._finished = false, new Uint8Array(i3, 0, 2).set([219, 16 + a2]), new Uint16Array(i3, 2, 1)[0] = t2, new Uint32Array(i3, 4, 1)[0] = e53;
    }
  }
  add(e53, t2) {
    let n2 = this._pos >> 1;
    return this.ids[n2] = n2, this.coords[this._pos++] = e53, this.coords[this._pos++] = t2, n2;
  }
  finish() {
    let e53 = this._pos >> 1;
    if (e53 !== this.numItems) throw Error(`Added ${e53} items when expected ${this.numItems}.`);
    return Xf(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = true, this;
  }
  range(e53, t2, n2, r2) {
    if (!this._finished) throw Error(`Data not yet indexed - call index.finish().`);
    let { ids: i2, coords: a2, nodeSize: o2 } = this;
    Jf[0] = 0, Jf[1] = i2.length - 1, Jf[2] = 0;
    let s2 = 3, c2 = [];
    for (; s2 > 0; ) {
      let l2 = Jf[--s2], u2 = Jf[--s2], d2 = Jf[--s2];
      if (u2 - d2 <= o2) {
        for (let o3 = d2; o3 <= u2; o3++) {
          let s3 = a2[2 * o3], l3 = a2[2 * o3 + 1];
          s3 >= e53 && s3 <= n2 && l3 >= t2 && l3 <= r2 && c2.push(i2[o3]);
        }
        continue;
      }
      let f2 = d2 + u2 >> 1, p2 = a2[2 * f2], m2 = a2[2 * f2 + 1];
      p2 >= e53 && p2 <= n2 && m2 >= t2 && m2 <= r2 && c2.push(i2[f2]), (l2 === 0 ? e53 <= p2 : t2 <= m2) && (Jf[s2++] = d2, Jf[s2++] = f2 - 1, Jf[s2++] = 1 - l2), (l2 === 0 ? n2 >= p2 : r2 >= m2) && (Jf[s2++] = f2 + 1, Jf[s2++] = u2, Jf[s2++] = 1 - l2);
    }
    return c2;
  }
  within(e53, t2, n2) {
    let r2 = [];
    return this.withinInto(e53, t2, n2, r2), r2;
  }
  withinInto(e53, t2, n2, r2) {
    if (!this._finished) throw Error(`Data not yet indexed - call index.finish().`);
    let { ids: i2, coords: a2, nodeSize: o2 } = this;
    Jf[0] = 0, Jf[1] = i2.length - 1, Jf[2] = 0;
    let s2 = 3, c2 = 0, l2 = n2 * n2;
    for (; s2 > 0; ) {
      let u2 = Jf[--s2], d2 = Jf[--s2], f2 = Jf[--s2];
      if (d2 - f2 <= o2) {
        for (let n3 = f2; n3 <= d2; n3++) ep(a2[2 * n3], a2[2 * n3 + 1], e53, t2) <= l2 && (r2[c2++] = i2[n3]);
        continue;
      }
      let p2 = f2 + d2 >> 1, m2 = a2[2 * p2], h2 = a2[2 * p2 + 1];
      ep(m2, h2, e53, t2) <= l2 && (r2[c2++] = i2[p2]), (u2 === 0 ? e53 - n2 <= m2 : t2 - n2 <= h2) && (Jf[s2++] = f2, Jf[s2++] = p2 - 1, Jf[s2++] = 1 - u2), (u2 === 0 ? e53 + n2 >= m2 : t2 + n2 >= h2) && (Jf[s2++] = p2 + 1, Jf[s2++] = d2, Jf[s2++] = 1 - u2);
    }
    return c2;
  }
};
function Xf(e53, t2, n2, r2, i2, a2) {
  if (i2 - r2 <= n2) return;
  let o2 = r2 + i2 >> 1;
  Zf(e53, t2, o2, r2, i2, a2), Xf(e53, t2, n2, r2, o2 - 1, 1 - a2), Xf(e53, t2, n2, o2 + 1, i2, 1 - a2);
}
function Zf(e53, t2, n2, r2, i2, a2) {
  for (; i2 > r2; ) {
    if (i2 - r2 > 600) {
      let o3 = i2 - r2 + 1, s3 = n2 - r2 + 1, c3 = Math.log(o3), l2 = 0.5 * Math.exp(2 * c3 / 3), u2 = 0.5 * Math.sqrt(c3 * l2 * (o3 - l2) / o3) * (s3 - o3 / 2 < 0 ? -1 : 1);
      Zf(e53, t2, n2, Math.max(r2, Math.floor(n2 - s3 * l2 / o3 + u2)), Math.min(i2, Math.floor(n2 + (o3 - s3) * l2 / o3 + u2)), a2);
    }
    let o2 = t2[2 * n2 + a2], s2 = r2, c2 = i2;
    for (Qf(e53, t2, r2, n2), t2[2 * i2 + a2] > o2 && Qf(e53, t2, r2, i2); s2 < c2; ) {
      for (Qf(e53, t2, s2, c2), s2++, c2--; t2[2 * s2 + a2] < o2; ) s2++;
      for (; t2[2 * c2 + a2] > o2; ) c2--;
    }
    t2[2 * r2 + a2] === o2 ? Qf(e53, t2, r2, c2) : (c2++, Qf(e53, t2, c2, i2)), c2 <= n2 && (r2 = c2 + 1), n2 <= c2 && (i2 = c2 - 1);
  }
}
function Qf(e53, t2, n2, r2) {
  $f(e53, n2, r2), $f(t2, 2 * n2, 2 * r2), $f(t2, 2 * n2 + 1, 2 * r2 + 1);
}
function $f(e53, t2, n2) {
  let r2 = e53[t2];
  e53[t2] = e53[n2], e53[n2] = r2;
}
function ep(e53, t2, n2, r2) {
  let i2 = e53 - n2, a2 = t2 - r2;
  return i2 * i2 + a2 * a2;
}
var tp = { minZoom: 0, maxZoom: 16, minPoints: 2, radius: 40, extent: 512, nodeSize: 64, log: false, generateId: false, reduce: null, map: (e53) => e53, coordinates: `lngLat`, wrap: true };
var np = 1073741824;
function rp(e53) {
  return (e53 - 0.5) * np;
}
function ip(e53) {
  return e53 / np + 0.5;
}
function ap(e53) {
  return Math.abs(rp(e53)) < 2147483647;
}
var op = class {
  constructor(e53) {
    this.options = sp(e53), this.worldCoordinateHelper = rf(this.options.coordinates), this.trees = Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 5 : 4, this.clusterProps = [], this.points = [];
  }
  load(e53) {
    let t2 = [];
    for (let n2 of e53) {
      if (!n2.geometry) continue;
      let e54 = n2.geometry.type === `MultiPoint` ? n2.geometry.coordinates : [n2.geometry.coordinates];
      for (let [r2, i2] of e54) {
        let [e55, a2] = [this.worldCoordinateHelper.projectX(r2), this.worldCoordinateHelper.projectY(i2)];
        if (!this.options.wrap && !dp([e55, a2])) continue;
        let o2 = { id: n2.id, type: `Point`, geometry: [e55, a2], tags: n2.properties };
        t2.push(o2);
      }
    }
    this.createIndex(t2);
  }
  initialize(e53) {
    let t2 = [];
    for (let n2 of e53) if (n2.type === `Point`) {
      if (!this.options.wrap && !dp(n2.geometry)) continue;
      t2.push(n2);
    } else if (n2.type === `MultiPoint`) for (let e54 = 0; e54 < n2.geometry.length; e54 += 3) {
      let r2 = [n2.geometry[e54], n2.geometry[e54 + 1]];
      (this.options.wrap || dp(r2)) && t2.push({ id: n2.id, type: `Point`, geometry: r2, tags: n2.tags });
    }
    this.createIndex(t2);
  }
  updateIndex(e53, t2, n2) {
    this.options = sp({ ...n2.clusterOptions, coordinates: this.options.coordinates, wrap: this.options.wrap }), this.initialize(e53);
  }
  createIndex(e53) {
    let { log: t2, minZoom: n2, maxZoom: r2 } = this.options;
    this.trees = Array(r2 + 1), this.stride = this.options.reduce ? 5 : 4, this.clusterProps = [], t2 && console.time(`total time`);
    let i2 = `prepare ${e53.length} points`;
    t2 && console.time(i2), this.points = e53;
    let a2 = this.stride, o2 = r2 + 1, s2 = new Int32Array(e53.length * 2), c2 = new Int32Array(e53.length * a2), l2 = 0;
    for (let t3 = 0; t3 < e53.length; t3++) {
      let n3 = e53[t3];
      if (!n3?.geometry || !ap(n3.geometry[0]) || !ap(n3.geometry[1])) continue;
      s2[l2 * 2] = Math.round(rp(n3.geometry[0])), s2[l2 * 2 + 1] = Math.round(rp(n3.geometry[1]));
      let r3 = l2 * a2;
      c2[r3 + 0] = o2, c2[r3 + 1] = t3, c2[r3 + 2] = -1, c2[r3 + 3] = 1, l2++;
    }
    let u2 = this.trees[r2 + 1] = this.createTree(s2, c2, l2);
    t2 && console.timeEnd(i2);
    let d2 = new Int32Array(l2 * 2), f2 = new Int32Array(l2 * a2);
    for (let e54 = r2; e54 >= n2; e54--) {
      let n3 = Date.now(), r3 = this.cluster(u2, e54, d2, f2);
      this.isSameAsTree(u2, f2, r3) || (u2 = this.createTree(d2.slice(0, r3 * 2), f2.slice(0, r3 * a2), r3)), this.trees[e54] = u2, t2 && console.log(`z%d: %d clusters in %dms`, e54, u2.numItems, Date.now() - n3);
    }
    t2 && console.timeEnd(`total time`);
  }
  getClusters(e53, t2) {
    return (this.options.wrap ? this.options.coordinates === `unitSquare` ? this.getClustersAcrossEdge(e53, t2) : this.getClustersInternal(e53, t2) : this.getClustersInWorld(e53, t2)).map((e54) => yf(e54, this.worldCoordinateHelper));
  }
  getClustersInWorld(e53, t2) {
    let n2 = this.options.coordinates !== `unitSquare`, r2 = this.worldCoordinateHelper.projectY(n2 ? Math.max(-90, Math.min(90, e53[1])) : e53[1]), i2 = this.worldCoordinateHelper.projectY(n2 ? Math.max(-90, Math.min(90, e53[3])) : e53[3]), a2 = Math.max(0, this.worldCoordinateHelper.projectX(e53[0])), o2 = Math.min(1, this.worldCoordinateHelper.projectX(e53[2]));
    return a2 > o2 ? [] : this.getClustersInRange([a2, Math.min(r2, i2), o2, Math.max(r2, i2)], t2);
  }
  getClustersAcrossEdge([e53, t2, n2, r2], i2) {
    if (n2 < e53 && (n2 += 1), n2 - e53 >= 1) return this.getClustersInRange([0, t2, 1, r2], i2);
    let a2 = Math.floor(e53), o2 = e53 - a2, s2 = n2 - a2;
    return s2 <= 1 ? this.getClustersInRange([o2, t2, s2, r2], i2) : this.getClustersInRange([o2, t2, 1, r2], i2).concat(this.getClustersInRange([0, t2, s2 - 1, r2], i2));
  }
  getClustersInternal(e53, t2) {
    let n2 = ((e53[0] + 180) % 360 + 360) % 360 - 180, r2 = Math.max(-90, Math.min(90, e53[1])), i2 = e53[2] === 180 ? 180 : ((e53[2] + 180) % 360 + 360) % 360 - 180, a2 = Math.max(-90, Math.min(90, e53[3]));
    if (e53[2] - e53[0] >= 360) n2 = -180, i2 = 180;
    else if (n2 > i2) {
      let e54 = this.getClustersInternal([n2, r2, 180, a2], t2), o2 = this.getClustersInternal([-180, r2, i2, a2], t2);
      return e54.concat(o2);
    }
    return this.getClustersInRange([this.worldCoordinateHelper.projectX(n2), this.worldCoordinateHelper.projectY(a2), this.worldCoordinateHelper.projectX(i2), this.worldCoordinateHelper.projectY(r2)], t2);
  }
  getClustersInRange([e53, t2, n2, r2], i2) {
    let a2 = this.trees[this.limitZoom(i2)], o2 = a2.range(rp(e53), rp(t2), rp(n2), rp(r2)), s2 = a2.flatCoords, c2 = a2.flatData, l2 = [];
    for (let e54 of o2) {
      let t3 = this.stride * e54;
      l2.push(c2[t3 + 3] > 1 ? cp(s2, e54, c2, t3, this.clusterProps) : this.points[c2[t3 + 1]]);
    }
    return l2;
  }
  getChildren(e53) {
    let t2 = this.getOriginId(e53), n2 = this.getOriginZoom(e53), r2 = /* @__PURE__ */ Error(`No cluster with the specified id: ` + e53), i2 = this.trees[n2];
    if (!i2) throw r2;
    let a2 = i2.flatCoords, o2 = i2.flatData;
    if (t2 >= i2.numItems) throw r2;
    let s2 = this.options.radius / (this.options.extent * 2 ** (n2 - 1)) * np, c2 = a2[t2 * 2], l2 = a2[t2 * 2 + 1], u2 = i2.within(c2, l2, s2), d2 = [];
    for (let t3 of u2) {
      let n3 = t3 * this.stride;
      o2[n3 + 2] === e53 && d2.push(o2[n3 + 3] > 1 ? lp(a2, t3, o2, n3, this.clusterProps, this.worldCoordinateHelper) : yf(this.points[o2[n3 + 1]], this.worldCoordinateHelper));
    }
    if (d2.length === 0) throw r2;
    return d2;
  }
  getLeaves(e53, t2, n2) {
    t2 ||= 10, n2 ||= 0;
    let r2 = [];
    return this.appendLeaves(r2, e53, t2, n2, 0), r2;
  }
  getTile(e53, t2, n2) {
    let r2 = this.trees[this.limitZoom(e53)];
    if (!r2) return null;
    let i2 = 2 ** e53;
    if (!this.options.wrap && (t2 < 0 || t2 >= i2 || n2 < 0 || n2 >= i2)) return null;
    let { extent: a2, radius: o2 } = this.options, s2 = o2 / a2, c2 = rp((n2 - s2) / i2), l2 = rp((n2 + 1 + s2) / i2), u2 = { transformed: true, features: [], source: null, x: t2, y: n2, z: e53 };
    return this.addTileFeatures(r2.range(rp((t2 - s2) / i2), c2, rp((t2 + 1 + s2) / i2), l2), r2, t2, n2, i2, u2), this.options.wrap && t2 === 0 && this.addTileFeatures(r2.range(rp(1 - s2 / i2), c2, rp(1), l2), r2, i2, n2, i2, u2), this.options.wrap && t2 === i2 - 1 && this.addTileFeatures(r2.range(rp(0), c2, rp(s2 / i2), l2), r2, -1, n2, i2, u2), u2;
  }
  getClusterExpansionZoom(e53) {
    return this.getOriginZoom(e53);
  }
  appendLeaves(e53, t2, n2, r2, i2) {
    let a2 = this.getChildren(t2);
    for (let t3 of a2) {
      let a3 = t3.properties;
      if (a3?.cluster ? i2 + a3.point_count <= r2 ? i2 += a3.point_count : i2 = this.appendLeaves(e53, a3.cluster_id, n2, r2, i2) : i2 < r2 ? i2++ : e53.push(t3), e53.length === n2) break;
    }
    return i2;
  }
  createTree(e53, t2, n2) {
    let r2 = new Yf(n2, this.options.nodeSize, Int32Array);
    for (let t3 = 0; t3 < n2; t3++) r2.add(e53[t3 * 2], e53[t3 * 2 + 1]);
    return r2.finish(), r2.flatCoords = e53, r2.flatData = t2, r2.data = null, r2;
  }
  isSameAsTree(e53, t2, n2) {
    if (n2 !== e53.numItems) return false;
    let r2 = e53.flatData;
    for (let e54 = 1; e54 < n2 * this.stride; e54 += this.stride) if (t2[e54] !== r2[e54]) return false;
    return true;
  }
  addTileFeatures(e53, t2, n2, r2, i2, a2) {
    let o2 = t2.flatCoords, s2 = t2.flatData;
    for (let t3 of e53) {
      let e54 = t3 * this.stride, c2 = s2[e54 + 3] > 1, l2, u2, d2;
      if (c2) l2 = up(s2, e54, this.clusterProps), u2 = ip(o2[t3 * 2]), d2 = ip(o2[t3 * 2 + 1]);
      else {
        let t4 = this.points[s2[e54 + 1]];
        l2 = t4.tags, [u2, d2] = t4.geometry;
      }
      let f2 = { type: 1, geometry: [[Math.round(this.options.extent * (u2 * i2 - n2)), Math.round(this.options.extent * (d2 * i2 - r2))]], tags: l2 }, p2;
      p2 = c2 || this.options.generateId ? s2[e54 + 1] : this.points[s2[e54 + 1]].id, p2 !== void 0 && (f2.id = p2), a2.features.push(f2);
    }
  }
  limitZoom(e53) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+e53), this.options.maxZoom + 1));
  }
  cluster(e53, t2, n2, r2) {
    let { radius: i2, extent: a2, reduce: o2, minPoints: s2, maxZoom: c2 } = this.options, l2 = i2 / (a2 * 2 ** t2) * np, u2 = c2 + 1, d2 = e53.flatCoords, f2 = e53.flatData, p2 = this.stride, m2 = new Uint32Array(e53.numItems), h2 = 0;
    for (let i3 = 0; i3 < e53.numItems; i3++) {
      let a3 = i3 * p2;
      if (f2[a3 + 0] <= t2) continue;
      f2[a3 + 0] = t2;
      let c3 = d2[i3 * 2], g2 = d2[i3 * 2 + 1], _2 = e53.withinInto(c3, g2, l2, m2), v2 = f2[a3 + 3], y2 = v2;
      for (let e54 = 0; e54 < _2; e54++) {
        let n3 = m2[e54] * p2;
        f2[n3 + 0] > t2 && (y2 += f2[n3 + 3]);
      }
      if (y2 > v2 && y2 >= s2) {
        let e54 = c3 * v2, s3 = g2 * v2, l3, b2 = -1, x2 = (i3 << 5) + (t2 + 1) + this.points.length;
        for (let n3 = 0; n3 < _2; n3++) {
          let r3 = m2[n3], i4 = r3 * p2;
          if (f2[i4 + 0] <= t2) continue;
          f2[i4 + 0] = t2;
          let c4 = f2[i4 + 3];
          e54 += d2[r3 * 2] * c4, s3 += d2[r3 * 2 + 1] * c4, f2[i4 + 2] = x2, o2 && (l3 || (l3 = this.map(f2, a3, true), b2 = this.clusterProps.length, this.clusterProps.push(l3)), o2(l3, this.map(f2, i4)));
        }
        f2[a3 + 2] = x2, n2[h2 * 2] = Math.round(e54 / y2), n2[h2 * 2 + 1] = Math.round(s3 / y2);
        let S2 = h2 * p2;
        r2[S2 + 0] = u2, r2[S2 + 1] = x2, r2[S2 + 2] = -1, r2[S2 + 3] = y2, o2 && (r2[S2 + 4] = b2), h2++;
      } else {
        n2[h2 * 2] = c3, n2[h2 * 2 + 1] = g2;
        for (let e54 = 0; e54 < p2; e54++) r2[h2 * p2 + e54] = f2[a3 + e54];
        if (h2++, y2 > 1) for (let e54 = 0; e54 < _2; e54++) {
          let i4 = m2[e54], a4 = i4 * p2;
          if (!(f2[a4 + 0] <= t2)) {
            f2[a4 + 0] = t2, n2[h2 * 2] = d2[i4 * 2], n2[h2 * 2 + 1] = d2[i4 * 2 + 1];
            for (let e55 = 0; e55 < p2; e55++) r2[h2 * p2 + e55] = f2[a4 + e55];
            h2++;
          }
        }
      }
    }
    return h2;
  }
  getOriginId(e53) {
    return e53 - this.points.length >> 5;
  }
  getOriginZoom(e53) {
    return (e53 - this.points.length) % 32;
  }
  map(e53, t2, n2) {
    if (e53[t2 + 3] > 1) {
      let r3 = this.clusterProps[e53[t2 + 4]];
      return n2 ? Object.assign({}, r3) : r3;
    }
    let r2 = this.points[e53[t2 + 1]].tags, i2 = this.options.map(r2);
    return n2 && i2 === r2 ? Object.assign({}, i2) : i2;
  }
};
function sp(e53) {
  let t2 = Object.assign(Object.create(tp), e53);
  return t2.minZoom = Math.min(t2.minZoom, 30), t2.maxZoom = Math.min(t2.maxZoom, 30), t2;
}
function cp(e53, t2, n2, r2, i2) {
  return { id: n2[r2 + 1], type: `Point`, tags: up(n2, r2, i2), geometry: [ip(e53[t2 * 2]), ip(e53[t2 * 2 + 1])] };
}
function lp(e53, t2, n2, r2, i2, a2) {
  return { type: `Feature`, id: n2[r2 + 1], properties: up(n2, r2, i2), geometry: { type: `Point`, coordinates: [a2.unprojectX(ip(e53[t2 * 2])), a2.unprojectY(ip(e53[t2 * 2 + 1]))] } };
}
function up(e53, t2, n2) {
  let r2 = e53[t2 + 3], i2 = r2 >= 1e4 ? `${Math.round(r2 / 1e3)}k` : r2 >= 1e3 ? `${Math.round(r2 / 100) / 10}k` : r2, a2 = e53[t2 + 4], o2 = a2 === -1 ? {} : Object.assign({}, n2[a2]);
  return Object.assign(o2, { cluster: true, cluster_id: e53[t2 + 1], point_count: r2, point_count_abbreviated: i2 });
}
function dp(e53) {
  return e53[0] >= 0 && e53[0] <= 1 && e53[1] >= 0 && e53[1] <= 1;
}
var fp = `geojsonvt_clip_start`;
var pp = `geojsonvt_clip_end`;
function mp(e53, t2, n2, r2, i2) {
  let a2 = t2 === i2.maxZoom ? 0 : i2.tolerance / ((1 << t2) * i2.extent), o2 = { transformed: false, features: [], source: null, x: n2, y: r2, z: t2, minX: 2, minY: 1, maxX: -1, maxY: 0, numPoints: 0, numSimplified: 0, numFeatures: e53.length };
  for (let t3 of e53) hp(o2, t3, a2, i2);
  return o2;
}
function hp(e53, t2, n2, r2) {
  switch (e53.minX = Math.min(e53.minX, t2.minX), e53.minY = Math.min(e53.minY, t2.minY), e53.maxX = Math.max(e53.maxX, t2.maxX), e53.maxY = Math.max(e53.maxY, t2.maxY), t2.type) {
    case `Point`:
    case `MultiPoint`:
      gp(e53, t2);
      return;
    case `LineString`:
      _p(e53, t2, n2, r2);
      return;
    case `MultiLineString`:
    case `Polygon`:
      vp(e53, t2, n2);
      return;
    case `MultiPolygon`:
      yp(e53, t2, n2);
      return;
  }
}
function gp(e53, t2) {
  let n2 = [];
  for (let r3 = 0; r3 < t2.geometry.length; r3 += 3) n2.push(t2.geometry[r3], t2.geometry[r3 + 1]), e53.numPoints++, e53.numSimplified++;
  if (!n2.length) return;
  let r2 = { type: 1, tags: t2.tags || null, geometry: n2 };
  t2.id !== null && (r2.id = t2.id), e53.features.push(r2);
}
function _p(e53, t2, n2, r2) {
  let i2 = [];
  if (bp(i2, t2.geometry, e53, n2, false, false), !i2.length) return;
  let a2 = t2.tags || null;
  if (r2.lineMetrics) {
    a2 = {};
    for (let e54 in t2.tags) a2[e54] = t2.tags[e54];
    a2[fp] = t2.geometry.start / t2.geometry.size, a2[pp] = t2.geometry.end / t2.geometry.size;
  }
  let o2 = { type: 2, tags: a2, geometry: i2 };
  t2.id !== null && (o2.id = t2.id), e53.features.push(o2);
}
function vp(e53, t2, n2) {
  let r2 = [];
  for (let i3 = 0; i3 < t2.geometry.length; i3++) bp(r2, t2.geometry[i3], e53, n2, t2.type === `Polygon`, i3 === 0);
  if (!r2.length) return;
  let i2 = { type: t2.type === `Polygon` ? 3 : 2, tags: t2.tags || null, geometry: r2 };
  t2.id !== null && (i2.id = t2.id), e53.features.push(i2);
}
function yp(e53, t2, n2) {
  let r2 = [];
  for (let i3 = 0; i3 < t2.geometry.length; i3++) {
    let a2 = t2.geometry[i3];
    for (let t3 = 0; t3 < a2.length; t3++) bp(r2, a2[t3], e53, n2, true, t3 === 0);
  }
  if (!r2.length) return;
  let i2 = { type: 3, tags: t2.tags || null, geometry: r2 };
  t2.id !== null && (i2.id = t2.id), e53.features.push(i2);
}
function bp(e53, t2, n2, r2, i2, a2) {
  let o2 = r2 * r2;
  if (r2 > 0 && t2.size < (i2 ? o2 : r2)) {
    n2.numPoints += t2.points.length / 3;
    return;
  }
  let s2 = [];
  for (let e54 = 0; e54 < t2.points.length; e54 += 3) (r2 === 0 || t2.points[e54 + 2] > o2) && (n2.numSimplified++, s2.push(t2.points[e54], t2.points[e54 + 1])), n2.numPoints++;
  i2 && xp(s2, a2), e53.push(s2);
}
function xp(e53, t2) {
  let n2 = 0;
  for (let t3 = 0, r2 = e53.length, i2 = r2 - 2; t3 < r2; i2 = t3, t3 += 2) n2 += (e53[t3] - e53[i2]) * (e53[t3 + 1] + e53[i2 + 1]);
  if (n2 > 0 === t2) for (let t3 = 0, n3 = e53.length; t3 < n3 / 2; t3 += 2) {
    let r2 = e53[t3], i2 = e53[t3 + 1];
    e53[t3] = e53[n3 - 2 - t3], e53[t3 + 1] = e53[n3 - 1 - t3], e53[n3 - 2 - t3] = r2, e53[n3 - 1 - t3] = i2;
  }
}
function Sp(e53, t2) {
  if (e53.transformed) return e53;
  let n2 = 1 << e53.z, r2 = e53.x, i2 = e53.y;
  for (let a2 of e53.features) a2.type === 1 ? Cp(a2, t2, n2, r2, i2) : wp(a2, t2, n2, r2, i2);
  return e53.transformed = true, e53;
}
function Cp(e53, t2, n2, r2, i2) {
  let a2 = e53, o2 = e53.geometry, s2 = [];
  for (let e54 = 0; e54 < o2.length; e54 += 2) s2.push(Tp(o2[e54], o2[e54 + 1], t2, n2, r2, i2));
  return a2.geometry = s2, a2;
}
function wp(e53, t2, n2, r2, i2) {
  let a2 = e53, o2 = e53.geometry, s2 = [];
  for (let e54 of o2) {
    let a3 = [];
    for (let o3 = 0; o3 < e54.length; o3 += 2) a3.push(Tp(e54[o3], e54[o3 + 1], t2, n2, r2, i2));
    s2.push(a3);
  }
  return a2.geometry = s2, a2;
}
function Tp(e53, t2, n2, r2, i2, a2) {
  return [Math.round(n2 * (e53 * r2 - i2)), Math.round(n2 * (t2 * r2 - a2))];
}
var Ep = class {
  constructor(e53) {
    this.options = e53, this.total = 0, this.stats = {}, this.tiles = {}, this.tileCoords = [], this.stats = {}, this.total = 0;
  }
  initialize(e53) {
    this.splitTile(this.clipToWorld(e53), 0, 0, 0), this.options.debug && (e53.length && console.log(`features: %d, points: %d`, this.tiles[0].numFeatures, this.tiles[0].numPoints), console.timeEnd(`generate tiles`), console.log(`tiles generated:`, this.total, JSON.stringify(this.stats)));
  }
  updateIndex(e53, t2, n2) {
    n2.debug > 1 && (console.log(`invalidating tiles`), console.time(`invalidating`)), this.invalidateTiles(t2), n2.debug > 1 && console.timeEnd(`invalidating`);
    let [r2, i2, a2] = [0, 0, 0], o2 = this.clipToWorld(e53), s2 = mp(o2, r2, i2, a2, n2);
    s2.source = o2;
    let c2 = Dp(r2, i2, a2);
    if (this.tiles[c2] = s2, this.tileCoords.push({ z: r2, x: i2, y: a2, id: c2 }), n2.debug) {
      let e54 = `z${r2}`;
      this.stats[e54] = (this.stats[e54] || 0) + 1, this.total++;
    }
  }
  getClusterExpansionZoom(e53) {
    return null;
  }
  getChildren(e53) {
    return null;
  }
  getLeaves(e53, t2, n2) {
    return null;
  }
  getTile(e53, t2, n2) {
    let { extent: r2, debug: i2 } = this.options, a2 = 1 << e53;
    if (!this.options.wrap && (t2 < 0 || t2 >= a2)) return null;
    t2 = t2 + a2 & a2 - 1;
    let o2 = Dp(e53, t2, n2);
    if (this.tiles[o2]) return Sp(this.tiles[o2], r2);
    i2 > 1 && console.log(`drilling down to z%d-%d-%d`, e53, t2, n2);
    let s2 = e53, c2 = t2, l2 = n2, u2;
    for (; !u2 && s2 > 0; ) s2--, c2 >>= 1, l2 >>= 1, u2 = this.tiles[Dp(s2, c2, l2)];
    return !u2?.source || (i2 > 1 && (console.log(`found parent tile z%d-%d-%d`, s2, c2, l2), console.time(`drilling down`)), this.splitTile(u2.source, s2, c2, l2, e53, t2, n2), i2 > 1 && console.timeEnd(`drilling down`), !this.tiles[o2]) ? null : Sp(this.tiles[o2], r2);
  }
  clipToWorld(e53) {
    let { wrap: t2, coordinates: n2 } = this.options;
    if (t2 && n2 !== `unitSquare`) return e53;
    let r2 = this.options.buffer / this.options.extent;
    return Cf(t2 ? e53 : Cf(e53, 1, -r2, 1 + r2, 0, -1 / 0, 1 / 0, this.options) || [], 1, -r2, 1 + r2, 1, -1 / 0, 1 / 0, this.options) || [];
  }
  splitTile(e53, t2, n2, r2, i2, a2, o2) {
    let s2 = [e53, t2, n2, r2], c2 = this.options, l2 = c2.debug;
    for (; s2.length; ) {
      r2 = s2.pop(), n2 = s2.pop(), t2 = s2.pop(), e53 = s2.pop();
      let u2 = 1 << t2, d2 = Dp(t2, n2, r2), f2 = this.tiles[d2];
      if (!f2 && (l2 > 1 && console.time(`creation`), f2 = this.tiles[d2] = mp(e53, t2, n2, r2, c2), this.tileCoords.push({ z: t2, x: n2, y: r2, id: d2 }), l2)) {
        l2 > 1 && (console.log(`tile z%d-%d-%d (features: %d, points: %d, simplified: %d)`, t2, n2, r2, f2.numFeatures, f2.numPoints, f2.numSimplified), console.timeEnd(`creation`));
        let e54 = `z${t2}`;
        this.stats[e54] = (this.stats[e54] || 0) + 1, this.total++;
      }
      if (f2.source = e53, i2 == null) {
        if (t2 === c2.indexMaxZoom || f2.numPoints <= c2.indexMaxPoints) continue;
      } else if (t2 === c2.maxZoom || t2 === i2) continue;
      else if (i2 != null) {
        let e54 = i2 - t2;
        if (n2 !== a2 >> e54 || r2 !== o2 >> e54) continue;
      }
      if (f2.source = null, !e53.length) continue;
      l2 > 1 && console.time(`clipping`);
      let p2 = 0.5 * c2.buffer / c2.extent, m2 = 0.5 - p2, h2 = 0.5 + p2, g2 = 1 + p2, _2 = null, v2 = null, y2 = null, b2 = null, x2 = Cf(e53, u2, n2 - p2, n2 + h2, 0, f2.minX, f2.maxX, c2), S2 = Cf(e53, u2, n2 + m2, n2 + g2, 0, f2.minX, f2.maxX, c2);
      x2 && (_2 = Cf(x2, u2, r2 - p2, r2 + h2, 1, f2.minY, f2.maxY, c2), v2 = Cf(x2, u2, r2 + m2, r2 + g2, 1, f2.minY, f2.maxY, c2)), S2 && (y2 = Cf(S2, u2, r2 - p2, r2 + h2, 1, f2.minY, f2.maxY, c2), b2 = Cf(S2, u2, r2 + m2, r2 + g2, 1, f2.minY, f2.maxY, c2)), l2 > 1 && console.timeEnd(`clipping`), s2.push(_2 || [], t2 + 1, n2 * 2, r2 * 2), s2.push(v2 || [], t2 + 1, n2 * 2, r2 * 2 + 1), s2.push(y2 || [], t2 + 1, n2 * 2 + 1, r2 * 2), s2.push(b2 || [], t2 + 1, n2 * 2 + 1, r2 * 2 + 1);
    }
  }
  invalidateTiles(e53) {
    if (!e53.length) return;
    let t2 = this.options, { debug: n2 } = t2, r2 = 1 / 0, i2 = -1 / 0, a2 = 1 / 0, o2 = -1 / 0;
    for (let t3 of e53) r2 = Math.min(r2, t3.minX), i2 = Math.max(i2, t3.maxX), a2 = Math.min(a2, t3.minY), o2 = Math.max(o2, t3.maxY);
    let s2 = t2.buffer / t2.extent, c2 = /* @__PURE__ */ new Set();
    for (let t3 in this.tiles) {
      let l2 = this.tiles[t3], u2 = 1 << l2.z, d2 = (l2.x - s2) / u2, f2 = (l2.x + 1 + s2) / u2, p2 = (l2.y - s2) / u2, m2 = (l2.y + 1 + s2) / u2;
      if (i2 < d2 || r2 >= f2 || o2 < p2 || a2 >= m2) continue;
      let h2 = false;
      for (let t4 of e53) if (t4.maxX >= d2 && t4.minX < f2 && t4.maxY >= p2 && t4.minY < m2) {
        h2 = true;
        break;
      }
      if (h2) {
        if (n2) {
          n2 > 1 && console.log(`invalidate tile z%d-%d-%d (features: %d, points: %d, simplified: %d)`, l2.z, l2.x, l2.y, l2.numFeatures, l2.numPoints, l2.numSimplified);
          let e54 = `z${l2.z}`;
          this.stats[e54] = (this.stats[e54] || 0) - 1, this.total--;
        }
        delete this.tiles[t3], c2.add(t3);
      }
    }
    c2.size && (this.tileCoords = this.tileCoords.filter((e54) => !c2.has(e54.id)));
  }
};
function Dp(e53, t2, n2) {
  return ((1 << e53) * n2 + t2) * 32 + e53;
}
var Op = { maxZoom: 14, indexMaxZoom: 5, indexMaxPoints: 1e5, tolerance: 3, extent: 4096, buffer: 64, lineMetrics: false, promoteId: null, generateId: false, updateable: false, cluster: false, clusterOptions: tp, debug: 0, coordinates: `lngLat`, wrap: true };
var kp = class {
  constructor(e53, t2) {
    t2 = this.options = Object.assign({}, Op, t2), this.worldCoordinateHelper = rf(t2.coordinates);
    let n2 = t2.debug;
    if (n2 && console.time(`preprocess data`), t2.maxZoom < 0 || t2.maxZoom > 24) throw Error(`maxZoom should be in the 0-24 range`);
    if (t2.promoteId && t2.generateId) throw Error(`promoteId and generateId cannot be used together.`);
    t2.updateable && (this.unlocated = /* @__PURE__ */ new Map());
    let r2 = af(e53, t2, this.unlocated);
    n2 && (console.timeEnd(`preprocess data`), console.log(`index: maxZoom: %d, maxPoints: %d`, t2.indexMaxZoom, t2.indexMaxPoints), console.time(`generate tiles`)), r2 = If(r2, t2), t2.updateable && (this.source = r2), this.initializeIndex(r2, t2);
  }
  initializeIndex(e53, t2) {
    this.tileIndex = t2.cluster ? new op({ ...t2.clusterOptions, coordinates: t2.coordinates, wrap: t2.wrap }) : new Ep(t2), e53.length && this.tileIndex.initialize(e53);
  }
  getTile(e53, t2, n2) {
    return e53 = +e53, t2 = +t2, n2 = +n2, e53 < 0 || e53 > 24 ? null : this.tileIndex.getTile(e53, t2, n2);
  }
  updateData(e53, t2) {
    let n2 = this.options;
    if (!n2.updateable) throw Error("to update tile geojson `updateable` option must be set to true");
    let { affected: r2, source: i2 } = Bf(this.source, e53, n2, this.unlocated);
    t2 && ({ affected: r2, source: i2 } = this.filterUpdate(i2, r2, t2)), r2.length && (this.source = i2, this.tileIndex.updateIndex(i2, r2, n2));
  }
  filterUpdate(e53, t2, n2) {
    let r2 = /* @__PURE__ */ new Set();
    for (let i2 of e53) i2.id != null && (n2(yf(i2, this.worldCoordinateHelper)) || (t2.push(i2), r2.add(i2.id)));
    e53 = e53.filter((e54) => !r2.has(e54.id));
    for (let [e54, t3] of this.unlocated ?? []) t3.geometry && !n2(t3) && this.unlocated.delete(e54);
    return { affected: t2, source: e53 };
  }
  getData() {
    if (!this.options.updateable) throw Error("to retrieve data the `updateable` option must be set to true");
    return vf(this.source, this.worldCoordinateHelper);
  }
  updateClusterOptions(e53, t2) {
    let n2 = this.options.cluster;
    this.options.cluster = e53, this.options.clusterOptions = t2, n2 == e53 ? this.tileIndex.updateIndex(this.source, [], this.options) : this.initializeIndex(this.source, this.options);
  }
  getClusterExpansionZoom(e53) {
    return this.tileIndex.getClusterExpansionZoom(e53);
  }
  getClusterChildren(e53) {
    return this.tileIndex.getChildren(e53);
  }
  getClusterLeaves(e53, t2, n2) {
    return this.tileIndex.getLeaves(e53, t2, n2);
  }
};
var Ap = Ho([{ name: `a_pos_normal`, components: 2, type: `Int16` }, { name: `a_data`, components: 4, type: `Uint8` }, { name: `a_offset_normal`, components: 2, type: `Int8` }], 2);
var jp = Ap.members;
Ap.size, Ap.alignment;
var Mp = Ho([{ name: `a_uv_x`, components: 1, type: `Float32` }, { name: `a_split_index`, components: 1, type: `Float32` }]);
var Np = Mp.members;
Mp.size, Mp.alignment;
var Pp = Math.cos(75 / 2 * (Math.PI / 180));
var Fp = 1 / 2;
var Ip = 2 ** 14 / Fp;
var Lp = class {
  constructor(e53) {
    this.zoom = e53.zoom, this.overscaling = e53.overscaling, this.layers = e53.layers, this.layerIds = this.layers.map((e54) => e54.id), this.index = e53.index, this.hasDependencies = false, this.patternFeatures = [], this.lineClipsArray = [], this.gradients = {};
    for (let e54 of this.layers) this.gradients[e54.id] = {};
    this.layoutVertexArray = new js(), this.layoutVertexArray2 = new Ms(), this.indexArray = new Bs(), this.programConfigurations = new mc(e53.layers, e53.zoom), this.segments = new Ws(), this.maxLineLength = 0, this.stateDependentLayerIds = this.layers.filter((e54) => e54.isStateDependent()).map((e54) => e54.id);
  }
  populate(e53, t2, n2) {
    this.hasDependencies = Ml(`line`, this.layers, t2) || this.hasLineDasharray(this.layers);
    let r2 = this.layers[0].layout.get(`line-sort-key`), i2 = !r2.isConstant(), a2 = [], o2 = new K(this.zoom), s2 = this.layers[0]._featureFilter.needGeometry;
    for (let { feature: t3, id: c2, index: l2, sourceLayerIndex: u2 } of e53) {
      let e54 = xc(t3, s2);
      if (!this.layers[0]._featureFilter.filter(o2, e54, n2)) continue;
      let d2 = i2 ? r2.evaluate(e54, {}, n2) : void 0, f2 = { id: c2, properties: t3.properties, type: t3.type, sourceLayerIndex: u2, index: l2, geometry: s2 ? e54.geometry : bc(t3), patterns: {}, dashes: {}, sortKey: d2 };
      a2.push(f2);
    }
    i2 && a2.sort((e54, t3) => e54.sortKey - t3.sortKey);
    for (let r3 of a2) {
      let { geometry: i3, index: a3, sourceLayerIndex: o3 } = r3;
      this.hasDependencies ? (Ml(`line`, this.layers, t2) ? Nl(`line`, this.layers, r3, { zoom: this.zoom }, t2) : this.hasLineDasharray(this.layers) && this.addLineDashDependencies(this.layers, r3, this.zoom, t2), this.patternFeatures.push(r3)) : this.addFeature(r3, i3, a3, n2, {}, {}, t2.subdivisionGranularity);
      let s3 = e53[a3].feature;
      t2.featureIndex.insert(s3, i3, a3, o3, this.index);
    }
  }
  update(e53, t2, n2, r2) {
    this.stateDependentLayers.length && this.programConfigurations.updatePaintArrays(e53, t2, this.stateDependentLayers, { imagePositions: n2, dashPositions: r2 });
  }
  addFeatures({ options: e53, canonical: t2, patternPositions: n2, dashPositions: r2 }) {
    for (let i2 of this.patternFeatures) this.addFeature(i2, i2.geometry, i2.index, t2, n2, r2, e53.subdivisionGranularity);
  }
  isEmpty() {
    return this.layoutVertexArray.length === 0;
  }
  uploadPending() {
    return !this.uploaded || this.programConfigurations.needsUpload;
  }
  upload(e53) {
    this.uploaded || (this.layoutVertexArray2.length !== 0 && (this.layoutVertexBuffer2 = e53.createVertexBuffer(this.layoutVertexArray2, Np)), this.layoutVertexBuffer = e53.createVertexBuffer(this.layoutVertexArray, jp), this.indexBuffer = e53.createIndexBuffer(this.indexArray)), this.programConfigurations.upload(e53), this.uploaded = true;
  }
  destroy() {
    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy());
  }
  lineFeatureClips(e53) {
    if (e53.properties && Object.hasOwn(e53.properties, `geojsonvt_clip_start`) && Object.hasOwn(e53.properties, `geojsonvt_clip_end`)) return { start: +e53.properties[fp], end: +e53.properties[pp] };
  }
  addFeature(e53, t2, n2, r2, i2, a2, o2) {
    let s2 = this.layers[0].layout, c2 = s2.get(`line-join`).evaluate(e53, {}), l2 = s2.get(`line-cap`).evaluate(e53, {}), u2 = s2.get(`line-miter-limit`).evaluate(e53, {}), d2 = s2.get(`line-round-limit`).evaluate(e53, {});
    this.lineClips = this.lineFeatureClips(e53);
    for (let n3 of t2) this.addLine(n3, e53, c2, l2, u2, d2, r2, o2);
    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e53, n2, { imagePositions: i2, dashPositions: a2, canonical: r2 });
  }
  addLine(e53, t2, n2, r2, i2, a2, o2, s2) {
    this.distance = 0, this.scaledDistance = 0, this.totalDistance = 0;
    let c2 = o2 ? s2.line.getGranularityForZoomLevel(o2.z) : 1;
    if (e53 = Fu(e53, c2), this.lineClips) {
      this.lineClipsArray.push(this.lineClips);
      for (let t3 = 0; t3 < e53.length - 1; t3++) this.totalDistance += e53[t3].dist(e53[t3 + 1]);
      this.updateScaledDistance(), this.maxLineLength = Math.max(this.maxLineLength, this.totalDistance);
    }
    let l2 = td.types[t2.type] === `Polygon`, u2 = e53.length;
    for (; u2 >= 2 && e53[u2 - 1].equals(e53[u2 - 2]); ) u2--;
    let d2 = 0;
    for (; d2 < u2 - 1 && e53[d2].equals(e53[d2 + 1]); ) d2++;
    if (u2 - d2 < (l2 ? 3 : 2)) return;
    n2 === `bevel` && (i2 = 1.05);
    let f2 = this.overscaling <= 16 ? 15 * v / (512 * this.overscaling) : 0, p2 = this.segments.prepareSegment(u2 * 10, this.layoutVertexArray, this.indexArray), m2, h2, g2, _2, y2;
    this.e1 = this.e2 = -1, l2 && (m2 = e53[u2 - 2], y2 = e53[d2].sub(m2)._unit()._perp());
    for (let t3 = d2; t3 < u2; t3++) {
      if (g2 = t3 === u2 - 1 ? l2 ? e53[d2 + 1] : void 0 : e53[t3 + 1], g2 && e53[t3].equals(g2)) continue;
      y2 && (_2 = y2), m2 && (h2 = m2), m2 = e53[t3], y2 = g2 ? g2.sub(m2)._unit()._perp() : _2, _2 ||= y2;
      let o3 = _2.add(y2);
      (o3.x !== 0 || o3.y !== 0) && o3._unit();
      let s3 = _2.x * y2.x + _2.y * y2.y, c3 = o3.x * y2.x + o3.y * y2.y, v2 = c3 === 0 ? 1 / 0 : 1 / c3, b2 = 2 * Math.sqrt(2 - 2 * c3), x2 = c3 < Pp && h2 && g2, C2 = _2.x * y2.y - _2.y * y2.x > 0, w2 = o3.mult(Math.min(v2, 2)), T2 = S((v2 - 3) / 5, 0, 1);
      if (x2 && t3 > d2) {
        let e54 = m2.dist(h2);
        if (e54 > 2 * f2) {
          let t4 = m2.sub(m2.sub(h2)._mult(f2 / e54)._round());
          this.updateDistance(h2, t4), this.addCurrentVertex(t4, _2, 0, 0, p2), h2 = t4;
        }
      }
      let E2 = h2 && g2, D2 = E2 ? n2 : l2 ? `butt` : r2;
      if (E2 && D2 === `round` && (v2 < a2 ? D2 = `miter` : v2 <= 2 && (D2 = `fakeround`)), D2 === `miter` && v2 > i2 && (D2 = `bevel`), D2 === `bevel` && (v2 > 2 && (D2 = `flipbevel`), v2 < i2 && (D2 = `miter`)), h2 && this.updateDistance(h2, m2), D2 === `miter`) o3._mult(v2), this.addCurrentVertex(m2, o3, 0, 0, p2, false, w2);
      else if (D2 === `flipbevel`) {
        if (v2 > 100) o3 = y2.mult(-1);
        else {
          let e54 = v2 * _2.add(y2).mag() / _2.sub(y2).mag();
          o3._perp()._mult(e54 * (C2 ? -1 : 1));
        }
        this.addCurrentVertex(m2, o3, 0, 0, p2, false, w2, T2), this.addCurrentVertex(m2, o3.mult(-1), 0, 0, p2, false, w2, T2);
      } else if (D2 === `bevel` || D2 === `fakeround`) {
        let e54 = -Math.sqrt(v2 * v2 - 1), t4 = C2 ? e54 : 0, n3 = C2 ? 0 : e54;
        if (h2 && this.addCurrentVertex(m2, _2, t4, n3, p2, false, w2), D2 === `fakeround`) {
          let e55 = Math.round(b2 * 180 / Math.PI / 20);
          for (let t5 = 1; t5 < e55; t5++) {
            let n4 = t5 / e55;
            if (n4 !== 0.5) {
              let e56 = n4 - 0.5, t6 = 1.0904 + s3 * (-3.2452 + s3 * (3.55645 - s3 * 1.43519)), r4 = 0.848013 + s3 * (-1.06021 + s3 * 0.215638);
              n4 += n4 * e56 * (n4 - 1) * (t6 * e56 * e56 + r4);
            }
            let r3 = y2.sub(_2)._mult(n4)._add(_2)._unit()._mult(C2 ? -1 : 1);
            this.addHalfVertex(m2, r3.x, r3.y, C2 ? -w2.x : w2.x, C2 ? -w2.y : w2.y, false, C2, p2);
          }
        }
        g2 && this.addCurrentVertex(m2, y2, -t4, -n3, p2, false, w2);
      } else if (D2 === `butt`) this.addCurrentVertex(m2, o3, 0, 0, p2, false, w2);
      else if (D2 === `square`) {
        let e54 = h2 ? 1 : -1;
        this.addCurrentVertex(m2, o3, e54, e54, p2, false, w2);
      } else D2 === `round` && (h2 && (this.addCurrentVertex(m2, _2, 0, 0, p2, false, w2, T2), this.addCurrentVertex(m2, _2, 1, 1, p2, true, w2, T2)), g2 && (this.addCurrentVertex(m2, y2, -1, -1, p2, true, w2, T2), this.addCurrentVertex(m2, y2, 0, 0, p2, false, w2, T2)));
      if (x2 && t3 < u2 - 1) {
        let e54 = m2.dist(g2);
        if (e54 > 2 * f2) {
          let t4 = m2.add(g2.sub(m2)._mult(f2 / e54)._round());
          this.updateDistance(m2, t4), this.addCurrentVertex(t4, y2, 0, 0, p2), m2 = t4;
        }
      }
    }
  }
  addCurrentVertex(e53, t2, n2, r2, i2, a2 = false, o2 = t2, s2 = 0) {
    let c2 = t2.x + t2.y * n2, l2 = t2.y - t2.x * n2, u2 = -t2.x + t2.y * r2, d2 = -t2.y - t2.x * r2, f2 = o2.x + (t2.x - o2.x) * s2, p2 = o2.y + (t2.y - o2.y) * s2;
    this.addHalfVertex(e53, c2, l2, f2, p2, a2, false, i2), this.addHalfVertex(e53, u2, d2, -f2, -p2, a2, true, i2), this.distance > Ip / 2 && this.totalDistance === 0 && (this.distance = 0, this.updateScaledDistance(), this.addCurrentVertex(e53, t2, n2, r2, i2, a2, o2, s2));
  }
  addHalfVertex({ x: e53, y: t2 }, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = (this.lineClips ? this.scaledDistance * (Ip - 1) : this.scaledDistance) * Fp;
    if (this.layoutVertexArray.emplaceBack((e53 << 1) + +!!o2, (t2 << 1) + +!!s2, Math.round(63 * n2) + 128, Math.round(63 * r2) + 128, (l2 & 63) << 2, l2 >> 6, Math.round(63 * i2), Math.round(63 * a2)), this.lineClips) {
      let e54 = (this.scaledDistance - this.lineClips.start) / (this.lineClips.end - this.lineClips.start);
      this.layoutVertexArray2.emplaceBack(e54, this.lineClipsArray.length);
    }
    let u2 = c2.vertexLength++;
    this.e1 >= 0 && this.e2 >= 0 && (this.indexArray.emplaceBack(this.e1, u2, this.e2), c2.primitiveLength++), s2 ? this.e2 = u2 : this.e1 = u2;
  }
  updateScaledDistance() {
    this.scaledDistance = this.lineClips ? this.lineClips.start + (this.lineClips.end - this.lineClips.start) * this.distance / this.totalDistance : this.distance;
  }
  updateDistance(e53, t2) {
    this.distance += e53.dist(t2), this.updateScaledDistance();
  }
  hasLineDasharray(e53) {
    for (let t2 of e53) {
      let e54 = t2.paint.get(`line-dasharray`);
      if (e54 && !e54.isConstant()) return true;
    }
    return false;
  }
  addLineDashDependencies(e53, t2, n2, r2) {
    for (let i2 of e53) {
      let e54 = i2.paint.get(`line-dasharray`);
      if (!e54 || e54.value.kind === `constant`) continue;
      let a2 = i2.layout.get(`line-cap`).evaluate(t2, {}) === `round`, o2 = { dasharray: e54.value.evaluate({ zoom: n2 - 1 }, t2, {}), round: a2 }, s2 = { dasharray: e54.value.evaluate({ zoom: n2 }, t2, {}), round: a2 }, c2 = { dasharray: e54.value.evaluate({ zoom: n2 + 1 }, t2, {}), round: a2 }, l2 = `${o2.dasharray.join(`,`)},${o2.round}`, u2 = `${s2.dasharray.join(`,`)},${s2.round}`, d2 = `${c2.dasharray.join(`,`)},${c2.round}`;
      r2.dashDependencies[l2] = o2, r2.dashDependencies[u2] = s2, r2.dashDependencies[d2] = c2, t2.dashes[i2.id] = { min: l2, mid: u2, max: d2 };
    }
  }
};
G(`LineBucket`, Lp, { omit: [`layers`, `patternFeatures`] });
var Rp;
var zp = () => Rp ||= new Fo({ "line-cap": new J(N.layout_line[`line-cap`], `line-cap`), "line-join": new J(N.layout_line[`line-join`], `line-join`), "line-miter-limit": new J(N.layout_line[`line-miter-limit`], `line-miter-limit`), "line-round-limit": new J(N.layout_line[`line-round-limit`], `line-round-limit`), "line-sort-key": new J(N.layout_line[`line-sort-key`], `line-sort-key`) });
var Bp;
var Vp = () => Bp ||= new Fo({ "line-opacity": new J(N.paint_line[`line-opacity`], `line-opacity`), "line-layer-opacity": new q(N.paint_line[`line-layer-opacity`], `line-layer-opacity`), "line-color": new J(N.paint_line[`line-color`], `line-color`), "line-translate": new q(N.paint_line[`line-translate`], `line-translate`), "line-translate-anchor": new q(N.paint_line[`line-translate-anchor`], `line-translate-anchor`), "line-width": new J(N.paint_line[`line-width`], `line-width`), "line-gap-width": new J(N.paint_line[`line-gap-width`], `line-gap-width`), "line-offset": new J(N.paint_line[`line-offset`], `line-offset`), "line-blur": new J(N.paint_line[`line-blur`], `line-blur`), "line-dasharray": new Mo(N.paint_line[`line-dasharray`], `line-dasharray`), "line-pattern": new Mo(N.paint_line[`line-pattern`], `line-pattern`), "line-gradient": new Po(N.paint_line[`line-gradient`], `line-gradient`) });
var Hp = { get paint() {
  return Vp();
}, get layout() {
  return zp();
} };
var Up = class extends J {
  possiblyEvaluate(e53, t2) {
    return t2 = new K(Math.floor(t2.zoom), { now: t2.now, fadeDuration: t2.fadeDuration, zoomHistory: t2.zoomHistory, transition: t2.transition }), super.possiblyEvaluate(e53, t2);
  }
  evaluate(e53, t2, n2, r2) {
    return t2 = w({}, t2, { zoom: Math.floor(t2.zoom) }), super.evaluate(e53, t2, n2, r2);
  }
};
var Wp;
var Gp = class extends Ro {
  constructor(e53, t2) {
    super(e53, Hp, t2), this.gradientVersion = 0, Wp || (Wp = new Up(Hp.paint.properties[`line-width`].specification, `line-floorwidth`), Wp.useIntegerZoom = true);
  }
  _handleSpecialPaintPropertyUpdate(e53) {
    if (e53 === `line-gradient`) {
      let e54 = this.gradientExpression();
      this.stepInterpolant = _i(e54) ? e54._styleExpression.expression instanceof jt : false, this.gradientVersion = (this.gradientVersion + 1) % (2 ** 53 - 1);
    }
  }
  gradientExpression() {
    return this._transitionablePaint._values[`line-gradient`].value.expression;
  }
  recalculate(e53, t2) {
    super.recalculate(e53, t2), this.paint._values[`line-floorwidth`] = Wp.possiblyEvaluate(this._transitioningPaint._values[`line-width`].value, e53);
  }
  createBucket(e53) {
    return new Lp(e53);
  }
  queryRadius(e53) {
    let t2 = e53, n2 = Kp(Hc(`line-width`, this, t2), Hc(`line-gap-width`, this, t2)), r2 = Hc(`line-offset`, this, t2);
    return n2 / 2 + Math.abs(r2) + Uc(this.paint.get(`line-translate`));
  }
  queryIntersectsFeature({ queryGeometry: e53, feature: t2, featureState: n2, geometry: r2, transform: i2, pixelsToTileUnits: a2 }) {
    let o2 = Wc(e53, this.paint.get(`line-translate`), this.paint.get(`line-translate-anchor`), -i2.bearingInRadians, a2), s2 = a2 / 2 * Kp(this.paint.get(`line-width`).evaluate(t2, n2), this.paint.get(`line-gap-width`).evaluate(t2, n2)), c2 = this.paint.get(`line-offset`).evaluate(t2, n2);
    return c2 && (r2 = Kc(r2, c2 * a2)), Mc(o2, r2, s2);
  }
  isTileClipped() {
    return true;
  }
};
function Kp(e53, t2) {
  return t2 > 0 ? t2 + 2 * e53 : e53;
}
var qp = Ho([{ name: `a_pos_offset`, components: 4, type: `Int16` }, { name: `a_data`, components: 4, type: `Uint16` }, { name: `a_pixeloffset`, components: 4, type: `Int16` }, { name: `a_height_offset`, components: 1, type: `Float32` }], 4);
var Jp = Ho([{ name: `a_projected_pos`, components: 3, type: `Float32` }], 4);
Ho([{ name: `a_fade_opacity`, components: 1, type: `Uint32` }], 4);
var Yp = Ho([{ name: `a_placed`, components: 2, type: `Uint8` }, { name: `a_shift`, components: 2, type: `Float32` }, { name: `a_box_real`, components: 2, type: `Int16` }]);
Ho([{ type: `Int16`, name: `anchorPointX` }, { type: `Int16`, name: `anchorPointY` }, { type: `Int16`, name: `x1` }, { type: `Int16`, name: `y1` }, { type: `Int16`, name: `x2` }, { type: `Int16`, name: `y2` }, { type: `Uint32`, name: `featureIndex` }, { type: `Uint16`, name: `sourceLayerIndex` }, { type: `Uint16`, name: `bucketIndex` }]);
var Xp = Ho([{ name: `a_pos`, components: 2, type: `Int16` }, { name: `a_anchor_pos`, components: 2, type: `Int16` }, { name: `a_extrude`, components: 2, type: `Int16` }], 4);
Ho([{ name: `a_pos`, components: 2, type: `Float32` }, { name: `a_radius`, components: 1, type: `Float32` }, { name: `a_flags`, components: 2, type: `Int16` }], 4), Ho([{ name: `triangle`, components: 3, type: `Uint16` }]), Ho([{ type: `Int16`, name: `anchorX` }, { type: `Int16`, name: `anchorY` }, { type: `Uint16`, name: `glyphStartIndex` }, { type: `Uint16`, name: `numGlyphs` }, { type: `Uint32`, name: `vertexStartIndex` }, { type: `Uint32`, name: `lineStartIndex` }, { type: `Uint32`, name: `lineLength` }, { type: `Uint16`, name: `segment` }, { type: `Uint16`, name: `lowerSize` }, { type: `Uint16`, name: `upperSize` }, { type: `Float32`, name: `lineOffsetX` }, { type: `Float32`, name: `lineOffsetY` }, { type: `Uint8`, name: `writingMode` }, { type: `Uint8`, name: `placedOrientation` }, { type: `Uint8`, name: `hidden` }, { type: `Uint32`, name: `crossTileID` }, { type: `Int16`, name: `associatedIconIndex` }, { type: `Float32`, name: `heightOffset` }]), Ho([{ type: `Int16`, name: `anchorX` }, { type: `Int16`, name: `anchorY` }, { type: `Int16`, name: `rightJustifiedTextSymbolIndex` }, { type: `Int16`, name: `centerJustifiedTextSymbolIndex` }, { type: `Int16`, name: `leftJustifiedTextSymbolIndex` }, { type: `Int16`, name: `verticalPlacedTextSymbolIndex` }, { type: `Int16`, name: `placedIconSymbolIndex` }, { type: `Int16`, name: `verticalPlacedIconSymbolIndex` }, { type: `Uint16`, name: `key` }, { type: `Uint16`, name: `textBoxStartIndex` }, { type: `Uint16`, name: `textBoxEndIndex` }, { type: `Uint16`, name: `verticalTextBoxStartIndex` }, { type: `Uint16`, name: `verticalTextBoxEndIndex` }, { type: `Uint16`, name: `iconBoxStartIndex` }, { type: `Uint16`, name: `iconBoxEndIndex` }, { type: `Uint16`, name: `verticalIconBoxStartIndex` }, { type: `Uint16`, name: `verticalIconBoxEndIndex` }, { type: `Uint16`, name: `featureIndex` }, { type: `Uint16`, name: `numHorizontalGlyphVertices` }, { type: `Uint16`, name: `numVerticalGlyphVertices` }, { type: `Uint16`, name: `numIconVertices` }, { type: `Uint16`, name: `numVerticalIconVertices` }, { type: `Uint16`, name: `useRuntimeCollisionCircles` }, { type: `Uint32`, name: `crossTileID` }, { type: `Float32`, name: `textBoxScale` }, { type: `Float32`, name: `collisionCircleDiameter` }, { type: `Uint16`, name: `textAnchorOffsetStartIndex` }, { type: `Uint16`, name: `textAnchorOffsetEndIndex` }, { type: `Float32`, name: `heightOffset` }]), Ho([{ type: `Float32`, name: `offsetX` }]), Ho([{ type: `Int16`, name: `x` }, { type: `Int16`, name: `y` }, { type: `Int16`, name: `tileUnitDistanceFromAnchor` }]), Ho([{ type: `Uint16`, name: `textAnchor` }, { type: `Float32`, components: 2, name: `textOffset` }]);
var Zp = new class {
  constructor() {
    this.TIMEOUT = 5e3, this.applyArabicShaping = null, this.processBidirectionalText = null, this.processStyledBidirectionalText = null, this.pluginStatus = `unavailable`, this.pluginURL = null, this.loadScriptResolve = () => {
    };
  }
  setState(e53) {
    this.pluginStatus = e53.pluginStatus, this.pluginURL = e53.pluginURL;
  }
  getState() {
    return { pluginStatus: this.pluginStatus, pluginURL: this.pluginURL };
  }
  setMethods(e53) {
    if (Zp.isParsed()) throw Error(`RTL text plugin already registered.`);
    this.applyArabicShaping = e53.applyArabicShaping, this.processBidirectionalText = e53.processBidirectionalText, this.processStyledBidirectionalText = e53.processStyledBidirectionalText, this.loadScriptResolve();
  }
  isParsed() {
    return this.applyArabicShaping != null && this.processBidirectionalText != null && this.processStyledBidirectionalText != null;
  }
  getRTLTextPluginStatus() {
    return this.pluginStatus;
  }
  async syncState(e53, t2) {
    if (this.isParsed()) return this.getState();
    if (e53.pluginStatus !== `loading`) return this.setState(e53), e53;
    let n2 = e53.pluginURL, r2 = new Promise((e54) => {
      this.loadScriptResolve = e54;
    }), i2 = new Promise((e54) => setTimeout(() => e54(), this.TIMEOUT));
    if (await t2(n2), await Promise.race([r2, i2]), this.isParsed()) {
      let e54 = { pluginStatus: `loaded`, pluginURL: n2 };
      return this.setState(e54), e54;
    }
    throw this.setState({ pluginStatus: `error`, pluginURL: `` }), Error(`RTL Text Plugin failed to import scripts from ${n2}`);
  }
}();
function Qp(e53) {
  return /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u070D\u070F-\u074A\u074D-\u077F\u07C0-\u07FA\u07FD-\u07FF\u0840-\u085B\u085E\u0860-\u086A\u0870-\u0891\u0897-\u08E1\u08E3-\u08FF\u1800\u1801\u1804\u1806-\u1819\u1820-\u1878\u1880-\u18AA\uA840-\uA877\uFB50-\uFD3D\uFD40-\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]|\uD803[\uDD00-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDEC2-\uDEC7\uDED0-\uDED8\uDEFA-\uDEFF\uDF30-\uDF59\uDF70-\uDF89\uDFB0-\uDFCB]|\uD805[\uDE60-\uDE6C]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]|\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/gim.test(String.fromCodePoint(e53));
}
function $p(e53) {
  return /[\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u070D\u070F-\u074A\u074D-\u07B1\u07C0-\u07FA\u07FD-\u082D\u0830-\u083E\u0840-\u085B\u085E\u0860-\u086A\u0870-\u0891\u0897-\u08E1\u08E3-\u08FF\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFD3D\uFD40-\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC57-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD1F-\uDD39\uDD3F-\uDD59\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58\uDE60-\uDE9F\uDEC0-\uDEE6\uDEEB-\uDEF6\uDF00-\uDF35\uDF39-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDD40-\uDD65\uDD69-\uDD85\uDD8E\uDD8F\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1\uDEC2-\uDEC7\uDED0-\uDED8\uDEFA-\uDF27\uDF30-\uDF59\uDF70-\uDF89\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/gim.test(String.fromCodePoint(e53));
}
function em(e53) {
  return /[\u02EA\u02EB\u2E80-\u2FDF\u2FF0-\u303F\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FD-\u30FF\u3105-\u312F\u31A0-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uF900-\uFA6D\uFA70-\uFAD9\uFE10-\uFE1F\uFE30-\uFE4F\uFF00-\uFFEF]|\uD81B[\uDFE0-\uDFFF]|[\uD81C-\uD822\uD840-\uD868\uD86A-\uD86D\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD88C][\uDC00-\uDFFF]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD1E\uDD80-\uDDF2]|\uD82B[\uDFF0-\uDFFF]|\uD82C[\uDC00-\uDEFB]|\uD83C[\uDE00-\uDEFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEAD\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD88D[\uDC00-\uDC79]/gim.test(String.fromCodePoint(e53));
}
function tm(e53) {
  return /[\u02EA\u02EB\u1100-\u11FF\u1401-\u167F\u18B0-\u18FF\u2065\u20DD-\u20E0\u20E2-\u20E4\u2B97\u2BF0-\u2BFF\u2E50\u2E51\u2E80-\u3007\u3012\u3013\u3020-\u302F\u3031-\u30FB\u30FD-\uA4CF\uA960-\uA97F\uAC00-\uD7FF\uF900-\uFAFF\uFE10-\uFE1F\uFE30-\uFE48\uFE50-\uFE57\uFE5F-\uFE62\uFE67-\uFE6F\uFF00-\uFF07\uFF0A-\uFF0C\uFF0E-\uFF19\uFF1F-\uFF3A\uFF3C\uFF3E\uFF40-\uFF5A\uFFE0-\uFFE2\uFFE4-\uFFE7\uFFF0-\uFFF8]|\uD802[\uDD80-\uDD9F]|\uD805[\uDD80-\uDDFF]|\uD806[\uDE00-\uDEBF]|[\uD80C-\uD810\uD81C-\uD822\uD83C\uD83D\uD840-\uD87E\uD880-\uD8BE][\uDC00-\uDFFF]|\uD811[\uDC00-\uDE7F]|\uD81B[\uDFE0-\uDFFF]|\uD823[\uDC00-\uDDFF]|\uD82B[\uDFF0-\uDFFF]|\uD82C[\uDC00-\uDEFF]|\uD833[\uDEC0-\uDFCF]|\uD834[\uDC00-\uDDFF\uDEE0-\uDF7F]|\uD836[\uDC00-\uDEAF]|\uD83E[\uDD00-\uDEFF]|[\uD87F\uD8BF][\uDC00-\uDFFD]/gim.test(String.fromCodePoint(e53));
}
function nm(e53) {
  return /[\xA7\xA9\xAE\xB1\xBC-\xBE\xD7\xF7\u2016\u2020\u2021\u2030\u2031\u203B\u203C\u2042\u2047-\u2049\u2051\u2100-\u218F\u221E\u2234\u2235\u2300-\u2307\u230C-\u231F\u2324-\u2328\u232B\u237D-\u239A\u23BE-\u23CD\u23CF\u23D1-\u23DB\u23E2-\u2422\u2424-\u24FF\u25A0-\u2619\u2620-\u2767\u2776-\u2793\u2B12-\u2B2F\u2B50-\u2B59\u2BB8-\u2BEB\u3000-\u303F\u30A0-\u30FF\uE000-\uF8FF\uFE30-\uFE6F\uFF00-\uFFEF\uFFFC\uFFFD]|[\uDB80-\uDBFF][\uDC00-\uDFFF]/gim.test(String.fromCodePoint(e53));
}
function rm(e53) {
  return /[\r\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0600-\u0605\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DD\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u070F\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0890\u0891\u0897-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E33-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB3-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1037\u1039-\u103E\u1056-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1084-\u1086\u108D\u109D\u1100-\u11FF\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60\u1A62\u1A65-\u1A7C\u1A7F\u1AB0-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA960-\uA97C\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD69-\uDD6D\uDEAB\uDEAC\uDEFA-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCBD\uDCC2\uDCCD\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC2\uDDC3\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDE41\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDFB8-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD2\uDFE1\uDFE2]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF1F\uDF22-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE84-\uDE99\uDF60-\uDF67]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6\uDF00-\uDF03\uDF34-\uDF3A\uDF3E-\uDF42\uDF5A]|\uD80D[\uDC40\uDC47-\uDC55]|\uD818[\uDD1E-\uDD2F]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDD63\uDD67-\uDD6A\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF\uDDEE\uDDEF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDDE6-\uDDFF\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF]/.test(e53);
}
function im(e53) {
  return /[\u0E01-\u0E3A\u0E40-\u0E4E\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0EDC-\u0EDF\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA\u1000-\u103F\u1050-\u108F\u109A-\u109F\u1780-\u17D3\u17D7\u17DC\u17DD\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19DE\u19DF\u1A20-\u1A5E\u1A60-\u1A7C\u1AA0-\u1AAD\u1B00-\u1B4C\u1B4E-\u1B7F\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE-\uA9EF\uA9FA-\uA9FE\uAA60-\uAAC2\uAADB-\uAADF]|\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF3A\uDF3B\uDF3F-\uDF46]/gim.test(String.fromCodePoint(e53));
}
function am(e53, t2) {
  return /(?:[\u1039\u17D2\u1A60\u1BAB\u200D\uAAF6]|\uD802\uDE3F|\uD804[\uDD33\uDFD0]|\uD806[\uDD3E\uDE47\uDE99]|\uD807[\uDD45\uDD97\uDF42])$/.test(e53) || new RegExp("^\\p{gc=Mc}", "u").test(t2);
}
var om = { C: `18g,1;g2,3;4nb,1`, D: `17k,1;5,1;1,1;1,5;4,d;1,7;1,2;z,2;8,g;i,12;1,2;9,1;1,1;1,2;14,3;2,1;28,9;3,f;2,4;1,1;2,3;2,6;7a,1;2,5;1,1;g,a;5,2;2,6;1,f`, R: `17m,4;1,1;1,1;5,4;l,1;14,3;1,3;g,i;12,1;2,9;1,1;1,1;2,2;1,1;o,2;2x,3;f,2;4,1;1,2;3,2;6u,j;b,1;r,3;1,1;2,2;6,1`, T: `174,b;1,1;1a,l;g,1;2t,7;2,6;2,2;1,4;bt,9;16,o;1,t;1clb,1` };
var sm = { 1569: [65152, 0, 0, 0], 1570: [65153, 65154, 0, 0], 1571: [65155, 65156, 0, 0], 1572: [65157, 65158, 0, 0], 1573: [65159, 65160, 0, 0], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166, 0, 0], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172, 0, 0], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194, 0, 0], 1584: [65195, 65196, 0, 0], 1585: [65197, 65198, 0, 0], 1586: [65199, 65200, 0, 0], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262, 0, 0], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1611: [65136, 0, 0, 65137], 1612: [65138, 0, 0, 0], 1613: [65140, 0, 0, 0], 1614: [65142, 0, 0, 65143], 1615: [65144, 0, 0, 65145], 1616: [65146, 0, 0, 65147], 1617: [65148, 0, 0, 65149], 1618: [65150, 0, 0, 65151], 1649: [64336, 64337, 0, 0], 1655: [64477, 0, 0, 0], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393, 0, 0], 1676: [64388, 64389, 0, 0], 1677: [64386, 64387, 0, 0], 1678: [64390, 64391, 0, 0], 1681: [64396, 64397, 0, 0], 1688: [64394, 64395, 0, 0], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415, 0, 0], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421, 0, 0], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481, 0, 0], 1734: [64473, 64474, 0, 0], 1735: [64471, 64472, 0, 0], 1736: [64475, 64476, 0, 0], 1737: [64482, 64483, 0, 0], 1739: [64478, 64479, 0, 0], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431, 0, 0], 1747: [64432, 64433, 0, 0] };
var cm = { \u0644\u0622: [65269, 65270], \u0644\u0623: [65271, 65272], \u0644\u0625: [65273, 65274], \u0644\u0627: [65275, 65276] };
var lm = 1604;
var um = /[\u0600-\u06ff\u0750-\u077f\u0870-\u089f\u08a0-\u08ff\ufb50-\ufdff\ufe70-\ufeff]/;
function dm(e53, t2, n2) {
  let r2 = 0;
  for (let i2 of e53.split(`;`)) {
    let [e54, a2] = i2.split(`,`).map((e55) => parseInt(e55, 36)), o2 = r2 + e54;
    for (let e55 = o2; e55 < o2 + a2; e55++) n2.set(e55, t2);
    r2 = o2 + a2;
  }
}
var fm = /* @__PURE__ */ new Map();
for (let [e53, t2] of Object.entries(om)) dm(t2, e53, fm);
function pm(e53) {
  return fm.get(e53) ?? `U`;
}
function mm(e53) {
  return e53 === `D` || e53 === `L` || e53 === `C`;
}
function hm(e53) {
  return e53 === `D` || e53 === `R` || e53 === `C`;
}
function gm(e53, t2, n2) {
  return e53 === `D` ? t2 && n2 ? 3 : t2 ? 1 : n2 ? 2 : 0 : e53 === `R` ? +!!t2 : e53 === `L` ? n2 ? 2 : 0 : null;
}
function _m(e53) {
  return [...e53].map((e54) => {
    let t2 = e54.codePointAt(0);
    return { codePoint: t2, type: pm(t2), form: null };
  });
}
function vm(e53) {
  let t2 = e53.filter((e54) => e54.type !== `T`);
  for (let e54 = 0; e54 < t2.length; e54++) {
    let n2 = t2[e54], r2 = e54 > 0 && mm(t2[e54 - 1].type), i2 = e54 + 1 < t2.length && hm(t2[e54 + 1].type);
    n2.form = gm(n2.type, r2, i2);
  }
}
function ym(e53) {
  let t2 = false;
  for (let n2 of e53) n2.type === `T` ? n2.form = t2 ? 3 : 0 : t2 = n2.form === 2 || n2.form === 3;
}
function bm(e53) {
  let t2 = [];
  for (let n2 = 0; n2 < e53.length; n2++) {
    let r2 = e53[n2];
    if (r2.codePoint !== lm) {
      t2.push(r2);
      continue;
    }
    let i2 = n2 + 1;
    for (; i2 < e53.length && e53[i2].type === `T`; ) i2++;
    let a2 = e53[i2], o2 = a2 && cm[String.fromCodePoint(lm, a2.codePoint)];
    if (!o2) {
      t2.push(r2);
      continue;
    }
    let s2 = r2.form === 3 || r2.form === 1;
    t2.push({ codePoint: o2[+!!s2], type: `R`, form: 0 }), t2.push(...e53.slice(n2 + 1, i2)), n2 = i2;
  }
  return t2;
}
function xm(e53) {
  if (e53.form === null) return e53.codePoint;
  let t2 = sm[e53.codePoint];
  return t2 && (t2[e53.form] || t2[0]) || e53.codePoint;
}
function Sm(e53) {
  if (!um.test(e53)) return e53;
  let t2 = _m(e53);
  return vm(t2), ym(t2), bm(t2).map((e54) => String.fromCodePoint(xm(e54))).join(``);
}
function Cm(e53, t2, n2) {
  let r2 = t2.layout.get(`text-transform`).evaluate(n2, {});
  return r2 === `uppercase` ? e53 = e53.toLocaleUpperCase() : r2 === `lowercase` && (e53 = e53.toLocaleLowerCase()), (Zp.applyArabicShaping ?? Sm)(e53);
}
function wm(e53, t2, n2) {
  for (let r2 of e53.sections) r2.text = Cm(r2.text, t2, n2);
  return e53;
}
function Tm(e53, t2, n2) {
  let r2 = n2 ? t2.last.points : t2.first.points, i2 = n2 ? r2[r2.length - 1] : r2[0];
  return `${e53}:${i2.x}:${i2.y}`;
}
function Em(e53) {
  let t2 = e53.first.points, n2 = t2.length;
  for (let t3 = e53.first.next; t3; t3 = t3.next) n2 += t3.points.length - 1;
  let r2 = Array(n2);
  for (let e54 = 0; e54 < t2.length; e54++) r2[e54] = t2[e54];
  let i2 = t2.length;
  for (let t3 = e53.first.next; t3; t3 = t3.next) {
    let e54 = t3.points;
    for (let t4 = 1; t4 < e54.length; t4++) r2[i2++] = e54[t4];
  }
  return r2;
}
function Dm(e53, t2, n2, r2, i2) {
  let a2 = t2[n2];
  delete t2[n2], t2[r2] = a2;
  let o2 = e53[a2];
  return o2.last.next = i2.first, o2.last = i2.last, a2;
}
function Om(e53, t2, n2, r2, i2) {
  let a2 = t2[r2];
  delete t2[r2], t2[n2] = a2;
  let o2 = e53[a2];
  return i2.last.next = o2.first, o2.first = i2.first, a2;
}
function km(e53) {
  let t2 = {}, n2 = {}, r2 = [];
  for (let i3 of e53) {
    let e54 = i3.text ? i3.text.toString() : null, a2 = { points: i3.geometry[0], next: null }, o2 = { feature: i3, first: a2, last: a2 };
    if (!e54) {
      r2.push(o2);
      continue;
    }
    let s2 = Tm(e54, o2), c2 = Tm(e54, o2, true);
    if (s2 in n2 && c2 in t2 && n2[s2] !== t2[c2]) {
      let i4 = Om(r2, t2, s2, c2, o2), a3 = Dm(r2, n2, s2, c2, r2[i4]);
      delete t2[s2], delete n2[c2], n2[Tm(e54, r2[a3], true)] = a3, r2[i4].feature.geometry = null;
    } else if (s2 in n2) Dm(r2, n2, s2, c2, o2);
    else if (c2 in t2) Om(r2, t2, s2, c2, o2);
    else {
      let e55 = r2.push(o2) - 1;
      t2[s2] = e55, n2[c2] = e55;
    }
  }
  let i2 = [];
  for (let e54 of r2) {
    let t3 = e54.feature;
    t3.geometry && (e54.first.next && (t3.geometry[0] = Em(e54)), i2.push(t3));
  }
  return i2;
}
var Am = typeof Intl < `u` && `Segmenter` in Intl;
var jm;
var Mm;
function Nm(e53) {
  if (!Am || !rm(e53)) return [...e53];
  jm ??= new Intl.Segmenter(void 0, { granularity: `grapheme` });
  let t2 = [];
  for (let { segment: n2 } of jm.segment(e53)) {
    let e54 = t2.length - 1;
    e54 >= 0 && am(t2[e54], n2) ? t2[e54] += n2 : t2.push(n2);
  }
  return t2;
}
function Pm(e53) {
  let t2 = /* @__PURE__ */ new Set();
  if (Am) {
    Mm ??= new Intl.Segmenter(void 0, { granularity: `word` });
    for (let { index: n3 } of Mm.segment(e53)) t2.add(n3);
    return t2;
  }
  let n2 = 0;
  for (let r2 of e53.split(new RegExp("\\b|(?=\\p{Ideo})", "u"))) t2.add(n2), n2 += r2.length;
  return t2;
}
function Fm(e53) {
  let t2 = e53.codePointAt(0);
  return e53.length > (t2 > 65535 ? 2 : 1);
}
function Im(e53) {
  return /\s/u.test(String.fromCodePoint(e53));
}
function Lm(e53) {
  return /[\p{P}\p{S}]/u.test(String.fromCodePoint(e53));
}
function Rm(e53) {
  for (let t2 of e53) if (tm(t2.codePointAt(0))) return true;
  return false;
}
function zm(e53) {
  for (let t2 of e53) if (!Bm(t2.codePointAt(0))) return false;
  return true;
}
function Bm(e53) {
  return !Qp(e53);
}
function Vm(e53) {
  return !(tm(e53) || nm(e53));
}
function Hm(e53) {
  return new RegExp("\\p{sc=Arab}", "u").test(String.fromCodePoint(e53));
}
function Um(e53) {
  return $p(e53);
}
function Wm(e53) {
  for (let t2 of e53) if (Um(t2.codePointAt(0))) return true;
  return false;
}
var Gm = { "!": `\uFE15`, "#": `\uFF03`, $: `\uFF04`, "%": `\uFF05`, "&": `\uFF06`, "(": `\uFE35`, ")": `\uFE36`, "*": `\uFF0A`, "+": `\uFF0B`, ",": `\uFE10`, "-": `\uFE32`, ".": `\u30FB`, "/": `\uFF0F`, ":": `\uFE13`, ";": `\uFE14`, "<": `\uFE3F`, "=": `\uFF1D`, ">": `\uFE40`, "?": `\uFE16`, "@": `\uFF20`, "[": `\uFE47`, "\\": `\uFF3C`, "]": `\uFE48`, "^": `\uFF3E`, _: `\uFE33`, "`": `\uFF40`, "{": `\uFE37`, "|": `\u2015`, "}": `\uFE38`, "~": `\uFF5E`, "\xA2": `\uFFE0`, "\xA3": `\uFFE1`, "\xA5": `\uFFE5`, "\xA6": `\uFFE4`, "\xAC": `\uFFE2`, "\xAF": `\uFFE3`, "\u2013": `\uFE32`, "\u2014": `\uFE31`, "\u2018": `\uFE43`, "\u2019": `\uFE44`, "\u201C": `\uFE41`, "\u201D": `\uFE42`, "\u2026": `\uFE19`, "\u22EF": `\uFE19`, "\u2027": `\u30FB`, "\u20A9": `\uFFE6`, "\u3001": `\uFE11`, "\u3002": `\uFE12`, "\u3008": `\uFE3F`, "\u3009": `\uFE40`, "\u300A": `\uFE3D`, "\u300B": `\uFE3E`, "\u300C": `\uFE41`, "\u300D": `\uFE42`, "\u300E": `\uFE43`, "\u300F": `\uFE44`, "\u3010": `\uFE3B`, "\u3011": `\uFE3C`, "\u3014": `\uFE39`, "\u3015": `\uFE3A`, "\u3016": `\uFE17`, "\u3017": `\uFE18`, "\uFF01": `\uFE15`, "\uFF08": `\uFE35`, "\uFF09": `\uFE36`, "\uFF0C": `\uFE10`, "\uFF0D": `\uFE32`, "\uFF0E": `\u30FB`, "\uFF1A": `\uFE13`, "\uFF1B": `\uFE14`, "\uFF1C": `\uFE3F`, "\uFF1E": `\uFE40`, "\uFF1F": `\uFE16`, "\uFF3B": `\uFE47`, "\uFF3D": `\uFE48`, "\uFF3F": `\uFE33`, "\uFF5B": `\uFE37`, "\uFF5C": `\u2015`, "\uFF5D": `\uFE38`, "\uFF5F": `\uFE35`, "\uFF60": `\uFE36`, "\uFF61": `\uFE12`, "\uFF62": `\uFE41`, "\uFF63": `\uFE42` };
function Km(e53) {
  let t2 = ``, n2 = { premature: true, value: void 0 }, r2 = e53[Symbol.iterator](), i2 = r2.next(), a2 = e53[Symbol.iterator]();
  a2.next();
  let o2 = a2.next();
  for (; !i2.done; ) (o2.done || !Vm(o2.value.codePointAt(0)) || Gm[o2.value]) && (n2.premature || !Vm(n2.value.codePointAt(0)) || Gm[n2.value]) && Gm[i2.value] ? t2 += Gm[i2.value] : t2 += i2.value, n2 = { value: i2.value, premature: false }, i2 = r2.next(), o2 = a2.next();
  return t2;
}
var qm = { 10: true, 13: true, 32: true, 38: true, 41: true, 43: true, 45: true, 47: true, 173: true, 183: true, 8203: true, 8208: true, 8211: true, 8231: true };
var Jm = { 40: true };
function Ym(e53, t2, n2, r2, i2, a2) {
  if (`fontStack` in t2) {
    let r3 = n2[t2.fontStack]?.default, a3 = r3?.[e53];
    if (a3) return a3.metrics.advance * t2.scale + i2;
    let o2 = 0;
    for (let n3 of e53) {
      let e54 = r3?.[n3];
      e54 && (o2 += e54.metrics.advance * t2.scale + i2);
    }
    return o2;
  }
  {
    let e54 = r2[t2.imageName];
    return e54 ? e54.displaySize[0] * t2.scale * 24 / a2 + i2 : 0;
  }
}
function Xm(e53, t2, n2, r2) {
  let i2 = (e53 - t2) ** 2;
  return r2 ? e53 < t2 ? i2 / 2 : i2 * 2 : i2 + Math.abs(n2) * n2;
}
function Zm(e53) {
  return /^\s+$/u.test(e53);
}
function Qm(e53, t2, n2) {
  let r2 = 0;
  return (e53 === 10 || e53 === 13) && (r2 -= 1e4), n2 && (r2 += 150), (e53 === 40 || e53 === 65288) && (r2 += 50), (t2 === 41 || t2 === 65289) && (r2 += 50), r2;
}
function $m(e53, t2, n2, r2, i2, a2) {
  let o2 = null, s2 = Xm(t2, n2, i2, a2);
  for (let e54 of r2) {
    let r3 = Xm(t2 - e54.x, n2, i2, a2) + e54.badness;
    r3 <= s2 && (o2 = e54, s2 = r3);
  }
  return { index: e53, x: t2, priorBreak: o2, badness: s2 };
}
function eh(e53) {
  return e53 ? eh(e53.priorBreak).concat(e53.index) : [];
}
var th = class e48 {
  constructor(e53 = ``, t2 = [], n2 = []) {
    this.text = e53, this.sections = t2, this.sectionIndex = n2, this.imageSectionID = null, this.cachedGraphemes = null;
  }
  graphemes() {
    return this.cachedGraphemes ??= Nm(this.text), this.cachedGraphemes;
  }
  static fromFeature(t2, n2, r2, i2) {
    let a2 = new e48();
    for (let e53 of t2.sections) e53.image ? a2.addImageSection(e53) : a2.addTextSection(e53, n2);
    return r2 && a2.verticalizePunctuation(i2), a2;
  }
  length() {
    return this.graphemes().length;
  }
  getSection(e53) {
    return this.sections[this.sectionIndex[e53]];
  }
  getSectionIndex(e53) {
    return this.sectionIndex[e53];
  }
  verticalizePunctuation(e53 = {}, t2) {
    let n2 = Km(this.text), r2 = 0;
    this.cachedGraphemes = this.graphemes().map((i2, a2) => {
      let o2 = n2.slice(r2, r2 + i2.length);
      r2 += i2.length;
      let s2 = this.getSection(a2);
      return t2?.[a2] !== false && `fontStack` in s2 && e53[s2.fontStack]?.vertical?.[i2] ? i2 : o2;
    }), this.text = this.cachedGraphemes.join(``);
  }
  hasZeroWidthSpaces() {
    return this.text.includes(`\u200B`);
  }
  trim() {
    let e53 = this.graphemes(), t2 = 0;
    for (; t2 < e53.length && Zm(e53[t2]); ) t2++;
    let n2 = e53.length;
    for (; n2 > t2 && Zm(e53[n2 - 1]); ) n2--;
    this.text = e53.slice(t2, n2).join(``), this.sectionIndex = this.sectionIndex.slice(t2, n2), this.cachedGraphemes = null;
  }
  substring(t2, n2) {
    let r2 = this.graphemes().slice(t2, n2).join(``), i2 = this.sectionIndex.slice(t2, n2);
    return new e48(r2, this.sections, i2);
  }
  toCodeUnitIndex(e53) {
    return this.graphemes().slice(0, e53).join(``).length;
  }
  toString() {
    return this.text;
  }
  getMaxScale() {
    return this.sectionIndex.reduce((e53, t2) => Math.max(e53, this.sections[t2].scale), 0);
  }
  getMaxImageSize(e53) {
    let t2 = 0, n2 = 0;
    for (let r2 = 0; r2 < this.length(); r2++) {
      let i2 = this.getSection(r2);
      if (`imageName` in i2) {
        let r3 = e53[i2.imageName];
        if (!r3) continue;
        let a2 = r3.displaySize;
        t2 = Math.max(t2, a2[0]), n2 = Math.max(n2, a2[1]);
      }
    }
    return { maxImageWidth: t2, maxImageHeight: n2 };
  }
  _appendSection(e53, t2) {
    let n2 = this.graphemes(), r2 = n2.length > 0 ? n2[n2.length - 1] : ``, i2 = Nm(r2 + e53);
    this.text += e53, this.cachedGraphemes = n2.slice(0, r2 ? -1 : void 0).concat(i2);
    let a2 = i2.length - +!!r2;
    for (let e54 = 0; e54 < a2; e54++) this.sectionIndex.push(t2);
  }
  addTextSection(e53, t2) {
    this.sections.push({ scale: e53.scale || 1, verticalAlign: e53.verticalAlign || `bottom`, fontStack: e53.fontStack || t2 }), this._appendSection(e53.text, this.sections.length - 1);
  }
  addImageSection(e53) {
    let t2 = e53.image ? e53.image.name : ``;
    if (t2.length === 0) {
      j(`Can't add FormattedSection with an empty image.`);
      return;
    }
    let n2 = this.getNextImageSectionCharCode();
    n2 ? (this.sections.push({ scale: 1, verticalAlign: e53.verticalAlign || `bottom`, imageName: t2 }), this._appendSection(String.fromCharCode(n2), this.sections.length - 1)) : j(`Reached maximum number of images 6401`);
  }
  getNextImageSectionCharCode() {
    return this.imageSectionID ? this.imageSectionID >= 63743 ? null : ++this.imageSectionID : (this.imageSectionID = 57344, this.imageSectionID);
  }
  determineLineBreaks(e53, t2, n2, r2, i2) {
    let a2 = this.determineTotalWidth(e53, n2, r2, i2);
    if (e53 >= 0 && a2 > 0 && a2 <= t2 && !/[\n\r]/.test(this.text)) return [this.length()];
    let o2 = [], s2 = a2 / Math.max(1, Math.ceil(a2 / t2)), c2 = this.hasZeroWidthSpaces(), l2 = this.graphemes(), u2 = null, d2 = 0, f2 = 0;
    for (let t3 = 0; t3 < l2.length; t3++) {
      let a3 = l2[t3];
      if (t3 > 0) {
        let e54 = l2[t3 - 1].codePointAt(0), n3 = a3.codePointAt(0), r3 = em(e54), i3 = im(e54) && im(n3);
        (qm[e54] || r3 || `imageName` in this.getSection(t3 - 1) || l2[t3 + 1] !== void 0 && Jm[n3] || i3 && (u2 ??= Pm(this.text)).has(f2)) && o2.push($m(t3, d2, s2, o2, Qm(e54, n3, r3 && c2), false));
      }
      Im(a3.codePointAt(0)) || (d2 += Ym(a3, this.getSection(t3), n2, r2, e53, i2)), f2 += a3.length;
    }
    return eh($m(this.length(), d2, s2, o2, 0, true));
  }
  determineTotalWidth(e53, t2, n2, r2) {
    let i2 = 0, a2 = 0;
    for (let o2 of this.graphemes()) {
      let s2 = this.getSection(a2);
      i2 += Ym(o2, s2, t2, n2, e53, r2), a2++;
    }
    return i2;
  }
};
function nh() {
  return (function(e53) {
    var t2 = { R: `13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73`, EN: `1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9`, ES: `17,2,6dp+1,f+1,av,16vr,mx+1,4o,2`, ET: `z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj`, AN: `16o+5,2j+9,2+1,35,ed,1ff2+9,87+u`, CS: `18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b`, B: `a,3,f+2,2v,690`, S: `9,2,k`, WS: `c,k,4f4,1vk+a,u,1j,335`, ON: `x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i`, BN: `0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1`, NSM: `lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n`, AL: `16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d`, LRO: `6ct`, RLO: `6cu`, LRE: `6cq`, RLE: `6cr`, PDF: `6cs`, LRI: `6ee`, RLI: `6ef`, FSI: `6eg`, PDI: `6eh` }, n2 = {}, r2 = {};
    n2.L = 1, r2[1] = `L`, Object.keys(t2).forEach(function(e54, t3) {
      n2[e54] = 1 << t3 + 1, r2[n2[e54]] = e54;
    }), Object.freeze(n2);
    var i2 = n2.LRI | n2.RLI | n2.FSI, a2 = n2.L | n2.R | n2.AL, o2 = n2.B | n2.S | n2.WS | n2.ON | n2.FSI | n2.LRI | n2.RLI | n2.PDI, s2 = n2.BN | n2.RLE | n2.LRE | n2.RLO | n2.LRO | n2.PDF, c2 = n2.S | n2.WS | n2.B | i2 | n2.PDI | s2, l2 = null;
    function u2() {
      if (!l2) {
        l2 = /* @__PURE__ */ new Map();
        var e54 = 0;
        for (var r3 in t2) if (t2.hasOwnProperty(r3)) for (var i3 = t2[r3], a3 = ``, o3 = void 0, s3 = false, c3 = 0, u3 = 0; u3 <= i3.length + 1; u3 += 1) {
          var d3 = i3[u3];
          if (d3 !== `,` && u3 !== i3.length) d3 === `+` ? (s3 = true, c3 = e54 = c3 + parseInt(a3, 36), a3 = ``) : a3 += d3;
          else {
            s3 ? o3 = e54 + parseInt(a3, 36) : (c3 = e54 = c3 + parseInt(a3, 36), o3 = e54), s3 = false, a3 = ``, c3 = o3;
            for (var f3 = e54; f3 < o3 + 1; f3 += 1) l2.set(f3, n2[r3]);
          }
        }
      }
    }
    function d2(e54) {
      return u2(), l2.get(e54.codePointAt(0)) || n2.L;
    }
    function f2(e54) {
      return r2[d2(e54)];
    }
    var p2 = { pairs: `14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1`, canonical: `6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye` };
    function m2(e54, t3) {
      var n3 = 0, r3 = /* @__PURE__ */ new Map(), i3 = t3 && /* @__PURE__ */ new Map(), a3;
      return e54.split(`,`).forEach(function e55(o3) {
        if (o3.indexOf(`+`) !== -1) for (var s3 = +o3; s3--; ) e55(a3);
        else {
          a3 = o3;
          var c3 = o3.split(`>`), l3 = c3[0], u3 = c3[1];
          l3 = String.fromCodePoint(n3 += parseInt(l3, 36)), u3 = String.fromCodePoint(n3 += parseInt(u3, 36)), r3.set(l3, u3), t3 && i3.set(u3, l3);
        }
      }), { map: r3, reverseMap: i3 };
    }
    var h2, g2, _2;
    function v2() {
      if (!h2) {
        var e54 = m2(p2.pairs, true), t3 = e54.map, n3 = e54.reverseMap;
        h2 = t3, g2 = n3, _2 = m2(p2.canonical, false).map;
      }
    }
    function y2(e54) {
      return v2(), h2.get(e54) || null;
    }
    function b2(e54) {
      return v2(), g2.get(e54) || null;
    }
    function x2(e54) {
      return v2(), _2.get(e54) || null;
    }
    var S2 = n2.L, C2 = n2.R, w2 = n2.EN, T2 = n2.ES, E2 = n2.ET, D2 = n2.AN, O2 = n2.CS, k2 = n2.B, A2 = n2.S, j2 = n2.ON, ee2 = n2.BN, te2 = n2.NSM, ne2 = n2.AL, re2 = n2.LRO, ie2 = n2.RLO, ae2 = n2.LRE, oe2 = n2.RLE, se2 = n2.PDF, ce2 = n2.LRI, le2 = n2.RLI, ue2 = n2.FSI, de2 = n2.PDI;
    function fe2(e54, t3) {
      for (var n3 = 125, r3 = new Uint32Array(e54.length), l3 = 0; l3 < e54.length; l3++) r3[l3] = d2(e54[l3]);
      var u3 = /* @__PURE__ */ new Map();
      function f3(e55, t4) {
        var n4 = r3[e55];
        r3[e55] = t4, u3.set(n4, u3.get(n4) - 1), n4 & o2 && u3.set(o2, u3.get(o2) - 1), u3.set(t4, (u3.get(t4) || 0) + 1), t4 & o2 && u3.set(o2, (u3.get(o2) || 0) + 1);
      }
      for (var p3 = new Uint8Array(e54.length), m3 = /* @__PURE__ */ new Map(), h3 = [], g3 = null, _3 = 0; _3 < e54.length; _3++) g3 || h3.push(g3 = { start: _3, end: e54.length - 1, level: t3 === `rtl` ? 1 : t3 === `ltr` ? 0 : Zt2(_3, false) }), r3[_3] & k2 && (g3.end = _3, g3 = null);
      for (var v3 = oe2 | ae2 | ie2 | re2 | i2 | de2 | se2 | k2, fe3 = function(e55) {
        return e55 + (e55 & 1 ? 1 : 2);
      }, pe3 = function(e55) {
        return e55 + (e55 & 1 ? 2 : 1);
      }, me3 = 0; me3 < h3.length; me3++) {
        g3 = h3[me3];
        var he3 = [{ _level: g3.level, _override: 0, _isolate: 0 }], M3 = void 0, ge3 = 0, _e3 = 0, ve3 = 0;
        u3.clear();
        for (var ye3 = g3.start; ye3 <= g3.end; ye3++) {
          var be2 = r3[ye3];
          if (M3 = he3[he3.length - 1], u3.set(be2, (u3.get(be2) || 0) + 1), be2 & o2 && u3.set(o2, (u3.get(o2) || 0) + 1), be2 & v3) {
            if (be2 & (oe2 | ae2)) {
              p3[ye3] = M3._level;
              var N2 = (be2 === oe2 ? pe3 : fe3)(M3._level);
              N2 <= n3 && !ge3 && !_e3 ? he3.push({ _level: N2, _override: 0, _isolate: 0 }) : ge3 || _e3++;
            } else if (be2 & (ie2 | re2)) {
              p3[ye3] = M3._level;
              var xe2 = (be2 === ie2 ? pe3 : fe3)(M3._level);
              xe2 <= n3 && !ge3 && !_e3 ? he3.push({ _level: xe2, _override: be2 & ie2 ? C2 : S2, _isolate: 0 }) : ge3 || _e3++;
            } else if (be2 & i2) {
              be2 & ue2 && (be2 = Zt2(ye3 + 1, true) === 1 ? le2 : ce2), p3[ye3] = M3._level, M3._override && f3(ye3, M3._override);
              var P2 = (be2 === le2 ? pe3 : fe3)(M3._level);
              P2 <= n3 && ge3 === 0 && _e3 === 0 ? (ve3++, he3.push({ _level: P2, _override: 0, _isolate: 1, _isolInitIndex: ye3 })) : ge3++;
            } else if (be2 & de2) {
              if (ge3 > 0) ge3--;
              else if (ve3 > 0) {
                for (_e3 = 0; !he3[he3.length - 1]._isolate; ) he3.pop();
                var Se2 = he3[he3.length - 1]._isolInitIndex;
                Se2 != null && (m3.set(Se2, ye3), m3.set(ye3, Se2)), he3.pop(), ve3--;
              }
              M3 = he3[he3.length - 1], p3[ye3] = M3._level, M3._override && f3(ye3, M3._override);
            } else be2 & se2 ? (ge3 === 0 && (_e3 > 0 ? _e3-- : !M3._isolate && he3.length > 1 && (he3.pop(), M3 = he3[he3.length - 1])), p3[ye3] = M3._level) : be2 & k2 && (p3[ye3] = g3.level);
          } else p3[ye3] = M3._level, M3._override && be2 !== ee2 && f3(ye3, M3._override);
        }
        for (var F2 = [], I2 = null, L2 = g3.start; L2 <= g3.end; L2++) {
          var Ce2 = r3[L2];
          if (!(Ce2 & s2)) {
            var we2 = p3[L2], Te2 = Ce2 & i2, R2 = Ce2 === de2;
            I2 && we2 === I2._level ? (I2._end = L2, I2._endsWithIsolInit = Te2) : F2.push(I2 = { _start: L2, _end: L2, _level: we2, _startsWithPDI: R2, _endsWithIsolInit: Te2 });
          }
        }
        for (var Ee2 = [], De2 = 0; De2 < F2.length; De2++) {
          var Oe2 = F2[De2];
          if (!Oe2._startsWithPDI || Oe2._startsWithPDI && !m3.has(Oe2._start)) {
            for (var ke2 = [I2 = Oe2], Ae2 = void 0; I2 && I2._endsWithIsolInit && (Ae2 = m3.get(I2._end)) != null; ) for (var je2 = De2 + 1; je2 < F2.length; je2++) if (F2[je2]._start === Ae2) {
              ke2.push(I2 = F2[je2]);
              break;
            }
            for (var Me2 = [], Ne2 = 0; Ne2 < ke2.length; Ne2++) for (var Pe2 = ke2[Ne2], z2 = Pe2._start; z2 <= Pe2._end; z2++) Me2.push(z2);
            for (var Fe2 = p3[Me2[0]], Ie2 = g3.level, Le2 = Me2[0] - 1; Le2 >= 0; Le2--) if (!(r3[Le2] & s2)) {
              Ie2 = p3[Le2];
              break;
            }
            var Re2 = Me2[Me2.length - 1], ze2 = p3[Re2], Be2 = g3.level;
            if (!(r3[Re2] & i2)) {
              for (var Ve2 = Re2 + 1; Ve2 <= g3.end; Ve2++) if (!(r3[Ve2] & s2)) {
                Be2 = p3[Ve2];
                break;
              }
            }
            Ee2.push({ _seqIndices: Me2, _sosType: Math.max(Ie2, Fe2) % 2 ? C2 : S2, _eosType: Math.max(Be2, ze2) % 2 ? C2 : S2 });
          }
        }
        for (var He2 = 0; He2 < Ee2.length; He2++) {
          var Ue2 = Ee2[He2], B2 = Ue2._seqIndices, We2 = Ue2._sosType, Ge2 = Ue2._eosType, Ke2 = p3[B2[0]] & 1 ? C2 : S2;
          if (u3.get(te2)) for (var qe2 = 0; qe2 < B2.length; qe2++) {
            var Je2 = B2[qe2];
            if (r3[Je2] & te2) {
              for (var Ye2 = We2, Xe2 = qe2 - 1; Xe2 >= 0; Xe2--) if (!(r3[B2[Xe2]] & s2)) {
                Ye2 = r3[B2[Xe2]];
                break;
              }
              f3(Je2, Ye2 & (i2 | de2) ? j2 : Ye2);
            }
          }
          if (u3.get(w2)) for (var Ze2 = 0; Ze2 < B2.length; Ze2++) {
            var Qe2 = B2[Ze2];
            if (r3[Qe2] & w2) for (var $e2 = Ze2 - 1; $e2 >= -1; $e2--) {
              var et2 = $e2 === -1 ? We2 : r3[B2[$e2]];
              if (et2 & a2) {
                et2 === ne2 && f3(Qe2, D2);
                break;
              }
            }
          }
          if (u3.get(ne2)) for (var tt2 = 0; tt2 < B2.length; tt2++) {
            var nt2 = B2[tt2];
            r3[nt2] & ne2 && f3(nt2, C2);
          }
          if (u3.get(T2) || u3.get(O2)) for (var rt2 = 1; rt2 < B2.length - 1; rt2++) {
            var it2 = B2[rt2];
            if (r3[it2] & (T2 | O2)) {
              for (var at2 = 0, ot2 = 0, st2 = rt2 - 1; st2 >= 0 && (at2 = r3[B2[st2]], at2 & s2); st2--) ;
              for (var ct2 = rt2 + 1; ct2 < B2.length && (ot2 = r3[B2[ct2]], ot2 & s2); ct2++) ;
              at2 === ot2 && (r3[it2] === T2 ? at2 === w2 : at2 & (w2 | D2)) && f3(it2, at2);
            }
          }
          if (u3.get(w2)) {
            for (var lt2 = 0; lt2 < B2.length; lt2++) if (r3[B2[lt2]] & w2) {
              for (var ut2 = lt2 - 1; ut2 >= 0 && r3[B2[ut2]] & (E2 | s2); ut2--) f3(B2[ut2], w2);
              for (lt2++; lt2 < B2.length && r3[B2[lt2]] & (E2 | s2 | w2); lt2++) r3[B2[lt2]] !== w2 && f3(B2[lt2], w2);
            }
          }
          if (u3.get(E2) || u3.get(T2) || u3.get(O2)) for (var dt2 = 0; dt2 < B2.length; dt2++) {
            var ft2 = B2[dt2];
            if (r3[ft2] & (E2 | T2 | O2)) {
              f3(ft2, j2);
              for (var V2 = dt2 - 1; V2 >= 0 && r3[B2[V2]] & s2; V2--) f3(B2[V2], j2);
              for (var pt2 = dt2 + 1; pt2 < B2.length && r3[B2[pt2]] & s2; pt2++) f3(B2[pt2], j2);
            }
          }
          if (u3.get(w2)) for (var mt2 = 0, ht2 = We2; mt2 < B2.length; mt2++) {
            var gt2 = B2[mt2], _t2 = r3[gt2];
            _t2 & w2 ? ht2 === S2 && f3(gt2, S2) : _t2 & a2 && (ht2 = _t2);
          }
          if (u3.get(o2)) {
            for (var vt2 = C2 | w2 | D2, H2 = vt2 | S2, yt2 = [], bt2 = [], xt2 = 0; xt2 < B2.length; xt2++) if (r3[B2[xt2]] & o2) {
              var St2 = e54[B2[xt2]], Ct2 = void 0;
              if (y2(St2) !== null) {
                if (bt2.length < 63) bt2.push({ char: St2, seqIndex: xt2 });
                else break;
              } else if ((Ct2 = b2(St2)) !== null) for (var wt2 = bt2.length - 1; wt2 >= 0; wt2--) {
                var Tt2 = bt2[wt2].char;
                if (Tt2 === Ct2 || Tt2 === b2(x2(St2)) || y2(x2(Tt2)) === St2) {
                  yt2.push([bt2[wt2].seqIndex, xt2]), bt2.length = wt2;
                  break;
                }
              }
            }
            yt2.sort(function(e55, t4) {
              return e55[0] - t4[0];
            });
            for (var U2 = 0; U2 < yt2.length; U2++) {
              for (var Et2 = yt2[U2], Dt2 = Et2[0], Ot2 = Et2[1], kt2 = false, At2 = 0, jt2 = Dt2 + 1; jt2 < Ot2; jt2++) {
                var Mt2 = B2[jt2];
                if (r3[Mt2] & H2) {
                  kt2 = true;
                  var Nt2 = r3[Mt2] & vt2 ? C2 : S2;
                  if (Nt2 === Ke2) {
                    At2 = Nt2;
                    break;
                  }
                }
              }
              if (kt2 && !At2) {
                At2 = We2;
                for (var Pt2 = Dt2 - 1; Pt2 >= 0; Pt2--) {
                  var Ft2 = B2[Pt2];
                  if (r3[Ft2] & H2) {
                    var It2 = r3[Ft2] & vt2 ? C2 : S2;
                    At2 = It2 === Ke2 ? Ke2 : It2;
                    break;
                  }
                }
              }
              if (At2) {
                if (r3[B2[Dt2]] = r3[B2[Ot2]] = At2, At2 !== Ke2) {
                  for (var Lt2 = Dt2 + 1; Lt2 < B2.length; Lt2++) if (!(r3[B2[Lt2]] & s2)) {
                    d2(e54[B2[Lt2]]) & te2 && (r3[B2[Lt2]] = At2);
                    break;
                  }
                }
                if (At2 !== Ke2) {
                  for (var Rt2 = Ot2 + 1; Rt2 < B2.length; Rt2++) if (!(r3[B2[Rt2]] & s2)) {
                    d2(e54[B2[Rt2]]) & te2 && (r3[B2[Rt2]] = At2);
                    break;
                  }
                }
              }
            }
            for (var zt2 = 0; zt2 < B2.length; zt2++) if (r3[B2[zt2]] & o2) {
              for (var Bt2 = zt2, Vt2 = zt2, Ht2 = We2, Ut2 = zt2 - 1; Ut2 >= 0; Ut2--) if (r3[B2[Ut2]] & s2) Bt2 = Ut2;
              else {
                Ht2 = r3[B2[Ut2]] & vt2 ? C2 : S2;
                break;
              }
              for (var Wt2 = Ge2, Gt2 = zt2 + 1; Gt2 < B2.length; Gt2++) if (r3[B2[Gt2]] & (o2 | s2)) Vt2 = Gt2;
              else {
                Wt2 = r3[B2[Gt2]] & vt2 ? C2 : S2;
                break;
              }
              for (var Kt2 = Bt2; Kt2 <= Vt2; Kt2++) r3[B2[Kt2]] = Ht2 === Wt2 ? Ht2 : Ke2;
              zt2 = Vt2;
            }
          }
        }
        for (var qt2 = g3.start; qt2 <= g3.end; qt2++) {
          var Jt2 = p3[qt2], Yt2 = r3[qt2];
          if (Jt2 & 1 ? Yt2 & (S2 | w2 | D2) && p3[qt2]++ : Yt2 & C2 ? p3[qt2]++ : Yt2 & (D2 | w2) && (p3[qt2] += 2), Yt2 & s2 && (p3[qt2] = qt2 === 0 ? g3.level : p3[qt2 - 1]), qt2 === g3.end || d2(e54[qt2]) & (A2 | k2)) for (var Xt2 = qt2; Xt2 >= 0 && d2(e54[Xt2]) & c2; Xt2--) p3[Xt2] = g3.level;
        }
      }
      return { levels: p3, paragraphs: h3 };
      function Zt2(t4, n4) {
        for (var a3 = t4; a3 < e54.length; a3++) {
          var o3 = r3[a3];
          if (o3 & (C2 | ne2)) return 1;
          if (o3 & (k2 | S2) || n4 && o3 === de2) return 0;
          if (o3 & i2) {
            var s3 = Qt2(a3);
            a3 = s3 === -1 ? e54.length : s3;
          }
        }
        return 0;
      }
      function Qt2(t4) {
        for (var n4 = 1, a3 = t4 + 1; a3 < e54.length; a3++) {
          var o3 = r3[a3];
          if (o3 & k2) break;
          if (o3 & de2) {
            if (--n4 === 0) return a3;
          } else o3 & i2 && n4++;
        }
        return -1;
      }
    }
    var pe2 = `14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1`, me2;
    function he2() {
      if (!me2) {
        var e54 = m2(pe2, true), t3 = e54.map;
        e54.reverseMap.forEach(function(e55, n3) {
          t3.set(n3, e55);
        }), me2 = t3;
      }
    }
    function M2(e54) {
      return he2(), me2.get(e54) || null;
    }
    function ge2(e54, t3, n3, r3) {
      var i3 = e54.length;
      n3 = Math.max(0, n3 == null ? 0 : +n3), r3 = Math.min(i3 - 1, r3 == null ? i3 - 1 : +r3);
      for (var a3 = /* @__PURE__ */ new Map(), o3 = n3; o3 <= r3; o3++) if (t3[o3] & 1) {
        var s3 = M2(e54[o3]);
        s3 !== null && a3.set(o3, s3);
      }
      return a3;
    }
    function _e2(e54, t3, n3, r3) {
      var i3 = e54.length;
      n3 = Math.max(0, n3 == null ? 0 : +n3), r3 = Math.min(i3 - 1, r3 == null ? i3 - 1 : +r3);
      var a3 = [];
      return t3.paragraphs.forEach(function(i4) {
        var o3 = Math.max(n3, i4.start), s3 = Math.min(r3, i4.end);
        if (o3 < s3) {
          for (var l3 = t3.levels.slice(o3, s3 + 1), u3 = s3; u3 >= o3 && d2(e54[u3]) & c2; u3--) l3[u3] = i4.level;
          for (var f3 = i4.level, p3 = 1 / 0, m3 = 0; m3 < l3.length; m3++) {
            var h3 = l3[m3];
            h3 > f3 && (f3 = h3), h3 < p3 && (p3 = h3 | 1);
          }
          for (var g3 = f3; g3 >= p3; g3--) for (var _3 = 0; _3 < l3.length; _3++) if (l3[_3] >= g3) {
            for (var v3 = _3; _3 + 1 < l3.length && l3[_3 + 1] >= g3; ) _3++;
            _3 > v3 && a3.push([v3 + o3, _3 + o3]);
          }
        }
      }), a3;
    }
    function ve2(e54, t3, n3, r3) {
      var i3 = ye2(e54, t3, n3, r3), a3 = [].concat(e54);
      return i3.forEach(function(n4, r4) {
        a3[r4] = (t3.levels[n4] & 1 ? M2(e54[n4]) : null) || e54[n4];
      }), a3.join(``);
    }
    function ye2(e54, t3, n3, r3) {
      for (var i3 = _e2(e54, t3, n3, r3), a3 = [], o3 = 0; o3 < e54.length; o3++) a3[o3] = o3;
      return i3.forEach(function(e55) {
        for (var t4 = e55[0], n4 = e55[1], r4 = a3.slice(t4, n4 + 1), i4 = r4.length; i4--; ) a3[n4 - i4] = r4[i4];
      }), a3;
    }
    return e53.closingToOpeningBracket = b2, e53.getBidiCharType = d2, e53.getBidiCharTypeName = f2, e53.getCanonicalBracket = x2, e53.getEmbeddingLevels = fe2, e53.getMirroredCharacter = M2, e53.getMirroredCharactersMap = ge2, e53.getReorderSegments = _e2, e53.getReorderedIndices = ye2, e53.getReorderedString = ve2, e53.openingToClosingBracket = y2, Object.defineProperty(e53, "__esModule", { value: true }), e53;
  })({});
}
var rh = nh();
var ih = /[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/;
var ah = /* @__PURE__ */ new Set([`WS`, `FSI`, `LRI`, `RLI`, `PDI`]);
var oh = /* @__PURE__ */ new Set([`S`, `B`]);
function sh(e53, t2, n2, r2) {
  let i2 = [], a2 = n2;
  for (let o2 of Nm(e53.slice(n2, r2))) i2.push({ index: a2, text: o2, level: t2[a2] }), a2 += o2.length;
  return i2;
}
function ch(e53, t2) {
  let n2 = true;
  for (let r2 = e53.length - 1; r2 >= 0; r2--) {
    let i2 = rh.getBidiCharTypeName(e53[r2].text[0]);
    oh.has(i2) ? (e53[r2].level = t2, n2 = true) : n2 && ah.has(i2) ? e53[r2].level = t2 : n2 = false;
  }
}
function lh(e53, t2) {
  let n2 = t2, r2 = 1 / 0;
  for (let { level: t3 } of e53) t3 > n2 && (n2 = t3), (t3 | 1) < r2 && (r2 = t3 | 1);
  let i2 = e53.slice();
  for (let e54 = n2; e54 >= r2; e54--) for (let t3 = 0; t3 < i2.length; t3++) {
    if (i2[t3].level < e54) continue;
    let n3 = t3;
    for (; n3 + 1 < i2.length && i2[n3 + 1].level >= e54; ) n3++;
    for (let e55 = t3, r3 = n3; e55 < r3; e55++, r3--) [i2[e55], i2[r3]] = [i2[r3], i2[e55]];
    t3 = n3;
  }
  return i2;
}
function uh(e53) {
  return e53.level % 2 == 0 ? e53.text : rh.getMirroredCharacter(e53.text) ?? e53.text;
}
function dh(e53, t2) {
  return e53.find((e54) => t2 >= e54.start && t2 <= e54.end)?.level ?? 0;
}
function fh(e53, t2, n2, r2, i2) {
  let a2 = sh(e53, t2, r2, i2);
  ch(a2, n2);
  let o2 = ``, s2 = [];
  for (let e54 of lh(a2, n2)) {
    if (ih.test(e54.text)) continue;
    let t3 = uh(e54);
    o2 += t3, s2.push(...Array(t3.length).fill(e54.index));
  }
  return { text: o2, sourceIndices: s2 };
}
function ph(e53, t2) {
  let n2 = t2.filter((t3) => t3 > 0 && t3 < e53.length), r2 = [.../* @__PURE__ */ new Set([0, ...n2, e53.length])].sort((e54, t3) => e54 - t3), i2 = [];
  for (let e54 = 0; e54 + 1 < r2.length; e54++) i2.push([r2[e54], r2[e54 + 1]]);
  return i2;
}
function mh(e53, t2) {
  let { levels: n2, paragraphs: r2 } = rh.getEmbeddingLevels(e53);
  return ph(e53, t2.concat(r2.map((e54) => e54.start))).map(([t3, i2]) => fh(e53, n2, dh(r2, t3), t3, i2));
}
function hh(e53, t2) {
  return mh(e53, t2).map((e54) => e54.text);
}
function gh(e53, t2, n2) {
  return mh(e53, n2).map((e54) => [e54.text, e54.sourceIndices.map((e55) => t2[e55] ?? 0)]);
}
var _h = 4294967296;
var vh = 1 / _h;
var yh = typeof TextDecoder > `u` ? null : new TextDecoder(`utf-8`);
var bh = class {
  constructor(e53) {
    this.buf = ArrayBuffer.isView(e53) ? e53 : new Uint8Array(e53), this.dataView = new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.pos = 0, this.type = 0, this._valueStart = -1, this.length = this.buf.length;
  }
  readFields(e53, t2, n2 = this.length) {
    let r2;
    for (; r2 = this.nextField(n2); ) e53(r2, t2, this);
    return t2;
  }
  readMessage(e53, t2) {
    return this.readFields(e53, t2, this.readVarint() + this.pos);
  }
  readFixed32() {
    let e53 = this.dataView.getUint32(this.pos, true);
    return this.pos += 4, e53;
  }
  readSFixed32() {
    let e53 = this.dataView.getInt32(this.pos, true);
    return this.pos += 4, e53;
  }
  readFixed64() {
    let e53 = this.dataView.getUint32(this.pos, true) + this.dataView.getUint32(this.pos + 4, true) * _h;
    return this.pos += 8, e53;
  }
  readSFixed64() {
    let e53 = this.dataView.getUint32(this.pos, true) + this.dataView.getInt32(this.pos + 4, true) * _h;
    return this.pos += 8, e53;
  }
  readFloat() {
    let e53 = this.dataView.getFloat32(this.pos, true);
    return this.pos += 4, e53;
  }
  readDouble() {
    let e53 = this.dataView.getFloat64(this.pos, true);
    return this.pos += 8, e53;
  }
  readVarint(e53) {
    let t2 = this.buf, n2 = t2[this.pos++];
    if (n2 < 128) return n2;
    let r2 = n2 & 127, i2;
    return i2 = t2[this.pos++], r2 |= (i2 & 127) << 7, i2 < 128 || (i2 = t2[this.pos++], r2 |= (i2 & 127) << 14, i2 < 128) || (i2 = t2[this.pos++], r2 |= (i2 & 127) << 21, i2 < 128) ? r2 : (i2 = t2[this.pos], r2 |= (i2 & 15) << 28, Sh(r2, e53, this));
  }
  readSVarint() {
    let e53 = this.readVarint();
    return e53 % 2 == 1 ? (e53 + 1) / -2 : e53 / 2;
  }
  readBoolean() {
    return !!this.readVarint();
  }
  readString() {
    let e53 = this.readVarint() + this.pos, t2 = this.pos;
    return this.pos = e53, e53 - t2 >= 12 && yh ? yh.decode(this.buf.subarray(t2, e53)) : Lh(this.buf, t2, e53);
  }
  readBytes() {
    let e53 = this.readVarint() + this.pos, t2 = this.buf.subarray(this.pos, e53);
    return this.pos = e53, t2;
  }
  readPackedVarint(e53 = [], t2) {
    let n2 = this.readPackedEnd();
    for (; this.pos < n2; ) e53.push(this.readVarint(t2));
    return e53;
  }
  readPackedSVarint(e53 = []) {
    let t2 = this.readPackedEnd();
    for (; this.pos < t2; ) e53.push(this.readSVarint());
    return e53;
  }
  readPackedBoolean(e53 = []) {
    let t2 = this.readPackedEnd();
    for (; this.pos < t2; ) e53.push(this.readBoolean());
    return e53;
  }
  readPackedFloat(e53 = []) {
    let t2 = this.readPackedEnd();
    for (; this.pos < t2; ) e53.push(this.readFloat());
    return e53;
  }
  readPackedDouble(e53 = []) {
    let t2 = this.readPackedEnd();
    for (; this.pos < t2; ) e53.push(this.readDouble());
    return e53;
  }
  readPackedFixed32(e53 = []) {
    let t2 = this.readPackedEnd();
    for (; this.pos < t2; ) e53.push(this.readFixed32());
    return e53;
  }
  readPackedSFixed32(e53 = []) {
    let t2 = this.readPackedEnd();
    for (; this.pos < t2; ) e53.push(this.readSFixed32());
    return e53;
  }
  readPackedFixed64(e53 = []) {
    let t2 = this.readPackedEnd();
    for (; this.pos < t2; ) e53.push(this.readFixed64());
    return e53;
  }
  readPackedSFixed64(e53 = []) {
    let t2 = this.readPackedEnd();
    for (; this.pos < t2; ) e53.push(this.readSFixed64());
    return e53;
  }
  readPackedEnd() {
    return this.type === 2 ? this.readVarint() + this.pos : this.pos + 1;
  }
  nextField(e53 = this.length) {
    if (this.pos === this._valueStart && this.skip(this.type), this.pos >= e53) return 0;
    let t2 = this.readVarint();
    return this.type = t2 & 7, this._valueStart = this.pos, t2 >>> 3;
  }
  skip(e53) {
    let t2 = e53 & 7;
    if (t2 === 0) for (; this.buf[this.pos++] > 127; ) ;
    else if (t2 === 2) this.pos = this.readVarint() + this.pos;
    else if (t2 === 5) this.pos += 4;
    else if (t2 === 1) this.pos += 8;
    else throw Error(`Unimplemented type: ${t2}`);
  }
};
var xh = class {
  constructor(e53 = /* @__PURE__ */ new Uint8Array(16)) {
    this.buf = ArrayBuffer.isView(e53) ? e53 : new Uint8Array(e53), this.dataView = new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.pos = 0, this.length = this.buf.length;
  }
  writeTag(e53, t2) {
    this.writeVarint(e53 << 3 | t2);
  }
  realloc(e53) {
    let t2 = this.length || 16;
    for (; t2 < this.pos + e53; ) t2 *= 2;
    if (t2 !== this.length) {
      let e54 = new Uint8Array(t2);
      e54.set(this.buf), this.buf = e54, this.dataView = new DataView(e54.buffer), this.length = t2;
    }
  }
  finish() {
    return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length);
  }
  writeFixed32(e53) {
    this.realloc(4), this.dataView.setInt32(this.pos, e53, true), this.pos += 4;
  }
  writeSFixed32(e53) {
    this.realloc(4), this.dataView.setInt32(this.pos, e53, true), this.pos += 4;
  }
  writeFixed64(e53) {
    this.realloc(8), this.dataView.setInt32(this.pos, e53 & -1, true), this.dataView.setInt32(this.pos + 4, Math.floor(e53 * vh), true), this.pos += 8;
  }
  writeSFixed64(e53) {
    this.realloc(8), this.dataView.setInt32(this.pos, e53 & -1, true), this.dataView.setInt32(this.pos + 4, Math.floor(e53 * vh), true), this.pos += 8;
  }
  writeVarint(e53) {
    e53 = +e53 || 0, e53 >= 0 && e53 < 128 ? (this.pos >= this.length && this.realloc(1), this.buf[this.pos++] = e53) : e53 > 268435455 || e53 < 0 ? wh(e53, this) : (this.realloc(4), this.buf[this.pos++] = e53 & 127 | (e53 > 127 ? 128 : 0), !(e53 <= 127) && (this.buf[this.pos++] = (e53 >>>= 7) & 127 | (e53 > 127 ? 128 : 0), !(e53 <= 127) && (this.buf[this.pos++] = (e53 >>>= 7) & 127 | (e53 > 127 ? 128 : 0), !(e53 <= 127) && (this.buf[this.pos++] = e53 >>> 7 & 127))));
  }
  writeSVarint(e53) {
    this.writeVarint(e53 < 0 ? -e53 * 2 - 1 : e53 * 2);
  }
  writeBoolean(e53) {
    this.writeVarint(+e53);
  }
  writeString(e53) {
    e53 = String(e53), this.realloc(e53.length * 4), this.pos++;
    let t2 = this.pos;
    this.pos = Rh(this.buf, e53, this.pos);
    let n2 = this.pos - t2;
    n2 >= 128 && Dh(t2, n2, this), this.pos = t2 - 1, this.writeVarint(n2), this.pos += n2;
  }
  writeFloat(e53) {
    this.realloc(4), this.dataView.setFloat32(this.pos, e53, true), this.pos += 4;
  }
  writeDouble(e53) {
    this.realloc(8), this.dataView.setFloat64(this.pos, e53, true), this.pos += 8;
  }
  writeBytes(e53) {
    let t2 = e53.length;
    this.writeVarint(t2), this.realloc(t2), this.buf.set(e53, this.pos), this.pos += t2;
  }
  writeRawMessage(e53, t2) {
    this.pos++;
    let n2 = this.pos;
    e53(t2, this);
    let r2 = this.pos - n2;
    r2 >= 128 && Dh(n2, r2, this), this.pos = n2 - 1, this.writeVarint(r2), this.pos += r2;
  }
  writeMessage(e53, t2, n2) {
    this.writeTag(e53, 2), this.writeRawMessage(t2, n2);
  }
  writePackedVarint(e53, t2) {
    t2.length && this.writeMessage(e53, Oh, t2);
  }
  writePackedSVarint(e53, t2) {
    t2.length && this.writeMessage(e53, kh, t2);
  }
  writePackedBoolean(e53, t2) {
    t2.length && this.writeMessage(e53, Mh, t2);
  }
  writePackedFloat(e53, t2) {
    t2.length && this.writeMessage(e53, Ah, t2);
  }
  writePackedDouble(e53, t2) {
    t2.length && this.writeMessage(e53, jh, t2);
  }
  writePackedFixed32(e53, t2) {
    t2.length && this.writeMessage(e53, Nh, t2);
  }
  writePackedSFixed32(e53, t2) {
    t2.length && this.writeMessage(e53, Ph, t2);
  }
  writePackedFixed64(e53, t2) {
    t2.length && this.writeMessage(e53, Fh, t2);
  }
  writePackedSFixed64(e53, t2) {
    t2.length && this.writeMessage(e53, Ih, t2);
  }
  writeBytesField(e53, t2) {
    this.writeTag(e53, 2), this.writeBytes(t2);
  }
  writeFixed32Field(e53, t2) {
    this.writeTag(e53, 5), this.writeFixed32(t2);
  }
  writeSFixed32Field(e53, t2) {
    this.writeTag(e53, 5), this.writeSFixed32(t2);
  }
  writeFixed64Field(e53, t2) {
    this.writeTag(e53, 1), this.writeFixed64(t2);
  }
  writeSFixed64Field(e53, t2) {
    this.writeTag(e53, 1), this.writeSFixed64(t2);
  }
  writeVarintField(e53, t2) {
    this.writeTag(e53, 0), this.writeVarint(t2);
  }
  writeSVarintField(e53, t2) {
    this.writeTag(e53, 0), this.writeSVarint(t2);
  }
  writeStringField(e53, t2) {
    this.writeTag(e53, 2), this.writeString(t2);
  }
  writeFloatField(e53, t2) {
    this.writeTag(e53, 5), this.writeFloat(t2);
  }
  writeDoubleField(e53, t2) {
    this.writeTag(e53, 1), this.writeDouble(t2);
  }
  writeBooleanField(e53, t2) {
    this.writeVarintField(e53, +t2);
  }
};
function Sh(e53, t2, n2) {
  let r2 = n2.buf, i2, a2;
  if (a2 = r2[n2.pos++], i2 = (a2 & 112) >> 4, a2 < 128 || (a2 = r2[n2.pos++], i2 |= (a2 & 127) << 3, a2 < 128) || (a2 = r2[n2.pos++], i2 |= (a2 & 127) << 10, a2 < 128) || (a2 = r2[n2.pos++], i2 |= (a2 & 127) << 17, a2 < 128) || (a2 = r2[n2.pos++], i2 |= (a2 & 127) << 24, a2 < 128) || (a2 = r2[n2.pos++], i2 |= (a2 & 1) << 31, a2 < 128)) return Ch(e53, i2, t2);
  throw Error(`Expected varint not more than 10 bytes`);
}
function Ch(e53, t2, n2) {
  return n2 ? t2 * 4294967296 + (e53 >>> 0) : (t2 >>> 0) * 4294967296 + (e53 >>> 0);
}
function wh(e53, t2) {
  let n2, r2;
  if (e53 >= 0 ? (n2 = e53 % 4294967296 | 0, r2 = e53 / 4294967296 | 0) : (n2 = ~(-e53 % 4294967296), r2 = ~(-e53 / 4294967296), n2 ^ 4294967295 ? n2 = n2 + 1 | 0 : (n2 = 0, r2 = r2 + 1 | 0)), e53 >= 18446744073709552e3 || e53 < -18446744073709552e3) throw Error(`Given varint doesn't fit into 10 bytes`);
  t2.realloc(10), Th(n2, r2, t2), Eh(r2, t2);
}
function Th(e53, t2, n2) {
  n2.buf[n2.pos++] = e53 & 127 | 128, e53 >>>= 7, n2.buf[n2.pos++] = e53 & 127 | 128, e53 >>>= 7, n2.buf[n2.pos++] = e53 & 127 | 128, e53 >>>= 7, n2.buf[n2.pos++] = e53 & 127 | 128, e53 >>>= 7, n2.buf[n2.pos] = e53 & 127;
}
function Eh(e53, t2) {
  let n2 = (e53 & 7) << 4;
  t2.buf[t2.pos++] |= n2 | ((e53 >>>= 3) ? 128 : 0), e53 && (t2.buf[t2.pos++] = e53 & 127 | ((e53 >>>= 7) ? 128 : 0), e53 && (t2.buf[t2.pos++] = e53 & 127 | ((e53 >>>= 7) ? 128 : 0), e53 && (t2.buf[t2.pos++] = e53 & 127 | ((e53 >>>= 7) ? 128 : 0), e53 && (t2.buf[t2.pos++] = e53 & 127 | ((e53 >>>= 7) ? 128 : 0), e53 && (t2.buf[t2.pos++] = e53 & 127)))));
}
function Dh(e53, t2, n2) {
  let r2 = t2 <= 16383 ? 1 : t2 <= 2097151 ? 2 : t2 <= 268435455 ? 3 : Math.floor(Math.log(t2) / (Math.LN2 * 7));
  n2.realloc(r2), n2.buf.copyWithin(e53 + r2, e53, n2.pos);
}
function Oh(e53, t2) {
  let n2 = e53.length, r2 = t2.buf, i2 = t2.pos, a2 = t2.length;
  for (let o2 = 0; o2 < n2; o2++) {
    let n3 = e53[o2];
    if (n3 < 0 || i2 + 10 > a2) t2.pos = i2, t2.writeVarint(n3), r2 = t2.buf, i2 = t2.pos, a2 = t2.length;
    else {
      for (; n3 > 127; ) r2[i2++] = n3 % 128 | 128, n3 = Math.floor(n3 / 128);
      r2[i2++] = n3;
    }
  }
  t2.pos = i2;
}
function kh(e53, t2) {
  for (let n2 = 0; n2 < e53.length; n2++) t2.writeSVarint(e53[n2]);
}
function Ah(e53, t2) {
  for (let n2 = 0; n2 < e53.length; n2++) t2.writeFloat(e53[n2]);
}
function jh(e53, t2) {
  for (let n2 = 0; n2 < e53.length; n2++) t2.writeDouble(e53[n2]);
}
function Mh(e53, t2) {
  for (let n2 = 0; n2 < e53.length; n2++) t2.writeBoolean(e53[n2]);
}
function Nh(e53, t2) {
  for (let n2 = 0; n2 < e53.length; n2++) t2.writeFixed32(e53[n2]);
}
function Ph(e53, t2) {
  for (let n2 = 0; n2 < e53.length; n2++) t2.writeSFixed32(e53[n2]);
}
function Fh(e53, t2) {
  for (let n2 = 0; n2 < e53.length; n2++) t2.writeFixed64(e53[n2]);
}
function Ih(e53, t2) {
  for (let n2 = 0; n2 < e53.length; n2++) t2.writeSFixed64(e53[n2]);
}
function Lh(e53, t2, n2) {
  let r2 = ``, i2 = t2;
  for (; i2 < n2; ) {
    let t3 = e53[i2], a2 = null, o2 = t3 > 239 ? 4 : t3 > 223 ? 3 : t3 > 191 ? 2 : 1;
    if (i2 + o2 > n2) break;
    let s2, c2, l2;
    o2 === 1 ? t3 < 128 && (a2 = t3) : o2 === 2 ? (s2 = e53[i2 + 1], (s2 & 192) == 128 && (a2 = (t3 & 31) << 6 | s2 & 63, a2 <= 127 && (a2 = null))) : o2 === 3 ? (s2 = e53[i2 + 1], c2 = e53[i2 + 2], (s2 & 192) == 128 && (c2 & 192) == 128 && (a2 = (t3 & 15) << 12 | (s2 & 63) << 6 | c2 & 63, (a2 <= 2047 || a2 >= 55296 && a2 <= 57343) && (a2 = null))) : o2 === 4 && (s2 = e53[i2 + 1], c2 = e53[i2 + 2], l2 = e53[i2 + 3], (s2 & 192) == 128 && (c2 & 192) == 128 && (l2 & 192) == 128 && (a2 = (t3 & 15) << 18 | (s2 & 63) << 12 | (c2 & 63) << 6 | l2 & 63, (a2 <= 65535 || a2 >= 1114112) && (a2 = null))), a2 === null ? (a2 = 65533, o2 = 1) : a2 > 65535 && (a2 -= 65536, r2 += String.fromCharCode(a2 >>> 10 & 1023 | 55296), a2 = 56320 | a2 & 1023), r2 += String.fromCharCode(a2), i2 += o2;
  }
  return r2;
}
function Rh(e53, t2, n2) {
  for (let r2 = 0, i2, a2; r2 < t2.length; r2++) {
    if (i2 = t2.charCodeAt(r2), i2 > 55295 && i2 < 57344) {
      if (a2) {
        if (i2 < 56320) {
          e53[n2++] = 239, e53[n2++] = 191, e53[n2++] = 189, a2 = i2;
          continue;
        }
        i2 = a2 - 55296 << 10 | i2 - 56320 | 65536, a2 = null;
      } else {
        i2 > 56319 || r2 + 1 === t2.length ? (e53[n2++] = 239, e53[n2++] = 191, e53[n2++] = 189) : a2 = i2;
        continue;
      }
    } else a2 &&= (e53[n2++] = 239, e53[n2++] = 191, e53[n2++] = 189, null);
    i2 < 128 ? e53[n2++] = i2 : (i2 < 2048 ? e53[n2++] = i2 >> 6 | 192 : (i2 < 65536 ? e53[n2++] = i2 >> 12 | 224 : (e53[n2++] = i2 >> 18 | 240, e53[n2++] = i2 >> 12 & 63 | 128), e53[n2++] = i2 >> 6 & 63 | 128), e53[n2++] = i2 & 63 | 128);
  }
  return n2;
}
function zh(e53) {
  return typeof e53?.renderWithWebGL == `function`;
}
function Bh(e53) {
  let t2 = 0, n2 = 0;
  for (let r3 of e53) t2 += r3.w * r3.h, n2 = Math.max(n2, r3.w);
  e53.sort((e54, t3) => t3.h - e54.h);
  let r2 = [{ x: 0, y: 0, w: Math.max(Math.ceil(Math.sqrt(t2 / 0.95)), n2), h: 1 / 0 }], i2 = 0, a2 = 0;
  for (let t3 of e53) for (let e54 = r2.length - 1; e54 >= 0; e54--) {
    let n3 = r2[e54];
    if (!(t3.w > n3.w || t3.h > n3.h)) {
      if (t3.x = n3.x, t3.y = n3.y, a2 = Math.max(a2, t3.y + t3.h), i2 = Math.max(i2, t3.x + t3.w), t3.w === n3.w && t3.h === n3.h) {
        let t4 = r2.pop();
        t4 && e54 < r2.length && (r2[e54] = t4);
      } else t3.h === n3.h ? (n3.x += t3.w, n3.w -= t3.w) : t3.w === n3.w ? (n3.y += t3.h, n3.h -= t3.h) : (r2.push({ x: n3.x + t3.w, y: n3.y, w: n3.w - t3.w, h: t3.h }), n3.y += t3.h, n3.h -= t3.h);
      break;
    }
  }
  return { w: i2, h: a2, fill: t2 / (i2 * a2) || 0 };
}
var Vh = class {
  constructor(e53, { pixelRatio: t2, version: n2, isWebGLImage: r2 = false, stretchX: i2, stretchY: a2, content: o2, textFitWidth: s2, textFitHeight: c2 }) {
    this.paddedRect = e53, this.pixelRatio = t2, this.stretchX = i2, this.stretchY = a2, this.content = o2, this.version = n2, this.needsFirstWebGLRender = r2, this.textFitWidth = s2, this.textFitHeight = c2;
  }
  get tl() {
    return [this.paddedRect.x + 1, this.paddedRect.y + 1];
  }
  get br() {
    return [this.paddedRect.x + this.paddedRect.w - 1, this.paddedRect.y + this.paddedRect.h - 1];
  }
  get tlbr() {
    return this.tl.concat(this.br);
  }
  get displaySize() {
    return [(this.paddedRect.w - 2) / this.pixelRatio, (this.paddedRect.h - 2) / this.pixelRatio];
  }
};
var Hh = class {
  constructor(e53, t2) {
    let n2 = {}, r2 = {};
    this.haveRenderCallbacks = [], this.patchedUpdateVersion = -1;
    let i2 = [];
    this.addImages(e53, n2, i2), this.addImages(t2, r2, i2);
    let { w: a2, h: o2 } = Bh(i2), s2 = new ml({ width: a2 || 1, height: o2 || 1 });
    for (let t3 in e53) {
      let r3 = e53[t3];
      if (r3.isWebGLImage) continue;
      let i3 = n2[t3].paddedRect;
      ml.copy(r3.data, s2, { x: 0, y: 0 }, { x: i3.x + 1, y: i3.y + 1 }, r3.data);
    }
    for (let e54 in t2) {
      let n3 = t2[e54], i3 = r2[e54].paddedRect, a3 = i3.x + 1, o3 = i3.y + 1, c2 = n3.data.width, l2 = n3.data.height;
      ml.copy(n3.data, s2, { x: 0, y: 0 }, { x: a3, y: o3 }, n3.data), ml.copy(n3.data, s2, { x: 0, y: l2 - 1 }, { x: a3, y: o3 - 1 }, { width: c2, height: 1 }), ml.copy(n3.data, s2, { x: 0, y: 0 }, { x: a3, y: o3 + l2 }, { width: c2, height: 1 }), ml.copy(n3.data, s2, { x: c2 - 1, y: 0 }, { x: a3 - 1, y: o3 }, { width: 1, height: l2 }), ml.copy(n3.data, s2, { x: 0, y: 0 }, { x: a3 + c2, y: o3 }, { width: 1, height: l2 });
    }
    this.image = s2, this.iconPositions = n2, this.patternPositions = r2;
  }
  addImages(e53, t2, n2) {
    for (let r2 in e53) {
      let i2 = e53[r2], a2 = { x: 0, y: 0, w: i2.data.width + 2, h: i2.data.height + 2 };
      n2.push(a2), t2[r2] = new Vh(a2, i2), i2.hasRenderCallback && this.haveRenderCallbacks.push(r2);
    }
  }
  patchUpdatedImages(e53, t2) {
    if (e53.dispatchRenderCallbacks(this.haveRenderCallbacks), this.patchedUpdateVersion !== e53.updateVersion) {
      this.patchedUpdateVersion = e53.updateVersion;
      for (let n2 in this.iconPositions) this.patchUpdatedImage(this.iconPositions[n2], e53.getImage(n2), t2);
      for (let n2 in this.patternPositions) this.patchUpdatedImage(this.patternPositions[n2], e53.getImage(n2), t2);
    }
  }
  patchUpdatedImage(e53, t2, n2) {
    if (!e53 || !t2 || !e53.needsFirstWebGLRender && e53.version === t2.version) return;
    e53.needsFirstWebGLRender = false, e53.version = t2.version;
    let [r2, i2] = e53.tl, a2 = t2.userImage?.data;
    if (!zh(a2)) {
      n2.update(t2.data, void 0, { x: r2, y: i2 });
      return;
    }
    let { width: o2, height: s2 } = t2.data;
    n2.context.setCustomLayerDefaults(), a2.renderWithWebGL({ gl: n2.context.gl, texture: n2.texture, x: r2, y: i2, width: o2, height: s2 }), n2.context.setDirty();
  }
};
G(`ImagePosition`, Vh), G(`ImageAtlas`, Hh);
var Uh = /* @__PURE__ */ (function(e53) {
  return e53[e53.none = 0] = `none`, e53[e53.horizontal = 1] = `horizontal`, e53[e53.vertical = 2] = `vertical`, e53[e53.horizontalOnly = 3] = `horizontalOnly`, e53;
})(Uh || {});
function Wh(e53) {
  for (let t2 of e53) if (t2.positionedGlyphs.length !== 0) return false;
  return true;
}
function Gh(e53, t2) {
  let n2 = [], r2 = 0;
  for (let i2 of t2) n2.push(e53.substring(r2, i2)), r2 = i2;
  return r2 < e53.length() && n2.push(e53.substring(r2, e53.length())), n2;
}
var Kh = new RegExp("^\\p{gc=M}$", "u");
function qh(e53) {
  let t2 = [], n2 = 0;
  for (; n2 < e53.length; ) {
    if (!Kh.test(e53[n2])) {
      t2.push(n2), n2++;
      continue;
    }
    let r2 = n2;
    for (; r2 < e53.length && Kh.test(e53[r2]); ) r2++;
    let i2 = e53[r2];
    if (i2 !== void 0 && Um(i2.codePointAt(0))) {
      t2.push(r2);
      for (let e54 = r2 - 1; e54 >= n2; e54--) t2.push(e54);
      n2 = r2 + 1;
    } else {
      for (let e54 = n2; e54 < r2; e54++) t2.push(e54);
      n2 = r2;
    }
  }
  return t2;
}
function Jh(e53) {
  let t2 = [], n2 = 0;
  for (let r2 of e53.graphemes()) t2.push(...Array(r2.length).fill(e53.sectionIndex[n2])), n2++;
  return t2;
}
function Yh(e53, t2) {
  let n2 = t2.map((t3) => e53.toCodeUnitIndex(t3)), r2 = Zp.isParsed() ? Zp : null;
  if (e53.sections.length === 1) return r2 ? r2.processBidirectionalText(e53.toString(), n2).map((t3) => Qh(t3, e53.sections, [...t3].map(() => 0))) : hh(e53.toString(), n2).map((t3) => Xh([...t3], e53.sections, [...t3].map(() => 0)));
  let i2 = Jh(e53);
  return r2 ? r2.processStyledBidirectionalText(e53.text, i2, n2).map(([t3, n3]) => Qh(t3, e53.sections, n3)) : gh(e53.text, i2, n2).map(([t3, n3]) => {
    let r3 = [...t3];
    return Xh(r3, e53.sections, Zh(r3).map((e54) => n3[e54] ?? 0));
  });
}
function Xh(e53, t2, n2) {
  let r2 = new th(e53.join(``), t2, []), i2 = 0;
  for (let e54 of r2.graphemes()) r2.sectionIndex.push(n2[i2] ?? 0), i2 += [...e54].length;
  return r2;
}
function Zh(e53) {
  let t2 = [], n2 = 0;
  for (let r2 of e53) t2.push(n2), n2 += r2.length;
  return t2;
}
function Qh(e53, t2, n2) {
  let r2 = [...e53], i2 = Zh(r2), a2 = qh(r2);
  return Xh(a2.map((e54) => r2[e54]), t2, a2.map((e54) => n2[i2[e54]] ?? 0));
}
function $h(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2) {
  let h2 = th.fromFeature(e53, i2, d2 === 2, t2), g2 = h2.determineLineBreaks(l2, a2, t2, r2, p2), _2 = Wm(h2.text) ? Yh(h2, g2) : Gh(h2, g2), v2 = [], y2 = { positionedLines: v2, text: h2.toString(), top: u2[1], bottom: u2[1], left: u2[0], right: u2[0], writingMode: d2, iconsInText: false, verticalizable: false };
  return pg(y2, t2, n2, r2, _2, o2, s2, c2, d2, l2, f2, m2), !Wh(v2) && y2;
}
function eg(e53) {
  let t2 = 0.5, n2 = 0.5;
  switch (e53) {
    case `right`:
    case `top-right`:
    case `bottom-right`:
      t2 = 1;
      break;
    case `left`:
    case `top-left`:
    case `bottom-left`:
      t2 = 0;
  }
  switch (e53) {
    case `bottom`:
    case `bottom-right`:
    case `bottom-left`:
      n2 = 1;
      break;
    case `top`:
    case `top-right`:
    case `top-left`:
      n2 = 0;
  }
  return { horizontalAlign: t2, verticalAlign: n2 };
}
function tg(e53, t2, n2) {
  let r2 = t2.getMaxScale() * 24, { maxImageWidth: i2, maxImageHeight: a2 } = t2.getMaxImageSize(e53), o2 = Math.max(r2, a2 * n2);
  return { verticalLineContentWidth: Math.max(r2, i2 * n2), horizontalLineContentHeight: o2 };
}
function ng(e53) {
  switch (e53) {
    case `top`:
      return 0;
    case `center`:
      return 0.5;
    default:
      return 1;
  }
}
function rg(e53, t2) {
  return e53?.rect ? e53 : t2 ? { rect: null, metrics: t2.metrics } : null;
}
function ig(e53, t2, n2) {
  return !(e53 === 1 || !t2 && !tm(n2) || t2 && (Im(n2) || Hm(n2)));
}
function ag(e53) {
  return new RegExp("\\p{Nd}", "u").test(String.fromCodePoint(e53));
}
function og(e53) {
  return new RegExp("\\p{Lu}", "u").test(String.fromCodePoint(e53));
}
function sg(e53) {
  let t2 = e53.some(ag) && e53.every((e54) => ag(e54) || Lm(e54)), n2 = e53.length <= 3 && e53.every((e54) => og(e54) || ag(e54));
  return t2 || n2;
}
function cg(e53) {
  return (ag(e53) || og(e53)) && !Hm(e53);
}
function lg(e53, t2) {
  return t2 ? ig(2, true, e53) : !Vm(e53) || cg(e53) || Lm(e53);
}
function ug(e53, t2, n2) {
  let r2 = false;
  for (let i2 = 0; i2 < e53.length; i2++) {
    if (t2[i2]) continue;
    let a2 = Gm[e53[i2]];
    if (a2 && (i2 === 0 || t2[i2 - 1]) && (i2 === e53.length - 1 || t2[i2 + 1])) {
      if (t2[i2] = true, n2[i2]) continue;
      e53[i2] = a2, r2 = true;
    }
  }
  return r2;
}
function dg(e53, t2, n2) {
  for (; t2 >= 0 && t2 < e53.length && Im(e53[t2]); ) t2 += n2;
  let r2 = [];
  for (; t2 >= 0 && t2 < e53.length && !tm(e53[t2]) && !Im(e53[t2]); ) r2.push(e53[t2]), t2 += n2;
  return !sg(r2) && !r2.every(Lm) && r2.some(Vm);
}
function fg(e53, t2) {
  let n2 = e53.graphemes().slice(), r2 = n2.map((e54) => e54.codePointAt(0)), i2 = n2.map((n3, r3) => {
    let i3 = e53.getSection(r3);
    return `fontStack` in i3 && !!t2[i3.fontStack]?.vertical?.[n3];
  }), a2 = r2.map(tm), o2 = (t3) => !a2[t3] && !Im(r2[t3]) && !(`imageName` in e53.getSection(t3));
  for (let e54 = 0; e54 < r2.length; e54++) {
    if (!o2(e54)) continue;
    let t3 = e54;
    for (; t3 + 1 < r2.length && o2(t3 + 1); ) t3++;
    let n3 = r2.slice(e54, t3 + 1), s2 = sg(n3), c2 = n3.every(Lm), l2 = c2 && (dg(r2, e54 - 1, -1) || dg(r2, t3 + 1, 1)), u2 = !s2 && n3.some(Vm);
    for (let n4 = e54; n4 <= t3; n4++) a2[n4] = s2 && cg(r2[n4]) || i2[n4] && !l2 && (c2 || !u2 && !Vm(r2[n4]));
    e54 = t3;
  }
  if (i2.some((e54, t3) => e54 && !a2[t3])) {
    let n3 = e53.text;
    if (e53.verticalizePunctuation(t2, a2), e53.text !== n3) return fg(e53, t2);
  }
  return ug(n2, a2, i2) && (e53.text = n2.join(``), e53.cachedGraphemes = n2), a2;
}
function pg(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
  let f2 = 0, p2 = 0, m2 = 0, h2 = 0, g2 = s2 === `right` ? 1 : s2 === `left` ? 0 : 0.5, _2 = 24 / d2, v2 = 0;
  for (let o3 of i2) {
    o3.trim();
    let i3 = o3.getMaxScale(), s3 = { positionedGlyphs: [], lineOffset: 0 };
    e53.positionedLines[v2] = s3;
    let d3 = s3.positionedGlyphs, y3 = 0;
    if (!o3.length()) {
      p2 += a2, ++v2;
      continue;
    }
    let b3 = tg(r2, o3, _2), x2 = c2 === 2 && !u2 ? fg(o3, t2) : null, S2 = o3.graphemes();
    for (let a3 = 0; a3 < S2.length; a3++) {
      let s4 = o3.getSection(a3), m3 = S2[a3], h3 = m3.codePointAt(0), g3 = x2 ? x2[a3] : ig(c2, u2, h3), v3 = `fontStack` in s4 && Fm(m3) && !t2[s4.fontStack]?.default?.[m3] ? [...m3] : [m3];
      for (let c3 of v3) {
        let u3 = { glyph: c3.codePointAt(0), grapheme: c3, imageName: null, x: f2, y: p2 + -17, vertical: g3, scale: 1, fontStack: ``, sectionIndex: o3.getSectionIndex(a3), metrics: null, rect: null }, m4;
        if (`fontStack` in s4) {
          if (m4 = mg(s4, c3, g3, b3, t2, n2), !m4) continue;
          u3.fontStack = s4.fontStack;
        } else {
          if (e53.iconsInText = true, s4.scale *= _2, m4 = hg(s4, g3, i3, b3, r2), !m4) continue;
          y3 = Math.max(y3, m4.imageOffset), u3.imageName = s4.imageName;
        }
        let { rect: h4, metrics: v4, baselineOffset: x3 } = m4;
        if (u3.y += x3, u3.scale = s4.scale, u3.metrics = v4, u3.rect = h4, d3.push(u3), !g3) f2 += v4.advance * s4.scale + l2;
        else {
          e53.verticalizable = true;
          let t3 = `imageName` in s4 ? v4.advance : 24;
          f2 += t3 * s4.scale + l2;
        }
      }
    }
    if (d3.length !== 0) {
      let e54 = f2 - l2;
      m2 = Math.max(e54, m2), gg(d3, 0, d3.length - 1, g2);
    }
    f2 = 0;
    let C2 = (i3 - 1) * 24;
    s3.lineOffset = Math.max(y3, C2);
    let w2 = a2 * i3 + y3;
    p2 += w2, h2 = Math.max(w2, h2), ++v2;
  }
  let { horizontalAlign: y2, verticalAlign: b2 } = eg(o2);
  _g(e53.positionedLines, g2, y2, b2, m2, h2, a2, p2, i2.length), e53.top += -b2 * p2, e53.bottom = e53.top + p2, e53.left += -y2 * m2, e53.right = e53.left + m2;
}
function mg(e53, t2, n2, r2, i2, a2) {
  let o2 = n2 && i2[e53.fontStack]?.vertical?.[t2] ? `vertical` : `default`, s2 = a2[e53.fontStack]?.[o2]?.[t2], c2 = i2[e53.fontStack]?.[o2]?.[t2], l2 = rg(s2, c2);
  if (l2 === null) return null;
  let u2;
  if (n2) u2 = r2.verticalLineContentWidth - e53.scale * 24;
  else {
    let t3 = ng(e53.verticalAlign);
    u2 = (r2.horizontalLineContentHeight - e53.scale * 24) * t3;
  }
  return { rect: l2.rect, metrics: l2.metrics, baselineOffset: u2 };
}
function hg(e53, t2, n2, r2, i2) {
  let a2 = i2[e53.imageName];
  if (!a2) return null;
  let o2 = a2.paddedRect, s2 = a2.displaySize, c2 = { width: s2[0], height: s2[1], left: 1, top: -3, advance: t2 ? s2[1] : s2[0] }, l2;
  if (t2) l2 = r2.verticalLineContentWidth - s2[1] * e53.scale;
  else {
    let t3 = ng(e53.verticalAlign);
    l2 = (r2.horizontalLineContentHeight - s2[1] * e53.scale) * t3;
  }
  let u2 = (t2 ? s2[0] : s2[1]) * e53.scale - 24 * n2;
  return { rect: o2, metrics: c2, baselineOffset: l2, imageOffset: u2 };
}
function gg(e53, t2, n2, r2) {
  if (r2 === 0) return;
  let i2 = e53[n2], a2 = i2.metrics.advance * i2.scale, o2 = (e53[n2].x + a2) * r2;
  for (let r3 = t2; r3 <= n2; r3++) e53[r3].x -= o2;
}
function _g(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = (t2 - n2) * i2, u2 = 0;
  u2 = a2 === o2 ? -r2 * c2 * o2 + 0.5 * o2 : -s2 * r2 - -17;
  for (let t3 of e53) for (let e54 of t3.positionedGlyphs) e54.x += l2, e54.y += u2;
}
function vg(e53, t2, n2) {
  let { horizontalAlign: r2, verticalAlign: i2 } = eg(n2), a2 = t2[0], o2 = t2[1], s2 = a2 - e53.displaySize[0] * r2, c2 = s2 + e53.displaySize[0], l2 = o2 - e53.displaySize[1] * i2;
  return { image: e53, top: l2, bottom: l2 + e53.displaySize[1], left: s2, right: c2 };
}
function yg(e53) {
  let t2 = e53.left, n2 = e53.top, r2 = e53.right - t2, i2 = e53.bottom - n2, a2 = e53.image.content[2] - e53.image.content[0], o2 = e53.image.content[3] - e53.image.content[1], s2 = e53.image.textFitWidth ?? `stretchOrShrink`, c2 = e53.image.textFitHeight ?? `stretchOrShrink`, l2 = a2 / o2;
  if (c2 === `proportional`) {
    if (s2 === `stretchOnly` && r2 / i2 < l2 || s2 === `proportional`) {
      let e54 = Math.ceil(i2 * l2);
      t2 *= e54 / r2, r2 = e54;
    }
  } else if (s2 === `proportional` && c2 === `stretchOnly` && l2 !== 0 && r2 / i2 > l2) {
    let e54 = Math.ceil(r2 / l2);
    n2 *= e54 / i2, i2 = e54;
  }
  return { x1: t2, y1: n2, x2: t2 + r2, y2: n2 + i2 };
}
function bg(e53, t2, n2, r2, i2, a2) {
  let o2 = e53.image, s2;
  if (o2.content) {
    let e54 = o2.content, t3 = o2.pixelRatio || 1;
    s2 = [e54[0] / t3, e54[1] / t3, o2.displaySize[0] - e54[2] / t3, o2.displaySize[1] - e54[3] / t3];
  }
  let c2 = t2.left * a2, l2 = t2.right * a2, u2, d2, f2, p2;
  n2 === `width` || n2 === `both` ? (p2 = i2[0] + c2 - r2[3], d2 = i2[0] + l2 + r2[1]) : (p2 = i2[0] + (c2 + l2 - o2.displaySize[0]) / 2, d2 = p2 + o2.displaySize[0]);
  let m2 = t2.top * a2, h2 = t2.bottom * a2;
  return n2 === `height` || n2 === `both` ? (u2 = i2[1] + m2 - r2[0], f2 = i2[1] + h2 + r2[2]) : (u2 = i2[1] + (m2 + h2 - o2.displaySize[1]) / 2, f2 = u2 + o2.displaySize[1]), { image: o2, top: u2, right: d2, bottom: f2, left: p2, collisionPadding: s2 };
}
var xg = 32640;
function Sg(e53, t2) {
  let { expression: n2 } = t2;
  if (n2.kind === `constant`) return { kind: `constant`, layoutSize: n2.evaluate(new K(e53 + 1)) };
  if (n2.kind === `source`) return { kind: `source` };
  if (n2.kind === `composite`) {
    let { minZoom: t3, maxZoom: r2 } = Cg(n2.zoomStops, e53);
    return { kind: `composite`, minZoom: t3, maxZoom: r2, interpolationType: n2.interpolationType };
  }
  {
    let t3 = wg(n2), r2 = n2.evaluate(new K(e53 + 1));
    return { kind: `camera`, zoomStops: n2.zoomStops, sizes: t3, layoutSize: r2, interpolationType: n2.interpolationType };
  }
}
function Cg(e53, t2) {
  let n2 = 0;
  for (; n2 < e53.length && e53[n2] <= t2; ) n2++;
  n2 = Math.max(0, n2 - 1);
  let r2 = n2;
  for (; r2 < e53.length && e53[r2] < t2 + 1; ) r2++;
  return r2 = Math.min(e53.length - 1, r2), { minZoom: e53[n2], maxZoom: e53[r2] };
}
function wg(e53) {
  return e53.zoomStops.map((t2) => e53.evaluate(new K(t2 === -1 / 0 ? e53.zoomStops[1] - 1 : t2)));
}
var Tg = class e49 extends l {
  constructor(e53, t2, n2, r2) {
    super(e53, t2), this.angle = n2, r2 !== void 0 && (this.segment = r2);
  }
  clone() {
    return new e49(this.x, this.y, this.angle, this.segment);
  }
};
G(`Anchor`, Tg);
function Eg(e53, t2, n2, r2, i2) {
  if (t2.segment === void 0 || n2 === 0) return true;
  let a2 = t2, o2 = t2.segment + 1, s2 = 0;
  for (; s2 > -n2 / 2; ) {
    if (o2--, o2 < 0) return false;
    s2 -= e53[o2].dist(a2), a2 = e53[o2];
  }
  s2 += e53[o2].dist(e53[o2 + 1]), o2++;
  let c2 = [], l2 = 0;
  for (; s2 < n2 / 2; ) {
    let t3 = e53[o2 - 1], n3 = e53[o2], a3 = e53[o2 + 1];
    if (!a3) return false;
    let u2 = t3.angleTo(n3) - n3.angleTo(a3);
    for (u2 = Math.abs((u2 + 3 * Math.PI) % (Math.PI * 2) - Math.PI), c2.push({ distance: s2, angleDelta: u2 }), l2 += u2; s2 - c2[0].distance > r2; ) l2 -= c2.shift().angleDelta;
    if (l2 > i2) return false;
    o2++, s2 += n3.dist(a3);
  }
  return true;
}
function Dg(e53) {
  let t2 = 0;
  for (let n2 = 0; n2 < e53.length - 1; n2++) t2 += e53[n2].dist(e53[n2 + 1]);
  return t2;
}
function Og(e53, t2, n2) {
  return e53 ? 3 / 5 * t2 * n2 : 0;
}
function kg(e53, t2) {
  return Math.max(e53 ? e53.right - e53.left : 0, t2 ? t2.right - t2.left : 0);
}
function Ag(e53, t2, n2, r2, i2, a2) {
  let o2 = Og(n2, i2, a2), s2 = kg(n2, r2) * a2, c2 = 0, l2 = Dg(e53) / 2;
  for (let n3 = 0; n3 < e53.length - 1; n3++) {
    let r3 = e53[n3], i3 = e53[n3 + 1], a3 = r3.dist(i3);
    if (c2 + a3 > l2) {
      let u2 = (l2 - c2) / a3, d2 = new Tg(Ft.number(r3.x, i3.x, u2), Ft.number(r3.y, i3.y, u2), i3.angleTo(r3), n3);
      return d2._round(), !o2 || Eg(e53, d2, s2, o2, t2) ? d2 : void 0;
    }
    c2 += a3;
  }
}
function jg(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = Og(r2, a2, o2), u2 = kg(r2, i2), d2 = u2 * o2, f2 = e53[0].x === 0 || e53[0].x === c2 || e53[0].y === 0 || e53[0].y === c2;
  t2 - d2 < t2 / 4 && (t2 = d2 + t2 / 4);
  let p2 = a2 * 2;
  return Mg(e53, f2 ? t2 / 2 * s2 % t2 : (u2 / 2 + p2) * o2 * s2 % t2, t2, l2, n2, d2, f2, false, c2);
}
function Mg(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
  let l2 = a2 / 2, u2 = Dg(e53), d2 = 0, f2 = t2 - n2, p2 = [];
  for (let t3 = 0; t3 < e53.length - 1; t3++) {
    let o3 = e53[t3], s3 = e53[t3 + 1], m2 = o3.dist(s3), h2 = s3.angleTo(o3);
    for (; f2 + n2 < d2 + m2; ) {
      f2 += n2;
      let g2 = (f2 - d2) / m2, _2 = Ft.number(o3.x, s3.x, g2), v2 = Ft.number(o3.y, s3.y, g2);
      if (_2 >= 0 && _2 < c2 && v2 >= 0 && v2 < c2 && f2 - l2 >= 0 && f2 + l2 <= u2) {
        let n3 = new Tg(_2, v2, h2, t3);
        n3._round(), (!r2 || Eg(e53, n3, a2, r2, i2)) && p2.push(n3);
      }
    }
    d2 += m2;
  }
  return !s2 && !p2.length && !o2 && (p2 = Mg(e53, d2 / 2, n2, r2, i2, a2, o2, true, c2)), p2;
}
function Ng(e53, t2, n2, r2, i2) {
  let a2 = [];
  for (let o2 of e53) {
    let e54;
    for (let s2 = 0; s2 < o2.length - 1; s2++) {
      let c2 = o2[s2], u2 = o2[s2 + 1];
      c2.x < t2 && u2.x < t2 || (c2.x < t2 ? c2 = new l(t2, c2.y + (u2.y - c2.y) * ((t2 - c2.x) / (u2.x - c2.x)))._round() : u2.x < t2 && (u2 = new l(t2, c2.y + (u2.y - c2.y) * ((t2 - c2.x) / (u2.x - c2.x)))._round()), !(c2.y < n2 && u2.y < n2) && (c2.y < n2 ? c2 = new l(c2.x + (u2.x - c2.x) * ((n2 - c2.y) / (u2.y - c2.y)), n2)._round() : u2.y < n2 && (u2 = new l(c2.x + (u2.x - c2.x) * ((n2 - c2.y) / (u2.y - c2.y)), n2)._round()), !(c2.x >= r2 && u2.x >= r2) && (c2.x >= r2 ? c2 = new l(r2, c2.y + (u2.y - c2.y) * ((r2 - c2.x) / (u2.x - c2.x)))._round() : u2.x >= r2 && (u2 = new l(r2, c2.y + (u2.y - c2.y) * ((r2 - c2.x) / (u2.x - c2.x)))._round()), !(c2.y >= i2 && u2.y >= i2) && (c2.y >= i2 ? c2 = new l(c2.x + (u2.x - c2.x) * ((i2 - c2.y) / (u2.y - c2.y)), i2)._round() : u2.y >= i2 && (u2 = new l(c2.x + (u2.x - c2.x) * ((i2 - c2.y) / (u2.y - c2.y)), i2)._round()), (!e54 || !c2.equals(e54[e54.length - 1])) && (e54 = [c2], a2.push(e54)), e54.push(u2)))));
    }
  }
  return a2;
}
function Pg(e53, t2, n2, r2, i2, a2) {
  let o2 = Fg(e53, t2, n2, i2, 0);
  return o2 = Fg(o2, t2, r2, a2, 1), o2;
}
function Fg(e53, t2, n2, r2, i2) {
  switch (t2) {
    case 1:
      return Ig(e53, n2, r2, i2);
    case 2:
      return Rg(e53, n2, r2, i2, false);
    case 3:
      return Rg(e53, n2, r2, i2, true);
  }
  return [];
}
function Ig(e53, t2, n2, r2) {
  let i2 = [];
  for (let a2 of e53) for (let e54 of a2) {
    let a3 = r2 === 0 ? e54.x : e54.y;
    a3 >= t2 && a3 <= n2 && i2.push([e54]);
  }
  return i2;
}
function Lg(e53, t2, n2, r2, i2) {
  let a2 = r2 === 0 ? zg : Bg, o2 = [], s2 = [];
  for (let c3 = 0; c3 < e53.length - 1; c3++) {
    let l2 = e53[c3], u3 = e53[c3 + 1], d2 = r2 === 0 ? l2.x : l2.y, f2 = r2 === 0 ? u3.x : u3.y, p2 = false;
    d2 < t2 ? f2 >= t2 && o2.push(a2(l2, u3, t2)) : d2 > n2 ? f2 <= n2 && o2.push(a2(l2, u3, n2)) : o2.push(l2), f2 < t2 && d2 >= t2 && (o2.push(a2(l2, u3, t2)), p2 = true), f2 > n2 && d2 <= n2 && (o2.push(a2(l2, u3, n2)), p2 = true), !i2 && p2 && (s2.push(o2), o2 = []);
  }
  let c2 = e53.length - 1, u2 = r2 === 0 ? e53[c2].x : e53[c2].y;
  return u2 >= t2 && u2 <= n2 && o2.push(e53[c2]), i2 && o2.length > 0 && !o2[0].equals(o2[o2.length - 1]) && o2.push(new l(o2[0].x, o2[0].y)), o2.length > 0 && s2.push(o2), s2;
}
function Rg(e53, t2, n2, r2, i2) {
  let a2 = [];
  for (let o2 of e53) {
    let e54 = Lg(o2, t2, n2, r2, i2);
    e54.length > 0 && a2.push(...e54);
  }
  return a2;
}
function zg(e53, t2, n2) {
  let r2 = (n2 - e53.x) / (t2.x - e53.x);
  return new l(n2, e53.y + (t2.y - e53.y) * r2);
}
function Bg(e53, t2, n2) {
  let r2 = (n2 - e53.y) / (t2.y - e53.y);
  return new l(e53.x + (t2.x - e53.x) * r2, n2);
}
function Vg(e53, t2, n2, r2) {
  let i2 = [], a2 = e53.image, o2 = a2.pixelRatio, s2 = a2.paddedRect.w - 2, c2 = a2.paddedRect.h - 2, u2 = { x1: e53.left, y1: e53.top, x2: e53.right, y2: e53.bottom }, d2 = a2.stretchX || [[0, s2]], f2 = a2.stretchY || [[0, c2]], p2 = (e54, t3) => e54 + t3[1] - t3[0], m2 = d2.reduce(p2, 0), h2 = f2.reduce(p2, 0), g2 = s2 - m2, _2 = c2 - h2, v2 = 0, y2 = m2, b2 = 0, x2 = h2, S2 = 0, C2 = g2, w2 = 0, T2 = _2;
  if (a2.content && r2) {
    let t3 = a2.content, n3 = t3[2] - t3[0], r3 = t3[3] - t3[1];
    (a2.textFitWidth || a2.textFitHeight) && (u2 = yg(e53)), v2 = Hg(d2, 0, t3[0]), b2 = Hg(f2, 0, t3[1]), y2 = Hg(d2, t3[0], t3[2]), x2 = Hg(f2, t3[1], t3[3]), S2 = t3[0] - v2, w2 = t3[1] - b2, C2 = n3 - y2, T2 = r3 - x2;
  }
  let E2 = u2.x1, D2 = u2.y1, O2 = u2.x2 - E2, k2 = u2.y2 - D2, A2 = (e54, r3, i3, s3) => {
    let c3 = Wg(e54.stretch - v2, y2, O2, E2), u3 = Gg(e54.fixed - S2, C2, e54.stretch, m2), d3 = Wg(r3.stretch - b2, x2, k2, D2), f3 = Gg(r3.fixed - w2, T2, r3.stretch, h2), p3 = Wg(i3.stretch - v2, y2, O2, E2), g3 = Gg(i3.fixed - S2, C2, i3.stretch, m2), _3 = Wg(s3.stretch - b2, x2, k2, D2), A3 = Gg(s3.fixed - w2, T2, s3.stretch, h2), j2 = new l(c3, d3), ee2 = new l(p3, d3), te2 = new l(p3, _3), ne2 = new l(c3, _3), re2 = new l(u3 / o2, f3 / o2), ie2 = new l(g3 / o2, A3 / o2), ae2 = t2 * Math.PI / 180;
    if (ae2) {
      let e55 = Math.sin(ae2), t3 = Math.cos(ae2), n3 = [t3, -e55, e55, t3];
      j2._matMult(n3), ee2._matMult(n3), ne2._matMult(n3), te2._matMult(n3);
    }
    let oe2 = e54.stretch + e54.fixed, se2 = i3.stretch + i3.fixed, ce2 = r3.stretch + r3.fixed, le2 = s3.stretch + s3.fixed;
    return { tl: j2, tr: ee2, bl: ne2, br: te2, tex: { x: a2.paddedRect.x + 1 + oe2, y: a2.paddedRect.y + 1 + ce2, w: se2 - oe2, h: le2 - ce2 }, writingMode: void 0, glyphOffset: [0, 0], sectionIndex: 0, pixelOffsetTL: re2, pixelOffsetBR: ie2, minFontScaleX: C2 / o2 / O2, minFontScaleY: T2 / o2 / k2, isSDF: n2 };
  };
  if (!r2 || !a2.stretchX && !a2.stretchY) i2.push(A2({ fixed: 0, stretch: -1 }, { fixed: 0, stretch: -1 }, { fixed: 0, stretch: s2 + 1 }, { fixed: 0, stretch: c2 + 1 }));
  else {
    let e54 = Ug(d2, g2, m2), t3 = Ug(f2, _2, h2);
    for (let n3 = 0; n3 < e54.length - 1; n3++) {
      let r3 = e54[n3], a3 = e54[n3 + 1];
      for (let e55 = 0; e55 < t3.length - 1; e55++) {
        let n4 = t3[e55], o3 = t3[e55 + 1];
        i2.push(A2(r3, n4, a3, o3));
      }
    }
  }
  return i2;
}
function Hg(e53, t2, n2) {
  let r2 = 0;
  for (let i2 of e53) r2 += Math.max(t2, Math.min(n2, i2[1])) - Math.max(t2, Math.min(n2, i2[0]));
  return r2;
}
function Ug(e53, t2, n2) {
  let r2 = [{ fixed: -1, stretch: 0 }];
  for (let [t3, n3] of e53) {
    let e54 = r2[r2.length - 1];
    r2.push({ fixed: t3 - e54.stretch, stretch: e54.stretch }), r2.push({ fixed: t3 - e54.stretch, stretch: e54.stretch + (n3 - t3) });
  }
  return r2.push({ fixed: t2 + 1, stretch: n2 }), r2;
}
function Wg(e53, t2, n2, r2) {
  return e53 / t2 * n2 + r2;
}
function Gg(e53, t2, n2, r2) {
  return e53 - t2 * n2 / r2;
}
function Kg(e53, t2, n2, r2, i2, a2, o2, s2) {
  let c2 = r2.layout.get(`text-rotate`).evaluate(a2, {}) * Math.PI / 180, u2 = [];
  for (let e54 of t2.positionedLines) for (let r3 of e54.positionedGlyphs) {
    if (!r3.rect) continue;
    let a3 = r3.rect || {}, d2 = 4, f2 = true, p2 = 1, m2 = 0, h2 = (i2 || s2) && r3.vertical, g2 = r3.metrics.advance * r3.scale / 2;
    if (s2 && t2.verticalizable) {
      let t3 = (r3.scale - 1) * 24, n3 = (24 - r3.metrics.width * r3.scale) / 2;
      m2 = e54.lineOffset / 2 - (r3.imageName ? -n3 : t3);
    }
    if (r3.imageName) {
      let e55 = o2[r3.imageName];
      f2 = e55.sdf, p2 = e55.pixelRatio, d2 = 1 / p2;
    }
    let _2 = i2 ? [r3.x + g2, r3.y] : [0, 0], v2 = i2 ? [0, 0] : [r3.x + g2 + n2[0], r3.y + n2[1] - m2], y2 = [0, 0];
    h2 && (y2 = v2, v2 = [0, 0]);
    let b2 = r3.metrics.isDoubleResolution ? 2 : 1, x2 = (r3.metrics.left - d2) * r3.scale - g2 + v2[0], S2 = (-r3.metrics.top - d2) * r3.scale + v2[1], C2 = x2 + a3.w / b2 * r3.scale / p2, w2 = S2 + a3.h / b2 * r3.scale / p2, T2 = new l(x2, S2), E2 = new l(C2, S2), D2 = new l(x2, w2), O2 = new l(C2, w2);
    if (h2) {
      let e55 = new l(-g2, g2 - -17), t3 = -Math.PI / 2, n3 = 12 - g2, i3 = r3.imageName ? n3 : 0, a4 = new l(22 - n3, -i3), o3 = new l(...y2);
      T2._rotateAround(t3, e55)._add(a4)._add(o3), E2._rotateAround(t3, e55)._add(a4)._add(o3), D2._rotateAround(t3, e55)._add(a4)._add(o3), O2._rotateAround(t3, e55)._add(a4)._add(o3);
    }
    if (c2) {
      let e55 = Math.sin(c2), t3 = Math.cos(c2), n3 = [t3, -e55, e55, t3];
      T2._matMult(n3), E2._matMult(n3), D2._matMult(n3), O2._matMult(n3);
    }
    let k2 = new l(0, 0), A2 = new l(0, 0);
    u2.push({ tl: T2, tr: E2, bl: D2, br: O2, tex: a3, writingMode: t2.writingMode, glyphOffset: _2, sectionIndex: r3.sectionIndex, isSDF: f2, pixelOffsetTL: k2, pixelOffsetBR: A2, minFontScaleX: 0, minFontScaleY: 0 });
  }
  return u2;
}
var qg = class {
  constructor(e53, t2, n2, r2, i2, a2, o2, s2, c2, u2) {
    if (this.boxStartIndex = e53.length, c2) {
      let e54 = a2.top, t3 = a2.bottom, n3 = a2.collisionPadding;
      n3 && (e54 -= n3[1], t3 += n3[3]);
      let r3 = t3 - e54;
      r3 > 0 && (r3 = Math.max(10, r3), this.circleDiameter = r3);
    } else {
      let c3 = a2.image?.content && (a2.image.textFitWidth || a2.image.textFitHeight) ? yg(a2) : { x1: a2.left, y1: a2.top, x2: a2.right, y2: a2.bottom };
      c3.y1 = c3.y1 * o2 - s2[0], c3.y2 = c3.y2 * o2 + s2[2], c3.x1 = c3.x1 * o2 - s2[3], c3.x2 = c3.x2 * o2 + s2[1];
      let d2 = a2.collisionPadding;
      if (d2 && (c3.x1 -= d2[0] * o2, c3.y1 -= d2[1] * o2, c3.x2 += d2[2] * o2, c3.y2 += d2[3] * o2), u2) {
        let e54 = new l(c3.x1, c3.y1), t3 = new l(c3.x2, c3.y1), n3 = new l(c3.x1, c3.y2), r3 = new l(c3.x2, c3.y2), i3 = u2 * Math.PI / 180;
        e54._rotate(i3), t3._rotate(i3), n3._rotate(i3), r3._rotate(i3), c3.x1 = Math.min(e54.x, t3.x, n3.x, r3.x), c3.x2 = Math.max(e54.x, t3.x, n3.x, r3.x), c3.y1 = Math.min(e54.y, t3.y, n3.y, r3.y), c3.y2 = Math.max(e54.y, t3.y, n3.y, r3.y);
      }
      e53.emplaceBack(t2.x, t2.y, c3.x1, c3.y1, c3.x2, c3.y2, n2, r2, i2);
    }
    this.boxEndIndex = e53.length;
  }
};
var Jg = class {
  constructor(e53 = [], t2 = (e54, t3) => e54 < t3 ? -1 : +(e54 > t3)) {
    if (this.data = e53, this.length = this.data.length, this.compare = t2, this.length > 0) for (let e54 = (this.length >> 1) - 1; e54 >= 0; e54--) this._down(e54);
  }
  push(e53) {
    this.data.push(e53), this._up(this.length++);
  }
  pop() {
    if (this.length === 0) return;
    let e53 = this.data[0], t2 = this.data.pop();
    return --this.length > 0 && (this.data[0] = t2, this._down(0)), e53;
  }
  peek() {
    return this.data[0];
  }
  _up(e53) {
    let { data: t2, compare: n2 } = this, r2 = t2[e53];
    for (; e53 > 0; ) {
      let i2 = e53 - 1 >> 1, a2 = t2[i2];
      if (n2(r2, a2) >= 0) break;
      t2[e53] = a2, e53 = i2;
    }
    t2[e53] = r2;
  }
  _down(e53) {
    let { data: t2, compare: n2 } = this, r2 = this.length >> 1, i2 = t2[e53];
    for (; e53 < r2; ) {
      let r3 = (e53 << 1) + 1, a2 = r3 + 1;
      if (a2 < this.length && n2(t2[a2], t2[r3]) < 0 && (r3 = a2), n2(t2[r3], i2) >= 0) break;
      t2[e53] = t2[r3], e53 = r3;
    }
    t2[e53] = i2;
  }
};
function Yg(e53, t2 = 1) {
  let n2 = Sc.fromPoints(e53[0]), r2 = Math.min(n2.width(), n2.height()), i2 = r2 / 2, a2 = new Jg([], Xg), { minX: o2, minY: s2, maxX: c2, maxY: u2 } = n2;
  if (r2 === 0) return new l(o2, s2);
  for (let t3 = o2; t3 < c2; t3 += r2) for (let n3 = s2; n3 < u2; n3 += r2) a2.push(new Zg(t3 + i2, n3 + i2, i2, e53));
  let d2 = $g(e53), f2 = d2;
  for (; a2.length; ) {
    let n3 = a2.pop();
    (n3.d > f2.d || !f2.d) && (f2 = n3), !(n3.max - f2.d <= t2) && (i2 = n3.h / 2, a2.push(new Zg(n3.p.x - i2, n3.p.y - i2, i2, e53)), a2.push(new Zg(n3.p.x + i2, n3.p.y - i2, i2, e53)), a2.push(new Zg(n3.p.x - i2, n3.p.y + i2, i2, e53)), a2.push(new Zg(n3.p.x + i2, n3.p.y + i2, i2, e53)));
  }
  return d2.d > 0 && f2.d - d2.d <= t2 ? d2.p : f2.p;
}
function Xg(e53, t2) {
  return t2.max - e53.max;
}
var Zg = class {
  constructor(e53, t2, n2, r2) {
    this.p = new l(e53, t2), this.h = n2, this.d = Qg(this.p, r2), this.max = this.d + this.h * Math.SQRT2;
  }
};
function Qg(e53, t2) {
  let n2 = false, r2 = 1 / 0;
  for (let i2 of t2) for (let t3 = 0, a2 = i2.length, o2 = a2 - 1; t3 < a2; o2 = t3++) {
    let a3 = i2[t3], s2 = i2[o2];
    a3.y > e53.y != s2.y > e53.y && e53.x < (s2.x - a3.x) * (e53.y - a3.y) / (s2.y - a3.y) + a3.x && (n2 = !n2), r2 = Math.min(r2, Lc(e53, a3, s2));
  }
  return (n2 ? 1 : -1) * Math.sqrt(r2);
}
function $g(e53) {
  let t2 = 0, n2 = 0, r2 = 0, i2 = e53[0];
  for (let e54 = 0, a2 = i2.length, o2 = a2 - 1; e54 < a2; o2 = e54++) {
    let a3 = i2[e54], s2 = i2[o2], c2 = a3.x * s2.y - s2.x * a3.y;
    n2 += (a3.x + s2.x) * c2, r2 += (a3.y + s2.y) * c2, t2 += c2 * 3;
  }
  return new Zg(n2 / t2, r2 / t2, 0, e53);
}
var e_ = /* @__PURE__ */ (function(e53) {
  return e53[e53.center = 1] = `center`, e53[e53.left = 2] = `left`, e53[e53.right = 3] = `right`, e53[e53.top = 4] = `top`, e53[e53.bottom = 5] = `bottom`, e53[e53[`top-left`] = 6] = `top-left`, e53[e53[`top-right`] = 7] = `top-right`, e53[e53[`bottom-left`] = 8] = `bottom-left`, e53[e53[`bottom-right`] = 9] = `bottom-right`, e53;
})({});
var t_ = 1 / 0;
function n_(e53, t2) {
  function n2(e54, t3) {
    let n3 = 0, r3 = 0;
    t3 < 0 && (t3 = 0);
    let i2 = t3 / Math.SQRT2;
    switch (e54) {
      case `top-right`:
      case `top-left`:
        r3 = i2 - 7;
        break;
      case `bottom-right`:
      case `bottom-left`:
        r3 = -i2 + 7;
        break;
      case `bottom`:
        r3 = -t3 + 7;
        break;
      case `top`:
        r3 = t3 - 7;
    }
    switch (e54) {
      case `top-right`:
      case `bottom-right`:
        n3 = -i2;
        break;
      case `top-left`:
      case `bottom-left`:
        n3 = i2;
        break;
      case `left`:
        n3 = t3;
        break;
      case `right`:
        n3 = -t3;
    }
    return [n3, r3];
  }
  function r2(e54, t3, n3) {
    let r3 = 0, i2 = 0;
    switch (t3 = Math.abs(t3), n3 = Math.abs(n3), e54) {
      case `top-right`:
      case `top-left`:
      case `top`:
        i2 = n3 - 7;
        break;
      case `bottom-right`:
      case `bottom-left`:
      case `bottom`:
        i2 = -n3 + 7;
    }
    switch (e54) {
      case `top-right`:
      case `bottom-right`:
      case `right`:
        r3 = -t3;
        break;
      case `top-left`:
      case `bottom-left`:
      case `left`:
        r3 = t3;
    }
    return [r3, i2];
  }
  return t2[1] === t_ ? n2(e53, t2[0]) : r2(e53, t2[0], t2[1]);
}
function r_(e53, t2, n2) {
  let r2 = e53.layout, i2 = r2.get(`text-variable-anchor-offset`)?.evaluate(t2, {}, n2);
  if (i2) {
    let e54 = i2.values, t3 = [];
    for (let n3 = 0; n3 < e54.length; n3 += 2) {
      let r3 = t3[n3] = e54[n3], i3 = e54[n3 + 1].map((e55) => e55 * 24);
      r3.startsWith(`top`) ? i3[1] -= 7 : r3.startsWith(`bottom`) && (i3[1] += 7), t3[n3 + 1] = i3;
    }
    return new bt(t3);
  }
  let a2 = r2.get(`text-variable-anchor`);
  if (a2) {
    let i3;
    i3 = e53._unevaluatedLayout.getValue(`text-radial-offset`) === void 0 ? r2.get(`text-offset`).evaluate(t2, {}, n2).map((e54) => e54 * 24) : [r2.get(`text-radial-offset`).evaluate(t2, {}, n2) * 24, t_];
    let o2 = [];
    for (let e54 of a2) o2.push(e54, n_(e54, i3));
    return new bt(o2);
  }
  return null;
}
function i_(e53) {
  e53.bucket.createArrays();
  let t2 = 512 * e53.bucket.overscaling;
  e53.bucket.tilePixelRatio = v / t2, e53.bucket.compareText = {}, e53.bucket.iconsNeedLinear = false;
  let n2 = e53.bucket.layers[0], r2 = n2.layout, i2 = n2._unevaluatedLayout._values, a2 = { layoutIconSize: i2[`icon-size`].possiblyEvaluate(new K(e53.bucket.zoom + 1), e53.canonical), layoutTextSize: i2[`text-size`].possiblyEvaluate(new K(e53.bucket.zoom + 1), e53.canonical), textMaxSize: i2[`text-size`].possiblyEvaluate(new K(18)) };
  if (e53.bucket.textSizeData.kind === `composite`) {
    let { minZoom: t3, maxZoom: n3 } = e53.bucket.textSizeData;
    a2.compositeTextSizes = [i2[`text-size`].possiblyEvaluate(new K(t3), e53.canonical), i2[`text-size`].possiblyEvaluate(new K(n3), e53.canonical)];
  }
  if (e53.bucket.iconSizeData.kind === `composite`) {
    let { minZoom: t3, maxZoom: n3 } = e53.bucket.iconSizeData;
    a2.compositeIconSizes = [i2[`icon-size`].possiblyEvaluate(new K(t3), e53.canonical), i2[`icon-size`].possiblyEvaluate(new K(n3), e53.canonical)];
  }
  let o2 = r2.get(`text-line-height`) * 24, s2 = r2.get(`text-rotation-alignment`) !== `viewport` && r2.get(`symbol-placement`) !== `point`, c2 = r2.get(`text-keep-upright`), l2 = r2.get(`text-size`);
  for (let t3 of e53.bucket.features) {
    let i3 = r2.get(`text-font`).evaluate(t3, {}, e53.canonical).join(`,`), u2 = l2.evaluate(t3, {}, e53.canonical), d2 = a2.layoutTextSize.evaluate(t3, {}, e53.canonical), f2 = a2.layoutIconSize.evaluate(t3, {}, e53.canonical), p2 = { horizontal: {}, vertical: void 0 }, m2 = t3.text, h2 = [0, 0];
    if (m2) {
      let a3 = m2.toString(), l3 = r2.get(`text-letter-spacing`).evaluate(t3, {}, e53.canonical) * 24, f3 = zm(a3) ? l3 : 0, g3 = r2.get(`text-anchor`).evaluate(t3, {}, e53.canonical), _3 = r_(n2, t3, e53.canonical);
      if (!_3) {
        let n3 = r2.get(`text-radial-offset`).evaluate(t3, {}, e53.canonical);
        h2 = n3 ? n_(g3, [n3 * 24, t_]) : r2.get(`text-offset`).evaluate(t3, {}, e53.canonical).map((e54) => e54 * 24);
      }
      let v3 = s2 ? `center` : r2.get(`text-justify`).evaluate(t3, {}, e53.canonical), y2 = r2.get(`symbol-placement`) === `point` ? r2.get(`text-max-width`).evaluate(t3, {}, e53.canonical) * 24 : 1 / 0, b2 = () => {
        e53.bucket.allowVerticalPlacement && Rm(a3) && (p2.vertical = $h(m2, e53.glyphMap, e53.glyphPositions, e53.imagePositions, i3, y2, o2, g3, `left`, f3, h2, 2, true, d2, u2));
      };
      if (!s2 && _3) {
        let t4 = /* @__PURE__ */ new Set();
        if (v3 === `auto`) for (let e54 = 0; e54 < _3.values.length; e54 += 2) t4.add(a_(_3.values[e54]));
        else t4.add(v3);
        let n3 = false;
        for (let r3 of t4) if (!p2.horizontal[r3]) {
          if (n3) p2.horizontal[r3] = p2.horizontal[0];
          else {
            let t5 = $h(m2, e53.glyphMap, e53.glyphPositions, e53.imagePositions, i3, y2, o2, `center`, r3, f3, h2, 1, false, d2, u2);
            t5 && (p2.horizontal[r3] = t5, n3 = t5.positionedLines.length === 1);
          }
        }
        b2();
      } else {
        v3 === `auto` && (v3 = a_(g3));
        let t4 = $h(m2, e53.glyphMap, e53.glyphPositions, e53.imagePositions, i3, y2, o2, g3, v3, f3, h2, 1, false, d2, u2);
        t4 && (p2.horizontal[v3] = t4), b2(), Rm(a3) && s2 && c2 && (p2.vertical = $h(m2, e53.glyphMap, e53.glyphPositions, e53.imagePositions, i3, y2, o2, g3, v3, f3, h2, 2, false, d2, u2));
      }
    }
    let g2, _2 = false;
    if (t3.icon?.name) {
      let n3 = e53.imageMap[t3.icon.name];
      n3 && (g2 = vg(e53.imagePositions[t3.icon.name], r2.get(`icon-offset`).evaluate(t3, {}, e53.canonical), r2.get(`icon-anchor`).evaluate(t3, {}, e53.canonical)), _2 = !!n3.sdf, e53.bucket.sdfIcons === void 0 ? e53.bucket.sdfIcons = _2 : e53.bucket.sdfIcons !== _2 && j(`Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer`), n3.pixelRatio === e53.bucket.pixelRatio ? r2.get(`icon-rotate`).constantOr(1) !== 0 && (e53.bucket.iconsNeedLinear = true) : e53.bucket.iconsNeedLinear = true);
    }
    let v2 = l_(p2.horizontal) || p2.vertical;
    e53.bucket.iconsInText ||= v2 ? v2.iconsInText : false, (v2 || g2) && o_(e53.bucket, t3, p2, g2, e53.imageMap, a2, d2, f2, h2, _2, e53.canonical, e53.subdivisionGranularity, e53.hasPromoteId);
  }
  e53.showCollisionBoxes && e53.bucket.generateCollisionDebugBuffers();
}
function a_(e53) {
  switch (e53) {
    case `right`:
    case `top-right`:
    case `bottom-right`:
      return `right`;
    case `left`:
    case `top-left`:
    case `bottom-left`:
      return `left`;
  }
  return `center`;
}
function o_(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2) {
  let p2 = a2.textMaxSize.evaluate(t2, {});
  p2 === void 0 && (p2 = o2);
  let m2 = e53.layers[0].layout, h2 = m2.get(`icon-offset`).evaluate(t2, {}, u2), g2 = l_(n2.horizontal), _2 = o2 / 24, y2 = e53.tilePixelRatio * _2, b2 = e53.tilePixelRatio * p2 / 24, x2 = e53.tilePixelRatio * s2, S2 = e53.tilePixelRatio * m2.get(`symbol-spacing`), C2 = m2.get(`text-padding`) * e53.tilePixelRatio, w2 = A_(m2, t2, u2, e53.tilePixelRatio), T2 = m2.get(`text-max-angle`) / 180 * Math.PI, E2 = m2.get(`text-rotation-alignment`) !== `viewport` && m2.get(`symbol-placement`) !== `point`, D2 = m2.get(`icon-rotation-alignment`).constantOr(`viewport`) === `map` && m2.get(`symbol-placement`) !== `point`, O2 = m2.get(`symbol-placement`), k2 = S2 / 2, A2 = m2.get(`icon-text-fit`), j2;
  r2 && A2 !== `none` && (e53.allowVerticalPlacement && n2.vertical && (j2 = bg(r2, n2.vertical, A2, m2.get(`icon-text-fit-padding`), h2, _2)), g2 && (r2 = bg(r2, g2, A2, m2.get(`icon-text-fit-padding`), h2, _2)));
  let ee2 = u2 ? d2.line.getGranularityForZoomLevel(u2.z) : 1, te2 = (s3, d3) => {
    Tc(d3) || u_(e53, d3, s3, n2, r2, i2, j2, e53.layers[0], e53.collisionBoxArray, t2.index, t2.sourceLayerIndex, e53.index, y2, [C2, C2, C2, C2], E2, c2, x2, w2, D2, h2, t2, a2, l2, u2, o2, f2);
  };
  if (O2 === `line`) for (let i3 of Ng(t2.geometry, 0, 0, v, v)) {
    let t3 = Fu(i3, ee2), a3 = jg(t3, S2, T2, n2.vertical || g2, r2, 24, b2, e53.overscaling, v);
    for (let n3 of a3) {
      let r3 = g2;
      (!r3 || !d_(e53, r3.text, k2, n3)) && te2(t3, n3);
    }
  }
  else if (O2 === `line-center`) {
    for (let e54 of t2.geometry) if (e54.length > 1) {
      let t3 = Fu(e54, ee2), i3 = Ag(t3, T2, n2.vertical || g2, r2, 24, b2);
      i3 && te2(t3, i3);
    }
  } else if (t2.type === `Polygon`) for (let e54 of Bt(t2.geometry, 0)) {
    let t3 = Yg(e54, 16);
    te2(Fu(e54[0], ee2, true), new Tg(t3.x, t3.y, 0));
  }
  else if (t2.type === `LineString`) for (let e54 of t2.geometry) {
    let t3 = Fu(e54, ee2);
    te2(t3, new Tg(t3[0].x, t3[0].y, 0));
  }
  else if (t2.type === `Point`) for (let e54 of t2.geometry) for (let t3 of e54) te2([t3], new Tg(t3.x, t3.y, 0));
}
function s_(e53, t2) {
  let n2 = e53.length, r2 = t2?.values;
  if (r2?.length > 0) for (let t3 = 0; t3 < r2.length; t3 += 2) {
    let n3 = e_[r2[t3]], i2 = r2[t3 + 1];
    e53.emplaceBack(n3, i2[0], i2[1]);
  }
  return [n2, e53.length];
}
function c_(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2) {
  let g2 = Kg(t2, n2, s2, i2, a2, o2, r2, e53.allowVerticalPlacement), _2 = e53.textSizeData, v2 = null;
  _2.kind === `source` ? (v2 = [128 * i2.layout.get(`text-size`).evaluate(o2, {})], v2[0] > 32640 && j(`${e53.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)) : _2.kind === `composite` && (v2 = [128 * m2.compositeTextSizes[0].evaluate(o2, {}, h2), 128 * m2.compositeTextSizes[1].evaluate(o2, {}, h2)], (v2[0] > 32640 || v2[1] > 32640) && j(`${e53.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)), e53.addSymbols(e53.text, g2, v2, s2, a2, o2, u2, t2, l2.lineStartIndex, l2.lineLength, p2, h2, c2);
  for (let t3 of d2) f2[t3] = e53.text.placedSymbolArray.length - 1;
  return g2.length * 4;
}
function l_(e53) {
  for (let t2 in e53) return e53[t2];
  return null;
}
function u_(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2) {
  let E2 = e53.addToLineVertexArray(t2, n2), D2 = s2.layout.get(`symbol-height-offset`).evaluate(b2, {}, C2);
  D2 > e53.maxHeightOffset && (e53.maxHeightOffset = D2);
  let O2, k2, A2, ee2, te2 = 0, ne2 = 0, re2 = 0, ie2 = 0, ae2 = -1, oe2 = -1, se2 = {}, ce2 = (0, Xs.default)(``);
  if (e53.allowVerticalPlacement && r2.vertical) {
    let e54 = s2.layout.get(`text-rotate`).evaluate(b2, {}, C2) + 90, n3 = r2.vertical;
    A2 = new qg(c2, t2, l2, u2, d2, n3, f2, p2, m2, e54), o2 && (ee2 = new qg(c2, t2, l2, u2, d2, o2, g2, _2, m2, e54));
  }
  if (i2) {
    let n3 = s2.layout.get(`icon-rotate`).evaluate(b2, {}), r3 = s2.layout.get(`icon-text-fit`) !== `none`, a3 = Vg(i2, n3, S2, r3), f3 = o2 ? Vg(o2, n3, S2, r3) : void 0;
    k2 = new qg(c2, t2, l2, u2, d2, i2, g2, _2, false, n3), te2 = a3.length * 4;
    let p3 = e53.iconSizeData, m3 = null;
    p3.kind === `source` ? (m3 = [128 * s2.layout.get(`icon-size`).evaluate(b2, {})], m3[0] > 32640 && j(`${e53.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)) : p3.kind === `composite` && (m3 = [128 * x2.compositeIconSizes[0].evaluate(b2, {}, C2), 128 * x2.compositeIconSizes[1].evaluate(b2, {}, C2)], (m3[0] > 32640 || m3[1] > 32640) && j(`${e53.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)), e53.addSymbols(e53.icon, a3, m3, y2, v2, b2, 0, t2, E2.lineStartIndex, E2.lineLength, -1, C2, D2), ae2 = e53.icon.placedSymbolArray.length - 1, f3 && (ne2 = f3.length * 4, e53.addSymbols(e53.icon, f3, m3, y2, v2, b2, 2, t2, E2.lineStartIndex, E2.lineLength, -1, C2, D2), oe2 = e53.icon.placedSymbolArray.length - 1);
  }
  let le2 = Object.keys(r2.horizontal);
  for (let n3 of le2) {
    let i3 = r2.horizontal[n3];
    O2 ||= (ce2 = (0, Xs.default)(i3.text), new qg(c2, t2, l2, u2, d2, i3, f2, p2, m2, s2.layout.get(`text-rotate`).evaluate(b2, {}, C2)));
    let o3 = i3.positionedLines.length === 1;
    if (re2 += c_(e53, t2, i3, a2, s2, m2, b2, h2, D2, E2, r2.vertical ? 1 : 3, o3 ? le2 : [n3], se2, ae2, x2, C2), o3) break;
  }
  r2.vertical && (ie2 += c_(e53, t2, r2.vertical, a2, s2, m2, b2, h2, D2, E2, 2, [`vertical`], se2, oe2, x2, C2));
  let ue2 = O2 ? O2.boxStartIndex : e53.collisionBoxArray.length, de2 = O2 ? O2.boxEndIndex : e53.collisionBoxArray.length, fe2 = A2 ? A2.boxStartIndex : e53.collisionBoxArray.length, pe2 = A2 ? A2.boxEndIndex : e53.collisionBoxArray.length, me2 = k2 ? k2.boxStartIndex : e53.collisionBoxArray.length, he2 = k2 ? k2.boxEndIndex : e53.collisionBoxArray.length, M2 = ee2 ? ee2.boxStartIndex : e53.collisionBoxArray.length, ge2 = ee2 ? ee2.boxEndIndex : e53.collisionBoxArray.length, _e2 = -1, ve2 = (e54, t3) => e54?.circleDiameter ? Math.max(e54.circleDiameter, t3) : t3;
  _e2 = ve2(O2, _e2), _e2 = ve2(A2, _e2), _e2 = ve2(k2, _e2), _e2 = ve2(ee2, _e2);
  let ye2 = +(_e2 > -1);
  ye2 && (_e2 *= w2 / 24), e53.glyphOffsetArray.length >= e53.maxGlyphs && j(`Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907`), b2.sortKey !== void 0 && e53.addToSortKeyRanges(e53.symbolInstances.length, b2.sortKey);
  let be2 = r_(s2, b2, C2), [N2, xe2] = s_(e53.textAnchorOffsets, be2);
  T2 && (ce2 = f_(ce2, b2)), e53.symbolInstances.emplaceBack(t2.x, t2.y, se2.right >= 0 ? se2.right : -1, se2.center >= 0 ? se2.center : -1, se2.left >= 0 ? se2.left : -1, se2.vertical || -1, ae2, oe2, ce2, ue2, de2, fe2, pe2, me2, he2, M2, ge2, l2, re2, ie2, te2, ne2, ye2, 0, f2, _e2, N2, xe2, D2);
}
function d_(e53, t2, n2, r2) {
  let i2 = e53.compareText;
  if (!(t2 in i2)) i2[t2] = [];
  else {
    let e54 = i2[t2];
    for (let t3 = e54.length - 1; t3 >= 0; t3--) if (r2.dist(e54[t3]) < n2) return true;
  }
  return i2[t2].push(r2), false;
}
function f_(e53, t2) {
  return t2.id == null || t2.properties?.cluster ? e53 : (0, Xs.default)(String(t2.id), e53);
}
function p_(e53, t2, n2) {
  let r2 = `never`, i2 = e53.get(t2);
  return i2 ? r2 = i2 : e53.get(n2) && (r2 = `always`), r2;
}
var m_ = [{ name: `a_fade_opacity`, components: 1, type: `Uint8`, offset: 0 }];
function h_(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2) {
  let m2 = s2 ? Math.min(xg, Math.round(s2[0])) : 0, h2 = s2 ? Math.min(xg, Math.round(s2[1])) : 0;
  e53.emplaceBack(t2, n2, Math.round(r2 * 32), Math.round(i2 * 32), a2, o2, (m2 << 1) + +!!c2, h2, l2 * 16, u2 * 16, d2 * 256, f2 * 256, p2);
}
function g_(e53, t2, n2) {
  e53.emplaceBack(t2.x, t2.y, n2), e53.emplaceBack(t2.x, t2.y, n2), e53.emplaceBack(t2.x, t2.y, n2), e53.emplaceBack(t2.x, t2.y, n2);
}
function __(e53) {
  for (let t2 of e53.sections) if (Wm(t2.text)) return true;
  return false;
}
var v_ = class {
  constructor(e53) {
    this.layoutVertexArray = new Fs(), this.indexArray = new Bs(), this.programConfigurations = e53, this.segments = new Ws(), this.dynamicLayoutVertexArray = new Is(), this.opacityVertexArray = new Ls(), this.hasVisibleVertices = false, this.placedSymbolArray = new vs();
  }
  isEmpty() {
    return this.layoutVertexArray.length === 0 && this.indexArray.length === 0 && this.dynamicLayoutVertexArray.length === 0 && this.opacityVertexArray.length === 0;
  }
  upload(e53, t2, n2, r2) {
    this.isEmpty() || (n2 && (this.layoutVertexBuffer = e53.createVertexBuffer(this.layoutVertexArray, qp.members), this.indexBuffer = e53.createIndexBuffer(this.indexArray, t2), this.dynamicLayoutVertexBuffer = e53.createVertexBuffer(this.dynamicLayoutVertexArray, Jp.members, true), this.opacityVertexBuffer = e53.createVertexBuffer(this.opacityVertexArray, m_, true), this.opacityVertexBuffer.itemSize = 1), (n2 || r2) && this.programConfigurations.upload(e53));
  }
  destroy() {
    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.dynamicLayoutVertexBuffer.destroy(), this.opacityVertexBuffer.destroy());
  }
};
G(`SymbolBuffers`, v_);
var y_ = class {
  constructor(e53, t2, n2) {
    this.layoutVertexArray = new e53(), this.layoutAttributes = t2, this.indexArray = new n2(), this.segments = new Ws(), this.collisionVertexArray = new zs();
  }
  upload(e53) {
    this.layoutVertexBuffer = e53.createVertexBuffer(this.layoutVertexArray, this.layoutAttributes), this.indexBuffer = e53.createIndexBuffer(this.indexArray), this.collisionVertexBuffer = e53.createVertexBuffer(this.collisionVertexArray, Yp.members, true);
  }
  destroy() {
    this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.segments.destroy(), this.collisionVertexBuffer.destroy());
  }
};
G(`CollisionBuffers`, y_);
var b_ = class {
  constructor(e53) {
    this.collisionBoxArray = e53.collisionBoxArray, this.zoom = e53.zoom, this.overscaling = e53.overscaling, this.layers = e53.layers, this.layerIds = this.layers.map((e54) => e54.id), this.index = e53.index, this.pixelRatio = e53.pixelRatio, this.sourceLayerIndex = e53.sourceLayerIndex, this.hasDependencies = true, this.hasRTLText = false, this.maxHeightOffset = 0, this.sortKeyRanges = [], this.collisionCircleArray = [], this.maxGlyphs = 65535;
    let t2 = this.layers[0]._unevaluatedLayout._values;
    this.textSizeData = Sg(this.zoom, t2[`text-size`]), this.iconSizeData = Sg(this.zoom, t2[`icon-size`]);
    let n2 = this.layers[0].layout, r2 = n2.get(`symbol-sort-key`), i2 = n2.get(`symbol-z-order`);
    this.canOverlap = p_(n2, `text-overlap`, `text-allow-overlap`) !== `never` || p_(n2, `icon-overlap`, `icon-allow-overlap`) !== `never` || n2.get(`text-ignore-placement`) || n2.get(`icon-ignore-placement`), this.sortFeaturesByKey = i2 !== `viewport-y` && !r2.isConstant();
    let a2 = i2 === `viewport-y` || i2 === `auto` && !this.sortFeaturesByKey;
    this.sortFeaturesByY = a2 && this.canOverlap, n2.get(`symbol-placement`) === `point` && (this.writingModes = n2.get(`text-writing-mode`).map((e54) => Uh[e54])), this.stateDependentLayerIds = this.layers.filter((e54) => e54.isStateDependent()).map((e54) => e54.id), this.sourceID = e53.sourceID;
  }
  createArrays() {
    this.text = new v_(new mc(this.layers, this.zoom, (e53) => e53.startsWith(`text`))), this.icon = new v_(new mc(this.layers, this.zoom, (e53) => e53.startsWith(`icon`))), this.glyphOffsetArray = new xs(), this.lineVertexArray = new Ss(), this.symbolInstances = new bs(), this.textAnchorOffsets = new ws();
  }
  calculateGlyphDependencies(e53, t2, n2, r2) {
    let i2 = th.fromFeature(e53, n2, false), a2 = i2.graphemes();
    for (let e54 = 0; e54 < a2.length; e54++) {
      let n3 = i2.getSection(e54);
      if (`imageName` in n3) continue;
      t2[n3.fontStack] ||= { default: {}, vertical: {} };
      let o2 = t2[n3.fontStack], s2 = a2[e54], c2 = r2 && lg(s2.codePointAt(0), this.allowVerticalPlacement);
      Fm(s2) && (o2.default[s2] = true), c2 && (o2.vertical[s2] = true);
      for (let e55 of s2) {
        if (o2.default[e55] = true, !r2) continue;
        c2 && Fm(s2) && (o2.vertical[e55] = true);
        let t3 = Gm[e55];
        t3 && (o2.default[t3] = true);
      }
    }
  }
  populate(e53, t2, n2) {
    let r2 = this.layers[0], i2 = r2.layout, a2 = i2.get(`text-font`), o2 = i2.get(`text-field`), s2 = i2.get(`icon-image`), c2 = (o2.value.kind !== `constant` || o2.value.value instanceof ht && !o2.value.value.isEmpty() || o2.value.value.toString().length > 0) && (a2.value.kind !== `constant` || a2.value.value.length > 0), l2 = s2.value.kind !== `constant` || !!s2.value.value || Object.keys(s2.parameters).length > 0, u2 = i2.get(`symbol-sort-key`), d2 = i2.get(`symbol-placement`) === `point`;
    if (this.features = [], !c2 && !l2) return;
    let f2 = t2.iconDependencies, p2 = t2.glyphDependencies, m2 = t2.availableImages, h2 = new K(this.zoom), g2 = i2.get(`text-keep-upright`);
    for (let { feature: t3, id: o3, index: s3, sourceLayerIndex: _2 } of e53) {
      let e54 = r2._featureFilter.needGeometry, v2 = xc(t3, e54);
      if (!r2._featureFilter.filter(h2, v2, n2) || (e54 || (v2.geometry = bc(t3)), d2 && t3.type === 1 && x_(v2.geometry))) continue;
      let y2;
      if (c2) {
        let e55 = r2.getValueAndResolveTokens(`text-field`, v2, n2, m2), t4 = ht.factory(e55);
        this.hasRTLText ||= __(t4), y2 = wm(t4, r2, v2);
      }
      let b2;
      if (l2) {
        let e55 = r2.getValueAndResolveTokens(`icon-image`, v2, n2, m2);
        b2 = e55 instanceof xt ? e55 : xt.fromString(e55);
      }
      if (!y2 && !b2) continue;
      let x2 = this.sortFeaturesByKey ? u2.evaluate(v2, {}, n2) : void 0, S2 = { id: o3, text: y2, icon: b2, index: s3, sourceLayerIndex: _2, geometry: v2.geometry, properties: t3.properties, type: td.types[t3.type], sortKey: x2 };
      if (this.features.push(S2), b2 && (f2[b2.name] = true), y2) {
        let e55 = a2.evaluate(v2, {}, n2).join(`,`), t4 = i2.get(`text-rotation-alignment`) !== `viewport` && i2.get(`symbol-placement`) !== `point`;
        this.allowVerticalPlacement = this.writingModes?.includes(2);
        let r3 = (t4 && g2 || this.allowVerticalPlacement) && Rm(y2.toString());
        this.calculateGlyphDependencies(y2, p2, e55, r3);
        for (let e56 of y2.sections) e56.image && (f2[e56.image.name] = true);
      }
    }
    i2.get(`symbol-placement`) === `line` && (this.features = km(this.features)), this.sortFeaturesByKey && this.features.sort((e54, t3) => e54.sortKey - t3.sortKey);
  }
  update(e53, t2, n2) {
    this.stateDependentLayers.length && (this.text.programConfigurations.updatePaintArrays(e53, t2, this.layers, { imagePositions: n2 }), this.icon.programConfigurations.updatePaintArrays(e53, t2, this.layers, { imagePositions: n2 }));
  }
  addFeatures({ options: e53, canonical: t2, glyphMap: n2, glyphPositions: r2, iconMap: i2, iconPositions: a2, showCollisionBoxes: o2 }) {
    i_({ bucket: this, glyphMap: n2, glyphPositions: r2, imageMap: i2, imagePositions: a2, showCollisionBoxes: o2, canonical: t2, subdivisionGranularity: e53.subdivisionGranularity, hasPromoteId: e53.featureIndex.promoteId != null });
  }
  isEmpty() {
    return this.symbolInstances.length === 0;
  }
  uploadPending() {
    return !this.uploaded || this.text.programConfigurations.needsUpload || this.icon.programConfigurations.needsUpload;
  }
  upload(e53) {
    !this.uploaded && this.hasDebugData() && (this.textCollisionBox.upload(e53), this.iconCollisionBox.upload(e53)), this.text.upload(e53, this.sortFeaturesByY, !this.uploaded, this.text.programConfigurations.needsUpload), this.icon.upload(e53, this.sortFeaturesByY, !this.uploaded, this.icon.programConfigurations.needsUpload), this.uploaded = true;
  }
  destroyDebugData() {
    this.textCollisionBox.destroy(), this.iconCollisionBox.destroy();
  }
  destroy() {
    this.text.destroy(), this.icon.destroy(), this.hasDebugData() && this.destroyDebugData();
  }
  addToLineVertexArray(e53, t2) {
    let n2 = this.lineVertexArray.length;
    if (e53.segment !== void 0) {
      let n3 = e53.dist(t2[e53.segment + 1]), r2 = e53.dist(t2[e53.segment]), i2 = {};
      for (let r3 = e53.segment + 1; r3 < t2.length; r3++) i2[r3] = { x: t2[r3].x, y: t2[r3].y, tileUnitDistanceFromAnchor: n3 }, r3 < t2.length - 1 && (n3 += t2[r3 + 1].dist(t2[r3]));
      for (let n4 = e53.segment || 0; n4 >= 0; n4--) i2[n4] = { x: t2[n4].x, y: t2[n4].y, tileUnitDistanceFromAnchor: r2 }, n4 > 0 && (r2 += t2[n4 - 1].dist(t2[n4]));
      for (let e54 = 0; e54 < t2.length; e54++) {
        let t3 = i2[e54];
        this.lineVertexArray.emplaceBack(t3.x, t3.y, t3.tileUnitDistanceFromAnchor);
      }
    }
    return { lineStartIndex: n2, lineLength: this.lineVertexArray.length - n2 };
  }
  addSymbols(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2) {
    let p2 = e53.indexArray, m2 = e53.layoutVertexArray, h2 = e53.segments.prepareSegment(4 * t2.length, m2, p2, this.canOverlap ? a2.sortKey : void 0), g2 = this.glyphOffsetArray.length, _2 = h2.vertexLength, v2 = this.allowVerticalPlacement && o2 === 2 ? Math.PI / 2 : 0, y2 = a2.text && a2.text.sections;
    for (let r3 = 0; r3 < t2.length; r3++) {
      let { tl: i3, tr: o3, bl: c3, br: l3, tex: u3, pixelOffsetTL: g3, pixelOffsetBR: _3, minFontScaleX: b2, minFontScaleY: x2, glyphOffset: S2, isSDF: C2, sectionIndex: w2 } = t2[r3], T2 = h2.vertexLength, E2 = S2[1];
      h_(m2, s2.x, s2.y, i3.x, E2 + i3.y, u3.x, u3.y, n2, C2, g3.x, g3.y, b2, x2, f2), h_(m2, s2.x, s2.y, o3.x, E2 + o3.y, u3.x + u3.w, u3.y, n2, C2, _3.x, g3.y, b2, x2, f2), h_(m2, s2.x, s2.y, c3.x, E2 + c3.y, u3.x, u3.y + u3.h, n2, C2, g3.x, _3.y, b2, x2, f2), h_(m2, s2.x, s2.y, l3.x, E2 + l3.y, u3.x + u3.w, u3.y + u3.h, n2, C2, _3.x, _3.y, b2, x2, f2), g_(e53.dynamicLayoutVertexArray, s2, v2), p2.emplaceBack(T2, T2 + 2, T2 + 1), p2.emplaceBack(T2 + 1, T2 + 2, T2 + 3), h2.vertexLength += 4, h2.primitiveLength += 2, this.glyphOffsetArray.emplaceBack(S2[0]), (r3 === t2.length - 1 || w2 !== t2[r3 + 1].sectionIndex) && e53.programConfigurations.populatePaintArrays(m2.length, a2, a2.index, { imagePositions: {}, canonical: d2, formattedSection: y2?.[w2] });
    }
    e53.placedSymbolArray.emplaceBack(s2.x, s2.y, g2, this.glyphOffsetArray.length - g2, _2, c2, l2, s2.segment, n2 ? n2[0] : 0, n2 ? n2[1] : 0, r2[0], r2[1], o2, 0, false, 0, u2, f2);
  }
  _addCollisionDebugVertex(e53, t2, n2, r2, i2, a2) {
    return t2.emplaceBack(0, 0), e53.emplaceBack(n2.x, n2.y, r2, i2, Math.round(a2.x), Math.round(a2.y));
  }
  addCollisionDebugVertices(e53, t2, n2, r2, i2, a2, o2) {
    let s2 = i2.segments.prepareSegment(4, i2.layoutVertexArray, i2.indexArray), c2 = s2.vertexLength, u2 = i2.layoutVertexArray, d2 = i2.collisionVertexArray, f2 = o2.anchorX, p2 = o2.anchorY;
    this._addCollisionDebugVertex(u2, d2, a2, f2, p2, new l(e53, t2)), this._addCollisionDebugVertex(u2, d2, a2, f2, p2, new l(n2, t2)), this._addCollisionDebugVertex(u2, d2, a2, f2, p2, new l(n2, r2)), this._addCollisionDebugVertex(u2, d2, a2, f2, p2, new l(e53, r2)), s2.vertexLength += 4;
    let m2 = i2.indexArray;
    m2.emplaceBack(c2, c2 + 1), m2.emplaceBack(c2 + 1, c2 + 2), m2.emplaceBack(c2 + 2, c2 + 3), m2.emplaceBack(c2 + 3, c2), s2.primitiveLength += 4;
  }
  addDebugCollisionBoxes(e53, t2, n2, r2) {
    for (let i2 = e53; i2 < t2; i2++) {
      let e54 = this.collisionBoxArray.get(i2), t3 = e54.x1, a2 = e54.y1, o2 = e54.x2, s2 = e54.y2;
      this.addCollisionDebugVertices(t3, a2, o2, s2, r2 ? this.textCollisionBox : this.iconCollisionBox, e54.anchorPoint, n2);
    }
  }
  generateCollisionDebugBuffers() {
    this.hasDebugData() && this.destroyDebugData(), this.textCollisionBox = new y_(Rs, Xp.members, Vs), this.iconCollisionBox = new y_(Rs, Xp.members, Vs);
    for (let e53 = 0; e53 < this.symbolInstances.length; e53++) {
      let t2 = this.symbolInstances.get(e53);
      this.addDebugCollisionBoxes(t2.textBoxStartIndex, t2.textBoxEndIndex, t2, true), this.addDebugCollisionBoxes(t2.verticalTextBoxStartIndex, t2.verticalTextBoxEndIndex, t2, true), this.addDebugCollisionBoxes(t2.iconBoxStartIndex, t2.iconBoxEndIndex, t2, false), this.addDebugCollisionBoxes(t2.verticalIconBoxStartIndex, t2.verticalIconBoxEndIndex, t2, false);
    }
  }
  _deserializeCollisionBoxesForSymbol(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = {};
    for (let r3 = t2; r3 < n2; r3++) {
      let t3 = e53.get(r3);
      l2.textBox = { x1: t3.x1, y1: t3.y1, x2: t3.x2, y2: t3.y2, anchorPointX: t3.anchorPointX, anchorPointY: t3.anchorPointY }, l2.textFeatureIndex = t3.featureIndex;
      break;
    }
    for (let t3 = r2; t3 < i2; t3++) {
      let n3 = e53.get(t3);
      l2.verticalTextBox = { x1: n3.x1, y1: n3.y1, x2: n3.x2, y2: n3.y2, anchorPointX: n3.anchorPointX, anchorPointY: n3.anchorPointY }, l2.verticalTextFeatureIndex = n3.featureIndex;
      break;
    }
    for (let t3 = a2; t3 < o2; t3++) {
      let n3 = e53.get(t3);
      l2.iconBox = { x1: n3.x1, y1: n3.y1, x2: n3.x2, y2: n3.y2, anchorPointX: n3.anchorPointX, anchorPointY: n3.anchorPointY }, l2.iconFeatureIndex = n3.featureIndex;
      break;
    }
    for (let t3 = s2; t3 < c2; t3++) {
      let n3 = e53.get(t3);
      l2.verticalIconBox = { x1: n3.x1, y1: n3.y1, x2: n3.x2, y2: n3.y2, anchorPointX: n3.anchorPointX, anchorPointY: n3.anchorPointY }, l2.verticalIconFeatureIndex = n3.featureIndex;
      break;
    }
    return l2;
  }
  deserializeCollisionBoxes(e53) {
    this.collisionArrays = [];
    for (let t2 = 0; t2 < this.symbolInstances.length; t2++) {
      let n2 = this.symbolInstances.get(t2);
      this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(e53, n2.textBoxStartIndex, n2.textBoxEndIndex, n2.verticalTextBoxStartIndex, n2.verticalTextBoxEndIndex, n2.iconBoxStartIndex, n2.iconBoxEndIndex, n2.verticalIconBoxStartIndex, n2.verticalIconBoxEndIndex));
    }
  }
  hasTextData() {
    return this.text.segments.get().length > 0;
  }
  hasIconData() {
    return this.icon.segments.get().length > 0;
  }
  hasDebugData() {
    return this.textCollisionBox && this.iconCollisionBox;
  }
  hasTextCollisionBoxData() {
    return this.hasDebugData() && this.textCollisionBox.segments.get().length > 0;
  }
  hasIconCollisionBoxData() {
    return this.hasDebugData() && this.iconCollisionBox.segments.get().length > 0;
  }
  addIndicesForPlacedSymbol(e53, t2) {
    let n2 = e53.placedSymbolArray.get(t2), r2 = n2.vertexStartIndex + n2.numGlyphs * 4;
    for (let t3 = n2.vertexStartIndex; t3 < r2; t3 += 4) e53.indexArray.emplaceBack(t3, t3 + 2, t3 + 1), e53.indexArray.emplaceBack(t3 + 1, t3 + 2, t3 + 3);
  }
  getSortedSymbolIndexes(e53) {
    if (this.sortedAngle === e53 && this.symbolInstanceIndexes !== void 0) return this.symbolInstanceIndexes;
    let t2 = Math.sin(e53), n2 = Math.cos(e53), r2 = [], i2 = [], a2 = [];
    for (let e54 = 0; e54 < this.symbolInstances.length; ++e54) {
      a2.push(e54);
      let o2 = this.symbolInstances.get(e54);
      r2.push(Math.round(t2 * o2.anchorX + n2 * o2.anchorY) | 0), i2.push(o2.featureIndex);
    }
    return a2.sort((e54, t3) => r2[e54] - r2[t3] || i2[t3] - i2[e54]), a2;
  }
  addToSortKeyRanges(e53, t2) {
    let n2 = this.sortKeyRanges[this.sortKeyRanges.length - 1];
    n2?.sortKey === t2 ? n2.symbolInstanceEnd = e53 + 1 : this.sortKeyRanges.push({ sortKey: t2, symbolInstanceStart: e53, symbolInstanceEnd: e53 + 1 });
  }
  sortFeatures(e53) {
    if (this.sortFeaturesByY && this.sortedAngle !== e53 && !(this.text.segments.get().length > 1 || this.icon.segments.get().length > 1)) {
      this.symbolInstanceIndexes = this.getSortedSymbolIndexes(e53), this.sortedAngle = e53, this.text.indexArray.clear(), this.icon.indexArray.clear(), this.featureSortOrder = [];
      for (let e54 of this.symbolInstanceIndexes) {
        let t2 = this.symbolInstances.get(e54);
        this.featureSortOrder.push(t2.featureIndex);
        let n2 = [t2.rightJustifiedTextSymbolIndex, t2.centerJustifiedTextSymbolIndex, t2.leftJustifiedTextSymbolIndex];
        for (let e55 = 0; e55 < n2.length; e55++) {
          let t3 = n2[e55];
          t3 >= 0 && n2.indexOf(t3) === e55 && this.addIndicesForPlacedSymbol(this.text, t3);
        }
        t2.verticalPlacedTextSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.text, t2.verticalPlacedTextSymbolIndex), t2.placedIconSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.icon, t2.placedIconSymbolIndex), t2.verticalPlacedIconSymbolIndex >= 0 && this.addIndicesForPlacedSymbol(this.icon, t2.verticalPlacedIconSymbolIndex);
      }
      this.text.indexBuffer && this.text.indexBuffer.updateData(this.text.indexArray), this.icon.indexBuffer && this.icon.indexBuffer.updateData(this.icon.indexArray);
    }
  }
};
function x_(e53) {
  return e53.every((e54) => e54.every(Tc));
}
G(`SymbolBucket`, b_, { omit: [`layers`, `collisionBoxArray`, `features`, `compareText`] });
function S_(e53, t2) {
  return t2.replace(/{([^{}]+)}/g, (t3, n2) => e53 && n2 in e53 ? String(e53[n2]) : ``);
}
var C_;
var w_ = () => C_ ||= new Fo({ "symbol-placement": new q(N.layout_symbol[`symbol-placement`], `symbol-placement`), "symbol-spacing": new q(N.layout_symbol[`symbol-spacing`], `symbol-spacing`), "symbol-avoid-edges": new q(N.layout_symbol[`symbol-avoid-edges`], `symbol-avoid-edges`), "symbol-sort-key": new J(N.layout_symbol[`symbol-sort-key`], `symbol-sort-key`), "symbol-z-order": new q(N.layout_symbol[`symbol-z-order`], `symbol-z-order`), "icon-allow-overlap": new q(N.layout_symbol[`icon-allow-overlap`], `icon-allow-overlap`), "icon-overlap": new q(N.layout_symbol[`icon-overlap`], `icon-overlap`), "icon-ignore-placement": new q(N.layout_symbol[`icon-ignore-placement`], `icon-ignore-placement`), "icon-optional": new q(N.layout_symbol[`icon-optional`], `icon-optional`), "icon-rotation-alignment": new J(N.layout_symbol[`icon-rotation-alignment`], `icon-rotation-alignment`), "icon-size": new J(N.layout_symbol[`icon-size`], `icon-size`), "icon-text-fit": new q(N.layout_symbol[`icon-text-fit`], `icon-text-fit`), "icon-text-fit-padding": new q(N.layout_symbol[`icon-text-fit-padding`], `icon-text-fit-padding`), "icon-image": new J(N.layout_symbol[`icon-image`], `icon-image`), "icon-rotate": new J(N.layout_symbol[`icon-rotate`], `icon-rotate`), "icon-padding": new J(N.layout_symbol[`icon-padding`], `icon-padding`), "icon-keep-upright": new q(N.layout_symbol[`icon-keep-upright`], `icon-keep-upright`), "icon-offset": new J(N.layout_symbol[`icon-offset`], `icon-offset`), "icon-anchor": new J(N.layout_symbol[`icon-anchor`], `icon-anchor`), "icon-pitch-alignment": new q(N.layout_symbol[`icon-pitch-alignment`], `icon-pitch-alignment`), "text-pitch-alignment": new q(N.layout_symbol[`text-pitch-alignment`], `text-pitch-alignment`), "text-rotation-alignment": new q(N.layout_symbol[`text-rotation-alignment`], `text-rotation-alignment`), "text-field": new J(N.layout_symbol[`text-field`], `text-field`), "text-font": new J(N.layout_symbol[`text-font`], `text-font`), "text-size": new J(N.layout_symbol[`text-size`], `text-size`), "text-max-width": new J(N.layout_symbol[`text-max-width`], `text-max-width`), "text-line-height": new q(N.layout_symbol[`text-line-height`], `text-line-height`), "text-letter-spacing": new J(N.layout_symbol[`text-letter-spacing`], `text-letter-spacing`), "text-justify": new J(N.layout_symbol[`text-justify`], `text-justify`), "text-radial-offset": new J(N.layout_symbol[`text-radial-offset`], `text-radial-offset`), "text-variable-anchor": new q(N.layout_symbol[`text-variable-anchor`], `text-variable-anchor`), "text-variable-anchor-offset": new J(N.layout_symbol[`text-variable-anchor-offset`], `text-variable-anchor-offset`), "text-anchor": new J(N.layout_symbol[`text-anchor`], `text-anchor`), "text-max-angle": new q(N.layout_symbol[`text-max-angle`], `text-max-angle`), "text-writing-mode": new q(N.layout_symbol[`text-writing-mode`], `text-writing-mode`), "text-rotate": new J(N.layout_symbol[`text-rotate`], `text-rotate`), "text-padding": new q(N.layout_symbol[`text-padding`], `text-padding`), "text-keep-upright": new q(N.layout_symbol[`text-keep-upright`], `text-keep-upright`), "text-transform": new J(N.layout_symbol[`text-transform`], `text-transform`), "text-offset": new J(N.layout_symbol[`text-offset`], `text-offset`), "text-allow-overlap": new q(N.layout_symbol[`text-allow-overlap`], `text-allow-overlap`), "text-overlap": new q(N.layout_symbol[`text-overlap`], `text-overlap`), "text-ignore-placement": new q(N.layout_symbol[`text-ignore-placement`], `text-ignore-placement`), "text-optional": new q(N.layout_symbol[`text-optional`], `text-optional`), "symbol-height-offset": new J(N.layout_symbol[`symbol-height-offset`], `symbol-height-offset`), "symbol-height-anchor": new q(N.layout_symbol[`symbol-height-anchor`], `symbol-height-anchor`) });
var T_;
var E_ = () => T_ ||= new Fo({ "icon-opacity": new J(N.paint_symbol[`icon-opacity`], `icon-opacity`), "icon-color": new J(N.paint_symbol[`icon-color`], `icon-color`), "icon-halo-color": new J(N.paint_symbol[`icon-halo-color`], `icon-halo-color`), "icon-halo-width": new J(N.paint_symbol[`icon-halo-width`], `icon-halo-width`), "icon-halo-blur": new J(N.paint_symbol[`icon-halo-blur`], `icon-halo-blur`), "icon-translate": new q(N.paint_symbol[`icon-translate`], `icon-translate`), "icon-translate-anchor": new q(N.paint_symbol[`icon-translate-anchor`], `icon-translate-anchor`), "text-opacity": new J(N.paint_symbol[`text-opacity`], `text-opacity`), "text-color": new J(N.paint_symbol[`text-color`], `text-color`, { runtimeType: Ce, getOverride: (e53) => e53.textColor, hasOverride: (e53) => !!e53.textColor }), "text-halo-color": new J(N.paint_symbol[`text-halo-color`], `text-halo-color`), "text-halo-width": new J(N.paint_symbol[`text-halo-width`], `text-halo-width`), "text-halo-blur": new J(N.paint_symbol[`text-halo-blur`], `text-halo-blur`), "text-translate": new q(N.paint_symbol[`text-translate`], `text-translate`), "text-translate-anchor": new q(N.paint_symbol[`text-translate-anchor`], `text-translate-anchor`) });
var D_ = { get paint() {
  return E_();
}, get layout() {
  return w_();
} };
var O_ = class {
  constructor(e53) {
    if (e53.property.overrides === void 0) throw Error(`overrides must be provided to instantiate FormatSectionOverride class`);
    this.type = e53.property.overrides ? e53.property.overrides.runtimeType : Se, this.defaultValue = e53;
  }
  evaluate(e53) {
    if (e53.formattedSection) {
      let t2 = this.defaultValue.property.overrides;
      if (t2?.hasOverride(e53.formattedSection)) return t2.getOverride(e53.formattedSection);
    }
    return e53.feature && e53.featureState ? this.defaultValue.evaluate(e53.feature, e53.featureState) : this.defaultValue.property.specification.default;
  }
  eachChild(e53) {
    if (!this.defaultValue.isConstant()) {
      let t2 = this.defaultValue.value;
      e53(t2._styleExpression.expression);
    }
  }
  outputDefined() {
    return false;
  }
  serialize() {
    return null;
  }
};
G(`FormatSectionOverride`, O_, { omit: [`defaultValue`] });
var k_ = class e50 extends Ro {
  constructor(e53, t2) {
    super(e53, D_, t2);
  }
  recalculate(e53, t2) {
    super.recalculate(e53, t2);
    let n2 = this.layout.get(`icon-rotation-alignment`);
    if ((n2.value.kind !== `constant` || n2.value.value === `auto`) && (this.layout._values[`icon-rotation-alignment`] = new Oo(n2.property, { kind: `constant`, value: this.layout.get(`symbol-placement`) === `point` ? `viewport` : `map` }, n2.parameters)), this.layout.get(`text-rotation-alignment`) === `auto` && (this.layout.get(`symbol-placement`) === `point` ? this.layout._values[`text-rotation-alignment`] = `viewport` : this.layout._values[`text-rotation-alignment`] = `map`), this.layout.get(`text-pitch-alignment`) === `auto` && (this.layout._values[`text-pitch-alignment`] = this.layout.get(`text-rotation-alignment`) === `map` ? `map` : `viewport`), this.layout.get(`icon-pitch-alignment`) === `auto` && (this.layout._values[`icon-pitch-alignment`] = this.layout.get(`icon-rotation-alignment`).constantOr(`viewport`)), this.layout.get(`symbol-placement`) === `point`) {
      let e54 = this.layout.get(`text-writing-mode`);
      if (e54) {
        let t3 = [];
        for (let n3 of e54) t3.includes(n3) || t3.push(n3);
        this.layout._values[`text-writing-mode`] = t3;
      } else this.layout._values[`text-writing-mode`] = [`horizontal`];
    }
    this._setPaintOverrides();
  }
  getValueAndResolveTokens(e53, t2, n2, r2) {
    let i2 = this.layout.get(e53).evaluate(t2, {}, n2, r2), a2 = this._unevaluatedLayout._values[e53];
    return !a2.isDataDriven() && !pi(a2.value) && i2 ? S_(t2.properties, i2) : i2;
  }
  createBucket(e53) {
    return new b_(e53);
  }
  queryRadius() {
    return 0;
  }
  queryIntersectsFeature() {
    throw Error(`Should take a different path in FeatureIndex`);
  }
  _setPaintOverrides() {
    for (let t2 of D_.paint.overridableProperties) {
      if (!e50.hasPaintOverride(this.layout, t2)) continue;
      let n2 = this.paint.get(t2), r2 = new ui(new O_(n2), `layers[${this.id}].paint.${n2.property.name}`, n2.property.specification), i2 = null;
      i2 = n2.value.kind === `constant` || n2.value.kind === `source` ? new hi(`source`, r2) : new gi(`composite`, r2, n2.value.zoomStops), this.paint._values[t2] = new Oo(n2.property, i2, n2.parameters);
    }
  }
  _handleOverridablePaintPropertyUpdate(t2, n2, r2) {
    return !this.layout || n2.isDataDriven() || r2.isDataDriven() ? false : e50.hasPaintOverride(this.layout, t2);
  }
  static hasPaintOverride(e53, t2) {
    let n2 = e53.get(`text-field`), r2 = D_.paint.properties[t2], i2 = false, a2 = (e54) => {
      for (let t3 of e54) if (r2.overrides?.hasOverride(t3)) {
        i2 = true;
        return;
      }
    };
    if (n2.value.kind === `constant` && n2.value.value instanceof ht) a2(n2.value.value.sections);
    else if (n2.value.kind === `source` || n2.value.kind === `composite`) {
      let e54 = (t4) => {
        if (!i2) {
          if (t4 instanceof Dt && U(t4.value) === Oe) {
            let e55 = t4.value;
            a2(e55.sections);
          } else t4 instanceof It ? a2(t4.sections) : t4.eachChild(e54);
        }
      }, t3 = n2.value;
      t3._styleExpression && e54(t3._styleExpression.expression);
    }
    return i2;
  }
};
function A_(e53, t2, n2, r2 = 1) {
  let i2 = e53.get(`icon-padding`).evaluate(t2, {}, n2)?.values;
  return [i2[0] * r2, i2[1] * r2, i2[2] * r2, i2[3] * r2];
}
var j_;
var M_ = () => j_ ||= new Fo({ "background-color": new q(N.paint_background[`background-color`], `background-color`), "background-pattern": new No(N.paint_background[`background-pattern`], `background-pattern`), "background-opacity": new q(N.paint_background[`background-opacity`], `background-opacity`) });
var N_ = { get paint() {
  return M_();
} };
var P_ = class extends Ro {
  constructor(e53, t2) {
    super(e53, N_, t2);
  }
};
var F_;
var I_ = () => F_ ||= new Fo({ "raster-opacity": new q(N.paint_raster[`raster-opacity`], `raster-opacity`), "raster-hue-rotate": new q(N.paint_raster[`raster-hue-rotate`], `raster-hue-rotate`), "raster-brightness-min": new q(N.paint_raster[`raster-brightness-min`], `raster-brightness-min`), "raster-brightness-max": new q(N.paint_raster[`raster-brightness-max`], `raster-brightness-max`), "raster-saturation": new q(N.paint_raster[`raster-saturation`], `raster-saturation`), "raster-contrast": new q(N.paint_raster[`raster-contrast`], `raster-contrast`), resampling: new q(N.paint_raster.resampling, `resampling`), "raster-resampling": new q(N.paint_raster[`raster-resampling`], `raster-resampling`), "raster-fade-duration": new q(N.paint_raster[`raster-fade-duration`], `raster-fade-duration`) });
var L_ = { get paint() {
  return I_();
} };
var R_ = class extends Ro {
  constructor(e53, t2) {
    super(e53, L_, t2);
  }
};
var z_ = class extends Ro {
  constructor(e53, t2) {
    super(e53, {}, t2), this.onAdd = (e54) => {
      this.implementation.onAdd && this.implementation.onAdd(e54, e54.painter.context.gl);
    }, this.onRemove = (e54) => {
      this.implementation.onRemove && this.implementation.onRemove(e54, e54.painter.context.gl);
    }, this.implementation = e53;
  }
  is3D() {
    return this.implementation.renderingMode === `3d`;
  }
  hasOffscreenPass() {
    return this.implementation.prerender !== void 0;
  }
  recalculate() {
  }
  updateTransitions() {
  }
  hasTransition() {
    return false;
  }
  serialize() {
    throw Error(`Custom layers cannot be serialized`);
  }
};
function B_(e53, t2) {
  if (e53.type === `custom`) return new z_(e53, t2);
  switch (e53.type) {
    case `background`:
      return new P_(e53, t2);
    case `circle`:
      return new al(e53, t2);
    case `color-relief`:
      return new kl(e53, t2);
    case `fill`:
      return new Zu(e53, t2);
    case `fill-extrusion`:
      return new Vd(e53, t2);
    case `heatmap`:
      return new _l(e53, t2);
    case `hillshade`:
      return new xl(e53, t2);
    case `line`:
      return new Gp(e53, t2);
    case `raster`:
      return new R_(e53, t2);
    case `symbol`:
      return new k_(e53, t2);
  }
}
var V_ = class {
  constructor(e53, t2) {
    this.feature = e53, this.type = e53.type, this.properties = e53.tags ? e53.tags : {}, this.extent = t2, `id` in e53 && (typeof e53.id == `string` ? this.id = parseInt(e53.id, 10) : typeof e53.id == `number` && !isNaN(e53.id) && (this.id = e53.id));
  }
  loadGeometry() {
    let e53 = [], t2 = this.feature.type === 1 ? [this.feature.geometry] : this.feature.geometry;
    for (let n2 of t2) {
      let t3 = [];
      for (let e54 of n2) t3.push(new l(e54[0], e54[1]));
      e53.push(t3);
    }
    return e53;
  }
};
var H_ = `_geojsonTileLayer`;
var U_ = class {
  constructor(e53, t2) {
    this.layers = { [H_]: this }, this.name = H_, this.version = t2 ? t2.version : 1, this.extent = t2 ? t2.extent : 4096, this.length = e53.length, this.features = e53;
  }
  feature(e53) {
    return new V_(this.features[e53], this.extent);
  }
};
function W_(e53, t2 = ``) {
  let n2 = new xh();
  return G_(e53, n2, t2), n2.finish();
}
function G_(e53, t2, n2 = ``) {
  for (let r2 in e53.layers) t2.writeMessage(3, (e54, t3) => K_(e54, t3, n2), e53.layers[r2]);
}
function K_(e53, t2, n2 = ``) {
  t2.writeVarintField(15, e53.version || 1), t2.writeStringField(1, e53.name || ``), t2.writeVarintField(5, e53.extent || 4096);
  let r2 = { jsonPrefix: n2, keys: [], values: [], keycache: {}, valuecache: {} };
  for (let n3 = 0; n3 < e53.length; n3++) r2.feature = e53.feature(n3), t2.writeMessage(2, q_, r2);
  let i2 = r2.keys;
  for (let e54 of i2) t2.writeStringField(3, e54);
  let a2 = r2.values;
  for (let e54 of a2) t2.writeMessage(4, Q_, e54);
}
function q_(e53, t2) {
  if (!e53.feature) return;
  let n2 = e53.feature;
  n2.id !== void 0 && t2.writeVarintField(1, n2.id), t2.writeMessage(2, J_, e53), t2.writeVarintField(3, n2.type), t2.writeMessage(4, Z_, n2);
}
function J_(e53, t2) {
  for (let n2 in e53.feature?.properties) {
    let r2 = e53.feature.properties[n2], i2 = e53.keycache[n2];
    if (r2 == null) continue;
    i2 === void 0 && (e53.keys.push(n2), i2 = e53.keys.length - 1, e53.keycache[n2] = i2), t2.writeVarint(i2), typeof r2 != `string` && typeof r2 != `boolean` && typeof r2 != `number` && (r2 = e53.jsonPrefix + JSON.stringify(r2));
    let a2 = typeof r2 + `:` + r2, o2 = e53.valuecache[a2];
    o2 === void 0 && (e53.values.push(r2), o2 = e53.values.length - 1, e53.valuecache[a2] = o2), t2.writeVarint(o2);
  }
}
function Y_(e53, t2) {
  return (t2 << 3) + (e53 & 7);
}
function X_(e53) {
  return e53 << 1 ^ e53 >> 31;
}
function Z_(e53, t2) {
  let n2 = e53.loadGeometry(), r2 = e53.type, i2 = 0, a2 = 0;
  for (let o2 of n2) {
    let n3 = 1;
    r2 === 1 && (n3 = o2.length), t2.writeVarint(Y_(1, n3));
    let s2 = o2[o2.length - 1], c2 = r2 === 3 && o2.length > 1 && s2.x === o2[0].x && s2.y === o2[0].y ? o2.length - 1 : o2.length;
    for (let e54 = 0; e54 < c2; e54++) {
      e54 === 1 && r2 !== 1 && t2.writeVarint(Y_(2, c2 - 1));
      let n4 = o2[e54].x - i2, s3 = o2[e54].y - a2;
      t2.writeVarint(X_(n4)), t2.writeVarint(X_(s3)), i2 += n4, a2 += s3;
    }
    e53.type === 3 && t2.writeVarint(Y_(7, 1));
  }
}
function Q_(e53, t2) {
  let n2 = typeof e53;
  n2 === `string` ? t2.writeStringField(1, e53) : n2 === `boolean` ? t2.writeBooleanField(7, e53) : n2 === `number` && (e53 % 1 == 0 ? e53 < 0 ? t2.writeSVarintField(6, e53) : t2.writeVarintField(5, e53) : t2.writeDoubleField(3, e53));
}
var $_ = class {
  constructor(e53) {
    this._stringToNumber = {}, this._numberToString = [];
    for (let t2 = 0; t2 < e53.length; t2++) {
      let n2 = e53[t2];
      this._stringToNumber[n2] = t2, this._numberToString[t2] = n2;
    }
  }
  encode(e53) {
    return this._stringToNumber[e53];
  }
  decode(e53) {
    if (e53 >= this._numberToString.length) throw Error(`Out of bounds. Index requested n=${e53} can't be >= this._numberToString.length ${this._numberToString.length}`);
    return this._numberToString[e53];
  }
};
var ev = class e51 {
  static {
    this.worldCoordinateHelpers = /* @__PURE__ */ new WeakMap();
  }
  constructor(t2, n2, r2, i2, a2, o2) {
    this.type = `Feature`, this._vectorTileFeature = t2, this._x = r2, this._y = i2, this._z = n2, o2 !== xd && e51.worldCoordinateHelpers.set(this, o2);
    for (let e53 in t2.properties) typeof t2.properties[e53] == `string` && t2.properties[e53].startsWith(`__$json__:`) && (t2.properties[e53] = JSON.parse(t2.properties[e53].slice(10)));
    this.properties = t2.properties, this.id = a2;
  }
  projectPoint(e53, t2, n2, r2, i2) {
    if (i2) {
      let a2 = i2.lngLatFromWorld((e53.x + t2) / r2, (e53.y + n2) / r2);
      return [a2.lng, a2.lat];
    }
    return [(e53.x + t2) * 360 / r2 - 180, 360 / Math.PI * Math.atan(Math.exp((1 - (e53.y + n2) * 2 / r2) * Math.PI)) - 90];
  }
  projectLine(e53, t2, n2, r2, i2) {
    return e53.map((e54) => this.projectPoint(e54, t2, n2, r2, i2));
  }
  get geometry() {
    if (this._geometry) return this._geometry;
    let t2 = this._vectorTileFeature, n2 = e51.worldCoordinateHelpers.get(this), r2 = t2.extent * 2 ** this._z, i2 = t2.extent * this._x, a2 = t2.extent * this._y, o2 = t2.loadGeometry();
    switch (t2.type) {
      case 1: {
        let e53 = [];
        for (let t4 of o2) e53.push(t4[0]);
        let t3 = this.projectLine(e53, i2, a2, r2, n2);
        this._geometry = e53.length === 1 ? { type: `Point`, coordinates: t3[0] } : { type: `MultiPoint`, coordinates: t3 };
        break;
      }
      case 2: {
        let e53 = o2.map((e54) => this.projectLine(e54, i2, a2, r2, n2));
        this._geometry = e53.length === 1 ? { type: `LineString`, coordinates: e53[0] } : { type: `MultiLineString`, coordinates: e53 };
        break;
      }
      case 3: {
        let e53 = nd(o2), t3 = [];
        for (let o3 of e53) t3.push(o3.map((e54) => this.projectLine(e54, i2, a2, r2, n2)));
        this._geometry = t3.length === 1 ? { type: `Polygon`, coordinates: t3[0] } : { type: `MultiPolygon`, coordinates: t3 };
        break;
      }
      default:
        throw Error(`unknown feature type: ${t2.type}`);
    }
    return this._geometry;
  }
  set geometry(e53) {
    this._geometry = e53;
  }
  toJSON() {
    let e53 = { geometry: this.geometry };
    for (let t2 in this) t2 !== `_geometry` && t2 !== `_vectorTileFeature` && t2 !== `_x` && t2 !== `_y` && t2 !== `_z` && (e53[t2] = this[t2]);
    return e53;
  }
};
var tv = class {
  constructor(e53, t2, n2) {
    this._name = e53, this.dataBuffer = t2, typeof n2 == `number` ? this._size = n2 : (this.nullabilityBuffer = n2, this._size = n2.size());
  }
  getValue(e53) {
    return this.nullabilityBuffer && !this.nullabilityBuffer.get(e53) ? null : this.getValueFromBuffer(e53);
  }
  has(e53) {
    return this.nullabilityBuffer?.get(e53) || !this.nullabilityBuffer;
  }
  get name() {
    return this._name;
  }
  get size() {
    return this._size;
  }
};
var nv = class extends tv {
};
var rv = class extends nv {
  getValueFromBuffer(e53) {
    return this.dataBuffer[e53];
  }
};
var iv = class extends nv {
  getValueFromBuffer(e53) {
    return this.dataBuffer[e53];
  }
};
var av = class extends tv {
  constructor(e53, t2, n2, r2) {
    super(e53, t2, r2), this.delta = n2;
  }
};
var ov = class extends av {
  constructor(e53, t2, n2, r2, i2) {
    super(e53, i2 ? Int32Array.of(t2) : Uint32Array.of(t2), n2, r2);
  }
  getValueFromBuffer(e53) {
    return this.dataBuffer[0] + e53 * this.delta;
  }
};
var sv = class extends tv {
  constructor(e53, t2, n2, r2) {
    super(e53, r2 ? Int32Array.of(t2) : Uint32Array.of(t2), n2);
  }
  getValueFromBuffer(e53) {
    return this.dataBuffer[0];
  }
};
var cv = class {
  constructor(e53, t2, n2, r2, i2 = 4096) {
    if (this._name = e53, this._geometryVector = t2, this._idVector = n2, this._propertyVectors = r2, this._extent = i2, e53.length === 0) throw Error(`Missing layer name`);
  }
  get name() {
    return this._name;
  }
  get idVector() {
    return this._idVector;
  }
  get geometryVector() {
    return this._geometryVector;
  }
  get propertyVectors() {
    return this._propertyVectors ?? [];
  }
  getPropertyVector(e53) {
    return this.propertyVectorsMap ||= new Map(this.propertyVectors.map((e54) => [e54.name, e54])), this.propertyVectorsMap.get(e53);
  }
  get numFeatures() {
    return this.geometryVector.numGeometries;
  }
  get extent() {
    return this._extent;
  }
  getFeatures() {
    let e53 = [], t2 = this.geometryVector.getGeometries();
    for (let n2 = 0; n2 < this.numFeatures; n2++) {
      let r2;
      if (this.idVector) {
        let e54 = this.idVector.getValue(n2);
        e54 !== null && (r2 = this.containsMaxSafeIntegerValues(this.idVector) ? Number(e54) : e54);
      }
      let i2 = { coordinates: t2[n2], type: this.geometryVector.geometryType(n2) }, a2 = {};
      for (let e54 of this.propertyVectors) {
        if (!e54) continue;
        let t3 = e54.name, r3 = e54.getValue(n2);
        r3 !== null && (a2[t3] = r3);
      }
      e53.push({ id: r2, geometry: i2, properties: a2 });
    }
    return e53;
  }
  containsMaxSafeIntegerValues(e53) {
    return e53 instanceof rv || e53 instanceof sv || e53 instanceof ov || e53 instanceof iv;
  }
};
var lv = { FEATURE: 0, VERTEX: 1 };
var Y = { BOOLEAN: 0, INT_8: 1, UINT_8: 2, INT_32: 3, UINT_32: 4, INT_64: 5, UINT_64: 6, FLOAT: 7, DOUBLE: 8, STRING: 9 };
var uv = { GEOMETRY: 0, STRUCT: 1, MAP: 2 };
var dv = { ID: 0 };
var fv = class {
  constructor(e53) {
    this.value = e53;
  }
  get() {
    return this.value;
  }
  set(e53) {
    this.value = e53;
  }
  increment() {
    return this.value++;
  }
  add(e53) {
    this.value += e53;
  }
};
var X;
(function(e53) {
  e53.NONE = `NONE`, e53.DELTA = `DELTA`, e53.COMPONENTWISE_DELTA = `COMPONENTWISE_DELTA`, e53.RLE = `RLE`, e53.MORTON = `MORTON`;
})(X ||= {});
var pv;
(function(e53) {
  e53.NONE = `NONE`, e53.FAST_PFOR = `FAST_PFOR`, e53.VARINT = `VARINT`;
})(pv ||= {});
var mv = /* @__PURE__ */ new Uint32Array(33);
mv[0] = 0;
for (let e53 = 1; e53 <= 32; e53++) mv[e53] = e53 === 32 ? 4294967295 : 4294967295 >>> 32 - e53;
var hv = mv;
var gv = 65536;
function _v(e53, t2) {
  return e53 - e53 % t2;
}
function vv(e53) {
  return _v(e53 + 31, 32);
}
function yv(e53) {
  if (!Number.isFinite(e53) || e53 <= 0) return gv;
  let t2 = _v(Math.floor(e53), 256);
  return t2 === 0 ? 256 : t2;
}
function bv(e53) {
  let t2 = e53 >>> 0;
  return ((t2 & 255) << 24 | (t2 & 65280) << 8 | t2 >>> 8 & 65280 | t2 >>> 24 & 255) >>> 0;
}
function xv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0;
  n2[i2++] = a2 >>> 0 & 3, n2[i2++] = a2 >>> 2 & 3, n2[i2++] = a2 >>> 4 & 3, n2[i2++] = a2 >>> 6 & 3, n2[i2++] = a2 >>> 8 & 3, n2[i2++] = a2 >>> 10 & 3, n2[i2++] = a2 >>> 12 & 3, n2[i2++] = a2 >>> 14 & 3, n2[i2++] = a2 >>> 16 & 3, n2[i2++] = a2 >>> 18 & 3, n2[i2++] = a2 >>> 20 & 3, n2[i2++] = a2 >>> 22 & 3, n2[i2++] = a2 >>> 24 & 3, n2[i2++] = a2 >>> 26 & 3, n2[i2++] = a2 >>> 28 & 3, n2[i2++] = a2 >>> 30 & 3, n2[i2++] = o2 >>> 0 & 3, n2[i2++] = o2 >>> 2 & 3, n2[i2++] = o2 >>> 4 & 3, n2[i2++] = o2 >>> 6 & 3, n2[i2++] = o2 >>> 8 & 3, n2[i2++] = o2 >>> 10 & 3, n2[i2++] = o2 >>> 12 & 3, n2[i2++] = o2 >>> 14 & 3, n2[i2++] = o2 >>> 16 & 3, n2[i2++] = o2 >>> 18 & 3, n2[i2++] = o2 >>> 20 & 3, n2[i2++] = o2 >>> 22 & 3, n2[i2++] = o2 >>> 24 & 3, n2[i2++] = o2 >>> 26 & 3, n2[i2++] = o2 >>> 28 & 3, n2[i2] = o2 >>> 30 & 3;
}
function Sv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0;
  n2[i2++] = a2 >>> 0 & 7, n2[i2++] = a2 >>> 3 & 7, n2[i2++] = a2 >>> 6 & 7, n2[i2++] = a2 >>> 9 & 7, n2[i2++] = a2 >>> 12 & 7, n2[i2++] = a2 >>> 15 & 7, n2[i2++] = a2 >>> 18 & 7, n2[i2++] = a2 >>> 21 & 7, n2[i2++] = a2 >>> 24 & 7, n2[i2++] = a2 >>> 27 & 7, n2[i2++] = (a2 >>> 30 | (o2 & 1) << 2) & 7, n2[i2++] = o2 >>> 1 & 7, n2[i2++] = o2 >>> 4 & 7, n2[i2++] = o2 >>> 7 & 7, n2[i2++] = o2 >>> 10 & 7, n2[i2++] = o2 >>> 13 & 7, n2[i2++] = o2 >>> 16 & 7, n2[i2++] = o2 >>> 19 & 7, n2[i2++] = o2 >>> 22 & 7, n2[i2++] = o2 >>> 25 & 7, n2[i2++] = o2 >>> 28 & 7, n2[i2++] = (o2 >>> 31 | (s2 & 3) << 1) & 7, n2[i2++] = s2 >>> 2 & 7, n2[i2++] = s2 >>> 5 & 7, n2[i2++] = s2 >>> 8 & 7, n2[i2++] = s2 >>> 11 & 7, n2[i2++] = s2 >>> 14 & 7, n2[i2++] = s2 >>> 17 & 7, n2[i2++] = s2 >>> 20 & 7, n2[i2++] = s2 >>> 23 & 7, n2[i2++] = s2 >>> 26 & 7, n2[i2] = s2 >>> 29 & 7;
}
function Cv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0;
  n2[i2++] = a2 >>> 0 & 15, n2[i2++] = a2 >>> 4 & 15, n2[i2++] = a2 >>> 8 & 15, n2[i2++] = a2 >>> 12 & 15, n2[i2++] = a2 >>> 16 & 15, n2[i2++] = a2 >>> 20 & 15, n2[i2++] = a2 >>> 24 & 15, n2[i2++] = a2 >>> 28 & 15, n2[i2++] = o2 >>> 0 & 15, n2[i2++] = o2 >>> 4 & 15, n2[i2++] = o2 >>> 8 & 15, n2[i2++] = o2 >>> 12 & 15, n2[i2++] = o2 >>> 16 & 15, n2[i2++] = o2 >>> 20 & 15, n2[i2++] = o2 >>> 24 & 15, n2[i2++] = o2 >>> 28 & 15, n2[i2++] = s2 >>> 0 & 15, n2[i2++] = s2 >>> 4 & 15, n2[i2++] = s2 >>> 8 & 15, n2[i2++] = s2 >>> 12 & 15, n2[i2++] = s2 >>> 16 & 15, n2[i2++] = s2 >>> 20 & 15, n2[i2++] = s2 >>> 24 & 15, n2[i2++] = s2 >>> 28 & 15, n2[i2++] = c2 >>> 0 & 15, n2[i2++] = c2 >>> 4 & 15, n2[i2++] = c2 >>> 8 & 15, n2[i2++] = c2 >>> 12 & 15, n2[i2++] = c2 >>> 16 & 15, n2[i2++] = c2 >>> 20 & 15, n2[i2++] = c2 >>> 24 & 15, n2[i2] = c2 >>> 28 & 15;
}
function wv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0;
  n2[i2++] = a2 >>> 0 & 31, n2[i2++] = a2 >>> 5 & 31, n2[i2++] = a2 >>> 10 & 31, n2[i2++] = a2 >>> 15 & 31, n2[i2++] = a2 >>> 20 & 31, n2[i2++] = a2 >>> 25 & 31, n2[i2++] = (a2 >>> 30 | (o2 & 7) << 2) & 31, n2[i2++] = o2 >>> 3 & 31, n2[i2++] = o2 >>> 8 & 31, n2[i2++] = o2 >>> 13 & 31, n2[i2++] = o2 >>> 18 & 31, n2[i2++] = o2 >>> 23 & 31, n2[i2++] = (o2 >>> 28 | (s2 & 1) << 4) & 31, n2[i2++] = s2 >>> 1 & 31, n2[i2++] = s2 >>> 6 & 31, n2[i2++] = s2 >>> 11 & 31, n2[i2++] = s2 >>> 16 & 31, n2[i2++] = s2 >>> 21 & 31, n2[i2++] = s2 >>> 26 & 31, n2[i2++] = (s2 >>> 31 | (c2 & 15) << 1) & 31, n2[i2++] = c2 >>> 4 & 31, n2[i2++] = c2 >>> 9 & 31, n2[i2++] = c2 >>> 14 & 31, n2[i2++] = c2 >>> 19 & 31, n2[i2++] = c2 >>> 24 & 31, n2[i2++] = (c2 >>> 29 | (l2 & 3) << 3) & 31, n2[i2++] = l2 >>> 2 & 31, n2[i2++] = l2 >>> 7 & 31, n2[i2++] = l2 >>> 12 & 31, n2[i2++] = l2 >>> 17 & 31, n2[i2++] = l2 >>> 22 & 31, n2[i2] = l2 >>> 27 & 31;
}
function Tv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0, u2 = e53[t2 + 5] >>> 0;
  n2[i2++] = a2 >>> 0 & 63, n2[i2++] = a2 >>> 6 & 63, n2[i2++] = a2 >>> 12 & 63, n2[i2++] = a2 >>> 18 & 63, n2[i2++] = a2 >>> 24 & 63, n2[i2++] = (a2 >>> 30 | (o2 & 15) << 2) & 63, n2[i2++] = o2 >>> 4 & 63, n2[i2++] = o2 >>> 10 & 63, n2[i2++] = o2 >>> 16 & 63, n2[i2++] = o2 >>> 22 & 63, n2[i2++] = (o2 >>> 28 | (s2 & 3) << 4) & 63, n2[i2++] = s2 >>> 2 & 63, n2[i2++] = s2 >>> 8 & 63, n2[i2++] = s2 >>> 14 & 63, n2[i2++] = s2 >>> 20 & 63, n2[i2++] = s2 >>> 26 & 63, n2[i2++] = c2 >>> 0 & 63, n2[i2++] = c2 >>> 6 & 63, n2[i2++] = c2 >>> 12 & 63, n2[i2++] = c2 >>> 18 & 63, n2[i2++] = c2 >>> 24 & 63, n2[i2++] = (c2 >>> 30 | (l2 & 15) << 2) & 63, n2[i2++] = l2 >>> 4 & 63, n2[i2++] = l2 >>> 10 & 63, n2[i2++] = l2 >>> 16 & 63, n2[i2++] = l2 >>> 22 & 63, n2[i2++] = (l2 >>> 28 | (u2 & 3) << 4) & 63, n2[i2++] = u2 >>> 2 & 63, n2[i2++] = u2 >>> 8 & 63, n2[i2++] = u2 >>> 14 & 63, n2[i2++] = u2 >>> 20 & 63, n2[i2] = u2 >>> 26 & 63;
}
function Ev(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0, u2 = e53[t2 + 5] >>> 0, d2 = e53[t2 + 6] >>> 0;
  n2[i2++] = a2 >>> 0 & 127, n2[i2++] = a2 >>> 7 & 127, n2[i2++] = a2 >>> 14 & 127, n2[i2++] = a2 >>> 21 & 127, n2[i2++] = (a2 >>> 28 | (o2 & 7) << 4) & 127, n2[i2++] = o2 >>> 3 & 127, n2[i2++] = o2 >>> 10 & 127, n2[i2++] = o2 >>> 17 & 127, n2[i2++] = o2 >>> 24 & 127, n2[i2++] = (o2 >>> 31 | (s2 & 63) << 1) & 127, n2[i2++] = s2 >>> 6 & 127, n2[i2++] = s2 >>> 13 & 127, n2[i2++] = s2 >>> 20 & 127, n2[i2++] = (s2 >>> 27 | (c2 & 3) << 5) & 127, n2[i2++] = c2 >>> 2 & 127, n2[i2++] = c2 >>> 9 & 127, n2[i2++] = c2 >>> 16 & 127, n2[i2++] = c2 >>> 23 & 127, n2[i2++] = (c2 >>> 30 | (l2 & 31) << 2) & 127, n2[i2++] = l2 >>> 5 & 127, n2[i2++] = l2 >>> 12 & 127, n2[i2++] = l2 >>> 19 & 127, n2[i2++] = (l2 >>> 26 | (u2 & 1) << 6) & 127, n2[i2++] = u2 >>> 1 & 127, n2[i2++] = u2 >>> 8 & 127, n2[i2++] = u2 >>> 15 & 127, n2[i2++] = u2 >>> 22 & 127, n2[i2++] = (u2 >>> 29 | (d2 & 15) << 3) & 127, n2[i2++] = d2 >>> 4 & 127, n2[i2++] = d2 >>> 11 & 127, n2[i2++] = d2 >>> 18 & 127, n2[i2] = d2 >>> 25 & 127;
}
function Dv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0, u2 = e53[t2 + 5] >>> 0, d2 = e53[t2 + 6] >>> 0, f2 = e53[t2 + 7] >>> 0;
  n2[i2++] = a2 >>> 0 & 255, n2[i2++] = a2 >>> 8 & 255, n2[i2++] = a2 >>> 16 & 255, n2[i2++] = a2 >>> 24 & 255, n2[i2++] = o2 >>> 0 & 255, n2[i2++] = o2 >>> 8 & 255, n2[i2++] = o2 >>> 16 & 255, n2[i2++] = o2 >>> 24 & 255, n2[i2++] = s2 >>> 0 & 255, n2[i2++] = s2 >>> 8 & 255, n2[i2++] = s2 >>> 16 & 255, n2[i2++] = s2 >>> 24 & 255, n2[i2++] = c2 >>> 0 & 255, n2[i2++] = c2 >>> 8 & 255, n2[i2++] = c2 >>> 16 & 255, n2[i2++] = c2 >>> 24 & 255, n2[i2++] = l2 >>> 0 & 255, n2[i2++] = l2 >>> 8 & 255, n2[i2++] = l2 >>> 16 & 255, n2[i2++] = l2 >>> 24 & 255, n2[i2++] = u2 >>> 0 & 255, n2[i2++] = u2 >>> 8 & 255, n2[i2++] = u2 >>> 16 & 255, n2[i2++] = u2 >>> 24 & 255, n2[i2++] = d2 >>> 0 & 255, n2[i2++] = d2 >>> 8 & 255, n2[i2++] = d2 >>> 16 & 255, n2[i2++] = d2 >>> 24 & 255, n2[i2++] = f2 >>> 0 & 255, n2[i2++] = f2 >>> 8 & 255, n2[i2++] = f2 >>> 16 & 255, n2[i2] = f2 >>> 24 & 255;
}
function Ov(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0, u2 = e53[t2 + 5] >>> 0, d2 = e53[t2 + 6] >>> 0, f2 = e53[t2 + 7] >>> 0, p2 = e53[t2 + 8] >>> 0;
  n2[i2++] = a2 >>> 0 & 511, n2[i2++] = a2 >>> 9 & 511, n2[i2++] = a2 >>> 18 & 511, n2[i2++] = (a2 >>> 27 | (o2 & 15) << 5) & 511, n2[i2++] = o2 >>> 4 & 511, n2[i2++] = o2 >>> 13 & 511, n2[i2++] = o2 >>> 22 & 511, n2[i2++] = (o2 >>> 31 | (s2 & 255) << 1) & 511, n2[i2++] = s2 >>> 8 & 511, n2[i2++] = s2 >>> 17 & 511, n2[i2++] = (s2 >>> 26 | (c2 & 7) << 6) & 511, n2[i2++] = c2 >>> 3 & 511, n2[i2++] = c2 >>> 12 & 511, n2[i2++] = c2 >>> 21 & 511, n2[i2++] = (c2 >>> 30 | (l2 & 127) << 2) & 511, n2[i2++] = l2 >>> 7 & 511, n2[i2++] = l2 >>> 16 & 511, n2[i2++] = (l2 >>> 25 | (u2 & 3) << 7) & 511, n2[i2++] = u2 >>> 2 & 511, n2[i2++] = u2 >>> 11 & 511, n2[i2++] = u2 >>> 20 & 511, n2[i2++] = (u2 >>> 29 | (d2 & 63) << 3) & 511, n2[i2++] = d2 >>> 6 & 511, n2[i2++] = d2 >>> 15 & 511, n2[i2++] = (d2 >>> 24 | (f2 & 1) << 8) & 511, n2[i2++] = f2 >>> 1 & 511, n2[i2++] = f2 >>> 10 & 511, n2[i2++] = f2 >>> 19 & 511, n2[i2++] = (f2 >>> 28 | (p2 & 31) << 4) & 511, n2[i2++] = p2 >>> 5 & 511, n2[i2++] = p2 >>> 14 & 511, n2[i2] = p2 >>> 23 & 511;
}
function kv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0, u2 = e53[t2 + 5] >>> 0, d2 = e53[t2 + 6] >>> 0, f2 = e53[t2 + 7] >>> 0, p2 = e53[t2 + 8] >>> 0, m2 = e53[t2 + 9] >>> 0;
  n2[i2++] = a2 >>> 0 & 1023, n2[i2++] = a2 >>> 10 & 1023, n2[i2++] = a2 >>> 20 & 1023, n2[i2++] = (a2 >>> 30 | (o2 & 255) << 2) & 1023, n2[i2++] = o2 >>> 8 & 1023, n2[i2++] = o2 >>> 18 & 1023, n2[i2++] = (o2 >>> 28 | (s2 & 63) << 4) & 1023, n2[i2++] = s2 >>> 6 & 1023, n2[i2++] = s2 >>> 16 & 1023, n2[i2++] = (s2 >>> 26 | (c2 & 15) << 6) & 1023, n2[i2++] = c2 >>> 4 & 1023, n2[i2++] = c2 >>> 14 & 1023, n2[i2++] = (c2 >>> 24 | (l2 & 3) << 8) & 1023, n2[i2++] = l2 >>> 2 & 1023, n2[i2++] = l2 >>> 12 & 1023, n2[i2++] = l2 >>> 22 & 1023, n2[i2++] = u2 >>> 0 & 1023, n2[i2++] = u2 >>> 10 & 1023, n2[i2++] = u2 >>> 20 & 1023, n2[i2++] = (u2 >>> 30 | (d2 & 255) << 2) & 1023, n2[i2++] = d2 >>> 8 & 1023, n2[i2++] = d2 >>> 18 & 1023, n2[i2++] = (d2 >>> 28 | (f2 & 63) << 4) & 1023, n2[i2++] = f2 >>> 6 & 1023, n2[i2++] = f2 >>> 16 & 1023, n2[i2++] = (f2 >>> 26 | (p2 & 15) << 6) & 1023, n2[i2++] = p2 >>> 4 & 1023, n2[i2++] = p2 >>> 14 & 1023, n2[i2++] = (p2 >>> 24 | (m2 & 3) << 8) & 1023, n2[i2++] = m2 >>> 2 & 1023, n2[i2++] = m2 >>> 12 & 1023, n2[i2] = m2 >>> 22 & 1023;
}
function Av(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0, u2 = e53[t2 + 5] >>> 0, d2 = e53[t2 + 6] >>> 0, f2 = e53[t2 + 7] >>> 0, p2 = e53[t2 + 8] >>> 0, m2 = e53[t2 + 9] >>> 0, h2 = e53[t2 + 10] >>> 0;
  n2[i2++] = a2 >>> 0 & 2047, n2[i2++] = a2 >>> 11 & 2047, n2[i2++] = (a2 >>> 22 | (o2 & 1) << 10) & 2047, n2[i2++] = o2 >>> 1 & 2047, n2[i2++] = o2 >>> 12 & 2047, n2[i2++] = (o2 >>> 23 | (s2 & 3) << 9) & 2047, n2[i2++] = s2 >>> 2 & 2047, n2[i2++] = s2 >>> 13 & 2047, n2[i2++] = (s2 >>> 24 | (c2 & 7) << 8) & 2047, n2[i2++] = c2 >>> 3 & 2047, n2[i2++] = c2 >>> 14 & 2047, n2[i2++] = (c2 >>> 25 | (l2 & 15) << 7) & 2047, n2[i2++] = l2 >>> 4 & 2047, n2[i2++] = l2 >>> 15 & 2047, n2[i2++] = (l2 >>> 26 | (u2 & 31) << 6) & 2047, n2[i2++] = u2 >>> 5 & 2047, n2[i2++] = u2 >>> 16 & 2047, n2[i2++] = (u2 >>> 27 | (d2 & 63) << 5) & 2047, n2[i2++] = d2 >>> 6 & 2047, n2[i2++] = d2 >>> 17 & 2047, n2[i2++] = (d2 >>> 28 | (f2 & 127) << 4) & 2047, n2[i2++] = f2 >>> 7 & 2047, n2[i2++] = f2 >>> 18 & 2047, n2[i2++] = (f2 >>> 29 | (p2 & 255) << 3) & 2047, n2[i2++] = p2 >>> 8 & 2047, n2[i2++] = p2 >>> 19 & 2047, n2[i2++] = (p2 >>> 30 | (m2 & 511) << 2) & 2047, n2[i2++] = m2 >>> 9 & 2047, n2[i2++] = m2 >>> 20 & 2047, n2[i2++] = (m2 >>> 31 | (h2 & 1023) << 1) & 2047, n2[i2++] = h2 >>> 10 & 2047, n2[i2] = h2 >>> 21 & 2047;
}
function jv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0, u2 = e53[t2 + 5] >>> 0, d2 = e53[t2 + 6] >>> 0, f2 = e53[t2 + 7] >>> 0, p2 = e53[t2 + 8] >>> 0, m2 = e53[t2 + 9] >>> 0, h2 = e53[t2 + 10] >>> 0, g2 = e53[t2 + 11] >>> 0;
  n2[i2++] = a2 >>> 0 & 4095, n2[i2++] = a2 >>> 12 & 4095, n2[i2++] = (a2 >>> 24 | (o2 & 15) << 8) & 4095, n2[i2++] = o2 >>> 4 & 4095, n2[i2++] = o2 >>> 16 & 4095, n2[i2++] = (o2 >>> 28 | (s2 & 255) << 4) & 4095, n2[i2++] = s2 >>> 8 & 4095, n2[i2++] = s2 >>> 20 & 4095, n2[i2++] = c2 >>> 0 & 4095, n2[i2++] = c2 >>> 12 & 4095, n2[i2++] = (c2 >>> 24 | (l2 & 15) << 8) & 4095, n2[i2++] = l2 >>> 4 & 4095, n2[i2++] = l2 >>> 16 & 4095, n2[i2++] = (l2 >>> 28 | (u2 & 255) << 4) & 4095, n2[i2++] = u2 >>> 8 & 4095, n2[i2++] = u2 >>> 20 & 4095, n2[i2++] = d2 >>> 0 & 4095, n2[i2++] = d2 >>> 12 & 4095, n2[i2++] = (d2 >>> 24 | (f2 & 15) << 8) & 4095, n2[i2++] = f2 >>> 4 & 4095, n2[i2++] = f2 >>> 16 & 4095, n2[i2++] = (f2 >>> 28 | (p2 & 255) << 4) & 4095, n2[i2++] = p2 >>> 8 & 4095, n2[i2++] = p2 >>> 20 & 4095, n2[i2++] = m2 >>> 0 & 4095, n2[i2++] = m2 >>> 12 & 4095, n2[i2++] = (m2 >>> 24 | (h2 & 15) << 8) & 4095, n2[i2++] = h2 >>> 4 & 4095, n2[i2++] = h2 >>> 16 & 4095, n2[i2++] = (h2 >>> 28 | (g2 & 255) << 4) & 4095, n2[i2++] = g2 >>> 8 & 4095, n2[i2] = g2 >>> 20 & 4095;
}
function Mv(e53, t2, n2, r2) {
  let i2 = r2, a2 = e53[t2] >>> 0, o2 = e53[t2 + 1] >>> 0, s2 = e53[t2 + 2] >>> 0, c2 = e53[t2 + 3] >>> 0, l2 = e53[t2 + 4] >>> 0, u2 = e53[t2 + 5] >>> 0, d2 = e53[t2 + 6] >>> 0, f2 = e53[t2 + 7] >>> 0, p2 = e53[t2 + 8] >>> 0, m2 = e53[t2 + 9] >>> 0, h2 = e53[t2 + 10] >>> 0, g2 = e53[t2 + 11] >>> 0, _2 = e53[t2 + 12] >>> 0, v2 = e53[t2 + 13] >>> 0, y2 = e53[t2 + 14] >>> 0, b2 = e53[t2 + 15] >>> 0;
  n2[i2++] = a2 >>> 0 & 65535, n2[i2++] = a2 >>> 16 & 65535, n2[i2++] = o2 >>> 0 & 65535, n2[i2++] = o2 >>> 16 & 65535, n2[i2++] = s2 >>> 0 & 65535, n2[i2++] = s2 >>> 16 & 65535, n2[i2++] = c2 >>> 0 & 65535, n2[i2++] = c2 >>> 16 & 65535, n2[i2++] = l2 >>> 0 & 65535, n2[i2++] = l2 >>> 16 & 65535, n2[i2++] = u2 >>> 0 & 65535, n2[i2++] = u2 >>> 16 & 65535, n2[i2++] = d2 >>> 0 & 65535, n2[i2++] = d2 >>> 16 & 65535, n2[i2++] = f2 >>> 0 & 65535, n2[i2++] = f2 >>> 16 & 65535, n2[i2++] = p2 >>> 0 & 65535, n2[i2++] = p2 >>> 16 & 65535, n2[i2++] = m2 >>> 0 & 65535, n2[i2++] = m2 >>> 16 & 65535, n2[i2++] = h2 >>> 0 & 65535, n2[i2++] = h2 >>> 16 & 65535, n2[i2++] = g2 >>> 0 & 65535, n2[i2++] = g2 >>> 16 & 65535, n2[i2++] = _2 >>> 0 & 65535, n2[i2++] = _2 >>> 16 & 65535, n2[i2++] = v2 >>> 0 & 65535, n2[i2++] = v2 >>> 16 & 65535, n2[i2++] = y2 >>> 0 & 65535, n2[i2++] = y2 >>> 16 & 65535, n2[i2++] = b2 >>> 0 & 65535, n2[i2] = b2 >>> 16 & 65535;
}
function Nv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 8; t3++) {
    let t4 = e53[a2++] >>> 0;
    n2[i2++] = t4 >>> 0 & 1, n2[i2++] = t4 >>> 1 & 1, n2[i2++] = t4 >>> 2 & 1, n2[i2++] = t4 >>> 3 & 1, n2[i2++] = t4 >>> 4 & 1, n2[i2++] = t4 >>> 5 & 1, n2[i2++] = t4 >>> 6 & 1, n2[i2++] = t4 >>> 7 & 1, n2[i2++] = t4 >>> 8 & 1, n2[i2++] = t4 >>> 9 & 1, n2[i2++] = t4 >>> 10 & 1, n2[i2++] = t4 >>> 11 & 1, n2[i2++] = t4 >>> 12 & 1, n2[i2++] = t4 >>> 13 & 1, n2[i2++] = t4 >>> 14 & 1, n2[i2++] = t4 >>> 15 & 1, n2[i2++] = t4 >>> 16 & 1, n2[i2++] = t4 >>> 17 & 1, n2[i2++] = t4 >>> 18 & 1, n2[i2++] = t4 >>> 19 & 1, n2[i2++] = t4 >>> 20 & 1, n2[i2++] = t4 >>> 21 & 1, n2[i2++] = t4 >>> 22 & 1, n2[i2++] = t4 >>> 23 & 1, n2[i2++] = t4 >>> 24 & 1, n2[i2++] = t4 >>> 25 & 1, n2[i2++] = t4 >>> 26 & 1, n2[i2++] = t4 >>> 27 & 1, n2[i2++] = t4 >>> 28 & 1, n2[i2++] = t4 >>> 29 & 1, n2[i2++] = t4 >>> 30 & 1, n2[i2++] = t4 >>> 31 & 1;
  }
}
function Pv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 8; t3++) {
    let t4 = e53[a2++] >>> 0, r3 = e53[a2++] >>> 0;
    n2[i2++] = t4 >>> 0 & 3, n2[i2++] = t4 >>> 2 & 3, n2[i2++] = t4 >>> 4 & 3, n2[i2++] = t4 >>> 6 & 3, n2[i2++] = t4 >>> 8 & 3, n2[i2++] = t4 >>> 10 & 3, n2[i2++] = t4 >>> 12 & 3, n2[i2++] = t4 >>> 14 & 3, n2[i2++] = t4 >>> 16 & 3, n2[i2++] = t4 >>> 18 & 3, n2[i2++] = t4 >>> 20 & 3, n2[i2++] = t4 >>> 22 & 3, n2[i2++] = t4 >>> 24 & 3, n2[i2++] = t4 >>> 26 & 3, n2[i2++] = t4 >>> 28 & 3, n2[i2++] = t4 >>> 30 & 3, n2[i2++] = r3 >>> 0 & 3, n2[i2++] = r3 >>> 2 & 3, n2[i2++] = r3 >>> 4 & 3, n2[i2++] = r3 >>> 6 & 3, n2[i2++] = r3 >>> 8 & 3, n2[i2++] = r3 >>> 10 & 3, n2[i2++] = r3 >>> 12 & 3, n2[i2++] = r3 >>> 14 & 3, n2[i2++] = r3 >>> 16 & 3, n2[i2++] = r3 >>> 18 & 3, n2[i2++] = r3 >>> 20 & 3, n2[i2++] = r3 >>> 22 & 3, n2[i2++] = r3 >>> 24 & 3, n2[i2++] = r3 >>> 26 & 3, n2[i2++] = r3 >>> 28 & 3, n2[i2++] = r3 >>> 30 & 3;
  }
}
function Fv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 8; t3++) {
    let t4 = e53[a2++] >>> 0, r3 = e53[a2++] >>> 0, o2 = e53[a2++] >>> 0;
    n2[i2++] = t4 >>> 0 & 7, n2[i2++] = t4 >>> 3 & 7, n2[i2++] = t4 >>> 6 & 7, n2[i2++] = t4 >>> 9 & 7, n2[i2++] = t4 >>> 12 & 7, n2[i2++] = t4 >>> 15 & 7, n2[i2++] = t4 >>> 18 & 7, n2[i2++] = t4 >>> 21 & 7, n2[i2++] = t4 >>> 24 & 7, n2[i2++] = t4 >>> 27 & 7, n2[i2++] = (t4 >>> 30 | (r3 & 1) << 2) & 7, n2[i2++] = r3 >>> 1 & 7, n2[i2++] = r3 >>> 4 & 7, n2[i2++] = r3 >>> 7 & 7, n2[i2++] = r3 >>> 10 & 7, n2[i2++] = r3 >>> 13 & 7, n2[i2++] = r3 >>> 16 & 7, n2[i2++] = r3 >>> 19 & 7, n2[i2++] = r3 >>> 22 & 7, n2[i2++] = r3 >>> 25 & 7, n2[i2++] = r3 >>> 28 & 7, n2[i2++] = (r3 >>> 31 | (o2 & 3) << 1) & 7, n2[i2++] = o2 >>> 2 & 7, n2[i2++] = o2 >>> 5 & 7, n2[i2++] = o2 >>> 8 & 7, n2[i2++] = o2 >>> 11 & 7, n2[i2++] = o2 >>> 14 & 7, n2[i2++] = o2 >>> 17 & 7, n2[i2++] = o2 >>> 20 & 7, n2[i2++] = o2 >>> 23 & 7, n2[i2++] = o2 >>> 26 & 7, n2[i2++] = o2 >>> 29 & 7;
  }
}
function Iv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 8; t3++) {
    let t4 = e53[a2++] >>> 0, r3 = e53[a2++] >>> 0, o2 = e53[a2++] >>> 0, s2 = e53[a2++] >>> 0;
    n2[i2++] = t4 >>> 0 & 15, n2[i2++] = t4 >>> 4 & 15, n2[i2++] = t4 >>> 8 & 15, n2[i2++] = t4 >>> 12 & 15, n2[i2++] = t4 >>> 16 & 15, n2[i2++] = t4 >>> 20 & 15, n2[i2++] = t4 >>> 24 & 15, n2[i2++] = t4 >>> 28 & 15, n2[i2++] = r3 >>> 0 & 15, n2[i2++] = r3 >>> 4 & 15, n2[i2++] = r3 >>> 8 & 15, n2[i2++] = r3 >>> 12 & 15, n2[i2++] = r3 >>> 16 & 15, n2[i2++] = r3 >>> 20 & 15, n2[i2++] = r3 >>> 24 & 15, n2[i2++] = r3 >>> 28 & 15, n2[i2++] = o2 >>> 0 & 15, n2[i2++] = o2 >>> 4 & 15, n2[i2++] = o2 >>> 8 & 15, n2[i2++] = o2 >>> 12 & 15, n2[i2++] = o2 >>> 16 & 15, n2[i2++] = o2 >>> 20 & 15, n2[i2++] = o2 >>> 24 & 15, n2[i2++] = o2 >>> 28 & 15, n2[i2++] = s2 >>> 0 & 15, n2[i2++] = s2 >>> 4 & 15, n2[i2++] = s2 >>> 8 & 15, n2[i2++] = s2 >>> 12 & 15, n2[i2++] = s2 >>> 16 & 15, n2[i2++] = s2 >>> 20 & 15, n2[i2++] = s2 >>> 24 & 15, n2[i2++] = s2 >>> 28 & 15;
  }
}
function Lv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 8; t3++) {
    let t4 = e53[a2++] >>> 0, r3 = e53[a2++] >>> 0, o2 = e53[a2++] >>> 0, s2 = e53[a2++] >>> 0, c2 = e53[a2++] >>> 0;
    n2[i2++] = t4 >>> 0 & 31, n2[i2++] = t4 >>> 5 & 31, n2[i2++] = t4 >>> 10 & 31, n2[i2++] = t4 >>> 15 & 31, n2[i2++] = t4 >>> 20 & 31, n2[i2++] = t4 >>> 25 & 31, n2[i2++] = (t4 >>> 30 | (r3 & 7) << 2) & 31, n2[i2++] = r3 >>> 3 & 31, n2[i2++] = r3 >>> 8 & 31, n2[i2++] = r3 >>> 13 & 31, n2[i2++] = r3 >>> 18 & 31, n2[i2++] = r3 >>> 23 & 31, n2[i2++] = (r3 >>> 28 | (o2 & 1) << 4) & 31, n2[i2++] = o2 >>> 1 & 31, n2[i2++] = o2 >>> 6 & 31, n2[i2++] = o2 >>> 11 & 31, n2[i2++] = o2 >>> 16 & 31, n2[i2++] = o2 >>> 21 & 31, n2[i2++] = o2 >>> 26 & 31, n2[i2++] = (o2 >>> 31 | (s2 & 15) << 1) & 31, n2[i2++] = s2 >>> 4 & 31, n2[i2++] = s2 >>> 9 & 31, n2[i2++] = s2 >>> 14 & 31, n2[i2++] = s2 >>> 19 & 31, n2[i2++] = s2 >>> 24 & 31, n2[i2++] = (s2 >>> 29 | (c2 & 3) << 3) & 31, n2[i2++] = c2 >>> 2 & 31, n2[i2++] = c2 >>> 7 & 31, n2[i2++] = c2 >>> 12 & 31, n2[i2++] = c2 >>> 17 & 31, n2[i2++] = c2 >>> 22 & 31, n2[i2++] = c2 >>> 27 & 31;
  }
}
function Rv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 8; t3++) {
    let t4 = e53[a2++] >>> 0, r3 = e53[a2++] >>> 0, o2 = e53[a2++] >>> 0, s2 = e53[a2++] >>> 0, c2 = e53[a2++] >>> 0, l2 = e53[a2++] >>> 0;
    n2[i2++] = t4 >>> 0 & 63, n2[i2++] = t4 >>> 6 & 63, n2[i2++] = t4 >>> 12 & 63, n2[i2++] = t4 >>> 18 & 63, n2[i2++] = t4 >>> 24 & 63, n2[i2++] = (t4 >>> 30 | (r3 & 15) << 2) & 63, n2[i2++] = r3 >>> 4 & 63, n2[i2++] = r3 >>> 10 & 63, n2[i2++] = r3 >>> 16 & 63, n2[i2++] = r3 >>> 22 & 63, n2[i2++] = (r3 >>> 28 | (o2 & 3) << 4) & 63, n2[i2++] = o2 >>> 2 & 63, n2[i2++] = o2 >>> 8 & 63, n2[i2++] = o2 >>> 14 & 63, n2[i2++] = o2 >>> 20 & 63, n2[i2++] = o2 >>> 26 & 63, n2[i2++] = s2 >>> 0 & 63, n2[i2++] = s2 >>> 6 & 63, n2[i2++] = s2 >>> 12 & 63, n2[i2++] = s2 >>> 18 & 63, n2[i2++] = s2 >>> 24 & 63, n2[i2++] = (s2 >>> 30 | (c2 & 15) << 2) & 63, n2[i2++] = c2 >>> 4 & 63, n2[i2++] = c2 >>> 10 & 63, n2[i2++] = c2 >>> 16 & 63, n2[i2++] = c2 >>> 22 & 63, n2[i2++] = (c2 >>> 28 | (l2 & 3) << 4) & 63, n2[i2++] = l2 >>> 2 & 63, n2[i2++] = l2 >>> 8 & 63, n2[i2++] = l2 >>> 14 & 63, n2[i2++] = l2 >>> 20 & 63, n2[i2++] = l2 >>> 26 & 63;
  }
}
function zv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 8; t3++) {
    let t4 = e53[a2++] >>> 0, r3 = e53[a2++] >>> 0, o2 = e53[a2++] >>> 0, s2 = e53[a2++] >>> 0, c2 = e53[a2++] >>> 0, l2 = e53[a2++] >>> 0, u2 = e53[a2++] >>> 0;
    n2[i2++] = t4 >>> 0 & 127, n2[i2++] = t4 >>> 7 & 127, n2[i2++] = t4 >>> 14 & 127, n2[i2++] = t4 >>> 21 & 127, n2[i2++] = (t4 >>> 28 | (r3 & 7) << 4) & 127, n2[i2++] = r3 >>> 3 & 127, n2[i2++] = r3 >>> 10 & 127, n2[i2++] = r3 >>> 17 & 127, n2[i2++] = r3 >>> 24 & 127, n2[i2++] = (r3 >>> 31 | (o2 & 63) << 1) & 127, n2[i2++] = o2 >>> 6 & 127, n2[i2++] = o2 >>> 13 & 127, n2[i2++] = o2 >>> 20 & 127, n2[i2++] = (o2 >>> 27 | (s2 & 3) << 5) & 127, n2[i2++] = s2 >>> 2 & 127, n2[i2++] = s2 >>> 9 & 127, n2[i2++] = s2 >>> 16 & 127, n2[i2++] = s2 >>> 23 & 127, n2[i2++] = (s2 >>> 30 | (c2 & 31) << 2) & 127, n2[i2++] = c2 >>> 5 & 127, n2[i2++] = c2 >>> 12 & 127, n2[i2++] = c2 >>> 19 & 127, n2[i2++] = (c2 >>> 26 | (l2 & 1) << 6) & 127, n2[i2++] = l2 >>> 1 & 127, n2[i2++] = l2 >>> 8 & 127, n2[i2++] = l2 >>> 15 & 127, n2[i2++] = l2 >>> 22 & 127, n2[i2++] = (l2 >>> 29 | (u2 & 15) << 3) & 127, n2[i2++] = u2 >>> 4 & 127, n2[i2++] = u2 >>> 11 & 127, n2[i2++] = u2 >>> 18 & 127, n2[i2++] = u2 >>> 25 & 127;
  }
}
function Bv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 8; t3++) {
    let t4 = e53[a2++] >>> 0, r3 = e53[a2++] >>> 0, o2 = e53[a2++] >>> 0, s2 = e53[a2++] >>> 0, c2 = e53[a2++] >>> 0, l2 = e53[a2++] >>> 0, u2 = e53[a2++] >>> 0, d2 = e53[a2++] >>> 0;
    n2[i2++] = t4 >>> 0 & 255, n2[i2++] = t4 >>> 8 & 255, n2[i2++] = t4 >>> 16 & 255, n2[i2++] = t4 >>> 24 & 255, n2[i2++] = r3 >>> 0 & 255, n2[i2++] = r3 >>> 8 & 255, n2[i2++] = r3 >>> 16 & 255, n2[i2++] = r3 >>> 24 & 255, n2[i2++] = o2 >>> 0 & 255, n2[i2++] = o2 >>> 8 & 255, n2[i2++] = o2 >>> 16 & 255, n2[i2++] = o2 >>> 24 & 255, n2[i2++] = s2 >>> 0 & 255, n2[i2++] = s2 >>> 8 & 255, n2[i2++] = s2 >>> 16 & 255, n2[i2++] = s2 >>> 24 & 255, n2[i2++] = c2 >>> 0 & 255, n2[i2++] = c2 >>> 8 & 255, n2[i2++] = c2 >>> 16 & 255, n2[i2++] = c2 >>> 24 & 255, n2[i2++] = l2 >>> 0 & 255, n2[i2++] = l2 >>> 8 & 255, n2[i2++] = l2 >>> 16 & 255, n2[i2++] = l2 >>> 24 & 255, n2[i2++] = u2 >>> 0 & 255, n2[i2++] = u2 >>> 8 & 255, n2[i2++] = u2 >>> 16 & 255, n2[i2++] = u2 >>> 24 & 255, n2[i2++] = d2 >>> 0 & 255, n2[i2++] = d2 >>> 8 & 255, n2[i2++] = d2 >>> 16 & 255, n2[i2++] = d2 >>> 24 & 255;
  }
}
function Vv(e53, t2, n2, r2) {
  let i2 = r2, a2 = t2;
  for (let t3 = 0; t3 < 128; t3++) {
    let t4 = e53[a2++] >>> 0;
    n2[i2++] = t4 & 65535, n2[i2++] = t4 >>> 16 & 65535;
  }
}
function Hv(e53, t2, n2, r2, i2) {
  let a2 = hv[i2] >>> 0, o2 = t2, s2 = 0, c2 = e53[o2] >>> 0, l2 = r2;
  for (let t3 = 0; t3 < 8; t3++) {
    for (let t4 = 0; t4 < 32; t4++) if (s2 + i2 <= 32) {
      let r3 = c2 >>> s2 & a2;
      n2[l2 + t4] = r3 | 0, s2 += i2, s2 === 32 && (s2 = 0, o2++, t4 !== 31 && (c2 = e53[o2] >>> 0));
    } else {
      let r3 = 32 - s2, u2 = c2 >>> s2;
      o2++, c2 = e53[o2] >>> 0;
      let d2 = i2 - r3, f2 = -1 >>> 32 - d2 >>> 0, p2 = (u2 | (c2 & f2) << r3) & a2;
      n2[l2 + t4] = p2 | 0, s2 = d2;
    }
    l2 += 32, s2 = 0, t3 < 7 && (c2 = e53[o2] >>> 0);
  }
}
var Uv = yv(gv);
var Wv = 3 * Uv / 256 + Uv | 0;
function Gv() {
  let e53 = new Uint8Array(Wv);
  return { dataToBePacked: Array(33), dataPointers: /* @__PURE__ */ new Int32Array(33), byteContainer: e53, byteContainerI32: new Int32Array(e53.buffer, e53.byteOffset, e53.byteLength >>> 2), exceptionSizes: /* @__PURE__ */ new Int32Array(33) };
}
function Kv(e53 = 16) {
  if (e53 < 0) throw RangeError(`initialEncodedWordCapacity must be >= 0, got ${e53}`);
  let t2 = Math.max(16, e53 | 0);
  return { encodedWords: new Uint32Array(t2), decoderWorkspace: Gv() };
}
function qv(e53, t2) {
  if (t2 <= e53.encodedWords.length) return e53.encodedWords;
  let n2 = new Uint32Array(Math.max(16, t2 * 2));
  return e53.encodedWords = n2, n2;
}
function Jv(e53, t2, n2, r2) {
  r2.byteContainer.length < n2 && (r2.byteContainer = new Uint8Array(n2 * 2), r2.byteContainerI32 = void 0);
  let i2 = r2.byteContainer, a2 = n2 >>> 2;
  if (i2.byteOffset & 3) for (let n3 = 0; n3 < a2; n3 = n3 + 1 | 0) {
    let r3 = e53[t2 + n3 | 0] | 0, a3 = n3 << 2;
    i2[a3] = r3 & 255, i2[a3 + 1 | 0] = r3 >>> 8 & 255, i2[a3 + 2 | 0] = r3 >>> 16 & 255, i2[a3 + 3 | 0] = r3 >>> 24 & 255;
  }
  else {
    let n3 = r2.byteContainerI32;
    (!n3 || n3.buffer !== i2.buffer || n3.byteOffset !== i2.byteOffset || n3.length < a2) && (n3 = r2.byteContainerI32 = new Int32Array(i2.buffer, i2.byteOffset, i2.byteLength >>> 2)), n3.set(e53.subarray(t2, t2 + a2));
  }
  let o2 = n2 & 3;
  if (o2 > 0) {
    let n3 = e53[t2 + a2 | 0] | 0, r3 = a2 << 2;
    for (let e54 = 0; e54 < o2; e54 = e54 + 1 | 0) i2[r3 + e54 | 0] = n3 >>> (e54 << 3) & 255;
  }
  return i2;
}
function Yv(e53, t2, n2) {
  let r2 = e53[t2++] | 0, i2 = n2.dataToBePacked;
  for (let a2 = 2; a2 <= 32; a2 = a2 + 1 | 0) {
    if (!(r2 >>> a2 - 1 & 1)) continue;
    if (t2 >= e53.length) throw Error(`FastPFOR decode: truncated exception stream header (bitWidth=${a2}, streamWordIndex=${t2}, needWords=1, availableWords=${e53.length - t2}, encodedWords=${e53.length})`);
    let o2 = e53[t2++] >>> 0, s2 = vv(o2), c2 = o2 * a2 + 31 >>> 5;
    if (t2 + c2 > e53.length) throw Error(`FastPFOR decode: truncated exception stream (bitWidth=${a2}, size=${o2}, streamWordIndex=${t2}, needWords=${c2}, availableWords=${e53.length - t2}, encodedWords=${e53.length})`);
    let l2 = i2[a2];
    (!l2 || l2.length < s2) && (l2 = i2[a2] = new Uint32Array(s2));
    let u2 = 0;
    for (; u2 < o2; u2 = u2 + 32 | 0) ay(e53, t2, l2, u2, a2), t2 = t2 + a2 | 0;
    let d2 = u2 - o2 | 0;
    t2 = t2 - (d2 * a2 >>> 5) | 0, n2.exceptionSizes[a2] = o2;
  }
  return t2;
}
function Xv(e53, t2, n2, r2, i2) {
  switch (i2) {
    case 1:
      Nv(e53, t2, n2, r2);
      break;
    case 2:
      Pv(e53, t2, n2, r2);
      break;
    case 3:
      Fv(e53, t2, n2, r2);
      break;
    case 4:
      Iv(e53, t2, n2, r2);
      break;
    case 5:
      Lv(e53, t2, n2, r2);
      break;
    case 6:
      Rv(e53, t2, n2, r2);
      break;
    case 7:
      zv(e53, t2, n2, r2);
      break;
    case 8:
      Bv(e53, t2, n2, r2);
      break;
    case 16:
      Vv(e53, t2, n2, r2);
      break;
    default:
      Hv(e53, t2, n2, r2, i2);
  }
  return t2 + (i2 << 3) | 0;
}
function Zv(e53, t2, n2, r2) {
  if (n2 + 2 > t2) throw Error(`FastPFOR decode: byteContainer underflow at block=${r2} (need 2 bytes for [bitWidth, exceptionCount], bytePos=${n2}, byteSize=${t2})`);
  let i2 = e53[n2++], a2 = e53[n2++];
  if (i2 > 32) throw Error(`FastPFOR decode: invalid bitWidth=${i2} at block=${r2} (expected 0..32). This likely indicates corrupted or truncated input.`);
  return { bitWidth: i2, exceptionCount: a2, bytePosIn: n2 };
}
function Qv(e53, t2, n2, r2, i2, a2) {
  if (n2 + 1 > t2) throw Error(`FastPFOR decode: exception header underflow at block=${a2} (need 1 byte for maxBits, bytePos=${n2}, byteSize=${t2})`);
  let o2 = e53[n2++];
  if (o2 < r2 || o2 > 32) throw Error(`FastPFOR decode: invalid maxBits=${o2} at block=${a2} (bitWidth=${r2}, expected ${r2}..32)`);
  let s2 = o2 - r2 | 0;
  if (s2 < 1 || s2 > 32) throw Error(`FastPFOR decode: invalid exceptionBitWidth=${s2} at block=${a2} (bitWidth=${r2}, maxBits=${o2})`);
  if (n2 + i2 > t2) throw Error(`FastPFOR decode: exception positions underflow at block=${a2} (need=${i2}, have=${t2 - n2})`);
  return { maxBits: o2, exceptionBitWidth: s2, bytePosIn: n2 };
}
function $v(e53, t2, n2, r2, i2, a2, o2, s2, c2) {
  let { maxBits: l2, exceptionBitWidth: u2, bytePosIn: d2 } = Qv(i2, a2, o2, n2, r2, c2);
  if (o2 = d2, u2 === 1) {
    let a3 = 1 << n2;
    for (let n3 = 0; n3 < r2; n3 = n3 + 1 | 0) {
      let n4 = i2[o2++];
      e53[n4 + t2 | 0] |= a3;
    }
    return o2;
  }
  let f2 = s2.dataToBePacked[u2];
  if (!f2) throw Error(`FastPFOR decode: missing exception stream for exceptionBitWidth=${u2} (bitWidth=${n2}, maxBits=${l2}) at block ${c2}`);
  let p2 = s2.dataPointers, m2 = p2[u2] | 0, h2 = s2.exceptionSizes[u2] | 0;
  if (m2 + r2 > h2) throw Error(`FastPFOR decode: exception stream overflow for exceptionBitWidth=${u2} (ptr=${m2}, need ${r2}, size=${h2}) at block ${c2}`);
  for (let a3 = 0; a3 < r2; a3 = a3 + 1 | 0) {
    let r3 = i2[o2++], a4 = f2[m2++] | 0;
    e53[r3 + t2 | 0] |= a4 << n2;
  }
  return p2[u2] = m2, o2;
}
function ey(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
  let u2 = n2 | 0, d2 = 0;
  for (let t3 = 0; t3 < o2; t3 = t3 + 1 | 0) {
    let n3 = Zv(s2, c2, d2, t3);
    d2 = n3.bytePosIn;
    let r3 = n3.bitWidth, o3 = n3.exceptionCount, f2 = a2 + t3 * 256 | 0;
    switch (r3) {
      case 0:
        i2.fill(0, f2, f2 + 256);
        break;
      case 32:
        for (let t4 = 0; t4 < 256; t4 = t4 + 1 | 0) i2[f2 + t4 | 0] = e53[u2 + t4 | 0] | 0;
        u2 = u2 + 256 | 0;
        break;
      default:
        u2 = Xv(e53, u2, i2, f2, r3);
    }
    o3 > 0 && (d2 = $v(i2, f2, r3, o3, s2, c2, d2, l2, t3));
  }
  if (u2 !== r2) throw Error(`FastPFOR decode: packed region mismatch (pageStart=${t2}, packedStart=${n2}, consumedPackedEnd=${u2}, expectedPackedEnd=${r2}, packedWords=${r2 - n2}, encoded.length=${e53.length})`);
}
function ty(e53, t2, n2, r2, i2, a2) {
  let o2 = n2 | 0, s2 = e53[o2] | 0;
  if (s2 <= 0 || o2 + s2 > e53.length - 1) throw Error(`FastPFOR decode: invalid whereMeta=${s2} at pageStart=${o2} (expected > 0 and pageStart+whereMeta < encoded.length=${e53.length})`);
  let c2 = o2 + 1 | 0, l2 = o2 + s2 | 0, u2 = e53[l2] >>> 0, d2 = u2 + 3 >>> 2, f2 = l2 + 1, p2 = f2 + d2;
  if (p2 >= e53.length) throw Error(`FastPFOR decode: invalid byteSize=${u2} (metaInts=${d2}, pageStart=${o2}, packedEnd=${l2}, byteContainerStart=${f2}) causes bitmapPos=${p2} out of bounds (encoded.length=${e53.length})`);
  let m2 = Jv(e53, f2, u2, a2), h2 = u2, g2 = Yv(e53, p2, a2);
  return a2.dataPointers.fill(0), ey(e53, o2, c2, l2, t2, r2 | 0, i2 / 256 | 0, m2, h2, a2), g2;
}
function ny(e53, t2, n2, r2, i2, a2) {
  let o2 = r2 + _v(i2, 256), s2 = r2, c2 = n2;
  for (; s2 !== o2; ) {
    let n3 = Math.min(Uv, o2 - s2);
    c2 = ty(e53, t2, c2, s2, n3, a2), s2 = s2 + n3 | 0;
  }
  return c2;
}
function ry(e53, t2, n2, r2, i2, a2) {
  if (a2 === 0) return t2;
  let o2 = 0, s2 = t2, c2 = t2 + n2, l2 = i2, u2 = i2, d2 = i2 + a2, f2 = 0, p2 = 0;
  for (; s2 < c2 && u2 < d2; ) {
    let t3 = e53[s2] >>> o2 & 255;
    if (o2 += 8, s2 += o2 >>> 5, o2 &= 31, f2 |= (t3 & 127) << p2, t3 & 128) r2[u2++] = f2 | 0, f2 = 0, p2 = 0;
    else if (p2 += 7, p2 > 28) throw Error(`FastPFOR VByte: unterminated value (expected MSB=1 terminator within 5 bytes; shift=${p2}, partial=${f2}, decoded=${u2 - l2}/${a2}, inPos=${s2}, inEnd=${c2})`);
  }
  if (u2 !== d2) throw Error(`FastPFOR VByte: truncated stream (decoded=${u2 - l2}, expected=${a2}, consumedWords=${s2 - t2}/${n2}, vbyteStart=${t2}, vbyteEnd=${c2})`);
  return s2;
}
function iy(e53, t2, n2) {
  let r2 = 0, i2 = 0, a2 = new Uint32Array(t2), o2 = n2 ?? Gv();
  if (e53.length > 0) {
    let t3 = e53[r2] | 0;
    if (r2 = r2 + 1 | 0, t3 & 255) throw Error(`FastPFOR decode: invalid alignedLength=${t3} (expected multiple of 256)`);
    if (i2 + t3 > a2.length) throw Error(`FastPFOR decode: output buffer too small (outPos=${i2}, alignedLength=${t3}, out.length=${a2.length})`);
    r2 = ny(e53, a2, r2, i2, t3, o2), i2 = i2 + t3 | 0;
  }
  let s2 = e53.length - r2 | 0, c2 = t2 - i2 | 0;
  return ry(e53, r2, s2, a2, i2, c2), a2;
}
function ay(e53, t2, n2, r2, i2) {
  switch (i2) {
    case 2:
      xv(e53, t2, n2, r2);
      return;
    case 3:
      Sv(e53, t2, n2, r2);
      return;
    case 4:
      Cv(e53, t2, n2, r2);
      return;
    case 5:
      wv(e53, t2, n2, r2);
      return;
    case 6:
      Tv(e53, t2, n2, r2);
      return;
    case 7:
      Ev(e53, t2, n2, r2);
      return;
    case 8:
      Dv(e53, t2, n2, r2);
      return;
    case 9:
      Ov(e53, t2, n2, r2);
      return;
    case 10:
      kv(e53, t2, n2, r2);
      return;
    case 11:
      Av(e53, t2, n2, r2);
      return;
    case 12:
      jv(e53, t2, n2, r2);
      return;
    case 16:
      Mv(e53, t2, n2, r2);
      return;
    case 32:
      for (let i3 = 0; i3 < 32; i3 = i3 + 1 | 0) n2[r2 + i3 | 0] = e53[t2 + i3 | 0] | 0;
      return;
  }
  let a2 = hv[i2] >>> 0, o2 = t2, s2 = 0, c2 = e53[o2] >>> 0;
  for (let t3 = 0; t3 < 32; t3++) if (s2 + i2 <= 32) {
    let l2 = c2 >>> s2 & a2;
    n2[r2 + t3] = l2 | 0, s2 += i2, s2 === 32 && (s2 = 0, o2++, t3 !== 31 && (c2 = e53[o2] >>> 0));
  } else {
    let l2 = 32 - s2, u2 = c2 >>> s2;
    o2++, c2 = e53[o2] >>> 0;
    let d2 = hv[i2 - l2] >>> 0, f2 = (u2 | (c2 & d2) << l2) & a2;
    n2[r2 + t3] = f2 | 0, s2 = i2 - l2;
  }
}
function oy(e53, t2, n2, r2) {
  if (t2 < 0 || n2 < 0 || t2 + n2 > e53.length) throw RangeError(`decodeBigEndianInt32sInto: out of bounds (offset=${t2}, byteLength=${n2}, bytes.length=${e53.length})`);
  let i2 = Math.floor(n2 / 4), a2 = n2 % 4 != 0, o2 = a2 ? i2 + 1 : i2;
  if (r2.length < o2) throw RangeError(`decodeBigEndianInt32sInto: out.length=${r2.length} < ${o2}`);
  if (i2 > 0) {
    let n3 = e53.byteOffset + t2;
    if (n3 & 3) for (let n4 = 0; n4 < i2; n4++) {
      let i3 = t2 + n4 * 4;
      r2[n4] = e53[i3] << 24 | e53[i3 + 1] << 16 | e53[i3 + 2] << 8 | e53[i3 + 3];
    }
    else {
      let t3 = new Uint32Array(e53.buffer, n3, i2);
      for (let e54 = 0; e54 < i2; e54++) r2[e54] = bv(t3[e54]) | 0;
    }
  }
  if (a2) {
    let a3 = t2 + i2 * 4, o3 = n2 - i2 * 4, s2 = 0;
    for (let t3 = 0; t3 < o3; t3++) s2 |= e53[a3 + t3] << 24 - t3 * 8;
    r2[i2] = s2 | 0;
  }
  return o2;
}
function sy(e53, t2, n2) {
  let r2 = new Uint32Array(n2), i2 = 0, a2 = t2.get();
  for (let t3 = 0; t3 < r2.length; t3++) {
    let t4 = e53[a2++], n3 = t4 & 127;
    t4 < 128 || (t4 = e53[a2++], n3 |= (t4 & 127) << 7, t4 < 128 || (t4 = e53[a2++], n3 |= (t4 & 127) << 14, t4 < 128 || (t4 = e53[a2++], n3 |= (t4 & 127) << 21, t4 < 128 || (t4 = e53[a2++], n3 |= (t4 & 15) << 28)))), r2[i2++] = n3;
  }
  return t2.set(a2), r2;
}
function cy(e53, t2, n2) {
  let r2 = new BigUint64Array(n2);
  for (let n3 = 0; n3 < r2.length; n3++) r2[n3] = ly(e53, t2);
  return r2;
}
function ly(e53, t2) {
  let n2 = 0n, r2 = 0, i2 = t2.get();
  for (; i2 < e53.length; ) {
    let t3 = e53[i2++];
    if (n2 |= BigInt(t3 & 127) << BigInt(r2), !(t3 & 128)) break;
    if (r2 += 7, r2 >= 64) throw Error(`Varint too long`);
  }
  return t2.set(i2), n2;
}
function uy(e53, t2, n2) {
  let r2 = new Float64Array(n2);
  for (let i2 = 0; i2 < n2; i2++) r2[i2] = dy(e53, t2);
  return r2;
}
function dy(e53, t2) {
  let n2, r2;
  return r2 = e53[t2.get()], t2.increment(), n2 = r2 & 127, r2 < 128 || (r2 = e53[t2.get()], t2.increment(), n2 |= (r2 & 127) << 7, r2 < 128) || (r2 = e53[t2.get()], t2.increment(), n2 |= (r2 & 127) << 14, r2 < 128) || (r2 = e53[t2.get()], t2.increment(), n2 |= (r2 & 127) << 21, r2 < 128) ? n2 : (r2 = e53[t2.get()], n2 |= (r2 & 15) << 28, fy(n2, e53, t2));
}
function fy(e53, t2, n2) {
  let r2, i2;
  if (i2 = t2[n2.get()], n2.increment(), r2 = (i2 & 112) >> 4, i2 < 128 || (i2 = t2[n2.get()], n2.increment(), r2 |= (i2 & 127) << 3, i2 < 128) || (i2 = t2[n2.get()], n2.increment(), r2 |= (i2 & 127) << 10, i2 < 128) || (i2 = t2[n2.get()], n2.increment(), r2 |= (i2 & 127) << 17, i2 < 128) || (i2 = t2[n2.get()], n2.increment(), r2 |= (i2 & 127) << 24, i2 < 128) || (i2 = t2[n2.get()], n2.increment(), r2 |= (i2 & 1) << 31, i2 < 128)) return r2 * 4294967296 + (e53 >>> 0);
  throw Error(`Expected varint not more than 10 bytes`);
}
function py(e53, t2, n2, r2) {
  return my(e53, t2, n2, r2, Kv(n2 >>> 2));
}
function my(e53, t2, n2, r2, i2) {
  let a2 = r2.get();
  if (n2 & 3) throw Error(`FastPFOR: invalid encodedByteLength=${n2} at offset=${a2} (encodedBytes.length=${e53.length}; expected a multiple of 4 bytes for an int32 big-endian word stream)`);
  let o2 = n2 >>> 2, s2 = qv(i2, o2);
  oy(e53, a2, n2, s2);
  let c2 = iy(s2.subarray(0, o2), t2, i2.decoderWorkspace);
  return r2.add(n2), c2;
}
function Z(e53) {
  return e53 >>> 1 ^ -(e53 & 1);
}
function hy(e53) {
  return e53 >> 1n ^ -(e53 & 1n);
}
function gy(e53) {
  return e53 % 2 == 1 ? (e53 + 1) / -2 : e53 / 2;
}
function _y(e53) {
  let t2 = new Int32Array(e53.length);
  for (let n2 = 0; n2 < e53.length; n2++) t2[n2] = Z(e53[n2]);
  return t2;
}
function vy(e53) {
  let t2 = new BigInt64Array(e53.length);
  for (let n2 = 0; n2 < e53.length; n2++) t2[n2] = hy(e53[n2]);
  return t2;
}
function yy(e53) {
  for (let t2 = 0; t2 < e53.length; t2++) e53[t2] = gy(e53[t2]);
}
function by(e53, t2, n2) {
  if (n2 === void 0) {
    n2 = 0;
    for (let r3 = 0; r3 < t2; r3++) n2 += e53[r3];
  }
  let r2 = new Uint32Array(n2), i2 = 0;
  for (let n3 = 0; n3 < t2; n3++) {
    let a2 = e53[n3], o2 = e53[n3 + t2];
    r2.fill(o2, i2, i2 + a2), i2 += a2;
  }
  return r2;
}
function xy(e53, t2, n2) {
  if (n2 === void 0) {
    n2 = 0;
    for (let r3 = 0; r3 < t2; r3++) n2 += Number(e53[r3]);
  }
  let r2 = new BigUint64Array(n2), i2 = 0;
  for (let n3 = 0; n3 < t2; n3++) {
    let a2 = Number(e53[n3]), o2 = e53[n3 + t2];
    r2.fill(o2, i2, i2 + a2), i2 += a2;
  }
  return r2;
}
function Sy(e53, t2, n2) {
  let r2 = new Float64Array(n2), i2 = 0;
  for (let n3 = 0; n3 < t2; n3++) {
    let a2 = e53[n3], o2 = e53[n3 + t2];
    r2.fill(o2, i2, i2 + a2), i2 += a2;
  }
  return r2;
}
function Cy(e53) {
  let t2 = new Int32Array(e53.length);
  t2[0] = Z(e53[0]);
  let n2 = e53.length / 4 * 4, r2 = 1;
  if (n2 >= 4) for (; r2 < n2 - 4; r2 += 4) {
    let n3 = e53[r2], i2 = e53[r2 + 1], a2 = e53[r2 + 2], o2 = e53[r2 + 3];
    t2[r2] = Z(n3) + t2[r2 - 1], t2[r2 + 1] = Z(i2) + t2[r2], t2[r2 + 2] = Z(a2) + t2[r2 + 1], t2[r2 + 3] = Z(o2) + t2[r2 + 2];
  }
  for (; r2 !== e53.length; ++r2) t2[r2] = Z(e53[r2]) + t2[r2 - 1];
  return t2;
}
function wy(e53) {
  let t2 = new BigInt64Array(e53.length);
  t2[0] = hy(e53[0]);
  let n2 = e53.length / 4 * 4, r2 = 1;
  if (n2 >= 4) for (; r2 < n2 - 4; r2 += 4) {
    let n3 = e53[r2], i2 = e53[r2 + 1], a2 = e53[r2 + 2], o2 = e53[r2 + 3];
    t2[r2] = hy(n3) + t2[r2 - 1], t2[r2 + 1] = hy(i2) + t2[r2], t2[r2 + 2] = hy(a2) + t2[r2 + 1], t2[r2 + 3] = hy(o2) + t2[r2 + 2];
  }
  for (; r2 !== t2.length; ++r2) t2[r2] = hy(e53[r2]) + t2[r2 - 1];
  return t2;
}
function Ty(e53) {
  e53[0] = gy(e53[0]);
  let t2 = e53.length / 4 * 4, n2 = 1;
  if (t2 >= 4) for (; n2 < t2 - 4; n2 += 4) {
    let t3 = e53[n2], r2 = e53[n2 + 1], i2 = e53[n2 + 2], a2 = e53[n2 + 3];
    e53[n2] = gy(t3) + e53[n2 - 1], e53[n2 + 1] = gy(r2) + e53[n2], e53[n2 + 2] = gy(i2) + e53[n2 + 1], e53[n2 + 3] = gy(a2) + e53[n2 + 2];
  }
  for (; n2 !== e53.length; ++n2) e53[n2] = gy(e53[n2]) + e53[n2 - 1];
}
function Ey(e53, t2, n2) {
  if (n2 === void 0) {
    n2 = 0;
    for (let r3 = 0; r3 < t2; r3++) n2 += e53[r3];
  }
  let r2 = new Int32Array(n2), i2 = 0;
  for (let n3 = 0; n3 < t2; n3++) {
    let a2 = e53[n3], o2 = e53[n3 + t2];
    o2 = Z(o2), r2.fill(o2, i2, i2 + a2), i2 += a2;
  }
  return r2;
}
function Dy(e53, t2, n2) {
  if (n2 === void 0) {
    n2 = 0;
    for (let r3 = 0; r3 < t2; r3++) n2 += Number(e53[r3]);
  }
  let r2 = new BigInt64Array(n2), i2 = 0;
  for (let n3 = 0; n3 < t2; n3++) {
    let a2 = Number(e53[n3]), o2 = e53[n3 + t2];
    o2 = hy(o2), r2.fill(o2, i2, i2 + a2), i2 += a2;
  }
  return r2;
}
function Oy(e53, t2, n2) {
  let r2 = new Float64Array(n2), i2 = 0;
  for (let n3 = 0; n3 < t2; n3++) {
    let a2 = e53[n3], o2 = e53[n3 + t2];
    o2 = gy(o2), r2.fill(o2, i2, i2 + a2), i2 += a2;
  }
  return r2;
}
function ky(e53) {
  let t2 = e53.length / 4 * 4, n2 = 1;
  if (t2 >= 4) for (let r2 = e53[0]; n2 < t2 - 4; n2 += 4) r2 = e53[n2] += r2, r2 = e53[n2 + 1] += r2, r2 = e53[n2 + 2] += r2, r2 = e53[n2 + 3] += r2;
  for (; n2 !== e53.length; ) e53[n2] += e53[n2 - 1], ++n2;
}
function Ay(e53) {
  let t2 = 0;
  for (let n2 = 0; n2 < e53.length; n2++) e53[n2] += t2, t2 = e53[n2];
}
function jy(e53) {
  if (e53.length < 2) return new Int32Array(e53);
  let t2 = new Int32Array(e53.length);
  t2[0] = Z(e53[0]), t2[1] = Z(e53[1]);
  let n2 = e53.length / 4 * 4, r2 = 2;
  if (n2 >= 4) for (; r2 < n2 - 4; r2 += 4) {
    let n3 = e53[r2], i2 = e53[r2 + 1], a2 = e53[r2 + 2], o2 = e53[r2 + 3];
    t2[r2] = Z(n3) + t2[r2 - 2], t2[r2 + 1] = Z(i2) + t2[r2 - 1], t2[r2 + 2] = Z(a2) + t2[r2], t2[r2 + 3] = Z(o2) + t2[r2 + 1];
  }
  for (; r2 !== e53.length; r2 += 2) t2[r2] = Z(e53[r2]) + t2[r2 - 2], t2[r2 + 1] = Z(e53[r2 + 1]) + t2[r2 - 1];
  return t2;
}
function My(e53, t2, n2, r2) {
  if (e53.length < 2) return new Int32Array(e53);
  let i2 = new Int32Array(e53.length), a2 = Z(e53[0]), o2 = Z(e53[1]);
  i2[0] = Ny(Math.round(a2 * t2), n2, r2), i2[1] = Ny(Math.round(o2 * t2), n2, r2);
  let s2 = e53.length / 16, c2 = 2;
  if (s2 >= 4) for (; c2 < s2 - 4; c2 += 4) {
    let s3 = e53[c2], l2 = e53[c2 + 1], u2 = Z(s3) + a2, d2 = Z(l2) + o2;
    i2[c2] = Ny(Math.round(u2 * t2), n2, r2), i2[c2 + 1] = Ny(Math.round(d2 * t2), n2, r2);
    let f2 = e53[c2 + 2], p2 = e53[c2 + 3];
    a2 = Z(f2) + u2, o2 = Z(p2) + d2, i2[c2 + 2] = Ny(Math.round(a2 * t2), n2, r2), i2[c2 + 3] = Ny(Math.round(o2 * t2), n2, r2);
  }
  for (; c2 !== e53.length; c2 += 2) a2 += Z(e53[c2]), o2 += Z(e53[c2 + 1]), i2[c2] = Ny(Math.round(a2 * t2), n2, r2), i2[c2 + 1] = Ny(Math.round(o2 * t2), n2, r2);
  return i2;
}
function Ny(e53, t2, n2) {
  return Math.min(n2, Math.max(t2, e53));
}
function Py(e53) {
  let t2 = new Int32Array(e53.length + 1);
  t2[0] = 0, t2[1] = Z(e53[0]);
  let n2 = t2[1];
  for (let r2 = 2; r2 !== t2.length; ++r2) {
    let i2 = e53[r2 - 1], a2 = Z(i2);
    n2 += a2, t2[r2] = t2[r2 - 1] + n2;
  }
  return new Uint32Array(t2);
}
function Fy(e53, t2, n2) {
  let r2 = new Int32Array(n2 + 1);
  r2[0] = 0;
  let i2 = 1, a2 = r2[0];
  for (let n3 = 0; n3 < t2; n3++) {
    let o2 = e53[n3], s2 = e53[n3 + t2];
    s2 = Z(s2);
    for (let e54 = i2; e54 < i2 + o2; e54++) r2[e54] = s2 + a2, a2 = r2[e54];
    i2 += o2;
  }
  return r2;
}
function Iy(e53, t2, n2) {
  let r2 = new Uint32Array(n2 + 1);
  r2[0] = 0;
  let i2 = 1, a2 = r2[0];
  for (let n3 = 0; n3 < t2; n3++) {
    let o2 = e53[n3], s2 = e53[n3 + t2];
    for (let e54 = i2; e54 < i2 + o2; e54++) r2[e54] = s2 + a2, a2 = r2[e54];
    i2 += o2;
  }
  return r2;
}
function Ly(e53, t2, n2) {
  let r2 = new Int32Array(n2), i2 = 0, a2 = 0;
  for (let n3 = 0; n3 < t2; n3++) {
    let o2 = e53[n3], s2 = e53[n3 + t2], c2 = Z(s2);
    for (let e54 = 0; e54 < o2; e54++) a2 += c2, r2[i2++] = a2;
  }
  return r2;
}
function Ry(e53, t2, n2) {
  let r2 = new BigInt64Array(n2), i2 = 0, a2 = 0n;
  for (let n3 = 0; n3 < t2; n3++) {
    let o2 = Number(e53[n3]), s2 = e53[n3 + t2], c2 = hy(s2);
    for (let e54 = 0; e54 < o2; e54++) a2 += c2, r2[i2++] = a2;
  }
  return r2;
}
function zy(e53) {
  let t2 = new Uint32Array(e53.length);
  t2[0] = Z(e53[0]) >>> 0;
  for (let n2 = 1; n2 < e53.length; n2++) t2[n2] = t2[n2 - 1] + Z(e53[n2]) >>> 0;
  return t2;
}
function By(e53) {
  let t2 = new BigUint64Array(e53.length);
  t2[0] = BigInt.asUintN(64, hy(e53[0]));
  for (let n2 = 1; n2 < e53.length; n2++) t2[n2] = BigInt.asUintN(64, t2[n2 - 1] + hy(e53[n2]));
  return t2;
}
function Vy(e53) {
  if (e53.length < 2) return new Uint32Array(e53);
  let t2 = new Uint32Array(e53.length);
  t2[0] = Z(e53[0]) >>> 0, t2[1] = Z(e53[1]) >>> 0;
  for (let n2 = 2; n2 < e53.length; n2 += 2) t2[n2] = t2[n2 - 2] + Z(e53[n2]) >>> 0, t2[n2 + 1] = t2[n2 - 1] + Z(e53[n2 + 1]) >>> 0;
  return t2;
}
function Hy(e53, t2, n2, r2) {
  let i2 = My(e53, t2, n2, r2);
  return new Uint32Array(i2);
}
function Uy(e53) {
  return e53[1];
}
function Wy(e53) {
  return Z(e53[1]);
}
function Gy(e53) {
  if (e53.length === 2) {
    let t2 = Z(e53[1]);
    return [t2, t2];
  }
  return [Z(e53[2]), Z(e53[3])];
}
function Ky(e53) {
  return e53[1];
}
function qy(e53) {
  return hy(e53[1]);
}
function Jy(e53) {
  if (e53.length === 2) {
    let t2 = hy(e53[1]);
    return [t2, t2];
  }
  return [hy(e53[2]), hy(e53[3])];
}
var Yy;
(function(e53) {
  e53.PRESENT = `PRESENT`, e53.DATA = `DATA`, e53.OFFSET = `OFFSET`, e53.LENGTH = `LENGTH`;
})(Yy ||= {});
var Xy;
(function(e53) {
  e53.NONE = `NONE`, e53.SINGLE = `SINGLE`, e53.SHARED = `SHARED`, e53.VERTEX = `VERTEX`, e53.MORTON = `MORTON`, e53.FSST = `FSST`;
})(Xy ||= {});
var Zy;
(function(e53) {
  e53.VERTEX = `VERTEX`, e53.INDEX = `INDEX`, e53.STRING = `STRING`, e53.KEY = `KEY`;
})(Zy ||= {});
var Qy;
(function(e53) {
  e53.VAR_BINARY = `VAR_BINARY`, e53.GEOMETRIES = `GEOMETRIES`, e53.PARTS = `PARTS`, e53.RINGS = `RINGS`, e53.TRIANGLES = `TRIANGLES`, e53.SYMBOL = `SYMBOL`, e53.DICTIONARY = `DICTIONARY`;
})(Qy ||= {});
var $y = [Yy.PRESENT, Yy.DATA, Yy.OFFSET, Yy.LENGTH];
var eb = [X.NONE, X.DELTA, X.COMPONENTWISE_DELTA, X.RLE, X.MORTON];
var tb = [pv.NONE, pv.FAST_PFOR, pv.VARINT];
var nb = [Xy.NONE, Xy.SINGLE, Xy.SHARED, Xy.VERTEX, Xy.MORTON, Xy.FSST];
var rb = [Zy.VERTEX, Zy.INDEX, Zy.STRING, Zy.KEY];
var ib = [Qy.VAR_BINARY, Qy.GEOMETRIES, Qy.PARTS, Qy.RINGS, Qy.TRIANGLES, Qy.SYMBOL, Qy.DICTIONARY];
function Q(e53, t2) {
  let n2 = sb(e53, t2);
  return n2.logicalLevelTechnique1 === X.MORTON ? ab(n2, e53, t2) : (X.RLE === n2.logicalLevelTechnique1 || X.RLE === n2.logicalLevelTechnique2) && pv.NONE !== n2.physicalLevelTechnique ? ob(n2, e53, t2) : n2;
}
function ab(e53, t2, n2) {
  let r2 = sy(t2, n2, 2);
  return { physicalStreamType: e53.physicalStreamType, logicalStreamType: e53.logicalStreamType, logicalLevelTechnique1: e53.logicalLevelTechnique1, logicalLevelTechnique2: e53.logicalLevelTechnique2, physicalLevelTechnique: e53.physicalLevelTechnique, numValues: e53.numValues, byteLength: e53.byteLength, decompressedCount: e53.decompressedCount, numBits: r2[0], coordinateShift: r2[1] };
}
function ob(e53, t2, n2) {
  let r2 = sy(t2, n2, 2);
  return { physicalStreamType: e53.physicalStreamType, logicalStreamType: e53.logicalStreamType, logicalLevelTechnique1: e53.logicalLevelTechnique1, logicalLevelTechnique2: e53.logicalLevelTechnique2, physicalLevelTechnique: e53.physicalLevelTechnique, numValues: e53.numValues, byteLength: e53.byteLength, decompressedCount: r2[1], runs: r2[0], numRleValues: r2[1] };
}
function sb(e53, t2) {
  let n2 = e53[t2.get()], r2 = $y[n2 >> 4], i2 = {};
  switch (r2) {
    case Yy.DATA:
      i2 = { dictionaryType: nb[n2 & 15] };
      break;
    case Yy.OFFSET:
      i2 = { offsetType: rb[n2 & 15] };
      break;
    case Yy.LENGTH:
      i2 = { lengthType: ib[n2 & 15] };
  }
  t2.increment();
  let a2 = e53[t2.get()], o2 = eb[a2 >> 5], s2 = eb[a2 >> 2 & 7], c2 = tb[a2 & 3];
  t2.increment();
  let l2 = sy(e53, t2, 2), u2 = l2[0], d2 = l2[1];
  return { physicalStreamType: r2, logicalStreamType: i2, logicalLevelTechnique1: o2, logicalLevelTechnique2: s2, physicalLevelTechnique: c2, numValues: u2, byteLength: d2, decompressedCount: u2 };
}
var $;
(function(e53) {
  e53[e53.FLAT = 0] = `FLAT`, e53[e53.CONST = 1] = `CONST`, e53[e53.SEQUENCE = 2] = `SEQUENCE`, e53[e53.DICTIONARY = 3] = `DICTIONARY`, e53[e53.FSST_DICTIONARY = 4] = `FSST_DICTIONARY`;
})($ ||= {});
var cb = class {
  constructor(e53, t2) {
    this.values = e53, this._size = t2;
  }
  get(e53) {
    let t2 = Math.floor(e53 / 8), n2 = e53 % 8;
    return (this.values[t2] >> n2 & 1) == 1;
  }
  set(e53, t2) {
    let n2 = Math.floor(e53 / 8), r2 = e53 % 8;
    this.values[n2] = this.values[n2] | +!!t2 << r2;
  }
  getInt(e53) {
    let t2 = Math.floor(e53 / 8), n2 = e53 % 8;
    return this.values[t2] >> n2 & 1;
  }
  size() {
    return this._size;
  }
  getBuffer() {
    return this.values;
  }
};
function lb(e53, t2, n2) {
  if (!t2) return e53;
  let r2 = t2.size(), i2 = e53.constructor, a2 = new i2(r2), o2 = 0;
  for (let i3 = 0; i3 < r2; i3++) a2[i3] = t2.get(i3) ? e53[o2++] : n2;
  return a2;
}
function ub(e53, t2, n2) {
  if (!n2) return e53;
  let r2 = n2.size(), i2 = new cb(e53, t2), a2 = new cb(new Uint8Array(Math.ceil(r2 / 8)), r2), o2 = 0;
  for (let e54 = 0; e54 < r2; e54++) {
    let t3 = n2.get(e54) ? i2.get(o2++) : false;
    a2.set(e54, t3);
  }
  return a2.getBuffer();
}
function db(e53, t2, n2) {
  for (let r2 = 0; r2 < e53; r2++) {
    let e54 = Q(t2, n2);
    n2.add(e54.byteLength);
  }
}
function fb(e53, t2, n2, r2, i2) {
  let a2 = pb(e53, Math.ceil(t2 / 8), n2, r2);
  return i2 ? ub(a2, t2, i2) : a2;
}
function pb(e53, t2, n2, r2) {
  let i2 = new Uint8Array(t2), a2 = 0, o2 = r2.get() + n2;
  for (; a2 < t2 && !(r2.get() >= o2); ) {
    let n3 = e53[r2.increment()];
    if (n3 <= 127) {
      let o3 = n3 + 3, s2 = e53[r2.increment()], c2 = Math.min(a2 + o3, t2);
      i2.fill(s2, a2, c2), a2 = c2;
    } else {
      let o3 = 256 - n3;
      for (let n4 = 0; n4 < o3 && a2 < t2; n4++) i2[a2++] = e53[r2.increment()];
    }
  }
  return r2.set(o2), i2;
}
function mb(e53, t2, n2, r2) {
  let i2 = t2.get(), a2 = i2 + n2 * Float32Array.BYTES_PER_ELEMENT, o2 = new Uint8Array(e53.subarray(i2, a2)).buffer, s2 = new Float32Array(o2);
  return t2.set(a2), r2 ? lb(s2, r2, 0) : s2;
}
function hb(e53, t2, n2, r2) {
  let i2 = t2.get(), a2 = i2 + n2 * Float64Array.BYTES_PER_ELEMENT, o2 = new Uint8Array(e53.subarray(i2, a2)).buffer, s2 = new Float64Array(o2);
  return t2.set(a2), r2 ? lb(s2, r2, 0) : s2;
}
function gb(e53, t2, n2) {
  let r2 = t2.get(), i2 = n2 * Uint32Array.BYTES_PER_ELEMENT, a2 = new DataView(e53.buffer, e53.byteOffset, e53.byteLength), o2 = new Uint32Array(n2);
  for (let e54 = 0; e54 < n2; e54++) o2[e54] = a2.getUint32(r2 + e54 * Uint32Array.BYTES_PER_ELEMENT, true);
  return t2.add(i2), o2;
}
function _b(e53, t2, n2) {
  let r2 = t2.get(), i2 = n2 * BigUint64Array.BYTES_PER_ELEMENT, a2 = new DataView(e53.buffer, e53.byteOffset, e53.byteLength), o2 = new BigUint64Array(n2);
  for (let e54 = 0; e54 < n2; e54++) o2[e54] = a2.getBigUint64(r2 + e54 * BigUint64Array.BYTES_PER_ELEMENT, true);
  return t2.add(i2), o2;
}
var vb = new TextDecoder();
function yb(e53, t2, n2) {
  return n2 - t2 >= 12 ? vb.decode(e53.subarray(t2, n2)) : bb(e53, t2, n2);
}
function bb(e53, t2, n2) {
  let r2 = ``, i2 = t2;
  for (; i2 < n2; ) {
    let t3 = e53[i2], a2 = null, o2 = t3 > 239 ? 4 : t3 > 223 ? 3 : t3 > 191 ? 2 : 1;
    if (i2 + o2 > n2) break;
    let s2, c2, l2;
    o2 === 1 ? t3 < 128 && (a2 = t3) : o2 === 2 ? (s2 = e53[i2 + 1], (s2 & 192) == 128 && (a2 = (t3 & 31) << 6 | s2 & 63, a2 <= 127 && (a2 = null))) : o2 === 3 ? (s2 = e53[i2 + 1], c2 = e53[i2 + 2], (s2 & 192) == 128 && (c2 & 192) == 128 && (a2 = (t3 & 15) << 12 | (s2 & 63) << 6 | c2 & 63, (a2 <= 2047 || a2 >= 55296 && a2 <= 57343) && (a2 = null))) : o2 === 4 && (s2 = e53[i2 + 1], c2 = e53[i2 + 2], l2 = e53[i2 + 3], (s2 & 192) == 128 && (c2 & 192) == 128 && (l2 & 192) == 128 && (a2 = (t3 & 15) << 18 | (s2 & 63) << 12 | (c2 & 63) << 6 | l2 & 63, (a2 <= 65535 || a2 >= 1114112) && (a2 = null))), a2 === null ? (a2 = 65533, o2 = 1) : a2 > 65535 && (a2 -= 65536, r2 += String.fromCharCode(a2 >>> 10 & 1023 | 55296), a2 = 56320 | a2 & 1023), r2 += String.fromCharCode(a2), i2 += o2;
  }
  return r2;
}
function xb(e53, t2, n2, r2, i2) {
  return Ib(wb(e53, t2, n2), n2, r2, i2);
}
function Sb(e53, t2, n2, r2, i2) {
  return Lb(wb(e53, t2, n2), n2, r2, i2);
}
function Cb(e53, t2, n2) {
  return Vb(wb(e53, t2, n2), n2);
}
function wb(e53, t2, n2) {
  let r2 = n2.physicalLevelTechnique;
  switch (r2) {
    case pv.FAST_PFOR:
      return py(e53, n2.numValues, n2.byteLength, t2);
    case pv.VARINT:
      return sy(e53, t2, n2.numValues);
    case pv.NONE:
      return gb(e53, t2, n2.numValues);
    default:
      throw Error(`Specified physicalLevelTechnique ${r2} is not supported (yet).`);
  }
}
function Tb(e53, t2, n2) {
  let r2 = n2.physicalLevelTechnique;
  switch (r2) {
    case pv.VARINT:
      return cy(e53, t2, n2.numValues);
    case pv.NONE:
      return _b(e53, t2, n2.numValues);
    default:
      throw Error(`Specified physicalLevelTechnique ${r2} is not supported (yet).`);
  }
}
function Eb(e53, t2, n2) {
  let r2 = wb(e53, t2, n2);
  return r2.length === 1 ? Z(r2[0]) : Wy(r2);
}
function Db(e53, t2, n2) {
  let r2 = wb(e53, t2, n2);
  return r2.length === 1 ? n2.logicalLevelTechnique1 === X.DELTA ? Z(r2[0]) : r2[0] : Uy(r2);
}
function Ob(e53, t2, n2) {
  return Gy(wb(e53, t2, n2));
}
function kb(e53, t2, n2) {
  return Jy(cy(e53, t2, n2.numValues));
}
function Ab(e53, t2, n2, r2) {
  return Rb(Tb(e53, t2, n2), n2, r2);
}
function jb(e53, t2, n2, r2) {
  return zb(Tb(e53, t2, n2), n2, r2);
}
function Mb(e53, t2, n2, r2) {
  let i2 = Nb(e53, t2, n2, false);
  return r2 ? lb(i2, r2, 0) : i2;
}
function Nb(e53, t2, n2, r2) {
  if (n2.physicalLevelTechnique === pv.VARINT) return Bb(uy(e53, t2, n2.numValues), n2, r2);
  let i2 = Tb(e53, t2, n2), a2 = r2 ? Rb(i2, n2) : zb(i2, n2);
  return Float64Array.from(a2, Number);
}
function Pb(e53, t2, n2) {
  let r2 = Tb(e53, t2, n2);
  return r2.length === 1 ? hy(r2[0]) : qy(r2);
}
function Fb(e53, t2, n2) {
  let r2 = Tb(e53, t2, n2);
  return r2.length === 1 ? n2.logicalLevelTechnique1 === X.DELTA ? hy(r2[0]) : r2[0] : Ky(r2);
}
function Ib(e53, t2, n2, r2) {
  let i2;
  switch (t2.logicalLevelTechnique1) {
    case X.DELTA:
      if (t2.logicalLevelTechnique2 === X.RLE) {
        let n3 = t2;
        if (!r2) return Ly(e53, n3.runs, n3.numRleValues);
        e53 = by(e53, n3.runs, n3.numRleValues), i2 = Cy(e53);
      } else i2 = Cy(e53);
      break;
    case X.RLE:
      i2 = Ey(e53, t2.runs, t2.numRleValues);
      break;
    case X.MORTON:
      ky(e53), i2 = new Int32Array(e53);
      break;
    case X.COMPONENTWISE_DELTA:
      if (n2 && !r2) return My(e53, n2.scale, n2.min, n2.max);
      i2 = jy(e53);
      break;
    case X.NONE:
      i2 = _y(e53);
      break;
    default:
      throw Error(`The specified Logical level technique is not supported: ${t2.logicalLevelTechnique1}`);
  }
  return r2 ? lb(i2, r2, 0) : i2;
}
function Lb(e53, t2, n2, r2) {
  let i2;
  switch (t2.logicalLevelTechnique1) {
    case X.DELTA:
      if (t2.logicalLevelTechnique2 === X.RLE) {
        let n3 = t2;
        i2 = zy(by(e53, n3.runs, n3.numRleValues));
      } else i2 = zy(e53);
      break;
    case X.RLE:
      i2 = by(e53, t2.runs, t2.numRleValues);
      break;
    case X.MORTON:
      ky(e53), i2 = e53;
      break;
    case X.COMPONENTWISE_DELTA:
      i2 = n2 && !r2 ? Hy(e53, n2.scale, n2.min, n2.max) : Vy(e53);
      break;
    case X.NONE:
      i2 = e53;
      break;
    default:
      throw Error(`The specified Logical level technique is not supported: ${t2.logicalLevelTechnique1}`);
  }
  return r2 ? lb(i2, r2, 0) : i2;
}
function Rb(e53, t2, n2) {
  let r2;
  switch (t2.logicalLevelTechnique1) {
    case X.DELTA:
      if (t2.logicalLevelTechnique2 === X.RLE) {
        let i2 = t2;
        if (!n2) return Ry(e53, i2.runs, i2.numRleValues);
        e53 = xy(e53, i2.runs, i2.numRleValues), r2 = wy(e53);
      } else r2 = wy(e53);
      break;
    case X.RLE:
      r2 = Dy(e53, t2.runs, t2.numRleValues);
      break;
    case X.NONE:
      r2 = vy(e53);
      break;
    default:
      throw Error(`The specified Logical level technique is not supported: ${t2.logicalLevelTechnique1}`);
  }
  return n2 ? lb(r2, n2, 0n) : r2;
}
function zb(e53, t2, n2) {
  let r2;
  switch (t2.logicalLevelTechnique1) {
    case X.DELTA:
      if (t2.logicalLevelTechnique2 === X.RLE) {
        let n3 = t2;
        r2 = By(xy(e53, n3.runs, n3.numRleValues));
      } else r2 = By(e53);
      break;
    case X.RLE:
      r2 = xy(e53, t2.runs, t2.numRleValues);
      break;
    case X.NONE:
      r2 = e53;
      break;
    default:
      throw Error(`The specified Logical level technique is not supported: ${t2.logicalLevelTechnique1}`);
  }
  return n2 ? lb(r2, n2, 0n) : r2;
}
function Bb(e53, t2, n2) {
  switch (t2.logicalLevelTechnique1) {
    case X.DELTA:
      if (t2.logicalLevelTechnique2 === X.RLE) {
        let n3 = t2;
        e53 = Sy(e53, n3.runs, n3.numRleValues);
      }
      return Ty(e53), e53;
    case X.RLE:
      return Wb(e53, t2, n2);
    case X.NONE:
      return n2 && yy(e53), e53;
    default:
      throw Error(`The specified Logical level technique is not supported: ${t2.logicalLevelTechnique1}`);
  }
}
function Vb(e53, t2) {
  if (t2.logicalLevelTechnique1 === X.DELTA && t2.logicalLevelTechnique2 === X.NONE) return Py(e53);
  if (t2.logicalLevelTechnique1 === X.RLE && t2.logicalLevelTechnique2 === X.NONE) {
    let n2 = t2;
    return Iy(e53, n2.runs, n2.numRleValues);
  }
  if (t2.logicalLevelTechnique1 === X.NONE && t2.logicalLevelTechnique2 === X.NONE) {
    Ay(e53);
    let n2 = new Uint32Array(t2.numValues + 1);
    return n2[0] = 0, n2.set(e53, 1), n2;
  }
  if (t2.logicalLevelTechnique1 === X.DELTA && t2.logicalLevelTechnique2 === X.RLE) {
    let n2 = t2, r2 = Fy(e53, n2.runs, n2.numRleValues);
    return ky(r2), new Uint32Array(r2);
  }
  throw Error(`Only delta encoding is supported for transforming length to offset streams yet.`);
}
function Hb(e53, t2, n2, r2, i2 = `int32`) {
  let a2 = e53.logicalLevelTechnique1;
  if (a2 === X.RLE) return e53.runs === 1 ? $.CONST : $.FLAT;
  if (a2 !== X.DELTA || e53.logicalLevelTechnique2 !== X.RLE) return e53.numValues === 1 ? $.CONST : $.FLAT;
  let o2 = t2 instanceof cb ? t2.size() : t2, s2 = e53;
  if (s2.numRleValues !== o2) return $.FLAT;
  if (s2.runs === 1) return $.SEQUENCE;
  if (s2.runs !== 2) return e53.numValues === 1 ? $.CONST : $.FLAT;
  let c2 = r2.get();
  if (e53.physicalLevelTechnique === pv.VARINT) return Ub(n2, r2, i2) ? $.SEQUENCE : e53.numValues === 1 ? $.CONST : $.FLAT;
  let l2 = r2.get(), u2 = new Int32Array(n2.buffer, n2.byteOffset + l2, 4);
  return r2.set(c2), u2[2] === 2 && u2[3] === 2 ? $.SEQUENCE : e53.numValues === 1 ? $.CONST : $.FLAT;
}
function Ub(e53, t2, n2) {
  let r2 = new fv(t2.get());
  if (n2 === `int64`) {
    let t3 = cy(e53, r2, 4);
    return t3[2] === 2n && t3[3] === 2n;
  }
  let i2 = sy(e53, r2, 4);
  return i2[2] === 2 && i2[3] === 2;
}
function Wb(e53, t2, n2) {
  return n2 ? Oy(e53, t2.runs, t2.numRleValues) : Sy(e53, t2.runs, t2.numRleValues);
}
var Gb = class extends nv {
  getValueFromBuffer(e53) {
    return this.dataBuffer[e53];
  }
};
var Kb = class extends av {
  constructor(e53, t2, n2, r2, i2) {
    super(e53, i2 ? BigInt64Array.of(t2) : BigUint64Array.of(t2), n2, r2);
  }
  getValueFromBuffer(e53) {
    return this.dataBuffer[0] + BigInt(e53) * this.delta;
  }
};
function qb(e53, t2, n2) {
  return { x: Jb(e53, t2) - n2, y: Jb(e53 >> 1, t2) - n2 };
}
function Jb(e53, t2) {
  let n2 = 0;
  for (let r2 = 0; r2 < t2; r2++) n2 |= (e53 & 1 << 2 * r2) >> r2;
  return n2;
}
var Yb;
(function(e53) {
  e53[e53.POINT = 0] = `POINT`, e53[e53.LINESTRING = 1] = `LINESTRING`, e53[e53.POLYGON = 2] = `POLYGON`, e53[e53.MULTIPOINT = 3] = `MULTIPOINT`, e53[e53.MULTILINESTRING = 4] = `MULTILINESTRING`, e53[e53.MULTIPOLYGON = 5] = `MULTIPOLYGON`;
})(Yb ||= {});
var Xb;
(function(e53) {
  e53[e53.POINT = 0] = `POINT`, e53[e53.LINESTRING = 1] = `LINESTRING`, e53[e53.POLYGON = 2] = `POLYGON`;
})(Xb ||= {});
var Zb;
(function(e53) {
  e53[e53.MORTON = 0] = `MORTON`, e53[e53.VEC_2 = 1] = `VEC_2`, e53[e53.VEC_3 = 2] = `VEC_3`;
})(Zb ||= {});
function Qb(e53) {
  let t2 = Array(e53.numGeometries), n2 = 1, r2 = 1, i2 = 1, a2 = 0, o2 = 0, s2 = 0, c2 = e53.mortonSettings, u2 = e53.topologyVector, d2 = u2.geometryOffsets, f2 = u2.partOffsets, p2 = u2.ringOffsets, m2 = e53.vertexOffsets, h2 = !m2 || m2.length === 0, g2 = e53.containsPolygonGeometry(), _2 = e53.vertexBuffer;
  for (let u3 = 0; u3 < e53.numGeometries; u3++) {
    let v2 = e53.geometryType(u3);
    switch (v2) {
      case Yb.POINT:
        {
          let u4, g3;
          if (h2) u4 = _2[o2++], g3 = _2[o2++];
          else if (e53.vertexBufferType === Zb.MORTON) {
            let e54 = _2[m2[s2++]], t3 = qb(e54, c2.numBits, c2.coordinateShift);
            u4 = t3.x, g3 = t3.y;
          } else {
            let e54 = m2[s2++] * 2;
            u4 = _2[e54], g3 = _2[e54 + 1];
          }
          t2[a2++] = [[new l(u4, g3)]], d2 && i2++, f2 && n2++, p2 && r2++;
        }
        break;
      case Yb.MULTIPOINT:
        {
          let u4 = d2[i2] - d2[i2 - 1];
          i2++;
          let f3;
          if (h2) {
            f3 = Array(u4);
            for (let e54 = 0; e54 < u4; e54++) {
              let t3 = _2[o2++], n3 = _2[o2++];
              f3[e54] = new l(t3, n3);
            }
          } else f3 = $b(e53.vertexBufferType, _2, m2, s2, u4, false, c2), s2 += u4;
          t2[a2++] = f3.map((e54) => [e54]), n2 += u4, r2 += u4;
        }
        break;
      case Yb.LINESTRING:
        {
          let l2;
          g2 ? (l2 = p2[r2] - p2[r2 - 1], r2++) : l2 = f2[n2] - f2[n2 - 1], n2++;
          let u4;
          h2 ? (u4 = ex(_2, o2, l2, false), o2 += l2 * 2) : (u4 = $b(e53.vertexBufferType, _2, m2, s2, l2, false, c2), s2 += l2), t2[a2++] = [u4], d2 && i2++;
        }
        break;
      case Yb.POLYGON:
        {
          let l2 = f2[n2] - f2[n2 - 1];
          n2++;
          let u4 = Array(l2 - 1), g3, v3 = p2[r2] - p2[r2 - 1];
          if (r2++, h2) {
            g3 = ex(_2, o2, v3, true), o2 += v3 * 2;
            for (let e54 = 0; e54 < u4.length; e54++) v3 = p2[r2] - p2[r2 - 1], r2++, u4[e54] = ex(_2, o2, v3, true), o2 += v3 * 2;
          } else {
            g3 = $b(e53.vertexBufferType, _2, m2, s2, v3, true, c2), s2 += v3;
            for (let t3 = 0; t3 < u4.length; t3++) v3 = p2[r2] - p2[r2 - 1], r2++, u4[t3] = $b(e53.vertexBufferType, _2, m2, s2, v3, true, c2), s2 += v3;
          }
          t2[a2++] = [g3].concat(u4), d2 && i2++;
        }
        break;
      case Yb.MULTILINESTRING:
        {
          let l2 = d2[i2] - d2[i2 - 1];
          i2++;
          let u4 = Array(l2);
          for (let t3 = 0; t3 < l2; t3++) {
            let i3;
            if (g2 ? (i3 = p2[r2] - p2[r2 - 1], r2++) : i3 = f2[n2] - f2[n2 - 1], n2++, h2) u4[t3] = ex(_2, o2, i3, false), o2 += i3 * 2;
            else {
              let n3 = $b(e53.vertexBufferType, _2, m2, s2, i3, false, c2);
              u4[t3] = n3, s2 += i3;
            }
          }
          t2[a2++] = u4;
        }
        break;
      case Yb.MULTIPOLYGON:
        {
          let l2 = d2[i2] - d2[i2 - 1];
          i2++;
          let u4 = Array(l2);
          for (let t3 = 0; t3 < l2; t3++) {
            let i3 = f2[n2] - f2[n2 - 1];
            n2++;
            let a3, l3 = Array(i3 - 1), d3 = p2[r2] - p2[r2 - 1];
            r2++, h2 ? (a3 = ex(_2, o2, d3, true), o2 += d3 * 2) : (a3 = $b(e53.vertexBufferType, _2, m2, s2, d3, true, c2), s2 += d3);
            for (let t4 = 0; t4 < l3.length; t4++) {
              let n3 = p2[r2] - p2[r2 - 1];
              r2++, h2 ? (l3[t4] = ex(_2, o2, n3, true), o2 += n3 * 2) : (l3[t4] = $b(e53.vertexBufferType, _2, m2, s2, n3, true, c2), s2 += n3);
            }
            u4[t3] = [a3].concat(l3);
          }
          t2[a2++] = u4.flat();
        }
        break;
      default:
        throw Error(`The specified geometry type (${v2}) is currently not supported.`);
    }
  }
  return t2;
}
function $b(e53, t2, n2, r2, i2, a2, o2) {
  return e53 === Zb.MORTON ? nx(t2, n2, r2, i2, a2, o2) : tx(t2, n2, r2, i2, a2);
}
function ex(e53, t2, n2, r2) {
  let i2 = Array(r2 ? n2 + 1 : n2);
  for (let r3 = 0; r3 < n2 * 2; r3 += 2) {
    let n3 = e53[t2 + r3], a2 = e53[t2 + r3 + 1];
    i2[r3 / 2] = new l(n3, a2);
  }
  return r2 && (i2[i2.length - 1] = i2[0]), i2;
}
function tx(e53, t2, n2, r2, i2) {
  let a2 = Array(i2 ? r2 + 1 : r2);
  for (let i3 = 0; i3 < r2 * 2; i3 += 2) {
    let r3 = t2[n2 + i3 / 2] * 2, o2 = e53[r3], s2 = e53[r3 + 1];
    a2[i3 / 2] = new l(o2, s2);
  }
  return i2 && (a2[a2.length - 1] = a2[0]), a2;
}
function nx(e53, t2, n2, r2, i2, a2) {
  let o2 = Array(i2 ? r2 + 1 : r2);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = e53[t2[n2 + i3]], s2 = qb(r3, a2.numBits, a2.coordinateShift);
    o2[i3] = new l(s2.x, s2.y);
  }
  return i2 && (o2[o2.length - 1] = o2[0]), o2;
}
var rx = class {
  constructor(e53, t2, n2, r2, i2) {
    this._vertexBufferType = e53, this._topologyVector = t2, this._vertexOffsets = n2, this._vertexBuffer = r2, this._mortonSettings = i2;
  }
  get vertexBufferType() {
    return this._vertexBufferType;
  }
  get topologyVector() {
    return this._topologyVector;
  }
  get vertexOffsets() {
    return this._vertexOffsets;
  }
  get vertexBuffer() {
    return this._vertexBuffer;
  }
  getSimpleEncodedVertex(e53) {
    let t2 = this.vertexOffsets ? this.vertexOffsets[e53] * 2 : e53 * 2;
    return [this.vertexBuffer[t2], this.vertexBuffer[t2 + 1]];
  }
  getVertex(e53) {
    if (this.vertexOffsets && this.mortonSettings) {
      let t3 = this.vertexOffsets[e53], n2 = this.vertexBuffer[t3], r2 = qb(n2, this.mortonSettings.numBits, this.mortonSettings.coordinateShift);
      return [r2.x, r2.y];
    }
    let t2 = this.vertexOffsets ? this.vertexOffsets[e53] * 2 : e53 * 2;
    return [this.vertexBuffer[t2], this.vertexBuffer[t2 + 1]];
  }
  getGeometries() {
    return Qb(this);
  }
  get mortonSettings() {
    return this._mortonSettings;
  }
};
function ix(e53, t2, n2, r2, i2) {
  return new ox(e53, t2, Zb.VEC_2, n2, r2, i2);
}
function ax(e53, t2, n2, r2, i2, a2) {
  return new ox(e53, t2, Zb.MORTON, n2, r2, i2, a2);
}
var ox = class extends rx {
  constructor(e53, t2, n2, r2, i2, a2, o2) {
    super(n2, r2, i2, a2, o2), this._numGeometries = e53, this._geometryType = t2;
  }
  geometryType(e53) {
    return this._geometryType;
  }
  get numGeometries() {
    return this._numGeometries;
  }
  containsPolygonGeometry() {
    return this._geometryType === Yb.POLYGON || this._geometryType === Yb.MULTIPOLYGON;
  }
  containsSingleGeometryType() {
    return true;
  }
};
function sx(e53, t2, n2, r2) {
  return new lx(Zb.VEC_2, e53, t2, n2, r2);
}
function cx(e53, t2, n2, r2, i2) {
  return new lx(Zb.MORTON, e53, t2, n2, r2, i2);
}
var lx = class extends rx {
  constructor(e53, t2, n2, r2, i2, a2) {
    super(e53, n2, r2, i2, a2), this._geometryTypes = t2;
  }
  geometryType(e53) {
    return this._geometryTypes[e53];
  }
  get numGeometries() {
    return this._geometryTypes.length;
  }
  containsPolygonGeometry() {
    for (let e53 = 0; e53 < this.numGeometries; e53++) if (this.geometryType(e53) === Yb.POLYGON || this.geometryType(e53) === Yb.MULTIPOLYGON) return true;
    return false;
  }
  containsSingleGeometryType() {
    return false;
  }
};
var ux = class {
  constructor(e53, t2, n2, r2) {
    this._triangleOffsets = e53, this._indexBuffer = t2, this._vertexBuffer = n2, this._topologyVector = r2;
  }
  get triangleOffsets() {
    return this._triangleOffsets;
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  get vertexBuffer() {
    return this._vertexBuffer;
  }
  get topologyVector() {
    return this._topologyVector;
  }
  getGeometries() {
    if (!this._topologyVector) throw Error(`Cannot convert GpuVector to coordinates without topology information`);
    let e53 = new Uint32Array(this.numGeometries);
    for (let t2 = 0; t2 < this.numGeometries; t2++) e53[t2] = this.geometryType(t2);
    return sx(e53, this._topologyVector, void 0, this._vertexBuffer).getGeometries();
  }
  [Symbol.iterator]() {
    return null;
  }
};
function dx(e53, t2, n2, r2, i2, a2) {
  return new fx(e53, t2, n2, r2, i2, a2);
}
var fx = class extends ux {
  constructor(e53, t2, n2, r2, i2, a2) {
    super(n2, r2, i2, a2), this._numGeometries = e53, this._geometryType = t2;
  }
  geometryType(e53) {
    return this._geometryType;
  }
  get numGeometries() {
    return this._numGeometries;
  }
  containsSingleGeometryType() {
    return true;
  }
};
function px(e53, t2, n2, r2, i2) {
  return new mx(e53, t2, n2, r2, i2);
}
var mx = class extends ux {
  constructor(e53, t2, n2, r2, i2) {
    super(t2, n2, r2, i2), this._geometryTypes = e53;
  }
  geometryType(e53) {
    return this._geometryTypes[e53];
  }
  get numGeometries() {
    return this._geometryTypes.length;
  }
  containsSingleGeometryType() {
    return false;
  }
};
function hx(e53, t2, n2, r2, i2) {
  let a2 = Q(e53, n2), o2 = Hb(a2, r2, e53, n2), s2, c2, l2, u2;
  if (o2 === $.CONST) {
    let o3 = Db(e53, n2, a2), d3, f3, p3, m3;
    for (let r3 = 0; r3 < t2 - 1; r3++) {
      let t3 = Q(e53, n2);
      switch (t3.physicalStreamType) {
        case Yy.LENGTH:
          switch (t3.logicalStreamType.lengthType) {
            case Qy.GEOMETRIES:
              d3 = Cb(e53, n2, t3);
              break;
            case Qy.PARTS:
              f3 = Cb(e53, n2, t3);
              break;
            case Qy.RINGS:
              p3 = Cb(e53, n2, t3);
              break;
            case Qy.TRIANGLES:
              m3 = Cb(e53, n2, t3);
          }
          break;
        case Yy.OFFSET:
          switch (t3.logicalStreamType.offsetType) {
            case Zy.VERTEX:
              s2 = Sb(e53, n2, t3);
              break;
            case Zy.INDEX:
              u2 = Sb(e53, n2, t3);
          }
          break;
        case Yy.DATA:
          if (Xy.VERTEX === t3.logicalStreamType.dictionaryType) c2 = xb(e53, n2, t3, i2);
          else {
            let r4 = t3;
            l2 = { numBits: r4.numBits, coordinateShift: r4.coordinateShift }, c2 = Sb(e53, n2, t3, i2);
          }
      }
    }
    return u2 ? d3 !== void 0 || f3 !== void 0 ? dx(r2, o3, m3, u2, c2, { geometryOffsets: d3, partOffsets: f3, ringOffsets: p3 }) : dx(r2, o3, m3, u2, c2) : l2 === void 0 ? ix(r2, o3, { geometryOffsets: d3, partOffsets: f3, ringOffsets: p3 }, s2, c2) : ax(r2, o3, { geometryOffsets: d3, partOffsets: f3, ringOffsets: p3 }, s2, c2, l2);
  }
  let d2 = Sb(e53, n2, a2), f2, p2, m2, h2;
  for (let r3 = 0; r3 < t2 - 1; r3++) {
    let t3 = Q(e53, n2);
    switch (t3.physicalStreamType) {
      case Yy.LENGTH:
        switch (t3.logicalStreamType.lengthType) {
          case Qy.GEOMETRIES:
            f2 = Sb(e53, n2, t3);
            break;
          case Qy.PARTS:
            p2 = Sb(e53, n2, t3);
            break;
          case Qy.RINGS:
            m2 = Sb(e53, n2, t3);
            break;
          case Qy.TRIANGLES:
            h2 = Cb(e53, n2, t3);
        }
        break;
      case Yy.OFFSET:
        switch (t3.logicalStreamType.offsetType) {
          case Zy.VERTEX:
            s2 = Sb(e53, n2, t3);
            break;
          case Zy.INDEX:
            u2 = Sb(e53, n2, t3);
        }
        break;
      case Yy.DATA:
        if (Xy.VERTEX === t3.logicalStreamType.dictionaryType) c2 = xb(e53, n2, t3, i2);
        else {
          let r4 = t3;
          l2 = { numBits: r4.numBits, coordinateShift: r4.coordinateShift }, c2 = Sb(e53, n2, t3, i2);
        }
    }
  }
  let g2, _2, v2;
  return f2 ? (g2 = gx(d2, f2, 2), p2 && m2 ? (_2 = _x(d2, g2, p2, false), v2 = yx(d2, g2, _2, m2)) : p2 && (_2 = vx(d2, g2, p2))) : p2 && m2 ? (_2 = gx(d2, p2, 1), v2 = _x(d2, _2, m2, true)) : p2 && (_2 = gx(d2, p2, 0)), u2 && !_2 ? px(d2, h2, u2, c2) : u2 ? px(d2, h2, u2, c2, { geometryOffsets: g2, partOffsets: _2, ringOffsets: v2 }) : l2 === void 0 ? sx(d2, { geometryOffsets: g2, partOffsets: _2, ringOffsets: v2 }, s2, c2) : cx(d2, { geometryOffsets: g2, partOffsets: _2, ringOffsets: v2 }, s2, c2, l2);
}
function gx(e53, t2, n2) {
  let r2 = new Uint32Array(e53.length + 1), i2 = 0;
  r2[0] = i2;
  let a2 = 0;
  for (let o2 = 0; o2 < e53.length; o2++) i2 = r2[o2 + 1] = i2 + (e53[o2] > n2 ? t2[a2++] : 1);
  return r2;
}
function _x(e53, t2, n2, r2) {
  let i2 = new Uint32Array(t2[t2.length - 1] + 1), a2 = 0;
  i2[0] = a2;
  let o2 = 1, s2 = 0;
  for (let c2 = 0; c2 < e53.length; c2++) {
    let l2 = e53[c2], u2 = t2[c2 + 1] - t2[c2];
    if (l2 === 5 || l2 === 2 || r2 && (l2 === 4 || l2 === 1)) for (let e54 = 0; e54 < u2; e54++) a2 = i2[o2++] = a2 + n2[s2++];
    else for (let e54 = 0; e54 < u2; e54++) i2[o2++] = ++a2;
  }
  return i2;
}
function vx(e53, t2, n2) {
  let r2 = new Uint32Array(t2[t2.length - 1] + 1), i2 = 0;
  r2[0] = i2;
  let a2 = 1, o2 = 0;
  for (let s2 = 0; s2 < e53.length; s2++) {
    let c2 = e53[s2], l2 = t2[s2 + 1] - t2[s2];
    if (c2 === 4 || c2 === 1) for (let e54 = 0; e54 < l2; e54++) i2 = r2[a2++] = i2 + n2[o2++];
    else for (let e54 = 0; e54 < l2; e54++) r2[a2++] = ++i2;
  }
  return r2;
}
function yx(e53, t2, n2, r2) {
  let i2 = new Uint32Array(n2[n2.length - 1] + 1), a2 = 0;
  i2[0] = a2;
  let o2 = 1, s2 = 1, c2 = 0;
  for (let l2 = 0; l2 < e53.length; l2++) {
    let u2 = e53[l2], d2 = t2[l2 + 1] - t2[l2];
    if (u2 !== 0 && u2 !== 3) for (let e54 = 0; e54 < d2; e54++) {
      let e55 = n2[o2] - n2[o2 - 1];
      o2++;
      for (let t3 = 0; t3 < e55; t3++) a2 = i2[s2++] = a2 + r2[c2++];
    }
    else for (let e54 = 0; e54 < d2; e54++) i2[s2++] = ++a2, o2++;
  }
  return i2;
}
var bx = class extends tv {
  constructor(e53, t2, n2) {
    super(e53, t2.getBuffer(), n2), this.dataVector = t2;
  }
  getValueFromBuffer(e53) {
    return this.dataVector.get(e53);
  }
};
var xx = class extends nv {
  getValueFromBuffer(e53) {
    return this.dataBuffer[e53];
  }
};
var Sx = class extends tv {
  constructor(e53, t2, n2, r2) {
    super(e53, r2 ? BigInt64Array.of(t2) : BigUint64Array.of(t2), n2);
  }
  getValueFromBuffer(e53) {
    return this.dataBuffer[0];
  }
};
var Cx = class extends tv {
  constructor(e53, t2, n2, r2) {
    super(e53, n2, r2), this.offsetBuffer = t2;
  }
};
var wx = class extends Cx {
  constructor(e53, t2, n2, r2) {
    super(e53, t2, n2, r2 ?? t2.length - 1);
  }
  getValueFromBuffer(e53) {
    let t2 = this.offsetBuffer[e53], n2 = this.offsetBuffer[e53 + 1];
    return yb(this.dataBuffer, t2, n2);
  }
};
var Tx = class extends Cx {
  constructor(e53, t2, n2, r2, i2) {
    super(e53, n2, r2, i2 ?? t2.length), this.indexBuffer = t2, this.indexBuffer = t2;
  }
  getValueFromBuffer(e53) {
    let t2 = this.indexBuffer[e53], n2 = this.offsetBuffer[t2], r2 = this.offsetBuffer[t2 + 1];
    return yb(this.dataBuffer, n2, r2);
  }
};
function Ex(e53, t2) {
  let n2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++) {
    let i2 = t2[r2];
    i2 === 255 ? (n2++, r2++) : n2 += e53[i2];
  }
  return n2;
}
function Dx(e53, t2, n2) {
  let r2 = new Uint32Array(t2.length);
  for (let e54 = 1; e54 < t2.length; e54++) r2[e54] = r2[e54 - 1] + t2[e54 - 1];
  let i2 = new Uint8Array(Ex(t2, n2)), a2 = 0;
  for (let o2 = 0; o2 < n2.length; o2++) {
    let s2 = n2[o2];
    if (s2 === 255) o2++, i2[a2++] = n2[o2];
    else {
      let n3 = t2[s2], o3 = r2[s2];
      for (; n3-- > 0; ) i2[a2++] = e53[o3++];
    }
  }
  return i2;
}
var Ox = class extends Cx {
  constructor(e53, t2, n2, r2, i2, a2, o2, s2) {
    super(e53, n2, r2, o2 ?? t2.length), this.indexBuffer = t2, this.symbolOffsetBuffer = i2, this.symbolTableBuffer = a2, this.sharedDictionaryCache = s2;
  }
  getValueFromBuffer(e53) {
    this.decodedDictionary ?? (this.decodedDictionary = this.sharedDictionaryCache?.decodedDictionary, this.decodedDictionary ?? (this.decodedDictionary = this.decodeDictionary(), this.sharedDictionaryCache && (this.sharedDictionaryCache.decodedDictionary = this.decodedDictionary)));
    let t2 = this.indexBuffer[e53], n2 = this.offsetBuffer[t2], r2 = this.offsetBuffer[t2 + 1];
    return yb(this.decodedDictionary, n2, r2);
  }
  decodeDictionary() {
    return this.symbolLengthBuffer ??= this.offsetToLengthBuffer(this.symbolOffsetBuffer), Dx(this.symbolTableBuffer, this.symbolLengthBuffer, this.dataBuffer);
  }
  offsetToLengthBuffer(e53) {
    let t2 = new Uint32Array(e53.length - 1), n2 = e53[0];
    for (let r2 = 1; r2 < e53.length; r2++) {
      let i2 = e53[r2];
      t2[r2 - 1] = i2 - n2, n2 = i2;
    }
    return t2;
  }
};
function kx(e53, t2, n2, r2, i2) {
  let a2, o2, s2, c2, l2, u2 = i2, d2, f2;
  for (let e54 = 0; e54 < r2; e54++) {
    let e55 = Q(t2, n2);
    switch (e55.physicalStreamType) {
      case Yy.PRESENT: {
        let r3 = new cb(fb(t2, e55.numValues, e55.byteLength, n2), e55.numValues);
        u2 = i2 ?? r3;
        break;
      }
      case Yy.OFFSET:
        o2 = Sb(t2, n2, e55, void 0, u2);
        break;
      case Yy.LENGTH: {
        let r3 = Cb(t2, n2, e55);
        Qy.DICTIONARY === e55.logicalStreamType.lengthType ? a2 = r3 : Qy.SYMBOL === e55.logicalStreamType.lengthType ? c2 = r3 : d2 = r3;
        break;
      }
      case Yy.DATA: {
        let r3 = t2.subarray(n2.get(), n2.get() + e55.byteLength);
        n2.add(e55.byteLength);
        let i3 = e55.logicalStreamType.dictionaryType;
        Xy.FSST === i3 ? l2 = r3 : Xy.SINGLE === i3 || Xy.SHARED === i3 ? s2 = r3 : Xy.NONE === i3 && (f2 = r3);
        break;
      }
    }
  }
  return Ax(e53, l2, o2, a2, s2, c2, u2) ?? jx(e53, s2, o2, a2, u2) ?? Mx(e53, d2, f2, o2, u2);
}
function Ax(e53, t2, n2, r2, i2, a2, o2) {
  if (t2) {
    if (!n2 || !r2 || !i2 || !a2) throw Error(`Incomplete FSST dictionary string column "${e53}"`);
    return new Ox(e53, n2, r2, i2, a2, t2, o2);
  }
}
function jx(e53, t2, n2, r2, i2) {
  if (t2) {
    if (!n2 || !r2) throw Error(`Incomplete dictionary string column "${e53}"`);
    return i2 ? new Tx(e53, n2, r2, t2, i2) : new Tx(e53, n2, r2, t2);
  }
}
function Mx(e53, t2, n2, r2, i2) {
  if (t2 && n2) {
    if (r2) return i2 ? new Tx(e53, r2, t2, n2, i2) : new Tx(e53, r2, t2, n2);
    if (i2 && i2.size() !== t2.length - 1) {
      let r3 = new Uint32Array(i2.size()), a2 = 0;
      for (let e54 = 0; e54 < i2.size(); e54++) i2.get(e54) ? r3[e54] = a2++ : r3[e54] = 0;
      return new Tx(e53, r3, t2, n2, i2);
    }
    return i2 ? new wx(e53, t2, n2, i2) : new wx(e53, t2, n2);
  }
}
function Nx(e53, t2, n2, r2) {
  let i2, a2, o2, s2, c2 = false;
  for (; !c2; ) {
    let n3 = Q(e53, t2);
    switch (n3.physicalStreamType) {
      case Yy.LENGTH:
        Qy.DICTIONARY === n3.logicalStreamType.lengthType ? i2 = Cb(e53, t2, n3) : o2 = Cb(e53, t2, n3);
        break;
      case Yy.DATA:
        Xy.SINGLE === n3.logicalStreamType.dictionaryType || Xy.SHARED === n3.logicalStreamType.dictionaryType ? (a2 = e53.subarray(t2.get(), t2.get() + n3.byteLength), c2 = true) : s2 = e53.subarray(t2.get(), t2.get() + n3.byteLength), t2.add(n3.byteLength);
    }
  }
  if (n2.type !== `complexType`) throw Error(`Shared dictionary column ${n2.name} must be a complex (struct) column.`);
  if (!i2 || !a2) throw Error(`Incomplete shared dictionary for column "${n2.name}"`);
  let l2 = n2.complexType.children, u2 = [], d2 = s2 ? {} : void 0, f2 = 0;
  for (let c3 of l2) {
    let l3 = sy(e53, t2, 1)[0];
    if (l3 === 0) continue;
    let p2 = c3.name ? `${n2.name}${c3.name}` : n2.name;
    if (r2 && !r2.has(p2)) {
      db(l3, e53, t2);
      continue;
    }
    if (c3.type !== `scalarField` || c3.scalarField.physicalType !== Y.STRING) throw Error(`Currently only scalar string fields are implemented for a struct.`);
    if (l3 > 1 && !c3.nullable || l3 === 1 && c3.nullable) throw Error(`The number of streams for the child field ${c3.name} does not match its nullability. nullibilty: ${c3.nullable}, numStreams: ${l3}`);
    let m2;
    if (c3.nullable) {
      let n3 = Q(e53, t2);
      m2 = new cb(fb(e53, n3.numValues, n3.byteLength, t2), n3.numValues);
    }
    let h2 = Sb(e53, t2, Q(e53, t2), void 0, m2);
    if (s2) {
      if (!o2) throw Error(`Incomplete shared FSST dictionary for column "${p2}"`);
      u2[f2++] = new Ox(p2, h2, i2, a2, o2, s2, m2, d2);
    } else u2[f2++] = new Tx(p2, h2, i2, a2, m2);
  }
  return u2;
}
var Px = class extends tv {
  constructor(e53, t2, n2) {
    super(e53, /* @__PURE__ */ new Uint8Array(), n2 ?? t2.length), this.values = t2;
  }
  getValueFromBuffer(e53) {
    return this.values[e53];
  }
};
var Fx;
(function(e53) {
  e53[e53.STRING = 1] = `STRING`, e53[e53.INT32 = 2] = `INT32`, e53[e53.UINT32 = 4] = `UINT32`, e53[e53.INT64 = 8] = `INT64`, e53[e53.UINT64 = 16] = `UINT64`, e53[e53.FLOAT = 32] = `FLOAT`, e53[e53.DOUBLE = 64] = `DOUBLE`, e53[e53.PRESENCE = 128] = `PRESENCE`;
})(Fx ||= {});
var Ix;
(function(e53) {
  e53[e53.FALSE = 0] = `FALSE`, e53[e53.TRUE = 1] = `TRUE`, e53[e53.START_MAP = 2] = `START_MAP`, e53[e53.START_LIST = 3] = `START_LIST`, e53[e53.COUNT = 4] = `COUNT`;
})(Ix ||= {});
function Lx(e53, t2, n2, r2) {
  let i2 = Rx(n2);
  if (r2 === 0) return i2.map((e54) => new Px(e54, []));
  let a2 = zx(e53, t2, r2), o2 = (a2.presentStream ? a2.presentCount : a2.lengthStream.length) / i2.length, s2 = [], c2 = 0, l2 = 0;
  for (let e54 = 0; e54 < i2.length; e54++) {
    let t3 = Wx(a2, e54, o2, c2, l2);
    s2.push(new Px(i2[e54], t3.value, t3.nullabilityBuffer)), c2 = t3.countsEnd, l2 = t3.valuesEnd;
  }
  return s2;
}
function Rx(e53) {
  let t2 = e53.type === `complexType` ? e53.complexType.children : void 0;
  return !t2 || t2.length === 0 ? [e53.name] : t2.map((t3) => e53.name + (t3.name ?? ``));
}
function zx(e53, t2, n2) {
  let r2 = e53[t2.get()];
  t2.add(1);
  let i2 = Sb(e53, t2, Q(e53, t2)), a2 = n2 - 1, o2 = [];
  r2 & Fx.STRING && (a2 -= Bx(e53, t2, o2)), a2 -= Vx(e53, t2, r2, o2), a2 -= Hx(e53, t2, r2, o2);
  let s2, c2 = 0;
  if (r2 & Fx.PRESENCE) {
    let n3 = Ux(e53, t2);
    s2 = n3.value, c2 = n3.count, a2--;
  }
  let l2 = /* @__PURE__ */ new Uint32Array();
  if (a2 > 0 && (l2 = Sb(e53, t2, Q(e53, t2)), a2--), a2 !== 0) throw Error(`Unexpected number of remaining streams while decoding map column: ${a2}`);
  return { lengthStream: i2, dictionary: o2, presentStream: s2, presentCount: c2, flattenedValues: l2 };
}
function Bx(e53, t2, n2) {
  let r2 = e53[t2.get()];
  t2.add(1);
  let i2 = kx(``, e53, t2, r2);
  if (i2) for (let e54 = 0; e54 < i2.size; e54++) n2.push(i2.getValue(e54));
  return r2;
}
function Vx(e53, t2, n2, r2) {
  let i2 = 0;
  return n2 & Fx.INT32 ? (Xx(r2, xb(e53, t2, Q(e53, t2))), i2++) : n2 & Fx.INT64 && (Xx(r2, Ab(e53, t2, Q(e53, t2))), i2++), n2 & Fx.UINT32 ? (Xx(r2, Sb(e53, t2, Q(e53, t2))), i2++) : n2 & Fx.UINT64 && (Xx(r2, jb(e53, t2, Q(e53, t2))), i2++), i2;
}
function Hx(e53, t2, n2, r2) {
  let i2 = 0;
  return n2 & Fx.FLOAT && (Xx(r2, mb(e53, t2, Q(e53, t2).numValues)), i2++), n2 & Fx.DOUBLE && (Xx(r2, hb(e53, t2, Q(e53, t2).numValues)), i2++), i2;
}
function Ux(e53, t2) {
  let n2 = Q(e53, t2);
  if (n2.physicalStreamType !== Yy.PRESENT) throw Error(`Expected PRESENT stream for map column but found: ${n2.physicalStreamType}`);
  let r2 = n2.numValues, i2 = t2.get(), a2 = new cb(fb(e53, r2, n2.byteLength, t2), r2);
  return t2.set(i2 + n2.byteLength), { value: a2, count: r2 };
}
function Wx(e53, t2, n2, r2, i2) {
  let { lengthStream: a2, flattenedValues: o2, presentStream: s2, dictionary: c2 } = e53, l2 = t2 * n2, u2 = n2, d2;
  if (s2) {
    d2 = new cb(new Uint8Array(Math.ceil(n2 / 8)), n2), u2 = 0;
    for (let e54 = 0; e54 < n2; e54++) s2.get(l2 + e54) && (d2.set(e54, true), u2++);
  }
  let f2 = r2 + u2;
  if (f2 > a2.length) throw Error(`Merged map counts underflow while decoding child streams`);
  let p2 = Array(n2), m2 = r2, h2 = i2;
  for (let e54 = 0; e54 < n2; e54++) {
    if (s2 && !s2.get(l2 + e54)) {
      p2[e54] = null;
      continue;
    }
    let t3 = h2 + a2[m2++];
    if (t3 > o2.length) throw Error(`Map value stream underflow while decoding feature payload`);
    let n3 = Gx(o2, h2, t3, c2);
    p2[e54] = n3.value, h2 = n3.nextIndex;
  }
  let g2 = 0;
  for (let e54 = r2; e54 < f2; e54++) g2 += a2[e54];
  let _2 = i2 + g2;
  if (h2 !== _2) throw Error(`Unused flattened map values remain after decode`);
  return { value: p2, nullabilityBuffer: d2, countsEnd: f2, valuesEnd: _2 };
}
function Gx(e53, t2, n2, r2) {
  return n2 - t2 === 1 || e53[t2] === Ix.START_LIST ? qx(e53, t2, n2, r2) : Kx(e53, t2, n2, r2);
}
function Kx(e53, t2, n2, r2) {
  let i2 = /* @__PURE__ */ Object.create(null), a2 = t2;
  for (; a2 < n2; ) {
    let t3 = Yx(e53[a2++], r2);
    if (typeof t3 != `string`) throw Error(`Map key dictionary index does not resolve to a string: ${t3}`);
    let o2 = qx(e53, a2, n2, r2);
    i2[t3] = o2.value, a2 = o2.nextIndex;
  }
  return { value: i2, nextIndex: a2 };
}
function qx(e53, t2, n2, r2) {
  if (t2 >= n2) throw Error(`Unexpected end of map value stream`);
  let i2 = e53[t2];
  if (i2 === Ix.FALSE) return { value: false, nextIndex: t2 + 1 };
  if (i2 === Ix.TRUE) return { value: true, nextIndex: t2 + 1 };
  if (i2 === Ix.START_MAP) {
    let i3 = Jx(e53, t2, n2);
    return { value: Kx(e53, t2 + 2, i3, r2).value, nextIndex: i3 };
  }
  if (i2 === Ix.START_LIST) {
    let i3 = Jx(e53, t2, n2), a2 = [], o2 = t2 + 2;
    for (; o2 < i3; ) {
      let t3 = qx(e53, o2, i3, r2);
      a2.push(t3.value), o2 = t3.nextIndex;
    }
    return { value: a2, nextIndex: i3 };
  }
  return { value: Yx(i2, r2), nextIndex: t2 + 1 };
}
function Jx(e53, t2, n2) {
  if (t2 + 1 >= n2) throw Error(`Missing length for nested map/list payload`);
  let r2 = e53[t2 + 1];
  if (r2 < 2) throw Error(`Invalid nested payload length: ${r2}`);
  let i2 = t2 + r2;
  if (i2 > n2) throw Error(`Nested payload exceeds containing payload bounds`);
  return i2;
}
function Yx(e53, t2) {
  let n2 = e53 - Ix.COUNT;
  if (n2 < 0 || n2 >= t2.length) throw Error(`Scalar dictionary index out of range: ${e53}`);
  return t2[n2];
}
function Xx(e53, t2) {
  for (let n2 of t2) e53.push(n2);
}
function Zx(e53, t2, n2, r2, i2, a2) {
  return n2.type === `scalarType` ? a2 && !a2.has(n2.name) ? (db(r2, e53, t2), null) : Qx(r2, e53, t2, i2, n2.scalarType, n2) : n2.complexType?.physicalType === uv.MAP ? Lx(e53, t2, n2, r2) : r2 === 0 ? null : Nx(e53, t2, n2, a2);
}
function Qx(e53, t2, n2, r2, i2, a2) {
  let o2;
  if (e53 === 0) return null;
  if (a2.nullable) {
    let e54 = Q(t2, n2), r3 = e54.numValues, i3 = n2.get(), a3 = fb(t2, r3, e54.byteLength, n2);
    n2.set(i3 + e54.byteLength), o2 = new cb(a3, e54.numValues);
  }
  let s2 = o2 ?? r2;
  switch (i2.physicalType) {
    case Y.UINT_32:
    case Y.INT_32:
      return rS(t2, n2, a2, i2, s2);
    case Y.STRING: {
      let r3 = a2.nullable ? e53 - 1 : e53;
      return kx(a2.name, t2, n2, r3, o2) ?? null;
    }
    case Y.BOOLEAN:
      return $x(t2, n2, a2, r2, s2);
    case Y.UINT_64:
    case Y.INT_64:
      return nS(t2, n2, a2, s2, i2);
    case Y.FLOAT:
      return eS(t2, n2, a2, s2);
    case Y.DOUBLE:
      return tS(t2, n2, a2, s2);
    default:
      throw Error(`The specified data type for the field is currently not supported: ${i2}`);
  }
}
function $x(e53, t2, n2, r2, i2) {
  let a2 = Q(e53, t2), o2 = a2.numValues, s2 = t2.get(), c2 = iS(i2) ? i2 : void 0, l2 = fb(e53, o2, a2.byteLength, t2, c2);
  t2.set(s2 + a2.byteLength);
  let u2 = new cb(l2, o2);
  return new bx(n2.name, u2, i2);
}
function eS(e53, t2, n2, r2) {
  let i2 = Q(e53, t2), a2 = iS(r2) ? r2 : void 0, o2 = mb(e53, t2, i2.numValues, a2);
  return new xx(n2.name, o2, r2);
}
function tS(e53, t2, n2, r2) {
  let i2 = Q(e53, t2), a2 = iS(r2) ? r2 : void 0, o2 = hb(e53, t2, i2.numValues, a2);
  return new iv(n2.name, o2, r2);
}
function nS(e53, t2, n2, r2, i2) {
  let a2 = Q(e53, t2), o2 = Hb(a2, r2, e53, t2, `int64`), s2 = i2.physicalType === Y.INT_64;
  if (o2 === $.FLAT) {
    let i3 = iS(r2) ? r2 : void 0, o3 = s2 ? Ab(e53, t2, a2, i3) : jb(e53, t2, a2, i3);
    return new Gb(n2.name, o3, r2);
  }
  if (o2 === $.SEQUENCE) {
    let r3 = kb(e53, t2, a2);
    return new Kb(n2.name, r3[0], r3[1], a2.numRleValues, s2);
  }
  let c2 = s2 ? Pb(e53, t2, a2) : Fb(e53, t2, a2);
  return new Sx(n2.name, c2, r2, s2);
}
function rS(e53, t2, n2, r2, i2) {
  let a2 = Q(e53, t2), o2 = Hb(a2, i2, e53, t2), s2 = r2.physicalType === Y.INT_32;
  if (o2 === $.FLAT) {
    let r3 = iS(i2) ? i2 : void 0, o3 = s2 ? xb(e53, t2, a2, void 0, r3) : Sb(e53, t2, a2, void 0, r3);
    return new rv(n2.name, o3, i2);
  }
  if (o2 === $.SEQUENCE) {
    let r3 = Ob(e53, t2, a2);
    return new ov(n2.name, r3[0], r3[1], a2.numRleValues, s2);
  }
  let c2 = s2 ? Eb(e53, t2, a2) : Db(e53, t2, a2);
  return new sv(n2.name, c2, i2, s2);
}
function iS(e53) {
  return e53 instanceof cb;
}
var aS = { ID: 0, ID_NULLABLE: 1, ID_LONG: 2, GEOMETRY: 4, SCALAR_BASE: 10, STRUCT: 30, MAP: 31 };
function oS(e53) {
  switch (e53) {
    case aS.ID:
    case aS.ID | aS.ID_NULLABLE:
    case aS.ID | aS.ID_LONG:
    case aS.ID | aS.ID_LONG | aS.ID_NULLABLE:
      return { nullable: (e53 & aS.ID_NULLABLE) !== 0, columnScope: lv.FEATURE, type: `scalarType`, scalarType: { longID: (e53 & aS.ID_LONG) !== 0, type: `logicalType`, logicalType: dv.ID } };
    case aS.GEOMETRY:
      return { nullable: false, columnScope: lv.FEATURE, type: `complexType`, complexType: { type: `physicalType`, physicalType: uv.GEOMETRY, children: [] } };
    case aS.STRUCT:
      return { nullable: false, columnScope: lv.FEATURE, type: `complexType`, complexType: { type: `physicalType`, physicalType: uv.STRUCT, children: [] } };
    case aS.MAP:
      return { nullable: true, columnScope: lv.FEATURE, type: `complexType`, complexType: { type: `physicalType`, physicalType: uv.MAP, children: [] } };
    default:
      return fS(e53);
  }
}
function sS(e53) {
  return e53 >= aS.SCALAR_BASE;
}
function cS(e53) {
  return e53 === aS.STRUCT || e53 === aS.MAP;
}
function lS(e53) {
  if (e53.type === `scalarType`) {
    let t2 = e53.scalarType;
    if (t2.type === `physicalType`) switch (t2.physicalType) {
      case Y.BOOLEAN:
      case Y.INT_8:
      case Y.UINT_8:
      case Y.INT_32:
      case Y.UINT_32:
      case Y.INT_64:
      case Y.UINT_64:
      case Y.FLOAT:
      case Y.DOUBLE:
        return false;
      case Y.STRING:
        return true;
      default:
        return false;
    }
    if (t2.type === `logicalType`) return false;
  } else if (e53.type === `complexType`) {
    let t2 = e53.complexType;
    if (t2.type === `physicalType`) switch (t2.physicalType) {
      case uv.GEOMETRY:
      case uv.STRUCT:
      case uv.MAP:
        return true;
      default:
        return false;
    }
  }
  return console.warn(`Unexpected column type in hasStreamCount`, e53), false;
}
function uS(e53) {
  return e53.type === `scalarType` && e53.scalarType?.type === `logicalType` && e53.scalarType.logicalType === dv.ID;
}
function dS(e53) {
  return e53.type === `complexType` && e53.complexType?.type === `physicalType` && e53.complexType.physicalType === uv.GEOMETRY;
}
function fS(e53) {
  let t2;
  switch (e53) {
    case 10:
    case 11:
      t2 = Y.BOOLEAN;
      break;
    case 12:
    case 13:
      t2 = Y.INT_8;
      break;
    case 14:
    case 15:
      t2 = Y.UINT_8;
      break;
    case 16:
    case 17:
      t2 = Y.INT_32;
      break;
    case 18:
    case 19:
      t2 = Y.UINT_32;
      break;
    case 20:
    case 21:
      t2 = Y.INT_64;
      break;
    case 22:
    case 23:
      t2 = Y.UINT_64;
      break;
    case 24:
    case 25:
      t2 = Y.FLOAT;
      break;
    case 26:
    case 27:
      t2 = Y.DOUBLE;
      break;
    case 28:
    case 29:
      t2 = Y.STRING;
      break;
    default:
      return null;
  }
  return { nullable: !!(e53 & 1), columnScope: lv.FEATURE, type: `scalarType`, scalarType: { longID: false, type: `physicalType`, physicalType: t2 } };
}
var pS = new TextDecoder();
var mS = `0-3(ID), 4(GEOMETRY), 10-29(scalars), 30(STRUCT), 31(MAP)`;
function hS(e53, t2) {
  let n2 = sy(e53, t2, 1)[0];
  if (n2 === 0) return ``;
  let r2 = t2.get(), i2 = r2 + n2, a2 = e53.subarray(r2, i2);
  return t2.add(n2), pS.decode(a2);
}
function gS(e53) {
  let t2 = e53.name, n2 = e53.nullable;
  return e53.type === `scalarType` ? { type: `scalarField`, scalarField: e53.scalarType, name: t2, nullable: n2 } : { type: `complexField`, complexField: e53.complexType, name: t2, nullable: n2 };
}
function _S(e53, t2) {
  let n2 = sy(e53, t2, 1)[0] >>> 0, r2 = n2 >= aS.SCALAR_BASE ? oS(n2) : null;
  if (!r2) throw Error(`Unsupported field type code ${n2}. Supported: 10-29(scalars), 30(STRUCT), 31(MAP)`);
  let i2 = { ...r2, name: hS(e53, t2) };
  if (i2.type === `complexType` && cS(n2)) {
    let n3 = i2.complexType, r3 = sy(e53, t2, 1)[0] >>> 0;
    n3.children = Array(r3);
    for (let i3 = 0; i3 < r3; i3++) n3.children[i3] = _S(e53, t2);
  }
  return gS(i2);
}
function vS(e53, t2) {
  let n2 = sy(e53, t2, 1)[0] >>> 0, r2 = oS(n2);
  if (!r2) throw Error(`Unsupported column type code ${n2}. Supported: ${mS}`);
  let i2;
  if (sS(n2)) i2 = hS(e53, t2);
  else if (n2 < aS.GEOMETRY) i2 = `id`;
  else if (n2 === aS.GEOMETRY) i2 = `geometry`;
  else throw Error(`Unsupported column type code ${n2}. Supported: ${mS}`);
  let a2 = { ...r2, name: i2 };
  if (a2.type === `complexType` && cS(n2)) {
    let n3 = sy(e53, t2, 1)[0] >>> 0, r3 = a2.complexType;
    r3.children = Array(n3);
    for (let i3 = 0; i3 < n3; i3++) r3.children[i3] = _S(e53, t2);
  }
  return a2;
}
function yS(e53, t2) {
  let n2 = {};
  n2.featureTables = [];
  let r2 = {};
  if (r2.name = hS(e53, t2), r2.name.length === 0) throw Error(`Missing layer name`);
  let i2 = sy(e53, t2, 1)[0] >>> 0, a2 = sy(e53, t2, 1)[0] >>> 0;
  r2.columns = Array(a2);
  for (let n3 = 0; n3 < a2; n3++) r2.columns[n3] = vS(e53, t2);
  return n2.featureTables.push(r2), [n2, i2];
}
function bS(e53, t2, n2 = true) {
  let r2 = new fv(0), i2 = [];
  for (; r2.get() < e53.length; ) {
    let a2 = sy(e53, r2, 1)[0] >>> 0, o2 = r2.get() + a2;
    if (o2 > e53.length) throw Error(`Block overruns tile: ${o2} > ${e53.length}`);
    let s2 = sy(e53, r2, 1)[0] >>> 0;
    if (s2 !== 1 && s2 !== 2) {
      r2.set(o2);
      continue;
    }
    let [c2, l2] = yS(e53, r2), u2 = c2.featureTables[0], d2 = null, f2 = null, p2 = [], m2 = 0;
    for (let i3 of u2.columns) {
      let a3 = i3.name;
      if (uS(i3)) {
        let t3 = null;
        if (i3.nullable) {
          let n3 = Q(e53, r2), i4 = r2.get(), a4 = fb(e53, n3.numValues, n3.byteLength, r2);
          r2.set(i4 + n3.byteLength), t3 = new cb(a4, n3.numValues);
        }
        let o3 = Q(e53, r2);
        m2 = t3 ? t3.size() : o3.decompressedCount, d2 = xS(e53, i3, r2, a3, o3, t3 ?? m2, n2);
      } else if (dS(i3)) {
        let n3 = sy(e53, r2, 1)[0];
        if (m2 === 0) {
          let t3 = r2.get();
          m2 = Q(e53, r2).decompressedCount, r2.set(t3);
        }
        t2 && (t2.scale = t2.extent / l2), f2 = hx(e53, n3, r2, m2, t2);
      } else {
        let t3 = lS(i3) ? sy(e53, r2, 1)[0] : 1;
        if (t3 === 0) continue;
        let n3 = Zx(e53, r2, i3, t3, m2, void 0);
        if (n3) {
          if (Array.isArray(n3)) for (let e54 of n3) p2.push(e54);
          else p2.push(n3);
        }
      }
    }
    let h2 = new cv(u2.name, f2, d2, p2, l2);
    i2.push(h2), r2.set(o2);
  }
  return i2;
}
function xS(e53, t2, n2, r2, i2, a2, o2 = false) {
  let s2 = t2.scalarType?.longID ? Y.UINT_64 : Y.UINT_32, c2 = typeof a2 == `number` ? void 0 : a2, l2 = Hb(i2, a2, e53, n2, s2 === Y.UINT_64 ? `int64` : `int32`);
  if (s2 === Y.UINT_32) switch (l2) {
    case $.FLAT:
      return new rv(r2, Sb(e53, n2, i2, void 0, c2), a2);
    case $.SEQUENCE: {
      let t3 = Ob(e53, n2, i2);
      return new ov(r2, t3[0], t3[1], i2.numRleValues, false);
    }
    case $.CONST:
      return new sv(r2, Db(e53, n2, i2), a2, false);
  }
  switch (l2) {
    case $.FLAT:
      return o2 ? new iv(r2, Mb(e53, n2, i2, c2), a2) : new Gb(r2, jb(e53, n2, i2, c2), a2);
    case $.SEQUENCE: {
      let t3 = kb(e53, n2, i2);
      return new Kb(r2, t3[0], t3[1], i2.numRleValues, false);
    }
    case $.CONST:
      return new Sx(r2, Fb(e53, n2, i2), a2, false);
  }
  throw Error(`Vector type not supported for id column.`);
}
var SS = yv(gv);
SS / 32 * 4, 3 * SS / 256 + SS | 0;
var CS = class {
  constructor(e53, t2) {
    switch (this._featureData = e53, this.properties = this._featureData.properties || {}, this._featureData.geometry?.type) {
      case Yb.POINT:
      case Yb.MULTIPOINT:
        this.type = 1;
        break;
      case Yb.LINESTRING:
      case Yb.MULTILINESTRING:
        this.type = 2;
        break;
      case Yb.POLYGON:
      case Yb.MULTIPOLYGON:
        this.type = 3;
        break;
      default:
        this.type = 0;
    }
    this.extent = t2, this.id = Number(this._featureData.id);
  }
  loadGeometry() {
    let e53 = [];
    for (let t2 of this._featureData.geometry.coordinates) {
      let n2 = [];
      for (let e54 of t2) n2.push(new l(e54.x, e54.y));
      e53.push(n2);
    }
    return e53;
  }
};
var wS = class {
  constructor(e53) {
    this.features = [], this.featureTable = e53, this.name = e53.name, this.extent = e53.extent, this.version = 2, this.features = e53.getFeatures(), this.length = this.features.length;
  }
  feature(e53) {
    return new CS(this.features[e53], this.extent);
  }
};
var TS = class {
  constructor(e53) {
    this.layers = {};
    let t2 = bS(new Uint8Array(e53));
    this.layers = t2.reduce((e54, t3) => ({ ...e54, [t3.name]: new wS(t3) }), {});
  }
};
var ES = class {
  constructor(e53, t2) {
    this.tileID = e53, this.x = e53.canonical.x, this.y = e53.canonical.y, this.z = e53.canonical.z, this.grid = new ye(v, 16, 0), this.grid3D = new ye(v, 16, 0), this.featureIndexArray = new Es(), this.promoteId = t2;
  }
  insert(e53, t2, n2, r2, i2, a2) {
    let o2 = this.featureIndexArray.length;
    this.featureIndexArray.emplaceBack(n2, r2, i2);
    let s2 = a2 ? this.grid3D : this.grid;
    for (let e54 of t2) {
      let t3 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      for (let n3 of e54) t3[0] = Math.min(t3[0], n3.x), t3[1] = Math.min(t3[1], n3.y), t3[2] = Math.max(t3[2], n3.x), t3[3] = Math.max(t3[3], n3.y);
      t3[0] < 8192 && t3[1] < 8192 && t3[2] >= 0 && t3[3] >= 0 && s2.insert(o2, t3[0], t3[1], t3[2], t3[3]);
    }
  }
  loadVTLayers() {
    if (!this.vtLayers) {
      switch (this.encoding) {
        case `mlt`:
          this.vtLayers = new TS(this.rawTileData).layers;
          break;
        default:
          this.vtLayers = new od(new bh(this.rawTileData)).layers;
      }
      this.sourceLayerCoder = new $_(this.vtLayers ? Object.keys(this.vtLayers).sort() : [H_]);
    }
    return this.vtLayers;
  }
  query(e53, t2, n2, r2) {
    this.loadVTLayers();
    let i2 = e53.params, a2 = v / e53.tileSize / e53.scale, o2 = Ii(i2.filter, `queryRenderedFeatures filter`, i2.globalState), s2 = e53.queryGeometry, c2 = e53.queryPadding * a2, l2 = Sc.fromPoints(s2), u2 = this.grid.query(l2.minX - c2, l2.minY - c2, l2.maxX + c2, l2.maxY + c2), d2 = Sc.fromPoints(e53.cameraQueryGeometry).expandBy(c2), f2 = this.grid3D.query(d2.minX, d2.minY, d2.maxX, d2.maxY, (t3, n3, r3, i3) => Bc(e53.cameraQueryGeometry, t3 - c2, n3 - c2, r3 + c2, i3 + c2));
    for (let e54 of f2) u2.push(e54);
    u2.sort(kS);
    let p2 = {}, m2;
    for (let c3 of u2) {
      if (c3 === m2) continue;
      m2 = c3;
      let l3 = this.featureIndexArray.get(c3), u3 = null;
      this.loadMatchingFeature(p2, l3.bucketIndex, l3.sourceLayerIndex, l3.featureIndex, o2, i2.layers, i2.availableImages, t2, n2, e53.transform.worldCoordinateHelper, r2, (t3, n3, r3) => (u3 ||= bc(t3), n3.queryIntersectsFeature({ queryGeometry: s2, feature: t3, featureState: r3, geometry: u3, zoom: this.z, transform: e53.transform, pixelsToTileUnits: a2, pixelPosMatrix: e53.pixelPosMatrix, unwrappedTileID: this.tileID.toUnwrapped(), getElevation: e53.getElevation })));
    }
    return p2;
  }
  loadMatchingFeature(e53, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) {
    let f2 = this.bucketLayerIDs[t2];
    if (a2 && !f2.some((e54) => a2.has(e54))) return;
    let p2 = this.sourceLayerCoder.decode(n2), m2 = this.vtLayers[p2].feature(r2);
    if (i2.needGeometry) {
      let e54 = xc(m2, true);
      if (!i2.filter(new K(this.tileID.overscaledZ), e54, this.tileID.canonical)) return;
    } else if (!i2.filter(new K(this.tileID.overscaledZ), m2)) return;
    let h2 = this.getId(m2, p2);
    for (let t3 of f2) {
      if (a2 && !a2.has(t3)) continue;
      let n3 = s2[t3];
      if (!n3) continue;
      let i3 = {};
      h2 && u2 && (i3 = u2.getState(n3.sourceLayer || `_geojsonTileLayer`, h2));
      let f3 = w({}, c2[t3]);
      f3.paint = OS(f3.paint, n3.paint, m2, i3, o2), f3.layout = OS(f3.layout, n3.layout, m2, i3, o2);
      let p3 = !d2 || d2(m2, n3, i3);
      if (!p3) continue;
      let g2 = new ev(m2, this.z, this.x, this.y, h2, l2);
      g2.layer = f3;
      let _2 = e53[t3];
      _2 === void 0 && (_2 = e53[t3] = []), _2.push({ featureIndex: r2, feature: g2, intersectionZ: p3 });
    }
  }
  lookupSymbolFeatures(e53, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = {};
    this.loadVTLayers();
    let l2 = Ii(i2.filterSpec, `queryRenderedFeatures symbol filter`, i2.globalState);
    for (let u2 of e53) this.loadMatchingFeature(c2, n2, r2, u2, l2, a2, o2, s2, t2, i2.worldCoordinateHelper);
    return c2;
  }
  hasLayer(e53) {
    for (let t2 of this.bucketLayerIDs) for (let n2 of t2) if (e53 === n2) return true;
    return false;
  }
  getId(e53, t2) {
    let n2 = e53.id;
    if (this.promoteId) {
      let r2 = typeof this.promoteId == `string` ? this.promoteId : this.promoteId[t2];
      n2 = e53.properties[r2], typeof n2 == `boolean` && (n2 = Number(n2)), n2 === void 0 && e53.properties?.cluster && this.promoteId && (n2 = Number(e53.properties.cluster_id));
    }
    return n2;
  }
};
G(`FeatureIndex`, ES, { omit: [`rawTileData`, `sourceLayerCoder`] });
function DS(e53) {
  return typeof e53 == `object` && !!e53 && `evaluate` in e53;
}
function OS(e53, t2, n2, r2, i2) {
  return E(e53, (e54, a2) => {
    let o2 = t2 instanceof ko ? t2.get(a2) : null;
    return DS(o2) ? o2.evaluate(n2, r2, void 0, i2) : o2;
  });
}
function kS(e53, t2) {
  return t2 - e53;
}
var AS = class {
  constructor(e53, t2) {
    this.keyCache = {}, e53 && this.replace(e53, t2);
  }
  replace(e53, t2) {
    this._layerConfigs = {}, this._layers = {}, this.update(e53, [], t2);
  }
  update(e53, t2, n2) {
    for (let t3 of e53) {
      this._layerConfigs[t3.id] = t3;
      let e54 = this._layers[t3.id] = B_(t3, n2);
      e54._featureFilter = Ii(e54.filter, `layers[${t3.id}].filter`, n2), this.keyCache[t3.id] && delete this.keyCache[t3.id];
    }
    for (let e54 of t2) delete this.keyCache[e54], delete this._layerConfigs[e54], delete this._layers[e54];
    this.familiesBySource = {};
    let r2 = qi(Object.values(this._layerConfigs), this.keyCache);
    for (let e54 of r2) {
      let t3 = e54.map((e55) => this._layers[e55.id]), n3 = t3[0];
      if (n3.isHidden()) continue;
      let r3 = n3.source || ``, i2 = this.familiesBySource[r3];
      i2 ||= this.familiesBySource[r3] = {};
      let a2 = n3.sourceLayer || `_geojsonTileLayer`, o2 = i2[a2];
      o2 ||= i2[a2] = [], o2.push(t3);
    }
  }
};
var jS = class {
  constructor(e53) {
    let t2 = {}, n2 = [];
    for (let r3 in e53) {
      let i3 = t2[r3] = {};
      for (let t3 in e53[r3]) {
        let a3 = e53[r3][t3];
        i3[t3] = {};
        for (let e54 in a3) {
          let r4 = a3[e54];
          if (!r4 || r4.bitmap.width === 0 || r4.bitmap.height === 0) continue;
          let o2 = { x: 0, y: 0, w: r4.bitmap.width + 2, h: r4.bitmap.height + 2 };
          n2.push(o2), i3[t3][e54] = { rect: o2, metrics: r4.metrics };
        }
      }
    }
    let { w: r2, h: i2 } = Bh(n2), a2 = new pl({ width: r2 || 1, height: i2 || 1 });
    for (let n3 in e53) for (let r3 in e53[n3]) {
      let i3 = e53[n3][r3];
      for (let e54 in i3) {
        let o2 = i3[e54];
        if (!o2 || o2.bitmap.width === 0 || o2.bitmap.height === 0) continue;
        let s2 = t2[n3][r3][e54].rect;
        pl.copy(o2.bitmap, a2, { x: 0, y: 0 }, { x: s2.x + 1, y: s2.y + 1 }, o2.bitmap);
      }
    }
    this.image = a2, this.positions = t2;
  }
};
G(`GlyphAtlas`, jS);
function MS(e53, t2, n2) {
  return !(e53 < 0 || e53 > 25 || n2 < 0 || n2 >= 2 ** e53 || t2 < 0 || t2 >= 2 ** e53);
}
var NS = class {
  constructor(e53, t2, n2) {
    if (!MS(e53, t2, n2)) throw Error(`x=${t2}, y=${n2}, z=${e53} outside of bounds. 0<=x<${2 ** e53}, 0<=y<${2 ** e53} 0<=z<=25 `);
    this.z = e53, this.x = t2, this.y = n2, this.key = IS(0, e53, e53, t2, n2);
  }
  equals(e53) {
    return this.z === e53.z && this.x === e53.x && this.y === e53.y;
  }
  url(e53, t2, n2, r2 = ud) {
    let i2 = RS(this.z, this.x, this.y);
    return e53[(this.x + this.y) % e53.length].replace(/{prefix}/g, (this.x % 16).toString(16) + (this.y % 16).toString(16)).replace(/{z}/g, String(this.z)).replace(/{x}/g, String(this.x)).replace(/{y}/g, String(n2 === `tms` ? 2 ** this.z - this.y - 1 : this.y)).replace(/{ratio}/g, t2 > 1 ? `@2x` : ``).replace(/{quadkey}/g, i2).replace(/{bbox-epsg-3857}/g, () => LS(this.x, this.y, this.z, ud)).replace(/{bbox}/g, () => LS(this.x, this.y, this.z, r2));
  }
  isChildOf(e53) {
    let t2 = this.z - e53.z;
    return t2 > 0 && e53.x === this.x >> t2 && e53.y === this.y >> t2;
  }
  getTilePoint(e53) {
    let t2 = 2 ** this.z;
    return new l((e53.x * t2 - this.x) * v, (e53.y * t2 - this.y) * v);
  }
  toString() {
    return `${this.z}/${this.x}/${this.y}`;
  }
};
var PS = class {
  constructor(e53, t2) {
    this.wrap = e53, this.canonical = t2, this.key = IS(e53, t2.z, t2.z, t2.x, t2.y);
  }
};
var FS = class e52 {
  constructor(e53, t2, n2, r2, i2) {
    if (this.terrainRttPosMatrix32f = null, e53 < n2) throw Error(`overscaledZ should be >= z; overscaledZ = ${e53}; z = ${n2}`);
    this.overscaledZ = e53, this.wrap = t2, this.canonical = new NS(n2, +r2, +i2), this.key = IS(t2, e53, n2, r2, i2);
  }
  clone() {
    return new e52(this.overscaledZ, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y);
  }
  equals(e53) {
    return this.overscaledZ === e53.overscaledZ && this.wrap === e53.wrap && this.canonical.equals(e53.canonical);
  }
  scaledTo(t2) {
    if (t2 > this.overscaledZ) throw Error(`targetZ > this.overscaledZ; targetZ = ${t2}; overscaledZ = ${this.overscaledZ}`);
    let n2 = this.canonical.z - t2;
    return t2 > this.canonical.z ? new e52(t2, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y) : new e52(t2, this.wrap, t2, this.canonical.x >> n2, this.canonical.y >> n2);
  }
  isOverscaled() {
    return this.overscaledZ > this.canonical.z;
  }
  calculateScaledKey(e53, t2) {
    if (e53 > this.overscaledZ) throw Error(`targetZ > this.overscaledZ; targetZ = ${e53}; overscaledZ = ${this.overscaledZ}`);
    let n2 = this.canonical.z - e53;
    return e53 > this.canonical.z ? IS(this.wrap * +t2, e53, this.canonical.z, this.canonical.x, this.canonical.y) : IS(this.wrap * +t2, e53, e53, this.canonical.x >> n2, this.canonical.y >> n2);
  }
  isChildOf(e53) {
    if (e53.wrap !== this.wrap || this.overscaledZ - e53.overscaledZ <= 0) return false;
    if (e53.overscaledZ === 0) return this.overscaledZ > 0;
    let t2 = this.canonical.z - e53.canonical.z;
    return t2 < 0 ? false : e53.canonical.x === this.canonical.x >> t2 && e53.canonical.y === this.canonical.y >> t2;
  }
  children(t2) {
    if (this.overscaledZ >= t2) return [new e52(this.overscaledZ + 1, this.wrap, this.canonical.z, this.canonical.x, this.canonical.y)];
    let n2 = this.canonical.z + 1, r2 = this.canonical.x * 2, i2 = this.canonical.y * 2;
    return [new e52(n2, this.wrap, n2, r2, i2), new e52(n2, this.wrap, n2, r2 + 1, i2), new e52(n2, this.wrap, n2, r2, i2 + 1), new e52(n2, this.wrap, n2, r2 + 1, i2 + 1)];
  }
  isLessThan(e53) {
    return this.wrap < e53.wrap ? true : this.wrap > e53.wrap ? false : this.overscaledZ < e53.overscaledZ ? true : this.overscaledZ > e53.overscaledZ ? false : this.canonical.x < e53.canonical.x ? true : this.canonical.x > e53.canonical.x ? false : this.canonical.y < e53.canonical.y;
  }
  wrapped() {
    return new e52(this.overscaledZ, 0, this.canonical.z, this.canonical.x, this.canonical.y);
  }
  unwrapTo(t2) {
    return new e52(this.overscaledZ, t2, this.canonical.z, this.canonical.x, this.canonical.y);
  }
  overscaleFactor() {
    return 2 ** (this.overscaledZ - this.canonical.z);
  }
  toUnwrapped() {
    return new PS(this.wrap, this.canonical);
  }
  toString() {
    return `${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`;
  }
  getTilePoint(e53) {
    return this.canonical.getTilePoint(new bd(e53.x - this.wrap, e53.y));
  }
  normalizeCoordinates(t2, n2, r2 = v) {
    if (t2 >= 0 && t2 < r2 && n2 >= 0 && n2 < r2) return { tileID: this, x: t2, y: n2 };
    let i2 = Math.floor(t2 / r2), a2 = Math.floor(n2 / r2), o2 = t2 - i2 * r2, s2 = n2 - a2 * r2, c2 = this.canonical.z, l2 = 1 << c2, u2 = this.canonical.y + a2;
    if (u2 < 0 || u2 >= l2) return null;
    let d2 = this.canonical.x + i2, f2 = this.wrap;
    return d2 < 0 ? (f2 -= Math.ceil(-d2 / l2), d2 = (d2 % l2 + l2) % l2) : d2 >= l2 && (f2 += Math.floor(d2 / l2), d2 %= l2), { tileID: new e52(this.overscaledZ, f2, c2, d2, u2), x: o2, y: s2 };
  }
};
function IS(e53, t2, n2, r2, i2) {
  e53 *= 2, e53 < 0 && (e53 = e53 * -1 - 1);
  let a2 = 1 << n2;
  return (a2 * a2 * e53 + a2 * i2 + r2).toString(36) + n2.toString(36) + t2.toString(36);
}
function LS(e53, t2, n2, r2) {
  let i2 = 2 ** n2, a2 = r2.extentAtZoom0 / i2, [o2, s2] = r2.origin, c2 = s2 - r2.extentAtZoom0, l2 = i2 - t2 - 1;
  return `${o2 + e53 * a2},${c2 + l2 * a2},${o2 + (e53 + 1) * a2},${c2 + (l2 + 1) * a2}`;
}
function RS(e53, t2, n2) {
  let r2 = ``;
  for (let i2 = e53; i2 > 0; i2--) {
    let e54 = 1 << i2 - 1;
    r2 += (t2 & e54 ? 1 : 0) + (n2 & e54 ? 2 : 0);
  }
  return r2;
}
G(`CanonicalTileID`, NS), G(`OverscaledTileID`, FS, { omit: [`terrainRttPosMatrix32f`] });
var zS = class {
  constructor(e53) {
    this.tileID = new FS(e53.tileID.overscaledZ, e53.tileID.wrap, e53.tileID.canonical.z, e53.tileID.canonical.x, e53.tileID.canonical.y), this.uid = e53.uid, this.zoom = e53.zoom, this.pixelRatio = e53.pixelRatio, this.tileSize = e53.tileSize, this.source = e53.source, this.overscaling = this.tileID.overscaleFactor(), this.showCollisionBoxes = e53.showCollisionBoxes, this.collectResourceTiming = !!e53.collectResourceTiming, this.returnDependencies = !!e53.returnDependencies, this.promoteId = e53.promoteId, this.inFlightDependencies = [];
  }
  async parse(e53, t2, n2, r2, i2) {
    this.data = e53, this.collisionBoxArray = new gs();
    let a2 = new $_(Object.keys(e53.layers).sort()), o2 = new ES(this.tileID, this.promoteId);
    o2.bucketLayerIDs = [];
    let s2 = {}, c2 = { featureIndex: o2, iconDependencies: {}, patternDependencies: {}, glyphDependencies: {}, dashDependencies: {}, availableImages: n2, subdivisionGranularity: i2 }, l2 = t2.familiesBySource[this.source];
    for (let t3 in l2) {
      let r3 = e53.layers[t3];
      if (!r3) continue;
      r3.version === 1 && j(`Vector tile source "${this.source}" layer "${t3}" does not use vector tile spec v2 and therefore may have some rendering errors.`);
      let i3 = a2.encode(t3), u3 = [];
      for (let e54 = 0; e54 < r3.length; e54++) {
        let n3 = r3.feature(e54), a3 = o2.getId(n3, t3);
        u3.push({ feature: n3, id: a3, index: e54, sourceLayerIndex: i3 });
      }
      for (let e54 of l2[t3]) {
        let t4 = e54[0];
        t4.source !== this.source && j(`layer.source = ${t4.source} does not equal this.source = ${this.source}`), !t4.isHidden(this.zoom, true) && (BS(e54, this.zoom, n2), (s2[t4.id] = t4.createBucket({ index: o2.bucketLayerIDs.length, layers: e54, zoom: this.zoom, pixelRatio: this.pixelRatio, overscaling: this.overscaling, collisionBoxArray: this.collisionBoxArray, sourceLayerIndex: i3, sourceID: this.source })).populate(u3, c2, this.tileID.canonical), o2.bucketLayerIDs.push(e54.map((e55) => e55.id)));
      }
    }
    let u2 = E(c2.glyphDependencies, (e54) => E(e54, (e55) => Object.keys(e55)));
    for (let e54 of this.inFlightDependencies) e54?.abort();
    this.inFlightDependencies = [];
    let d2 = Promise.resolve({});
    if (Object.keys(u2).length) {
      let e54 = new AbortController();
      this.inFlightDependencies.push(e54), d2 = r2.sendAsync({ type: `GG`, data: { stacks: u2, source: this.source, tileID: this.tileID, type: `glyphs` } }, e54);
    }
    let f2 = Object.keys(c2.iconDependencies), p2 = Promise.resolve({});
    if (f2.length) {
      let e54 = new AbortController();
      this.inFlightDependencies.push(e54), p2 = r2.sendAsync({ type: `GI`, data: { icons: f2, source: this.source, tileID: this.tileID, type: `icons` } }, e54);
    }
    let m2 = Object.keys(c2.patternDependencies), h2 = Promise.resolve({});
    if (m2.length) {
      let e54 = new AbortController();
      this.inFlightDependencies.push(e54), h2 = r2.sendAsync({ type: `GI`, data: { icons: m2, source: this.source, tileID: this.tileID, type: `patterns` } }, e54);
    }
    let g2 = c2.dashDependencies, _2 = Promise.resolve({});
    if (Object.keys(g2).length) {
      let e54 = new AbortController();
      this.inFlightDependencies.push(e54), _2 = r2.sendAsync({ type: `GDA`, data: { dashes: g2 } }, e54);
    }
    let [v2, y2, b2, x2] = await Promise.all([d2, p2, h2, _2]), S2 = new jS(v2), C2 = new Hh(y2, b2);
    for (let e54 in s2) {
      let t3 = s2[e54];
      t3.hasDependencies && (BS(t3.layers, this.zoom, n2), t3.addFeatures({ options: c2, canonical: this.tileID.canonical, glyphMap: v2, glyphPositions: S2.positions, iconMap: y2, iconPositions: C2.iconPositions, patternMap: b2, patternPositions: C2.patternPositions, dashPositions: x2, showCollisionBoxes: this.showCollisionBoxes }));
    }
    return { buckets: Object.values(s2).filter((e54) => !e54.isEmpty()), featureIndex: o2, collisionBoxArray: this.collisionBoxArray, glyphAtlasImage: S2.image, imageAtlas: C2, dashPositions: x2, glyphMap: this.returnDependencies ? v2 : null, iconMap: this.returnDependencies ? y2 : null, glyphPositions: this.returnDependencies ? S2.positions : null };
  }
};
function BS(e53, t2, n2) {
  let r2 = new K(t2);
  for (let t3 of e53) t3.recalculate(r2, n2);
}
var VS = class {
  constructor() {
    this.loading = {}, this.loaded = {}, this.parsing = {};
  }
  startLoading(e53, t2) {
    this.loading[e53] = t2;
  }
  finishLoading(e53) {
    delete this.loading[e53];
  }
  abort(e53) {
    let t2 = this.loading[e53];
    t2?.abort && (t2.abort.abort(), delete this.loading[e53]);
  }
  getParsing(e53) {
    return this.parsing[e53];
  }
  setParsing(e53, t2) {
    this.parsing[e53] = t2;
  }
  removeParsing(e53) {
    delete this.parsing[e53];
  }
  markLoaded(e53, t2) {
    this.loaded[e53] = t2;
  }
  getLoaded(e53) {
    let t2 = this.loaded[e53];
    if (t2) return t2;
  }
  removeLoaded(e53) {
    delete this.loaded[e53];
  }
  clearLoaded() {
    this.loaded = {};
  }
};
var HS = class {
  constructor(e53) {
    this.maxEntries = e53, this.map = /* @__PURE__ */ new Map();
  }
  get(e53) {
    let t2 = this.map.get(e53);
    return t2 !== void 0 && (this.map.delete(e53), this.map.set(e53, t2)), t2;
  }
  set(e53, t2) {
    if (this.map.has(e53)) this.map.delete(e53);
    else if (this.map.size >= this.maxEntries) {
      let e54 = this.map.keys().next().value;
      this.map.delete(e54);
    }
    this.map.set(e53, t2);
  }
  clear() {
    this.map.clear();
  }
};
var US = class {
  constructor(e53) {
    this.start = `${e53}#start`, this.end = `${e53}#end`, this.measure = e53, performance.mark(this.start);
  }
  finish() {
    performance.mark(this.end);
    let e53 = performance.getEntriesByName(this.measure);
    return e53.length === 0 && (performance.measure(this.measure, this.start, this.end), e53 = performance.getEntriesByName(this.measure), performance.clearMarks(this.start), performance.clearMarks(this.end), performance.clearMeasures(this.measure)), e53;
  }
};
var WS = class {
  constructor(e53, t2, n2, r2, i2) {
    this.type = e53, this.properties = n2 || {}, this.extent = i2, this.pointsArray = t2, this.id = r2;
  }
  loadGeometry() {
    return this.pointsArray.map((e53) => e53.map((e54) => new l(e54.x, e54.y)));
  }
};
var GS = class {
  constructor(e53, t2, n2) {
    this.version = 2, this._myFeatures = e53, this.name = t2, this.length = e53.length, this.extent = n2;
  }
  feature(e53) {
    return this._myFeatures[e53];
  }
};
var KS = class {
  constructor() {
    this.layers = {};
  }
  addLayer(e53) {
    this.layers[e53.name] = e53;
  }
};
function qS(e53, t2, n2) {
  let { extent: r2 } = e53, i2 = 2 ** (n2.z - t2.z), a2 = (n2.x - t2.x * i2) * r2, o2 = (n2.y - t2.y * i2) * r2, s2 = [];
  for (let t3 = 0; t3 < e53.length; t3++) {
    let n3 = e53.feature(t3), c2 = n3.loadGeometry();
    for (let e54 of c2) for (let t4 of e54) t4.x = t4.x * i2 - a2, t4.y = t4.y * i2 - o2;
    let l2 = Math.max(128, Math.round(128 * r2 / 4096));
    c2 = Pg(c2, n3.type, -l2, -l2, r2 + l2, r2 + l2), c2.length !== 0 && s2.push(new WS(n3.type, c2, n3.properties, n3.id, r2));
  }
  return new GS(s2, e53.name, r2);
}
var JS = class {
  constructor(e53, t2, n2) {
    this.actor = e53, this.layerIndex = t2, this.availableImages = n2, this.tileState = new VS(), this.overzoomedTileResultCache = new HS(1e3);
  }
  loadVectorTile(e53, t2) {
    try {
      return { vectorTile: e53.encoding === `mlt` ? new TS(t2) : new od(new bh(t2)), rawData: t2 };
    } catch (n2) {
      let r2 = new Uint8Array(t2), i2 = r2[0] === 31 && r2[1] === 139, a2 = `Unable to parse the tile at ${e53.request.url}, `;
      throw a2 += i2 ? `please make sure the data is not gzipped and that you have configured the relevant header in the server` : `got error: ${y(n2).message}`, Error(a2);
    }
  }
  async loadTile(e53) {
    let { uid: t2, overzoomParameters: n2 } = e53;
    n2 && (e53.request = n2.overzoomRequest);
    let r2 = this._startRequestTiming(e53), i2 = new zS(e53);
    this.tileState.startLoading(t2, i2);
    let a2 = new AbortController();
    i2.abort = a2;
    try {
      let o2 = await oo(e53.request, a2), s2 = this.tileState.getLoaded(t2);
      if (e53.etag && e53.etag === o2.etag && s2?.etag === o2.etag) return this.tileState.finishLoading(t2), this._getEtagUnmodifiedResult(o2, r2);
      let c2 = this.loadVectorTile(e53, o2.data);
      if (this.tileState.finishLoading(t2), !c2) return null;
      let { vectorTile: l2, rawData: u2 } = c2;
      n2 && ({ vectorTile: l2, rawData: u2 } = this._getOverzoomTile(e53, l2));
      let d2 = this._getExpiryData(o2), f2 = this._finishRequestTiming(r2);
      i2.vectorTile = l2, i2.etag = o2.etag, this.tileState.markLoaded(t2, i2);
      let p2 = { rawData: u2, cacheControl: d2, resourceTiming: f2 };
      return this.tileState.setParsing(t2, p2), await this._parseWorkerTile(i2, e53);
    } catch (e54) {
      throw this.tileState.finishLoading(t2), this.tileState.markLoaded(t2, i2), e54;
    }
  }
  _getEtagUnmodifiedResult(e53, t2) {
    return w({ etagUnmodified: true }, this._getExpiryData(e53), this._finishRequestTiming(t2));
  }
  async _parseWorkerTile(e53, t2) {
    let n2 = this.tileState.getParsing(e53.uid), r2 = await e53.parse(e53.vectorTile, this.layerIndex, this.availableImages, this.actor, t2.subdivisionGranularity);
    if (n2) {
      let { rawData: i2, cacheControl: a2, resourceTiming: o2 } = n2, s2 = t2.overzoomParameters ? `mvt` : t2.encoding;
      r2 = w({ rawTileData: i2.slice(0), encoding: s2 }, r2, a2, o2), this.tileState.removeParsing(e53.uid);
    } else e53.etag && (r2 = w(r2, { etag: e53.etag }));
    return r2;
  }
  _getExpiryData({ expires: e53, cacheControl: t2, etag: n2 }) {
    let r2 = {};
    return e53 && (r2.expires = e53), t2 && (r2.cacheControl = t2), n2 && (r2.etag = n2), r2;
  }
  _startRequestTiming(e53) {
    if (e53.request?.collectResourceTiming) return new US(e53.request.url);
  }
  _finishRequestTiming(e53) {
    let t2 = e53?.finish();
    return t2 ? { resourceTiming: JSON.parse(JSON.stringify(t2)) } : {};
  }
  _getOverzoomTile(e53, t2) {
    let { tileID: n2, source: r2, overzoomParameters: i2 } = e53, { maxZoomTileID: a2 } = i2, o2 = `${a2.key}_${n2.key}_${e53.request?.url}`, s2 = this.overzoomedTileResultCache.get(o2);
    if (s2) return s2;
    let c2 = new KS(), l2 = this.layerIndex.familiesBySource[r2];
    for (let e54 in l2) {
      let r3 = t2.layers[e54];
      if (!r3) continue;
      let i3 = qS(r3, a2, n2.canonical);
      i3.length > 0 && c2.addLayer(i3);
    }
    let u2 = { vectorTile: c2, rawData: W_(c2).buffer };
    return this.overzoomedTileResultCache.set(o2, u2), u2;
  }
  async reloadTile(e53) {
    let t2 = e53.uid, n2 = this.tileState.getLoaded(t2);
    if (!n2) throw Error(`Should not be trying to reload a tile that was never loaded or has been removed`);
    if (n2.vectorTile) return n2.showCollisionBoxes = e53.showCollisionBoxes, n2.tileID = n2.tileID.unwrapTo(e53.tileID.wrap), await this._parseWorkerTile(n2, e53);
  }
  async abortTile(e53) {
    this.tileState.abort(e53.uid);
  }
  async removeTile(e53) {
    this.tileState.removeLoaded(e53.uid);
  }
};
var YS = class {
  constructor() {
    this.loaded = {};
  }
  async loadTile(e53) {
    let { uid: t2, encoding: n2, rawImageData: r2, redFactor: i2, greenFactor: a2, blueFactor: o2, baseShift: s2 } = e53, c2 = r2.width + 4, l2 = r2.height + 4, u2 = new Dl(t2, ne(r2) ? new ml({ width: c2, height: l2 }, await ce(r2, -2, -2, c2, l2)) : r2, n2, i2, a2, o2, s2);
    return this.loaded ||= {}, this.loaded[t2] = u2, u2;
  }
  removeTile(e53) {
    let t2 = this.loaded, n2 = e53.uid;
    t2?.[n2] && delete t2[n2];
  }
};
var XS = class {
  constructor(e53) {
    this.wraps = false, this._crs = e53, this._originX = e53.tileMatrixSet.origin[0], this._originY = e53.tileMatrixSet.origin[1], this._extent = e53.tileMatrixSet.extentAtZoom0;
  }
  get name() {
    return this._crs.name;
  }
  get tileMatrixSet() {
    return this._crs.tileMatrixSet;
  }
  worldFromLngLat(e53, t2, n2) {
    let [r2, i2] = this._crs.projection.forward([e53, t2]);
    return new bd((r2 - this._originX) / this._extent, (this._originY - i2) / this._extent, n2 === void 0 ? 0 : n2 / this._extent);
  }
  lngLatFromWorld(e53, t2) {
    let n2 = S(e53, 0, 1), r2 = S(t2, 0, 1), i2 = this._inverse(e53, t2) ?? this._inverse(n2, r2) ?? this._inverseTowardCenter(n2, r2) ?? this._finiteInverse(n2, r2);
    if (!i2) throw Error(`The inverse of the projection "${this._crs.name}" has no answer inside its tile matrix set.`);
    return new cd(i2[0], S(i2[1], -90, 90));
  }
  hasLngLat(e53, t2) {
    return this._inverse(e53, t2) !== null;
  }
  _inverse(e53, t2) {
    let n2 = this._finiteInverse(e53, t2);
    if (!n2) return null;
    let r2 = this._originX + e53 * this._extent, i2 = this._originY - t2 * this._extent, [a2, o2] = this._crs.projection.forward(n2);
    return Math.hypot(a2 - r2, o2 - i2) <= 1e-3 * this._extent ? n2 : null;
  }
  _finiteInverse(e53, t2) {
    let n2;
    try {
      n2 = this._crs.projection.inverse([this._originX + e53 * this._extent, this._originY - t2 * this._extent]);
    } catch {
      return null;
    }
    return n2 && Number.isFinite(n2[0]) && Number.isFinite(n2[1]) ? n2 : null;
  }
  _inverseTowardCenter(e53, t2) {
    let n2 = 0, r2 = 1;
    for (let i2 = 0; i2 < 30; i2++) {
      let i3 = (n2 + r2) / 2;
      this._inverse(0.5 + (e53 - 0.5) * i3, 0.5 + (t2 - 0.5) * i3) ? n2 = i3 : r2 = i3;
    }
    return this._inverse(0.5 + (e53 - 0.5) * n2, 0.5 + (t2 - 0.5) * n2);
  }
  metersPerWorldUnit(e53, t2) {
    return this._extent;
  }
  worldZFromAltitude(e53, t2) {
    return e53 / this._extent;
  }
  get latitudeRange() {
    return this._latitudeRange ??= [this._findLatitudeLimit(-90), this._findLatitudeLimit(90)], this._latitudeRange;
  }
  _findLatitudeLimit(e53) {
    let t2 = this.lngLatFromWorld(0.5, 0.5), n2 = 10 * this._meridianStretch(t2.lng, t2.lat);
    if (!(n2 > 0)) return e53;
    let r2 = Math.sign(e53 - t2.lat);
    for (let i2 = t2.lat; Math.abs(e53 - i2) > 1; i2 += r2) if (!(this._meridianStretch(t2.lng, i2 + r2) <= n2)) return i2;
    return e53;
  }
  _meridianStretch(e53, t2) {
    let [n2, r2] = this._crs.projection.forward([e53, t2]), [i2, a2] = this._crs.projection.forward([e53, t2 >= 0 ? t2 - 0.01 : t2 + 0.01]);
    return Math.hypot(i2 - n2, a2 - r2);
  }
};
var ZS = class {
  forward(e53) {
    return [e53[0], e53[1]];
  }
  inverse(e53) {
    return [e53[0], e53[1]];
  }
};
var QS = new class {
  constructor() {
    this.name = `identity`, this.projection = new ZS(), this.tileMatrixSet = { origin: [-90, 90], extentAtZoom0: 180 };
  }
}();
var $S = null;
var eC = /* @__PURE__ */ new Map();
function tC(e53) {
  $S = e53, eC.clear();
}
function nC(e53) {
  if (!e53.definition) return new XS(QS);
  if (!$S) j("GeoJSON sources are drawn in the wrong place: no projection handler is set in the workers, see `setProjectionHandler` in the custom CRS guide.");
  else return eC.has(e53.definition) || eC.set(e53.definition, $S(e53.definition)), new XS({ name: e53.name, definition: e53.definition, projection: eC.get(e53.definition), tileMatrixSet: e53.tileMatrixSet });
}
function rC(e53, t2) {
  let n2 = ([e54, n3, ...r3]) => {
    let { x: i3, y: a3 } = t2.worldFromLngLat(e54, n3);
    return [i3, a3, ...r3];
  }, [r2, i2] = t2.latitudeRange;
  if (r2 === -90 && i2 === 90) return oC(e53, n2);
  let a2 = (e54) => e54 === r2 && r2 > -90 || e54 === i2 && i2 < 90;
  return oC(e53, n2, (e54) => {
    let t3 = false, o2 = e54.map((e55) => e55[1] >= r2 && e55[1] <= i2 ? n2(e55) : (t3 = true, e55));
    if (!t3) return o2;
    let s2 = [], c2 = 0, l2 = NaN;
    for (let t4 = 0; t4 < e54.length; t4++) {
      let [u2, d2, ...f2] = e54[t4], p2 = S(d2, r2, i2);
      if (p2 === l2 && a2(p2)) {
        let e55 = Math.ceil(Math.abs(u2 - c2) / 10);
        for (let t5 = 1; t5 < e55; t5++) s2.push(n2([c2 + (u2 - c2) * t5 / e55, p2]));
      }
      s2.push(p2 === d2 ? o2[t4] : n2([u2, p2, ...f2])), c2 = u2, l2 = p2;
    }
    return s2;
  });
}
function iC(e53, t2) {
  return oC(e53, ([e54, n2, ...r2]) => {
    let i2 = t2.lngLatFromWorld(e54, n2);
    return [i2.lng, i2.lat, ...r2];
  });
}
function aC(e53, t2) {
  let n2 = { ...e53 };
  return e53.add && (n2.add = e53.add.map((e54) => rC(e54, t2))), e53.update && (n2.update = e53.update.map((e54) => e54.newGeometry ? { ...e54, newGeometry: rC(e54.newGeometry, t2) } : e54)), n2;
}
function oC(e53, t2, n2 = (e54) => e54.map(t2)) {
  if (!e53 || typeof e53 != `object`) return e53;
  switch (e53.type) {
    case `FeatureCollection`:
      return { ...e53, features: e53.features.map((e54) => oC(e54, t2, n2)) };
    case `Feature`:
      return { ...e53, geometry: e53.geometry ? oC(e53.geometry, t2, n2) : e53.geometry };
    case `GeometryCollection`:
      return { ...e53, geometries: e53.geometries.map((e54) => oC(e54, t2, n2)) };
    case `Point`:
      return { ...e53, coordinates: t2(e53.coordinates) };
    case `MultiPoint`:
      return { ...e53, coordinates: e53.coordinates.map(t2) };
    case `LineString`:
      return { ...e53, coordinates: n2(e53.coordinates) };
    case `MultiLineString`:
    case `Polygon`:
      return { ...e53, coordinates: e53.coordinates.map((e54) => n2(e54)) };
    case `MultiPolygon`:
      return { ...e53, coordinates: e53.coordinates.map((e54) => e54.map((e55) => n2(e55))) };
    default:
      return e53;
  }
}
var sC = class {
  constructor(e53, t2, n2, r2 = cC) {
    this.actor = e53, this.layerIndex = t2, this.availableImages = n2, this.tileState = new VS(), this._createGeoJSONIndex = r2;
  }
  loadVectorTile(e53) {
    if (!this._geoJSONIndex) throw Error(`Unable to parse the data into a cluster or geojson`);
    let { z: t2, x: n2, y: r2 } = e53.tileID.canonical, i2 = this._geoJSONIndex.getTile(t2, n2, r2);
    if (!i2) return null;
    let a2 = new U_(i2.features, { version: 2, extent: v });
    return { vectorTile: a2, rawData: W_(a2, `__$json__:`).buffer };
  }
  async loadTile(e53) {
    let { uid: t2 } = e53, n2 = new zS(e53);
    n2.abort = new AbortController();
    try {
      let r2 = this.loadVectorTile(e53);
      if (!r2) return null;
      let { vectorTile: i2, rawData: a2 } = r2;
      n2.vectorTile = i2, this.tileState.markLoaded(t2, n2);
      let o2 = { rawData: a2 };
      return this.tileState.setParsing(t2, o2), await this._parseWorkerTile(n2, e53);
    } catch (e54) {
      throw this.tileState.markLoaded(t2, n2), e54;
    }
  }
  async _parseWorkerTile(e53, t2) {
    let n2 = this.tileState.getParsing(e53.uid), r2 = await e53.parse(e53.vectorTile, this.layerIndex, this.availableImages, this.actor, t2.subdivisionGranularity);
    if (n2) {
      let { rawData: t3 } = n2;
      r2 = w({ rawTileData: t3.slice(0), encoding: `mvt` }, r2), this.tileState.removeParsing(e53.uid);
    }
    return r2;
  }
  async abortTile(e53) {
    this.tileState.abort(e53.uid);
  }
  async removeTile(e53) {
    this.tileState.removeLoaded(e53.uid);
  }
  async loadData(e53) {
    this._pendingRequest?.abort();
    let t2 = this._startRequestTiming(e53);
    this._pendingRequest = new AbortController();
    try {
      await this.loadAndProcessGeoJSON(e53, this._pendingRequest), delete this._pendingRequest, this.tileState.clearLoaded();
      let n2 = {};
      return e53.request && (n2.data = e53.data), this._finishRequestTiming(t2, e53, n2), n2;
    } catch (e54) {
      if (delete this._pendingRequest, !_e(e54)) throw e54;
      return { abandoned: true };
    }
  }
  _startRequestTiming(e53) {
    if (e53.request?.collectResourceTiming) return new US(e53.request.url);
  }
  _finishRequestTiming(e53, t2, n2) {
    let r2 = e53?.finish();
    r2 && (n2.resourceTiming = { [t2.source]: JSON.parse(JSON.stringify(r2)) });
  }
  async reloadTile(e53) {
    let t2 = e53.uid, n2 = this.tileState.getLoaded(t2);
    if (!n2) return await this.loadTile(e53);
    if (n2.vectorTile) return n2.showCollisionBoxes = e53.showCollisionBoxes, n2.tileID = n2.tileID.unwrapTo(e53.tileID.wrap), await this._parseWorkerTile(n2, e53);
  }
  async loadAndProcessGeoJSON(e53, t2) {
    if (e53.request && (e53.data = (await ao(e53.request, t2)).data), this._crsHelper = e53.crs ? nC(e53.crs) : void 0, e53.data) {
      e53.data = this._filterGeoJSON(e53.data, e53.filter, e53.source);
      let t3 = this._crsHelper ? rC(e53.data, this._crsHelper) : e53.data;
      this._geoJSONIndex = this._createGeoJSONIndex(t3, e53, this._crsHelper !== void 0);
    } else {
      if (e53.dataDiff) {
        this._geoJSONIndex ??= this._createGeoJSONIndex({ type: `FeatureCollection`, features: [] }, e53, this._crsHelper !== void 0);
        let t3 = this._crsHelper ? aC(e53.dataDiff, this._crsHelper) : e53.dataDiff;
        this._geoJSONIndex.updateData(t3, this._getFilterPredicate(e53.filter, e53.source));
      }
      if (e53.updateCluster && this._geoJSONIndex.updateClusterOptions(e53.geojsonVtOptions.cluster, lC(e53)), this._geoJSONIndex == null) throw Error(`Input data given to '${e53.source}' is not a valid GeoJSON object.`);
    }
  }
  _filterGeoJSON(e53, t2, n2) {
    if (e53.type !== `FeatureCollection`) return e53;
    let r2 = this._getFilterPredicate(t2, n2);
    return r2 ? { type: `FeatureCollection`, features: e53.features.filter((e54) => r2(e54)) } : e53;
  }
  _getFilterPredicate(e53, t2) {
    if (typeof e53 != `boolean` && !e53?.length) return;
    let n2 = mi(e53, `sources.${t2}.filter`, { type: `boolean`, "property-type": `data-driven`, overridable: false, transition: false });
    if (n2.result === `error`) throw Error(n2.value.map((e54) => `${e54.key}: ${e54.message}`).join(`, `));
    return (e54) => n2.value.evaluate({ zoom: 0 }, e54);
  }
  async removeSource(e53) {
    this._pendingRequest?.abort();
  }
  getClusterExpansionZoom(e53) {
    return this._geoJSONIndex.getClusterExpansionZoom(e53.clusterId);
  }
  getClusterChildren(e53) {
    return this._toLngLat(this._geoJSONIndex.getClusterChildren(e53.clusterId));
  }
  getClusterLeaves(e53) {
    return this._toLngLat(this._geoJSONIndex.getClusterLeaves(e53.clusterId, e53.limit, e53.offset));
  }
  _toLngLat(e53) {
    return this._crsHelper ? e53.map((e54) => iC(e54, this._crsHelper)) : e53;
  }
};
function cC(e53, t2, n2) {
  return new kp(e53, w(t2.geojsonVtOptions || {}, { updateable: true, clusterOptions: lC(t2), coordinates: n2 ? `unitSquare` : `lngLat`, wrap: !n2 }));
}
function lC({ geojsonVtOptions: e53, clusterProperties: t2, source: n2 }) {
  if (!t2 || !e53.clusterOptions) return e53.clusterOptions;
  let r2 = {}, i2 = {}, a2 = { accumulated: null, zoom: 0 }, o2 = { properties: null }, s2 = Object.keys(t2);
  for (let e54 of s2) {
    let [a3, o3] = t2[e54], s3 = mi(o3, `sources.${n2}.clusterProperties.${e54}[1]`), c2 = mi(typeof a3 == `string` ? [a3, [`accumulated`], [`get`, e54]] : a3, `sources.${n2}.clusterProperties.${e54}[0]`);
    r2[e54] = s3.value, i2[e54] = c2.value;
  }
  return e53.clusterOptions.map = (e54) => {
    o2.properties = e54;
    let t3 = {};
    for (let e55 of s2) t3[e55] = r2[e55].evaluate(a2, o2);
    return t3;
  }, e53.clusterOptions.reduce = (e54, t3) => {
    o2.properties = t3;
    for (let t4 of s2) a2.accumulated = e54[t4], e54[t4] = i2[t4].evaluate(a2, o2);
  }, e53.clusterOptions;
}
async function uC(e53) {
  if (e53.endsWith(`.mjs`)) {
    await import(
      /* @vite-ignore */
      e53
    );
    return;
  }
  let t2 = await fetch(e53, { credentials: `same-origin` });
  if (!t2.ok) throw Error(`Failed to load ${e53}: ${t2.status}`);
  let n2 = await t2.text();
  if (/^[ \t]*(import|export)\s/m.test(n2)) {
    let e54 = URL.createObjectURL(new Blob([n2], { type: `text/javascript` }));
    try {
      await import(
        /* @vite-ignore */
        e54
      );
    } finally {
      URL.revokeObjectURL(e54);
    }
  } else globalThis.eval(n2);
}
var dC = class {
  constructor(e53) {
    this.self = e53, this.actor = new _o(e53), this.layerIndexes = {}, this.availableImages = {}, this.workerSources = {}, this.demWorkerSources = {}, this.externalWorkerSourceTypes = {}, this.globalStates = /* @__PURE__ */ new Map(), this.importedScripts = /* @__PURE__ */ new Map(), this.self.registerWorkerSource = (e54, t2) => {
      if (this.externalWorkerSourceTypes[e54]) throw Error(`Worker source with name "${e54}" already registered.`);
      this.externalWorkerSourceTypes[e54] = t2;
    }, this.self.addProtocol = Xa, this.self.removeProtocol = Za, this.self.registerRTLTextPlugin = (e54) => {
      Zp.setMethods(e54);
    }, this.self.makeRequest = io, this.self.setProjectionHandler = tC, this.actor.registerMessageHandler(`LDT`, (e54, t2) => this._getDEMWorkerSource(e54, t2.source).loadTile(t2)), this.actor.registerMessageHandler(`RDT`, async (e54, t2) => {
      this._getDEMWorkerSource(e54, t2.source).removeTile(t2);
    }), this.actor.registerMessageHandler(`GCEZ`, async (e54, t2) => this._getWorkerSource(e54, t2.type, t2.source).getClusterExpansionZoom(t2)), this.actor.registerMessageHandler(`GCC`, async (e54, t2) => this._getWorkerSource(e54, t2.type, t2.source).getClusterChildren(t2)), this.actor.registerMessageHandler(`GCL`, async (e54, t2) => this._getWorkerSource(e54, t2.type, t2.source).getClusterLeaves(t2)), this.actor.registerMessageHandler(`LD`, (e54, t2) => this._getWorkerSource(e54, t2.type, t2.source).loadData(t2)), this.actor.registerMessageHandler(`LT`, (e54, t2) => this._getWorkerSource(e54, t2.type, t2.source).loadTile(t2)), this.actor.registerMessageHandler(`RT`, (e54, t2) => this._getWorkerSource(e54, t2.type, t2.source).reloadTile(t2)), this.actor.registerMessageHandler(`AT`, (e54, t2) => this._getWorkerSource(e54, t2.type, t2.source).abortTile(t2)), this.actor.registerMessageHandler(`RMT`, (e54, t2) => this._getWorkerSource(e54, t2.type, t2.source).removeTile(t2)), this.actor.registerMessageHandler(`RS`, async (e54, t2) => {
      if (!this.workerSources[e54]?.[t2.type]?.[t2.source]) return;
      let n2 = this.workerSources[e54][t2.type][t2.source];
      delete this.workerSources[e54][t2.type][t2.source], n2.removeSource !== void 0 && n2.removeSource(t2);
    }), this.actor.registerMessageHandler(`RM`, async (e54) => {
      delete this.layerIndexes[e54], delete this.availableImages[e54], delete this.workerSources[e54], delete this.demWorkerSources[e54], this.globalStates.delete(e54);
    }), this.actor.registerMessageHandler(`SR`, async (e54, t2) => {
      this.referrer = t2;
    }), this.actor.registerMessageHandler(`PI`, async () => {
    }), this.actor.registerMessageHandler(`SRPS`, (e54, t2) => this._syncRTLPluginState(e54, t2)), this.actor.registerMessageHandler(`IS`, (e54, t2) => this._importScript(t2)), this.actor.registerMessageHandler(`SI`, (e54, t2) => this._setImages(e54, t2)), this.actor.registerMessageHandler(`UL`, async (e54, t2) => {
      this._getLayerIndex(e54).update(t2.layers, t2.removedIds, this._getGlobalState(e54));
    }), this.actor.registerMessageHandler(`UGS`, async (e54, t2) => {
      let n2 = this._getGlobalState(e54);
      for (let e55 in t2) n2[e55] = t2[e55];
    }), this.actor.registerMessageHandler(`SL`, async (e54, t2) => {
      this._getLayerIndex(e54).replace(t2, this._getGlobalState(e54));
    });
  }
  async _importScript(e53) {
    let t2 = this.importedScripts.get(e53);
    if (t2) return t2;
    let n2 = uC(e53);
    this.importedScripts.set(e53, n2);
    try {
      await n2;
    } catch (t3) {
      throw this.importedScripts.delete(e53), t3;
    }
  }
  _getGlobalState(e53) {
    let t2 = this.globalStates.get(e53);
    return t2 || (t2 = {}, this.globalStates.set(e53, t2)), t2;
  }
  async _setImages(e53, t2) {
    this.availableImages[e53] = t2;
    for (let n2 in this.workerSources[e53]) {
      let r2 = this.workerSources[e53][n2];
      for (let e54 in r2) r2[e54].availableImages = t2;
    }
  }
  async _syncRTLPluginState(e53, t2) {
    return await Zp.syncState(t2, (e54) => this._importScript(e54));
  }
  _getAvailableImages(e53) {
    let t2 = this.availableImages[e53];
    return t2 ||= [], t2;
  }
  _getLayerIndex(e53) {
    let t2 = this.layerIndexes[e53];
    return t2 ||= this.layerIndexes[e53] = new AS(), t2;
  }
  _getWorkerSource(e53, t2, n2) {
    if (this.workerSources[e53] ||= {}, this.workerSources[e53][t2] ||= {}, !this.workerSources[e53][t2][n2]) {
      let r2 = { sendAsync: (t3, n3) => (t3.targetMapId = e53, this.actor.sendAsync(t3, n3)) };
      switch (t2) {
        case `vector`:
          this.workerSources[e53][t2][n2] = new JS(r2, this._getLayerIndex(e53), this._getAvailableImages(e53));
          break;
        case `geojson`:
          this.workerSources[e53][t2][n2] = new sC(r2, this._getLayerIndex(e53), this._getAvailableImages(e53));
          break;
        default:
          this.workerSources[e53][t2][n2] = new this.externalWorkerSourceTypes[t2](r2, this._getLayerIndex(e53), this._getAvailableImages(e53));
      }
    }
    return this.workerSources[e53][t2][n2];
  }
  _getDEMWorkerSource(e53, t2) {
    return this.demWorkerSources[e53] ||= {}, this.demWorkerSources[e53][t2] ||= new YS(), this.demWorkerSources[e53][t2];
  }
};
te(self) && (self.worker = new dC(self));
export {
  dC as default
};
/*! Bundled license information:

maplibre-gl/dist/maplibre-gl-worker.mjs:
  (**
  * MapLibre GL JS
  * @license 3-Clause BSD. Full text of license: https://github.com/maplibre/maplibre-gl-js/blob/v6.16.0/LICENSE.txt
  *)
*/
