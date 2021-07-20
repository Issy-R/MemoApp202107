import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) {
    return '';
  }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors(code) {
  const error = { title: 'エラー', desctiption: '時間をおいてお試しください' };
  switch (code) {
    case 'auth/invalid-email':
      error.desctiption = 'メールアドレスが不正です';
      break;
    case 'auth/user-disabled':
      error.desctiption = 'アカウントが向こうです';
      break;
    case 'auth/user-not-found':
      error.desctiption = 'ユーザーが見つかりませんでした';
      break;
    case 'auth/wrong-password':
      error.desctiption = 'パスワードが間違っています';
      break;
    case 'auth/email-already-in-use':
      error.desctiption = 'Eメールアドレスが使用されています';
      break;
    case 'auth/operation-not-allowed':
      error.desctiption = '開発者にお問い合わせください';
      break;
    case 'auth/weak-password':
      error.desctiption = 'パスワードが脆弱です';
      break;
    default:
  }
  return error;
}
