window.employeeReady = (async () => {
  const bar=document.getElementById('employeeAccount');
  try {
    const response=await fetch('/api/auth/me');
    if (!response.ok) throw new Error('Not logged in');
    const user=await response.json();
    bar.textContent='Signed in: '+user.name+' ';
    const logout=document.createElement('button'); logout.type='button'; logout.textContent='Log out';
    logout.onclick=async()=>{await fetch('/api/auth/logout',{method:'POST'});location.reload();};bar.append(logout);
    return user;
  } catch {
    const link=document.createElement('a');link.href='/login.html';link.target='_blank';link.rel='noopener';link.textContent='Employee login';bar.replaceChildren(link);
    return null;
  }
})();
