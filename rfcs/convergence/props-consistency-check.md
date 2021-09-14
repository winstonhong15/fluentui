# Consistency Check

The following components and their props were reviewed as of 9/7/2021 for consistency.

Accordian, AccordianHeader, AccordianItem, AccordianPanel
Avatar
Badge, CounterBadge, PresenceBadge,
Button, CompoundButton, MenuButton, ToggleButton,
Divider,
Image,
Label,
Link,Menu, MenuDivider, MenuGroup, MenuGroupHeader,MenuItem, MenuItemCheckbox, MenuItemRadio, MenuList, MenuPopover, MenuTrigger
Popover, PopoverSurface, PopoverTrigger
Portal

## Nit: Explicit component type declaration

> Some components declare their type explicity, others do not.

```tsx
export const Accordion: React.FunctionComponent<AccordionProps & React.RefAttributes<HTMLElement>> = React.forwardRef<
  HTMLElement,
  AccordionProps
>((props, ref) =>
```

```tsx
export const Avatar = React.forwardRef((props: AvatarProps, ref: React.Ref<HTMLElement>) =>
```

## Props declared as interfaces vs types

> Some props are defined as interfaces and extended. Others are defined as types and intersected. This isn't always consistent within the same component.

Note: I won't list out every component here. We can scrub once we decide the right approach.

```ts
export interface AccordionProps extends ComponentProps<AccordionSlots>, Partial<AccordionCommons>

export type AccordionSlots
export interface AccordionCommons
```

```ts
export interface AccordionHeaderProps extends ComponentProps<AccordionHeaderSlots>, Partial<AccordionHeaderCommons>

export type AccordionHeaderSlots
export interface AccordionHeaderCommons
```

## Props extending ComponentProps vs. ComponentPropsCompat

> Some props are still extended from ComponentPropsCompat

AvatarProps, BadgeProps, ButtonProps, ...

> Some props have properties using ShorthandPropsCompat

AvatarProps (badge, image, label, icon), BadgeProps (icon), ButtonProps (icon), ...

## Slots and HTML attributes

> Only Accordian and Menu components use ComponentProps<> with slots currently.

AccordionSlots

```ts
root: ObjectShorthandProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
```

AccordionHeaderSlots

```ts
root: ObjectShorthandProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  button: ARIAButtonShorthandProps;
  expandIcon: AccordionHeaderExpandIconProps;
  icon?: ObjectShorthandProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  children: ObjectShorthandProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
```

AccordianItemSlots, AccordianPanelSlots

```ts
root: ObjectShorthandProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
```

MenuSlots

```ts
(empty type)
```

MenuDividerSlots, MenuGroupSlots, MenuGroupHeaderSlots, MenuListSlots, MenuPopoverSlots

```ts
root: ObjectShorthandProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
```

MenuItemSlots

```ts
root: ObjectShorthandProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
icon?: React.HTMLAttributes<HTMLElement>;
checkmark?: React.HTMLAttributes<HTMLElement>;
submenuIndicator?: React.HTMLAttributes<HTMLElement>;
content: React.HTMLAttributes<HTMLElement>;
secondaryContent?: React.HTMLAttributes<HTMLElement>;
```

## Compat and HTML attributes

> The components not yet using slots extend ComponentPropsCompat and provide HTML attributes by extending the associated React HTML attribute types (e.g `React.HTMLAttributes<HTMLElement>`).
> PortalProps and PopoverTriggerProps do not extend any HTML attributes, but provide children as a property directly in their types.

AvatarProps,BadgeProps,DividerProps, TooltipProps

```ts
extends ComponentPropsCompat, React.HTMLAttributes<HTMLElement>
```

ButtonProps

```ts
ButtonProps = ComponentPropsCompat & React.ButtonHTMLAttributes<HTMLElement> & {...}
```

MenuButtonProps/MenuTriggerChildProps

