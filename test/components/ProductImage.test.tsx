import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should display the component correctly with the custom image', () => {
    const wrapper = renderer.create(<ProductImage img="https://hellow.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
