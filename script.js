const menuItems = [
  {
    name: 'Samosa',
    category: 'Snack',
    price: '₹ 40',
    description: 'Crispy golden pastry stuffed with spiced potatoes and peas.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Paneer Tikka',
    category: 'Grill',
    price: '₹ 180',
    description: 'Char-grilled cottage cheese cubes marinated in bold Indian spices.',
    image: 'https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1-500x500.jpg',
  },
  {
    name: 'Masala Chai',
    category: 'Beverage',
    price: '₹ 35',
    description: 'Fragrant black tea simmered with cardamom, ginger, and milk.',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/indian-masala-chai-tea.jpg',
  },
  {
    name: 'Veg Pakora',
    category: 'Fried',
    price: '₹ 120',
    description: 'Crunchy mixed vegetables dipped in chickpea batter and fried fresh.',
    image: 'https://www.shutterstock.com/image-photo/fried-onion-pakora-pyaj-pakoda-260nw-1773809375.jpg',
  },
  {
    name: 'Pani Puri',
    category: 'Street Food',
    price: '₹ 90',
    description: 'Crisp shells filled with spicy tamarind water, potatoes, and chaat.',
    image: 'https://cdn.pixabay.com/photo/2013/01/15/11/22/panipuri-74974_640.jpg',
  },
  {
    name: 'Bhel Puri',
    category: 'Street Food',
    price: '₹ 80',
    description: 'Tangy puffed rice tossed with chutneys, sev, onions, and spicy masala.',
    image: 'https://t4.ftcdn.net/jpg/03/20/46/61/360_F_320466107_CdxpvAAEbOnKppyxeouOfuTZS4DDfvMi.jpg',
  },
  {
    name: 'Veg Biryani',
    category: 'Main Course',
    price: '₹ 220',
    description: 'Fragrant basmati rice layered with vegetables, herbs, and rich biryani spices.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/074/501/571/small/indian-food-in-a-pot-with-vegetables-and-spices-free-photo.jpeg',
  },
  {
    name: 'Chicken Biryani',
    category: 'Main Course',
    price: '₹ 260',
    description: 'Slow-cooked basmati rice with juicy chicken and aromatic biryani masala.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/040/703/949/small/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg',
  },
  {
    name: 'Jalebi',
    category: 'Sweet',
    price: '₹ 60',
    description: 'Crisp, saffron-swirled sweet fried batter drizzled with syrup.',
    image: 'https://thumbs.dreamstime.com/b/jalebi-indian-sweet-x-zalebia-78582930.jpg',
  },
  {
    name: 'Gulab Jamun',
    category: 'Sweet',
    price: '₹ 70',
    description: 'Soft milk-solid dumplings soaked in warm saffron and rose syrup.',
    image: 'https://static.vecteezy.com/system/resources/previews/072/197/996/large_2x/delicious-gulab-jamun-sweet-treats-garnished-with-pistachios-and-rose-petals-in-a-traditional-bowl-photo.jpg',
  },
  {
    name: 'Paneer Butter Masala',
    category: 'Main Course',
    price: '₹ 240',
    description: 'Soft paneer cubes in a rich tomato-butter gravy with a creamy finish.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tandoori Momos',
    category: 'Snacks',
    price: '₹ 180',
    description: 'Steamed dumplings roasted in a smoky tandoori glaze with spicy chutney.',
    image: 'https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/1/Tandoori_Momos.webp',
  },
  {
    name: 'Aloo Tikki',
    category: 'Classic',
    price: '₹ 110',
    description: 'Golden potato patties served with chutneys and savory toppings.',
    image: 'https://t3.ftcdn.net/jpg/20/24/07/14/360_F_2024071414_apBlFmVeKUJq3Gbh1YTRXBdn6jlBEPXZ.jpg',
  },
  {
    name: 'Kachori',
    category: 'Street Snack',
    price: '₹ 70',
    description: 'Flaky deep-fried pastry filled with spicy lentils and potato mix.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/049/286/634/small/indian-street-food-kachori-photo.jpeg',
  },
  {
    name: 'Cold Coffee',
    category: 'Cold Drink',
    price: '₹ 150',
    description: 'Freshly blended coffee, milk, ice, and a smooth chocolate finish.',
    image: 'https://img.magnific.com/free-photo/chocolate-smoothie_1339-2856.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    name: 'Vanilla Shake',
    category: 'Shake',
    price: '₹ 170',
    description: 'Creamy vanilla shake with chilled milk and a rich frothy top.',
    image: 'https://images.pexels.com/photos/11485355/pexels-photo-11485355.jpeg?cs=srgb&dl=pexels-rsapmech-11485355.jpg&fm=jpg',
  },
  {
    name: 'Chocolate Ice Cream',
    category: 'Ice Cream',
    price: '₹ 130',
    description: 'Velvety chocolate ice cream served cold and extra creamy.',
    image: 'https://images.pexels.com/photos/38371322/pexels-photo-38371322.jpeg?cs=srgb&dl=pexels-jahratreza-38371322.jpg&fm=jpg',
  },
];

