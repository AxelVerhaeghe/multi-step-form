export function formatPrice(
  price: number,
  frequency: 'monthly' | 'yearly',
  isAddon?: boolean
) {
  return `${isAddon ? '+' : ''}$${price}/${
    frequency === 'yearly' ? 'yr' : 'mo'
  }`;
}
