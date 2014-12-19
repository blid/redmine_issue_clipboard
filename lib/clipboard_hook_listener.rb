class ClipboardHookListener < Redmine::Hook::ViewListener 
	render_on :view_issues_show_details_bottom, :partial => "clipboard/clipboard_field"
end
