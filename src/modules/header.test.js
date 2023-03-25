/**
 * @jest-environment jsdom
 */

describe('countItem', () => {
  it('should count 2', () => {
    const countItem = ['Under the Dome', 'Bitten'];
    const result = countItem.length;
    expect(result).toBe(2);
  });

  it('should count 1', () => {
    const countItem = ['Under the Dome'];
    const result = countItem.length;
    expect(result).toBe(1);
  });

  it('should count 3', () => {
    const countItem = ['True Detective', 'Under the Dome', 'Bitten'];
    const result = countItem.length;
    expect(result).toBe(3);
  });
});