import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import { GiCoffeeCup } from "react-icons/gi"

const bebidas = [
    { id: 1, nome: 'Espresso', tamanhos: ['50ml', '90ml'], precos: [6.95, 7.95] },
    { id: 2, nome: 'Cappuccino', tamanhos: ['400ml', '500ml', '600ml'], precos: [10.95, 11.95, 12.95] },
    { id: 3, nome: 'Caffè latte', tamanhos: ['400ml', '500ml'], precos: [8.95, 9.95] },
    { id: 4, nome: 'Chá', tamanhos: ['400ml', '500ml'], precos: [9.95, 10.95] },
    { id: 5, nome: 'Green Tea', tamanhos: ['400ml', '500ml'], precos: [8.95, 9.95] },
    { id: 6, nome: 'Mint Tea', tamanhos: ['400ml', '500ml'], precos: [9.95, 10.95] },
];

const Bebidas = () => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (bebida, tamanho) => {
        const itemExistente = carrinho.find(item => item.bebida.id === bebida.id && item.tamanho === tamanho);

        if (itemExistente) {
            const novoCarrinho = carrinho.map(item =>
                item.bebida.id === bebida.id && item.tamanho === tamanho
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            );
            setCarrinho(novoCarrinho);
        } else {
            setCarrinho([...carrinho, { bebida, tamanho, quantidade: 1 }]);
        }
    };

    const removerDoCarrinho = (bebida, tamanho) => {
        const novoCarrinho = carrinho.filter(item => !(item.bebida.id === bebida.id && item.tamanho === tamanho));
        setCarrinho(novoCarrinho);
    };

    const calcularTotal = () => {
        return carrinho.reduce((total, item) => {
            const precoIndex = item.bebida.tamanhos.indexOf(item.tamanho);
            const preco = item.bebida.precos[precoIndex];
            return total + item.quantidade * preco;
        }, 0);
    };

    const finalizarPedido = () => {
        alert('Pedido finalizado! Obrigado por comprar conosco.');
        setCarrinho([]);
    };

    return (
        <div className="bg-neutral-300 opacity-80 flex flex-col items-center justify-center pt-10 pb-4 my-10 mx-6">
            <div className="text-center px-2">
                <h1 className="text-3xl font-extrabold mb-6 ">Bebidas</h1>
                <ul className="flex flex-wrap justify-center gap-4">
                    {bebidas.map(bebida => (
                        <li key={bebida.id} className="bg-neutral-400 p-4 shadow-md shadow-neutral-700 rounded-md">
                            <h2 className="font-semibold text-lg mb-3 underline">{bebida.nome}</h2>
                            <ul>
                                {bebida.tamanhos.map((tamanho, index) => (
                                    <li key={tamanho} className="flex items-center gap-4 mb-4 ">
                                        <span className="flex items-center gap1"><GiCoffeeCup /> {tamanho}</span>
                                        <span>R$ {bebida.precos[index].toFixed(2)}</span>
                                        <button onClick={() => adicionarAoCarrinho(bebida, tamanho)} className="text-red-800 hover:text-red-600"><AiFillPlusCircle size={30} /></button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col items-center gap-4 bg-neutral-400 border-2 border-neutral-700 p-4 pb-12 mt-4 font-semibold text-xl">
                <h2 className="text-2xl font-bold underline">Seu pedido</h2>
                <ul>
                    {carrinho.map(item => (
                        <li key={`${item.bebida.id}-${item.tamanho}`} className="bg-neutral-500 p-2 rounded-md shadow-md shadow-neutral-700 text-center">
                            {item.bebida.nome} - {item.tamanho} - Quantidade: {item.quantidade}
                            <div className="flex items-center justify-center font-bold">
                                <button onClick={() => adicionarAoCarrinho(item.bebida, item.tamanho)} className="bg-red-800 text-white rounded-full m-2 py-3 px-5 text-xl shadow-md shadow-black hover:bg-red-600"><AiFillPlusCircle /></button>
                                <button onClick={() => removerDoCarrinho(item.bebida, item.tamanho)} className="bg-red-800 text-white rounded-full m-2 py-3 px-5 text-xl shadow-md shadow-black hover:bg-red-600"><AiFillMinusCircle /></button>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="mt-4 text-center ">
                <h2 className="bg-red-950 text-white px-4 py-2 shadow-md shadow-black mb-2">Total: R$ {calcularTotal().toFixed(2)}</h2>
                <button onClick={finalizarPedido} className="bg-black text-white py-2 px-4 rounded shadow-md shadow-neutral-600 hover:bg-white hover:text-black transition-all duration-300">Finalizar Pedido</button>
            </div>
        </div>
    );
};

export default Bebidas;