const menuGrid = document.getElementById('menu-grid');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const selectedItem = document.getElementById('selected-item');
const defaultHeroVisual = document.getElementById('default-hero-visual');
const featuredItemCard = document.getElementById('featured-item-card');
const featuredItemImage = document.getElementById('featured-item-image');
const featuredItemName = document.getElementById('featured-item-name');
const featuredItemPrice = document.getElementById('featured-item-price');
const checkoutModal = document.getElementById('checkout-modal');
const closeModalButton = document.getElementById('close-modal');
const summaryItems = document.getElementById('summary-items');
const summaryTotal = document.getElementById('summary-total');
const orderForm = document.getElementById('order-form');

const cart = [];
const deliveryFee = 40;
const taxRate = 0.05;

function parsePrice(priceText) {
  return Number(String(priceText).replace(/[^0-9]/g, ''));
}

function formatPrice(amount) {
  return `₹ ${amount}`;
}

function getOrderTotals() {
  const subtotal = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
  const delivery = cart.length ? deliveryFee : 0;
  const tax = subtotal * taxRate;
  const total = subtotal + delivery + tax;

  return { subtotal, delivery, tax, total };
}

function updateCartUI() {
  const totals = getOrderTotals();
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  cartCount.textContent = `${itemCount} item${itemCount === 1 ? '' : 's'}`;

  if (cart.length === 0) {
    cartItems.innerHTML = '<li class="empty-cart">No items added yet.</li>';
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
          <li class="cart-item">
            <div class="cart-main">
              <span>${item.name}</span>
              <div class="qty-control">
                <button class="qty-btn" data-action="decrease" data-name="${item.name}" type="button">−</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" data-action="increase" data-name="${item.name}" type="button">+</button>
              </div>
            </div>
            <div class="cart-item-right">
              <strong>${formatPrice(parsePrice(item.price) * item.quantity)}</strong>
              <button class="remove-btn" data-name="${item.name}" type="button">Remove</button>
            </div>
          </li>
        `
      )
      .join('');
  }

  document.getElementById('cart-subtotal').textContent = formatPrice(totals.subtotal);
  document.getElementById('cart-delivery').textContent = formatPrice(totals.delivery);
  document.getElementById('cart-tax').textContent = formatPrice(totals.tax);
  cartTotal.textContent = formatPrice(totals.total);
  summaryTotal.textContent = formatPrice(totals.total);
  document.getElementById('summary-subtotal').textContent = formatPrice(totals.subtotal);
  document.getElementById('summary-delivery').textContent = formatPrice(totals.delivery);
  document.getElementById('summary-tax').textContent = formatPrice(totals.tax);

  summaryItems.innerHTML = cart.length
    ? cart
        .map(
          (item) => `
            <li>
              <span>${item.name} × ${item.quantity}</span>
              <strong>${formatPrice(parsePrice(item.price) * item.quantity)}</strong>
            </li>
          `
        )
        .join('')
    : '<li><span>No items selected</span></li>';
}

function showFeaturedItem(item) {
  defaultHeroVisual.classList.add('hidden');
  featuredItemCard.classList.remove('hidden');
  featuredItemImage.src = item.image;
  featuredItemImage.alt = item.name;
  featuredItemName.textContent = item.name;
  featuredItemPrice.textContent = item.price;
}

function addToCart(itemName) {
  const item = menuItems.find((menuItem) => menuItem.name === itemName);

  if (!item) return;

  const existingItem = cart.find((cartItem) => cartItem.name === itemName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  document.getElementById('selected-item').textContent = item.name;
  showFeaturedItem(item);
  updateCartUI();

  const button = document.querySelector(`button[data-name="${itemName}"]`);
  if (button) {
    button.textContent = 'Added';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = 'Add';
      button.disabled = false;
    }, 700);
  }
}

function updateItemQuantity(itemName, change) {
  const item = cart.find((cartItem) => cartItem.name === itemName);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    const index = cart.findIndex((cartItem) => cartItem.name === itemName);
    if (index >= 0) cart.splice(index, 1);
  }

  if (cart.length === 0) {
    document.getElementById('selected-item').textContent = 'None';
    defaultHeroVisual.classList.remove('hidden');
    featuredItemCard.classList.add('hidden');
  }

  updateCartUI();
}

function removeItem(itemName) {
  const index = cart.findIndex((cartItem) => cartItem.name === itemName);
  if (index >= 0) {
    cart.splice(index, 1);
  }

  if (cart.length === 0) {
    document.getElementById('selected-item').textContent = 'None';
    defaultHeroVisual.classList.remove('hidden');
    featuredItemCard.classList.add('hidden');
  }

  updateCartUI();
}

function openCheckout() {
  if (cart.length === 0) {
    alert('Please add at least one item to the cart before placing the order.');
    return;
  }

  updateCartUI();
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');
}

function closeCheckout() {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
}

function openWhatsApp() {
  if (cart.length === 0) {
    alert('Please add at least one item before ordering on WhatsApp.');
    return;
  }

  const totals = getOrderTotals();
  const message = encodeURIComponent(
    `Hello PARVEJ CLOUD KITCHEN, I would like to order:\n${cart
      .map((item) => `- ${item.name} x ${item.quantity} = ${formatPrice(parsePrice(item.price) * item.quantity)}`)
      .join('\n')}\n\nSubtotal: ${formatPrice(totals.subtotal)}\nDelivery: ${formatPrice(totals.delivery)}\nTax: ${formatPrice(totals.tax)}\nTotal: ${formatPrice(totals.total)}`
  );

  window.open(`https://wa.me/919005056001?text=${message}`, '_blank');
}

function showSuccessMessage() {
  const successModal = document.getElementById('success-modal');
  successModal.classList.remove('hidden');
  successModal.setAttribute('aria-hidden', 'false');
}

function hideSuccessMessage() {
  const successModal = document.getElementById('success-modal');
  successModal.classList.add('hidden');
  successModal.setAttribute('aria-hidden', 'true');
}

function renderMenu(items) {
  menuGrid.innerHTML = items
    .map(
      (item) => `
        <article class="menu-card" data-name="${item.name}" aria-label="${item.name}">
          <div class="menu-card-top" aria-hidden="true">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="menu-card-body">
            <div class="menu-card-header">
              <h3>${item.name}</h3>
              <span class="badge">${item.category}</span>
            </div>
            <p>${item.description}</p>
            <div class="menu-card-footer">
              <span class="price">${item.price}</span>
              <button class="add-btn" data-name="${item.name}" type="button">Add</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.menu-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      const addButton = event.target.closest('.add-btn');
      if (addButton) return;
      addToCart(card.dataset.name);
    });
  });

  document.querySelectorAll('.add-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      addToCart(button.dataset.name);
    });
  });
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  if (button.classList.contains('qty-btn')) {
    const { action, name } = button.dataset;
    updateItemQuantity(name, action === 'increase' ? 1 : -1);
  }

  if (button.classList.contains('remove-btn')) {
    removeItem(button.dataset.name);
  }
});

document.querySelector('.checkout-btn').addEventListener('click', openCheckout);
document.querySelector('.whatsapp-btn').addEventListener('click', openWhatsApp);
document.querySelector('.modal-whatsapp').addEventListener('click', openWhatsApp);
closeModalButton.addEventListener('click', closeCheckout);
document.getElementById('success-close').addEventListener('click', hideSuccessMessage);
checkoutModal.addEventListener('click', (event) => {
  if (event.target === checkoutModal) closeCheckout();
});
document.getElementById('success-modal').addEventListener('click', (event) => {
  if (event.target === document.getElementById('success-modal')) hideSuccessMessage();
});

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(orderForm);
  const customerName = formData.get('customerName');
  const phone = formData.get('phone');
  const address = formData.get('address');
  const time = formData.get('time');
  const notes = formData.get('notes') || 'No extra notes';

  const totals = getOrderTotals();
  const orderDetails = {
    customerName,
    phone,
    address,
    time,
    notes,
    items: [...cart],
    total: totals.total,
  };

  console.log('Order placed:', orderDetails);

  cart.length = 0;
  document.getElementById('selected-item').textContent = 'None';
  defaultHeroVisual.classList.remove('hidden');
  featuredItemCard.classList.add('hidden');
  updateCartUI();
  orderForm.reset();
  closeCheckout();
  showSuccessMessage();
});

showFeaturedItem(menuItems[0]);
renderMenu(menuItems);
updateCartUI();
