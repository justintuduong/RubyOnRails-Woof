class BrowseController < ApplicationController

    # show all other users that is NOT you
    def browse
        @users = Account.where.not(id: current_account.id)
    end


    # user swipes right
    def approve
        logger.debug "User id for matching is #{params[:id]}"

        account_id = params[:id]

        # create like for user
        new_like = Like.new(liked_account_id: account_id)
        new_like.account_id = current_account.id

        if new_like.save
            # check if user already liked us back
            existing_like = Like.where(account_id: account_id, liked_account_id: current_account.id)
            @they_like_us = existing_like > 0

        else
            # issue saving like - return a warning message
        end

    end

    # user swipes left
    def decline
    end

end
