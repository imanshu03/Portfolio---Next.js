const properties = {
  root: null,
  threshold: 0.2,
  rootMargin: '0px',
};

export const callbacks = {
  show: function (ref) {
    const { classname } = ref.dataset;
    ref.classList.toggle(classname, true);
  },
  timeoutShow: function (ref) {
    const { classname, delay = 0 } = ref.dataset;
    setTimeout(() => {
      ref.classList.toggle(classname, true);
    }, Number(delay));
  },
};

export const initializeObserver = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { func = 'show' } = entry.target.dataset;
        callbacks[func](entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, properties);

  return observer;
};
