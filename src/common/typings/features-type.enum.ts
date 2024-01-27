export enum Features {
  Breakfast = 'Breakfast',
  AirConditioning = 'Air conditioning',
  LaptopFriendlyWorkspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge',
}

export const featuresMaping: Record<string, Features> = {
  'Breakfast': Features.Breakfast,
  'Air conditioning': Features.AirConditioning,
  'Laptop friendly workspace': Features.LaptopFriendlyWorkspace,
  'Baby seat': Features.BabySeat,
  'Washer': Features.Washer,
  'Towels': Features.Towels,
  'Fridge': Features.Fridge,
};
