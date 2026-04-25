export const money = (amount) => `${amount.toLocaleString('ru-RU')} ₽`;

export const progressPercent = (collected, target) =>
  Math.min(100, Math.round((collected / target) * 100));
