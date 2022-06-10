import { useId } from 'react';
import Product from './Product';

const Products = () => {
	const Products = [
		{
			name: 'Whole fresh bread',
			details:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quod iusto .',
			pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScug6oOMTHif-XBK0Alkw2aZ3nsbbSKN3Ggg&usqp=CAU',
			stars: 5,
			price: 1.0,
			id: 0,
		},
		{
			name: 'Fresh suiss milk',
			details: 'Lorem ipsum dolor sit amet consectetur  ab necessitatibus in.',
			pic: 'https://img.packworld.com/files/base/pmmi/all/image/2011/09/pw_6272_web_milch.png?auto=format%2Ccompress&q=70&w=700',
			stars: 2.5,
			price: 1.15,
			id: 1,
		},
		{
			name: 'Butter',
			details: 'Lorem ipsum dolor sit amet  veritatis ab necessitatibus in.',
			pic: 'data:image/jpeg;base64,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',
			stars: 3,
			price: 0.8,
			id: 2,
		},
	];
	return (
		<div className='store_products'>
			<h2 className='store_products_title'>Products</h2>
			<ul className='store_products_list'>
				{Products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};

export default Products;
