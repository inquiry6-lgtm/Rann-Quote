(() => {
  const el = id => document.getElementById(id);
  const form = el('inquiryForm'), dialog = el('inquiryDialog'), message = el('inquiryMessage');
  let quote, requestId;
  const note=document.createElement('textarea');note.id='inquiryNote';note.required=true;note.maxLength=4000;note.placeholder='Latest discussion / customer requirement';
  const label=document.createElement('label');label.textContent='Discussion note ';label.append(note);form.insertBefore(label,el('inquirySubmit'));
  el('inquiryFollowup').required=true;
  // Closed outcomes and extra sales statuses are recorded in the lead detail.
  el('inquiryStatus').replaceChildren(...['New','Quote Sent','Follow-up'].map(x=>new Option(x,x)));
  el('saveInquiryBtn').addEventListener('click', () => {
    requestId=crypto.randomUUID();
    quote = typeof lastQuote === 'object' && lastQuote ? JSON.parse(JSON.stringify(lastQuote)) : null;
    if (!quote) { el('inquiryNotice').textContent = 'Generate a quotation first.'; return; }
    el('inquiryNotice').textContent = '';
    form.reset();
    el('inquiryFollowup').value=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata'}).format(new Date());
    el('inquiryName').value = quote.name;
    let mobile = el('contactNumber').value.replace(/[\s()+-]/g, '');
    if (/^[6-9]\d{9}$/.test(mobile)) mobile = '91' + mobile;
    el('inquiryMobile').value = mobile;
    el('inquiryAmount').value = quote.net.toFixed(2);
    message.textContent = '';
    fetch('/api/auth/me').then(r=>{ if(r.status===401) message.textContent='Use Employee login below the form, then return here to save.'; }).catch(()=>{});
    dialog.showModal();
  });
  el('inquiryCancel').addEventListener('click', () => dialog.close());
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const button = el('inquirySubmit'); button.disabled = true;
    message.textContent = 'Saving…';
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ request_id:requestId, note:note.value, snapshot:quote, customer_name: el('inquiryName').value, mobile_number: el('inquiryMobile').value,
          lead_source: el('inquirySource').value, quote_amount: quote.net, status: el('inquiryStatus').value,
          next_follow_up: el('inquiryFollowup').value || null }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not save inquiry.');
      dialog.close(); el('inquiryNotice').textContent = 'Inquiry saved.';
    } catch (error) { message.textContent = error instanceof SyntaxError ? 'Could not save. Open this app through its backend server.' : error.message; }
    finally { button.disabled = false; }
  });
})();