```ts
MenuButtonProps = Omit<ButtonProps, 'iconPosition'>  & Partial<MenuTriggerChildProps> & {}

MenuTriggerChildProps extends Required<Pick<React.HTMLAttributes<HTMLElement>,
      | 'onClick'
      | 'onMouseEnter'
      | 'onMouseLeave'
      | 'onContextMenu'
      | 'onKeyDown'
      | 'aria-haspopup'
      | 'aria-expanded'
      | 'id'
    >
```

ImageProps

```ts
extends ComponentPropsCompat,
React.ImgHTMLAttributes<HTMLImageElement>
```

LabelProps

```ts
extends ComponentPropsCompat,
React.LabelHTMLAttributes<HTMLLabelElement>
```

LinkProps

```ts
LinkProps = ComponentPropsCompat &
  React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement> &
  Omit<React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLElement>, 'type'> & {...}
```

PopoverProps

```ts
// PortalProps is an interface with children and mountNode.
// It does not provide HTML attributes
extends Pick<PortalProps, 'mountNode'>
```

PopoverSurfaceProps

```ts
extends ComponentPropsCompat,
React.HTMLAttributes<HTMLElement>
```

## Property overrides of native properties

> Several components declare properties that are also declared by extending from the DOM types (e.g. React.HtmlAttributes<T>).

checked, children, color, defaultChecked, disabled, href, image, name, onClick, open, ref, target, type, value

> Several components use declar properties that are also HTML element names.

button, label strong

# Layout properties

> Positioning is defined differently based on component layout specifics.
> Some props define a type for their enums like start | end, other's don't.
> Some props leverage Popper positioning.

AccordionHeaderCommons

```ts
// AccordionHeaderExpandIconPosition = 'start' | 'end'
expandIconPosition: AccordionHeaderExpandIconPosition;
inline: boolean;
```

BadgeProps

```ts
iconPosition: 'before' | 'after';
```

ButtonProps

```ts
iconPosition: 'before' | 'after';
```

DividerProps

```ts
alignContent: 'start' | 'end' | 'center';
```

ImageProps

```ts
fit: 'none' | 'center' | 'contain' | 'cover';
```

LinkProps

```ts
inline: boolean;
```

MenuProps, PopoverProps, TooltipProps

```ts
// PositioningShorthand = PositioningProps | PositioningShorthandValue
// PositioningShorthandValue = 'above'  | 'above-start'  | 'above-end'  | below'  | 'below-start'  | 'below-end'  | 'before'  | 'before-top'  | before-bottom'  | 'after'  | 'after-top'  | 'after-bottom'
positioning: PositioningShorthand;
```

## Size properties

> Some components use different sets of semantic sizes. Avatar uses a set of numbers.
> The property name for filling available space is sometimes block and sometimes fluid. The fit property value of cover could also be considered filling available space.

AccordionHeaderCommons

```ts
// AccordianHeaderSize = 'small' | 'medium' | 'large' | 'extra-large'
size?: AccordionHeaderSize;
```

AvatarProps

```ts
// AvatarSizeValue = 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128
size: AvatarSizeValue;
```

BadgeProps

```ts
// BadgeSize = 'smallest' | 'smaller' | 'small' | 'medium' | 'large' | 'larger' | 'largest'

size: BadgeSize;
showZero: boolean;
```

CounterBadgeProps

```ts
showZero: boolean;
```

ButtonProps

```ts
block: boolean;
size: 'small' | 'medium' | 'large';
```

ImageProps

```ts
fit: 'none' | 'center' | 'contain' | 'cover';
fluid: boolean;
```

LabelProps

```ts
size: 'small' | 'medium' | 'large';
```

PopoverProps

```ts
//PopoverSize = 'small' | 'medium' | 'large'
size: PopoverSize;
```

## Appearance properties

> Some components have mutually exclusive booleans and others use discriminated unions.
> Some components define a color property that are a set of colors, others are a set semantic names.
> Some naming is inconsistent (e.g. noArrow, pointing)

**Recommendations**

- Use a single property with discriminated unions when appearance configuration is mutually exclusive.
- Prefer using unions inline.
  - If a union set of values is used for more than one property, then extract to a type defintion.
