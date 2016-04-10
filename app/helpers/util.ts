export function escapeHTML(str) {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildTag(_, tag, attrs, body) {
  return `<${[tag, ...attrs].join(' ')}>${body}</${tag}>`;
}

function buildTagWithHandler(tag, handler) {
  return function(_, marker, attrs, body) {
    const allAttrs = [handler(marker)].concat(attrs);
    return buildTag(_, tag, allAttrs, body);
  };
}

function getApplyRegExp(marker) {
  return new RegExp(
    `\\[${marker}([A-Z0-9-_,]+)\\s?([^\\[\\]]+?)?\\[(.*?)\\]\\]`, 'mgi'
  );
}

/**
 * [a href="#no-validate"[novalidate]]
 * <a href='#no-validate'>novalidate</a>
 */
export function applyTag(str) {
  const tagRe = /\[([a-zA-Z0-9-_]+)\s?([^\[\]]+?)?\[(.*?)\]\]/g;
  return str.replace(tagRe, buildTag);
}

/**
 * [#no-validate[novalidate]]
 * <a href='#no-validate'>novalidate</a>
 */
export function applyAnchor(str) {
  const anchorRe = getApplyRegExp('#');
  const handler = (marker) => `href="#${marker}"`;

  return str.replace(anchorRe, buildTagWithHandler('a', handler));
}

/**
 * [/NoValidate[novalidate]]
 * <a [routerLink]="['/NoValidate']">novalidate</a>
 */
export function applyRoute(str) {
  const routeRe = getApplyRegExp('\\/');
  const handler = (marker) => `[routerLink]="['${marker}']"`;
  const buildTagFn = buildTagWithHandler('a', handler);

  return str.replace(routeRe, buildTagFn);
}

export function applyTooltip() { }

function addQuotes(str) {
  return `'${str}'`
    .replace('\'\'', '\'')
    .replace(/,/g, '\', \'');
}

export function applyClick(str) {
  const clickRe = getApplyRegExp('&');
  const handler = (marker) => `(click)="handleClick(${addQuotes(marker)})"`;
  const buildTagFn = buildTagWithHandler('a', handler);

  return str.replace(clickRe, buildTagFn);
}

export function omit(str) {
  const anchorRe = /\[[^\]]*?\[(.*?)\]\]/g;
  return str.replace(anchorRe, (_, body) => body);
}

export function compose(...fwdFns) {
  const fns = fwdFns.reverse();
  return (...args) => fns.slice(1)
    .reduce((accum, fn) => fn(accum), fns[0](...args));
}
