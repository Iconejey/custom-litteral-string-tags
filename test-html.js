// Test file for .render syntax highlighting

const test = "test value";
const deep = { test: "<span>nested content</span>" };
const TRADS = {
  get: (key, params) => `Translated: ${key} with ${JSON.stringify(params)}`,
};

// Basic render syntax
this.render`
    <button class="toggle-btn">menu</button>

    <div class="account">
        <img src="path/to/avatar.png" alt="User Avatar" class="avatar"/>
        <span class="account-username">John Doe</span>
        <span class="account-credits">${TRADS.get("account.credits.count", {
          credits: this.credits,
        })}</span>
    </div>

    <div class="elements-container" />
`;

document.querySelector(".elem").render`
    <span>Hello ${test}</span>
`;

// Component render examples
component.render`
    <div class="component">
        <h2>Component Title</h2>
        <p>Content: ${deep.test}</p>
        <button onclick="handleClick()">Click me</button>
    </div>
`;

app.render`
    <main class="app">
        <header>
            <h1>My App</h1>
            <nav class="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <section class="content">
            <article>
                <h2>Article Title</h2>
                <p>Article content goes here...</p>
            </article>
        </section>
        <footer>
            <p>&copy; 2025 My App</p>
        </footer>
    </main>
`;

// Complex render with arrays and conditionals
element.render`
    <div class="dynamic-content">
        <h3>Dynamic List</h3>
        <ul class="item-list">
            ${items
              .map(
                (item) => `
                <li class="item ${item.active ? "active" : ""}">
                    <span class="item-name">${item.name}</span>
                    <span class="item-value">${item.value}</span>
                </li>
            `
              )
              .join("")}
        </ul>
        
        ${
          showFooter
            ? `
            <div class="footer">
                <p>Total items: ${items.length}</p>
            </div>
        `
            : ""
        }
    </div>
`;

// Table render example
tableComponent.render`
    <table class="data-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            ${users
              .map(
                (user) => `
                <tr class="user-row" data-id="${user.id}">
                    <td class="user-name">${user.name}</td>
                    <td class="user-email">${user.email}</td>
                    <td class="user-status">
                        <span class="status-badge ${user.status}">${user.status}</span>
                    </td>
                    <td class="user-actions">
                        <button class="btn-edit" onclick="editUser(${user.id})">Edit</button>
                        <button class="btn-delete" onclick="deleteUser(${user.id})">Delete</button>
                    </td>
                </tr>
            `
              )
              .join("")}
        </tbody>
    </table>
`;

// Form render example
formComponent.render`
    <form class="user-form" onsubmit="handleSubmit(event)">
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value="${
              user.username
            }" required />
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="${
              user.email
            }" required />
        </div>
        
        <div class="form-group">
            <label for="role">Role:</label>
            <select id="role" name="role">
                ${roles
                  .map(
                    (role) => `
                    <option value="${role.id}" ${
                      role.id === user.roleId ? "selected" : ""
                    }>
                        ${role.name}
                    </option>
                `
                  )
                  .join("")}
            </select>
        </div>
        
        <div class="form-actions">
            <button type="submit" class="btn-primary">Save</button>
            <button type="button" class="btn-secondary" onclick="cancel()">Cancel</button>
        </div>
    </form>
`;

// Modal render example
modalComponent.render`
    <div class="modal-overlay" onclick="closeModal()">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2>${modal.title}</h2>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            
            <div class="modal-body">
                ${modal.content}
            </div>
            
            <div class="modal-footer">
                <button class="btn-cancel" onclick="closeModal()">Cancel</button>
                <button class="btn-confirm" onclick="confirmAction()">${
                  modal.confirmText || "Confirm"
                }</button>
            </div>
        </div>
    </div>
`;

// Card grid render example
gridComponent.render`
    <div class="card-grid">
        ${products
          .map(
            (product) => `
            <div class="product-card" data-id="${product.id}">
                <div class="card-image">
                    <img src="${product.image}" alt="${
              product.name
            }" loading="lazy" />
                    ${product.sale ? '<div class="sale-badge">Sale</div>' : ""}
                </div>
                
                <div class="card-content">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-price">
                        ${
                          product.originalPrice !== product.price
                            ? `
                            <span class="original-price">$${product.originalPrice}</span>
                        `
                            : ""
                        }
                        <span class="current-price">$${product.price}</span>
                    </div>
                    
                    <div class="card-actions">
                        <button class="btn-add-to-cart" onclick="addToCart(${
                          product.id
                        })">
                            Add to Cart
                        </button>
                        <button class="btn-wishlist" onclick="toggleWishlist(${
                          product.id
                        })">
                            <i class="icon-heart ${
                              product.inWishlist ? "filled" : ""
                            }"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
          )
          .join("")}
    </div>
`;
