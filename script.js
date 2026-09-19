// WhatsApp do Centro de Estudos: substitua apenas o valor abaixo pelo número completo.
// Use o formato internacional, somente números: código do país + DDD + número.
const WHATSAPP_NUMBER = 'SEU_NUMERO_AQUI';

const whatsappMessageLinks = document.querySelectorAll('a[href*="wa.me"]');
whatsappMessageLinks.forEach(link => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
});

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  document.getElementById('back-to-top').classList.toggle('show', window.scrollY > 500);
});

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const testimonials = [
  { text: 'O acompanhamento fez muita diferença na minha rotina de estudos.', author: 'Depoimento demonstrativo · substituir por relato real' },
  { text: 'As aulas e os exercícios ajudaram a entender melhor os conteúdos.', author: 'Depoimento demonstrativo · substituir por relato real' },
  { text: 'A correção de redação me ajudou a identificar meus principais erros.', author: 'Depoimento demonstrativo · substituir por relato real' }
];
let currentTestimonial = 0;
const testimonialText = document.querySelector('.testimonial-text');
const testimonialAuthor = document.querySelector('.testimonial-author');
const dots = document.getElementById('slider-dots');
testimonials.forEach((_, index) => { const dot = document.createElement('i'); dot.addEventListener('click', () => showTestimonial(index)); dots.appendChild(dot); });
function showTestimonial(index) {
  currentTestimonial = (index + testimonials.length) % testimonials.length;
  testimonialText.textContent = `“${testimonials[currentTestimonial].text}”`;
  testimonialAuthor.textContent = testimonials[currentTestimonial].author;
  [...dots.children].forEach((dot, i) => dot.classList.toggle('active', i === currentTestimonial));
}
document.getElementById('prev-testimonial').addEventListener('click', () => showTestimonial(currentTestimonial - 1));
document.getElementById('next-testimonial').addEventListener('click', () => showTestimonial(currentTestimonial + 1));
showTestimonial(0);

document.querySelectorAll('.interest-link').forEach(button => button.addEventListener('click', () => {
  document.querySelector('[name="course"]').value = button.dataset.course;
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
}));

const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const label = field.closest('label');
    const error = label.querySelector('.field-error');
    const empty = field.type === 'checkbox' ? !field.checked : !field.value.trim();
    const badEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
    label.classList.toggle('invalid', empty || badEmail);
    error.textContent = empty ? (field.type === 'checkbox' ? 'É necessário concordar com os termos.' : 'Preencha este campo.') : (badEmail ? 'Digite um e-mail válido.' : '');
    if (empty || badEmail) valid = false;
  });
  const feedback = form.querySelector('.form-feedback');
  feedback.className = 'form-feedback';
  if (!valid) { feedback.textContent = 'Confira os campos destacados.'; feedback.classList.add('error'); return; }
  const formData = new FormData(form);
  const message = [
    'Olá! Gostaria de saber mais sobre os cursos do Centro de Estudos Profª Natalia de Paula.',
    '',
    `Nome: ${formData.get('name')}`,
    `E-mail: ${formData.get('email')}`,
    `Telefone: ${formData.get('phone')}`,
    `Curso de interesse: ${formData.get('course')}`,
    `Mensagem: ${formData.get('message') || 'Não informada.'}`
  ].join('\n');

  if (WHATSAPP_NUMBER === 'SEU_NUMERO_AQUI') {
    feedback.textContent = 'Configure o número do WhatsApp no início do script.js para enviar a mensagem.';
    feedback.classList.add('error');
    return;
  }

  feedback.textContent = 'Abrindo o WhatsApp com sua mensagem...';
  feedback.classList.add('success');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const privacyModal = document.getElementById('politica-privacidade');
const privacyOpeners = document.querySelectorAll('a[href="#politica-privacidade"]');
const privacyClosers = privacyModal.querySelectorAll('[data-close-privacy]');

function openPrivacyModal(event) {
  event.preventDefault();
  privacyModal.classList.add('open');
  privacyModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  privacyModal.querySelector('.privacy-modal-close').focus();
}

function closePrivacyModal() {
  privacyModal.classList.remove('open');
  privacyModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

privacyOpeners.forEach(link => link.addEventListener('click', openPrivacyModal));
privacyClosers.forEach(element => element.addEventListener('click', closePrivacyModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && privacyModal.classList.contains('open')) closePrivacyModal();
});
