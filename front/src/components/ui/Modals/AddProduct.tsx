import { useContext, useEffect } from 'react';
import { ModalContext } from '../../../contexts/ModalContext';
import { ProductContext } from '../../../contexts/ProductContext';
import type { ITag } from '../../../@types/index.types';
import Button from '../Buttons/Button';

import type { ModalContextType } from '../../../contexts/ModalContext';

function AddProduct() {
  const { closeModal, stopPropagation } = useContext(
    ModalContext,
  ) as ModalContextType;

  const productContext = useContext(ProductContext);
  const categories = productContext?.categories;
  const tags = productContext?.tags;

  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center bg-black/70 z-20 w-full h-full"
      onClick={() => closeModal('addProduct')}
    >
      <div
        className="max-w-2xl bg-white w-full rounded-lg "
        onClick={stopPropagation}
      >
        <header className="bg-main-low flex items-center rounded-t-lg border-b-2 border-main-medium/40 justify-between py-4 px-6 ">
          <h1 className="text-lg font-bold">Ajouter un produit</h1>
          <img
            className="h-10 cursor-pointer"
            src="/assets/icons/close.svg"
            alt="close button"
            onClick={() => closeModal('addProduct')}
          />
        </header>
        <form className="p-6 flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-main-medium">
              Titre
            </label>
            <input
              className="border-2 rounded-md border-main-medium/40 focus:border-info-medium/40 focus:shadow-md invalid:border-danger-medium pl-2"
              type="text"
              name="title"
              placeholder="Mon super produit"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="url" className="text-main-medium">
              URL de la photo
            </label>
            <input
              className="border-2 rounded-md border-main-medium/40 focus:border-info-medium focus:shadow-md invalid:border-danger-medium pl-2"
              type="text"
              name="url"
              placeholder="https://a0.mouscache.com/im/pictures"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-main-medium">
              Prix (en euros)
            </label>
            <input
              className="border-2 rounded-md border-main-medium/40 focus:border-info-medium focus:shadow-md invalid:border-danger-medium pl-2"
              type="text"
              name="price"
              placeholder="90.99"
            />
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col basis-1/2">
              <label
                htmlFor="category"
                className="text-main-medium text-m-regular"
              >
                Catégorie
              </label>
              <select className="h-7 bg-main-lower text-s-regular text-brand-grey px-3">
                <option selected disabled>
                  Choisissez une catégorie ...
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col basis-1/2">
              <label htmlFor="tag" className="text-main-medium">
                Tag
              </label>
              <select className="h-7 bg-main-lower text-s-regular text-brand-grey px-3">
                <option selected disabled>
                  Choisissez un tag
                </option>
                {tags.map((tag: ITag) => (
                  <option key={tag.id} value={tag.type}>
                    {tag.text}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <Button>Ajouter</Button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
