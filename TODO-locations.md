# Maps Locations Status
- Head Office & Warehouse map: ✅ Embedded
- After Sales Service map: ✅ Embedded
- Layout: Horizontal desktop, vertical mobile
- Issue: User sees vertical stacking – check viewport width < 1200px for auto-fit grid

**Fix test**: Resize browser or add `min-width: 1200px` for forced horizontal.

Current CSS:
```
.locations-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}
```
Desktop >1200px: 2 columns horizontal.
Narrower: Stacks.

**Next**: Force horizontal?