- Prefer prefixing properties with the target when it isn't targeting the component top-level (e.g. borderAppearance, backgroundShape).
  - Corollary to this is to avoid repeating the component name when targeting top-level (i.e. prefer shape over badgeShape)
  - Consider a prefix if the property name would conflict with a native property name.
  - Prefer using a name that matches what the part is called in the design breakdown.
- Prefer to use an optional property with a single string over a boolean for appearance (e.g. appearance?: 'brand' over brand?: boolean).
  - This provides extensibility in the future and avoids confusion of appearance and behavioral properties.
- If a component's appearance for a given property union value is similar to other components, prefer to use the same value. (e.g. subtle, colorful, glow)
- Prefer making an appearance property optional rather than specifying a 'default' or 'normal' value in the discriminated union.

**Proposed Work Items**

- [ ] Update AvatarProps to rename activeDisplay to activeAppearance
- [ ] Update AvatarProps to rename color to iconColor
- [ ] Update AvatarProps to replace square with shape?: 'square'
- [ ] Update BadgeProps to inline BadgeAppearance, BadgeShape, and BadgeColors union values
- [ ] Update CounterBadgeProps to inline CounterBadgeColors union values
- [ ] Update CounterBadgeProps dot to indicatorAppearance: 'dot'
- [ ] Update ButtonProps to replace primary, outline, subtle, transparent properties with appearance?: 'primary' | 'outline' | 'subtle' | 'transparent'
- [ ] Update ButtonProps to replace circular with shape?: 'circular'
- [ ] Update DividerProps appearance to remove the 'default' value
- [ ] Update DividerProps comments to better describe important vs. appearance: 'strong' or remove important.
- [ ] Rename DividerProps inset to padContent. This helps associate with alignContent.
- [ ] Update ImageProps to replace circular and rounded with appearance?: 'circular' | 'rounded'
- [ ] Update ImageProps to replace bordered with borderShape?: 'square'
- [ ] Update LabelProps to replace strong with contentAppearance?: 'strong'
- [ ] Update LinkProps to replace secondary with appearance?: 'secondary'
- [ ] Update PopoverProps to replace brand, inverted with appearance?: 'brand', 'inverted'
- [ ] Update TooltipProps to replace inverted with appearance?: 'inverted'
- [ ] Update TooltipProps to replace pointing with indicatorAppearance?: 'arrow'

AvatarProps

```ts
activeDisplay: 'ring' | 'shadow' | 'glow' | 'ring-shadow' | 'ring-glow';
// AvatarNamedColor = 'darkRed' | 'cranberry' ...
color: 'neutral' | 'brand' | 'colorful' | AvatarNamedColor;
square: boolean;
```

BadgeProps

```ts
// BadgeAppearance = 'filled' | 'outline' | 'ghost' | 'tint'
appearance: BadgeAppearance;
// BadgeShape = 'rounded' | 'square' | 'circular'
shape: BadgeShape;
// BadgeColors =  | 'brand'  | 'danger'  | 'severe'  | 'warning'  | 'success'  | 'important'  | 'informative'  | 'subtle'
color: BadgeColors;
```

CounterBadgeProps

```ts
dot: boolean;
```

ButtonProps

```ts
circular: boolean;
outline: boolean;
primary: boolean;
subtle: boolean;
transparent: boolean;
```

DividerProps

```ts
appearance: 'default' | 'subtle' | 'brand' | 'strong';
important: boolean;
inset: boolean;
```

ImageProps

```ts
bordered: boolean;
circular: boolean;
rounded: boolean;
```

LabelProps

```ts
strong: boolean;
```

LinkProps

```ts
secondary: boolean;
```

PopoverProps

```ts
brand: boolean;
inverted: boolean;
noArrow: boolean;
```

TooltipProps

```ts
inverted: boolean;
pointing: boolean;
```

## Events and component state

> The PopoverProps onChangeData event has PopoverState as the type of the data. It maybe difficult to maintain consistency between expected event payload and the state used internally to the component to render. The state also includes refs to elements that may constitute and implementation detail and create confusion with slots.